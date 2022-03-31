<template>
	<div class="user-management">
		<!-- HEADER -->
		<div class="user-management__header-page">
			<vHeaderPage>{{ $t('PAGE_TITLE.USER_MANAGEMENT') }}</vHeaderPage>
		</div>

		<div class="user-management__register-btn">
			<b-row>
				<b-col cols="12">
					<vButton :class-name="'maintenance-btn-default maintenance-pdf-btn'" @click.native="toRegisterScreen()">
						<template #default>
							<span style="font-weight: bold;">{{ $t('BUTTON.REGISTER') }}</span>
						</template>
					</vButton>
				</b-col>
			</b-row>
		</div>

		<div class="user-management__zone-filter">
			<UserManagementFilter />
		</div>

		<!-- Table User Management -->
		<div class="user-management__table">
			<TableUserManagement
				:id="'table-user-management'"
				class="mt-3"
				:fields="vFields"
				:items="vItems"
				:path="'/user-management'"
			/>
		</div>

		<!-- Custom Per Page -->
		<div v-if="totalRows >= 20" class="custom-per-page mt-3">
			<b-row>
				<b-col cols="2">
					<b-form-group :label="$t('PAGINATION.DISPLAY_PER_PAGE')" label-for="customPerPage">
						<b-form-select id="customPerPage" v-model="customPerPage" style="width: 130px;" :options="options" />
					</b-form-group>
				</b-col>
			</b-row>
		</div>

		<div v-if="totalRows > 20" class="user-management__pagination">
			<vPagination
				:aria-controls="'table-data-list'"
				:current-page="currentPage"
				:per-page="perPage"
				:total-rows="totalRows"
				:next-class="'next'"
				:prev-class="'prev'"
				@currentPageChange="getCurrentPage"
			/>
		</div>
	</div>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';
import UserManagementFilter from '@/components/organisms/UserManagement/Filter/UserManagementFilter';
import TableUserManagement from '@/components/organisms/UserManagement/Table/TableUserManagement';
import vButton from '@/components/atoms/vButton';
import vPagination from '@/components/atoms/vPagination';

export default {
    name: 'UserManagementTemplate',
    components: {
        vHeaderPage,
        UserManagementFilter,
        TableUserManagement,
        vButton,
        vPagination,
    },
    props: {
        vFields: {
            type: Array,
            require: true,
            default: function() {
                return [];
            },
            validate: value => {
                return typeof value === 'object';
            },
        },
        vItems: {
            type: Array,
            require: true,
            default: function() {
                return [];
            },
            validate: value => {
                return typeof value === 'object';
            },
        },
        currentPage: {
            type: Number,
            require: true,
            default: 1,
            validate: value => {
                return value > 0;
            },
        },
        perPage: {
            type: Number,
            require: true,
            default: 20,
            validate: value => {
                return value > 0;
            },
        },
        totalRows: {
            type: Number,
            require: true,
            default: 0,
            validate: value => {
                return value >= 0;
            },
        },
    },
    data() {
        return {
            customPerPage: 0,
            options: [
                { value: 20, text: '20' },
                { value: 50, text: '50' },
                { value: 100, text: '100' },
                { value: 250, text: '250' },
                { value: 500, text: '500' },
            ],
        };
    },
    computed: {
        isChangeDisplayPerPage() {
            return this.customPerPage;
        },
    },
    watch: {
        isChangeDisplayPerPage() {
            this.$bus.emit('perPageUserManagementChange', this.customPerPage);
        },
    },
    created() {
        this.customPerPage = this.perPage;
    },
    methods: {
        getCurrentPage(value) {
            this.$bus.emit('pageUserManagementChange', value);
        },
        toRegisterScreen() {
            this.$router.push({ path: '/master-management/user-management/create' });
        },
    },
};
</script>

<style lang="scss" scoped>
    .user-management {
        &__header-page {
            margin-bottom: 20px;
        }

        &__pagination {
            display: flex;
            justify-content: center;
        }
    }
</style>
