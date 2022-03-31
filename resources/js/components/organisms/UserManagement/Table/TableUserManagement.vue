<template>
	<div>
		<b-table
			:id="id"
			:class="[className, 'v-table']"
			:fields="fields"
			:items="items"
			:no-sort-reset="true"
			show-empty
			responsive
			bordered
			@sort-changed="handleSort"
		>
			<template #head()="{ field: { key }}">
				<span v-if="key === 'edit'">
					{{ $t('BUTTON.EDIT') }}
				</span>
				<span v-else-if="key === 'remove'">
					{{ $t('BUTTON.DELETE') }}
				</span>
			</template>
			<template #cell(edit)="edit">
				<i class="fas fa-pencil-alt" @click="goToEdit(edit.item.id)" />
			</template>
			<template #cell(remove)="remove">
				<i class="fas fa-eraser" @click="showModalDelete(remove.item.id)" />
			</template>
			<template #empty="">
				<span>{{ $t('TABLE.EMPTY') }}</span>
			</template>
		</b-table>

		<b-modal
			id="modal-cf"
			v-model="showModal"
			no-close-on-backdrop
			no-close-on-esc
			hide-header
			:static="true"
			header-class="modal-custom-header"
			content-class="modal-custom-body"
			footer-class="modal-custom-footer"
		>
			<template #default>
				<span>{{ $t('MODAL.DELETE_CONFIRMATION', { name: UserHandle['user_name'] }) }}</span>
			</template>

			<template #modal-footer>
				<b-button class="modal-btn btn-cancel" @click="showModal = false">{{ $t('MODAL.NO') }}</b-button>
				<b-button class="modal-btn btn-apply" @click="handleDeleteUser()">{{ $t('MODAL.YES') }}</b-button>
			</template>

		</b-modal>
	</div>
</template>

<script>

const urlAPI = {
    deleteUser: '/user',
};
import { removeUser } from '@/api/modules/user';

export default {
    name: 'TableUserManagement',
    props: {
        id: {
            type: String,
            require: false,
            default: '',
            validate: value => {
                return value;
            },
        },
        className: {
            type: String,
            require: false,
            default: '',
            validate: value => {
                return value;
            },
        },
        fields: {
            type: Array,
            require: true,
            default: function() {
                return [];
            },
            validate: value => {
                value.every(e => typeof e === 'object');
            },
        },
        items: {
            type: Array,
            require: true,
            default: function() {
                return [];
            },
            validate: value => {
                value.every(e => typeof e === 'object');
            },
        },
    },
    data() {
        return {
            showModal: false,
            UserHandle: {
                id: '',
                user_code: '',
                department_id: '',
                user_name: '"Super Admin"',
                role_name: '"headquarter"',
                departments_name: '',
                model_type: '',
            },
            filterQuery: {
                order_column: '',
                order_type: '',
            },
        };
    },
    methods: {
        goToEdit(value) {
            this.$router.push({ path: `edit/${value}` });
        },
        handleSort(ctx) {
            this.filterQuery.order_column = ctx.sortBy === 'role_name' ? 'role_name' : ctx.sortBy;
            this.filterQuery.order_column = ctx.sortBy === 'departments_name' ? 'departments_name' : ctx.sortBy;
            this.filterQuery.order_column = ctx.sortBy === 'user_code' ? 'user_code' : ctx.sortBy;
            this.filterQuery.order_column = ctx.sortBy === 'user_name' ? 'user_name' : ctx.sortBy;

            this.filterQuery.order_type = (ctx.sortDesc === true) ? 1 : 0;

            this.$bus.emit('sendSortTableUser', this.filterQuery);
        },
        showModalDelete(user_id) {
            this.showModal = true;

            const CURRENT_USER = this.items.find(user => user.id === user_id);
            console.log(CURRENT_USER);

            this.UserHandle = CURRENT_USER;
        },
        handleDeleteUser() {
            this.showModal = false;

            this.sendDeleteUser();
        },
        async sendDeleteUser() {
            if (this.UserHandle['id']) {
                const URL = `${urlAPI.deleteUser}/${this.UserHandle['id']}`;

                try {
                    const data = await removeUser(URL);

                    if (data['code'] === 200) {
                        this.$toast.success({
                            content: this.$t('TOAST.TITLE.SUCCESS'),
                        });
                    } else {
                        this.$toast.warning({
                            content: data['message'],
                        });
                    }

                    this.$bus.emit('deleteUserInUserList');
                } catch (error) {
                    this.$toast.error({
                        content: error['response']['data']['message'],
                    });
                    console.log('[Error] You have error when delete user');
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
    @import '@/scss/variables.scss';

    .v-table {
        border: 1px solid $mercury;
        height: 640px;

        ::v-deep thead {
            z-index: 2;

            th {
                z-index: 2;
                position: sticky;
                position: -webkit-sticky;
                top: 1px;
                text-align: center;
                background-color: $green-haze;
                color: $white;
                min-width: 200px;
                word-break: keep-all;
            }
        }

        ::v-deep tbody {
            td {
                text-align: center;
                color: $shark;

                i {
                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            td.result {
                span {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }

        .btn-function {
            text-decoration: underline;
            &:hover {
                cursor: pointer;
            }
        }

    }

    ::v-deep #modal-cf {
        .modal-custom-header {
            border-bottom: 0 none;
        }

        .modal-custom-body {
            text-align: center;
            padding-top: 60px;

            span {
                font-weight: 500;
            }
        }

        .modal-custom-footer {
            border-top: 0 none;
            justify-content: center;
            padding-top: 50px;

            button {
                border: none;
                min-width: 150px;
                font-weight: 500;
                margin: 0 15px;

                &:hover {
                    opacity: 0.5;
                }

                &:focus {
                    opacity: 0.5;
                }
            }

            .modal-btn {
                background-color: $green-haze;
                color: $white;

                &:focus {
                    background-color: $green-haze;
                    color: $white;
                }
            }
        }
    }
</style>
