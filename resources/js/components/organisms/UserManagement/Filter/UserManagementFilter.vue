<template>
	<div class="organisms-user-management-filter">
		<vHeaderFilter>
			<template #zone-filter>
				<b-col>
					<b-row>
						<span class="text-clear-all" @click="doClearFilter()">{{ $t('BUTTON.CLEAR_ALL') }}</span>
					</b-row>

					<b-row class="mt-3">
						<b-col cols="12" sm="12" md="12" lg="6" style="padding-left: 0;">
							<div id="filter-by-department" class="zone-input">
								<b-input-group>
									<b-input-group-prepend is-text>
										<input v-model="filter.isCheck.department" type="checkbox">
									</b-input-group-prepend>
									<b-input-group-prepend is-text>
										<span style="min-width: 125px;">{{ $t('USER_MANAGEMENT.DEPARTMENT') }}</span>
									</b-input-group-prepend>
									<b-form-select v-model="filter.department" :disabled="!filter.isCheck.department">
										<b-form-select-option :value="null">{{ $t('PLACE_HOLDER.PLEASE_SELECT') }}</b-form-select-option>
										<b-form-select-option v-for="(Department, IndexDepartment) in ListDepartment" :key="IndexDepartment" :value="Department.value">
											{{ Department.text }}
										</b-form-select-option>
									</b-form-select>
								</b-input-group>
							</div>
						</b-col>
					</b-row>

					<b-row class="mt-3">
						<!-- User ID Filter -->
						<b-col cols="12" sm="12" md="12" lg="6" style="padding-left: 0;">
							<div class="zone-input">
								<vInputGroup
									:id="'filter-by-user-id'"
									v-model="filter.user_id"
									:type="'text'"
									:text-prepend="$t('USER_MANAGEMENT.USER_ID')"
									:placeholder="''"
									:is-check="filter.isCheck.user_id"
									@isChecked="getIsCheckUserIDFilter"
								/>
							</div>
						</b-col>
					</b-row>

					<b-row class="mt-3">
						<!-- User Name Filter -->
						<b-col cols="12" sm="12" md="12" lg="6" style="padding-left: 0;">
							<div class="zone-input">
								<vInputGroup
									:id="'filter-by-user-name'"
									v-model="filter.user_name"
									:type="'text'"
									:text-prepend="$t('USER_MANAGEMENT.USER_NAME')"
									:placeholder="''"
									:is-check="filter.isCheck.user_name"
									@isChecked="getIsCheckUserNameFilter"
								/>
							</div>
						</b-col>
					</b-row>

					<b-row>
						<div class="zone-btn-apply">
							<vButton :class="'btn-summit-filter'" :text-button="$t('BUTTON.APPLY')" @click.native="doApply()" />
						</div>
					</b-row>
				</b-col>
			</template>
		</vHeaderFilter>
	</div>
</template>

<script>
import vHeaderFilter from '@/components/atoms/vHeaderFilter';
import vInputGroup from '@/components/atoms/vInputGroup';
import vButton from '@/components/atoms/vButton';

export default {
    name: 'UserManagementFilter',
    components: {
        vHeaderFilter,
        vInputGroup,
        vButton,
    },
    data() {
        return {
            filter: {
                user_id: '',
                user_name: '',
                department: null,
                isCheck: {
                    user_id: false,
                    user_name: false,
                    department: false,
                },
            },

            ListDepartment: [],
        };
    },
    watch: {
        filter: {
            handler: function() {
                this.emitFilter();
            },
            deep: true,
        },
    },
    methods: {
        doApply() {
            this.$bus.emit('doApplyUserManagementFilter');
        },
        doClearFilter() {
            const isFilter = {
                user_id: '',
                user_name: '',
                department: null,
                isCheck: {
                    user_id: false,
                    user_name: false,
                    department: false,
                },
            };

            this.filter = isFilter;
        },
        getIsCheckUserIDFilter(value) {
            this.filter.isCheck.user_id = value;
        },
        getIsCheckUserNameFilter(value) {
            this.filter.isCheck.user_name = value;
        },
        emitFilter() {
            this.$bus.emit('sendDataFilterUser', this.filter);
        },
    },
};
</script>

<style lang="scss" scoped>
    @import '@/scss/variables.scss';

    .organisms-user-management-filter {
        span.text-clear-all {
            border-top: 1px solid $black;
            border-bottom: 1px solid $black;

            font-weight: 500;

            margin-bottom: 10px;

            cursor: pointer;
        }

        button {
            margin-top: 10px;
        }
    }
</style>
