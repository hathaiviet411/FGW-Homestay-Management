<template>
	<b-overlay
		:show="overlay.show"
		:variant="overlay.variant"
		:opacity="overlay.opacity"
		:blur="overlay.blur"
		:rounded="overlay.sm"
	>
		<template #overlay>
			<div class="text-center">
				<b-icon icon="arrow-clockwise" font-scale="3" animation="spin" />
				<p style="margin-top: 10px;">{{ $t('OVERLAY.PLEASE_WAIT') }}</p>
			</div>
		</template>
		<div class="user-management">
			<UserManagementTemplate
				:v-items="vItems"
				:v-fields="vFields"
				:current-page="pagination.currentPage"
				:per-page="pagination.perPage"
				:total-rows="pagination.totalRows"
			/>
		</div>
	</b-overlay>
</template>

<script>

const urlAPI = {
    userList: '/user',
};

// Atomic components import
import UserManagementTemplate from '@/components/template/UserManagement';
import { getUserList } from '@/api/modules/user';
import { cleanObj } from '@/utils/handleObj';
import { obj2Path } from '@/utils/obj2Path';

export default {
    name: 'UserManagementIndex',
    components: {
        UserManagementTemplate,
    },
    data() {
        return {
            overlay: {
                show: false,
                variant: 'light',
                opacity: 1,
                blur: '1rem',
                rounded: 'sm',
            },

            vItems: [],

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

            filterQuery: {
                order_column: '',
                order_type: '',
            },

            pagination: {
                currentPage: this.$store.getters.curPageUserList,
                perPage: this.$store.getters.perPageUserList,
                totalRows: 0,
            },
        };
    },
    computed: {
        vFields() {
            return [
                { key: 'role_name', sortable: true, label: this.$t('USER_MANAGEMENT.USER_ROLE'), tdClass: 'text-center td-user-role', thClass: 'text-center' },
                { key: 'departments_name', sortable: true, label: this.$t('USER_MANAGEMENT.BASE'), tdClass: 'text-center', thClass: 'text-center' },
                { key: 'user_code', sortable: true, label: this.$t('USER_MANAGEMENT.USER_ID'), tdClass: 'text-center', thClass: 'text-center' },
                { key: 'user_name', sortable: true, label: this.$t('USER_MANAGEMENT.USER_NAME'), tdClass: 'text-center', thClass: 'text-center' },
                { key: 'edit', sortable: false, label: '', tdClass: 'text-center', thClass: 'text-center' },
                { key: 'remove', sortable: false, label: '', tdClass: 'text-center', thClass: 'text-center' },
            ];
        },
    },
    created() {
        this.$bus.on('sendDataFilterUser', value => {
            this.filter = value;
        });

        this.$bus.on('perPageUserManagementChange', (value) => {
            this.pagination.perPage = value;

            if (this.$store.getters.perPageUserList !== value) {
                this.$store.dispatch('userManagement/setPerPage', value)
                    .then(() => {
                        this.handleGetUserList();
                    });
            }
        });

        this.$bus.on('doApplyUserManagementFilter', () => {
            this.handleGetUserList();
        });

        this.$bus.on('sendSortTableUser', value => {
            this.filterQuery = value;
            this.handleGetUserList();
        });

        this.$bus.on('deleteUserInUserList', () => {
            this.handleGetUserList();
        });

        this.$bus.on('pageUserManagementChange', value => {
            this.pagination.currentPage = value || 1;

            if (this.$store.getters.curPageUserList !== value) {
                this.$store.dispatch('userManagement/setCurrentPage', value)
                    .then(() => {
                        this.handleGetUserList();
                    });
            }
        });

        this.handleGetUserList();
    },
    destroyed() {
        this.$bus.off('sendDataFilterUser');
        this.$bus.off('doApplyUserManagementFilter');
        this.$bus.off('sendSortTableUser');
        this.$bus.off('deleteUserInUserList');
        this.$bus.off('pageUserManagementChange');
    },
    methods: {
        async handleGetUserList() {
            this.overlay.show = true;

            let QUERY = {
                page: this.pagination.currentPage,
                per_page: this.pagination.perPage,
                sortby: this.filterQuery['order_column'],
                sorttype: this.filterQuery['order_type'],
                department: this.filter.isCheck.department ? this.filter.department : null,
                user_code: this.filter.isCheck.user_id ? this.filter.user_id : '',
                name: this.filter.isCheck.user_name ? this.filter.user_name : '',
            };

            QUERY = cleanObj(QUERY);

            const URL = `${urlAPI.userList}?${obj2Path(QUERY)}`;

            try {
                const response = await getUserList(URL);

                if (response['code'] === 200) {
                    this.vItems = response['data'];
                    this.pagination.currentPage = response['pagination']['current_page'];
                    this.pagination.totalRows = response['pagination']['total_records'];
                } else {
                    this.$toast.warning({
                        content: response['message'],
                    });
                }
            } catch (error) {
                this.$toast.error({
                    content: error['response']['data']['message'],
                });
            }

            this.overlay.show = false;
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep .td-user-role {
    text-transform: capitalize;
}
</style>
