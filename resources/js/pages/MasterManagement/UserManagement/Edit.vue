<template>
	<div class="user-management-edit">
		<b-overlay
			:show="overlay.show"
			:variant="overlay.variant"
			:opacity="overlay.opacity"
			:blur="overlay.blur"
			:rounded="overlay.sm"
		>
			<!-- Template overlay -->
			<template #overlay>
				<div class="text-center">
					<b-icon icon="arrow-clockwise" font-scale="3" animation="spin" />
					<p style="margin-top: 10px;">{{ $t('OVERLAY.PLEASE_WAIT') }}</p>
				</div>
			</template>

			<div class="content-body">
				<b-row>

					<!-- User Role -->
					<b-col class="input-row" cols="12">
						<vLabel
							:class-name="'user-management-label user-role'"
							:text-label="$t('USER_MANAGEMENT.USER_ROLE')"
						/>
						<b-form-select
							v-model="user_role"
							:disabled="isProcess"
							:class-name="'user-management-select user-role'"
							style="text-transform: capitalize;"
						>
							<b-form-select-option :value="null">{{ $t('PLACE_HOLDER.USER_ROLE') }}</b-form-select-option>
							<b-form-select-option
								v-for="role in user_role_options"
								:key="role.id"
								:value="role.id"
								style="text-transform: capitalize;"
							>
								{{ role.name }}
							</b-form-select-option>
						</b-form-select>
					</b-col>

					<!-- Department -->
					<b-col class="input-row" cols="12">
						<vLabel
							:class-name="'user-management-label department'"
							:text-label="$t('USER_MANAGEMENT.DEPARTMENT')"
						/>
						<b-form-select
							v-model="base"
							:disabled="isChooseDepartment"
							:class-name="'user-management-select department'"
						>
							<b-form-select-option :value="null">{{ $t('PLACE_HOLDER.DEPARTMENT') }}</b-form-select-option>
							<b-form-select-option
								v-for="baseVal in base_options"
								:key="baseVal.id"
								:value="baseVal.id"
							>
								{{ baseVal.name }}
							</b-form-select-option>
						</b-form-select>
					</b-col>

					<!-- User ID -->
					<b-col class="input-row" cols="12">
						<vLabel
							:class-name="'user-management-label user-id'"
							:text-label="$t('USER_MANAGEMENT.USER_ID')"
						/>
						<vInput
							v-model="user_id"
							:type="'number'"
							:class-name="'user-management-input user-id'"
							:placeholder="$t('PLACE_HOLDER.USER_ID')"
							:disabled="isProcess"
							:autocomplete="'user-id'"
						/>
					</b-col>

					<!-- User Name -->
					<b-col class="input-row" cols="12">
						<vLabel
							:class-name="'user-management-label user-name'"
							:text-label="$t('USER_MANAGEMENT.USER_NAME')"
						/>
						<vInput
							v-model="user_name"
							:type="'text'"
							:class-name="'user-management-input user-name'"
							:placeholder="$t('PLACE_HOLDER.USER_NAME')"
							:disabled="isProcess"
							:autocomplete="'user-name'"
						/>
					</b-col>

					<!-- Password -->
					<b-col class="input-row" cols="12">
						<vLabel
							:class-name="'user-management-label pwd'"
							:text-label="$t('USER_MANAGEMENT.PASSWORD')"
						/>
						<vInput
							v-model="pwd"
							:type="'password'"
							:class-name="'user-management-input pwd'"
							:placeholder="$t('PLACE_HOLDER.PWD')"
							:disabled="isProcess"
							:autocomplete="'password'"
						/>
					</b-col>

					<!-- New Password -->
					<b-col class="input-row" cols="12">
						<vLabel
							:class-name="'user-management-label new-pwd'"
							:text-label="$t('USER_MANAGEMENT.NEW_PASSWORD')"
						/>
						<vInput
							v-model="new_pwd"
							:type="'password'"
							:class-name="'user-management-input new-pwd'"
							:placeholder="$t('PLACE_HOLDER.NEW_PWD')"
							:disabled="isProcess"
							:autocomplete="'new-password'"
						/>
					</b-col>
				</b-row>

				<!-- Footer Functional Buttons -->
				<b-col class="input-row" cols="12">
					<b-row class="footer-functional-buttons" lg="2" md="1" sm="1">
						<!-- Back Button -->
						<b-col>
							<vButton
								id="btn-back"
								:text-button="$t('BUTTON.BACK')"
								:class-name="'v-button-default'"
								:disabled="isProcess"
								@click.native="backToUserManagementIndex()"
							/>
						</b-col>

						<!-- Save Button -->
						<b-col>
							<vButton
								id="btn-save"
								:text-button="$t('BUTTON.SAVE')"
								:class-name="'v-button-default'"
								:disabled="isProcess"
								@click.native="validation()"
							/>
						</b-col>
					</b-row>
				</b-col>
			</div>
		</b-overlay>
	</div>
</template>

<script>
// Atomic components import
import vLabel from '@/components/atoms/vLabel';
import vButton from '@/components/atoms/vButton';
import vInput from '@/components/atoms/vInput';

// Api
const urlApi = {
    getOneUser: '/user',
    updateUser: '/user',
    getListRole: '/role',
    getListDepartment: '/department',
};
import { getOneUser, updateUser } from '@/api/modules/user';
import { getListRole } from '@/api/modules/role';
import { getListDepartment } from '@/api/modules/department';
import { getAllIdOption, isExitOption } from '@/utils/helper';

export default {
    name: 'UserManagementCreate',
    components: {
        vLabel,
        vButton,
        vInput,
    },
    data() {
        return {
            isProcess: false,
            user_role: null,
            user_role_options: [],
            user_id: '',
            base: null,
            base_options: [],
            user_name: '',
            pwd: '',
            new_pwd: '',
            overlay: {
                show: false,
                variant: 'light',
                opacity: 1,
                blur: '1rem',
                rounded: 'sm',
            },
            isChooseDepartment: true,
        };
    },
    computed: {
        isPermission() {
            return this.user_role;
        },
    },
    watch: {
        isPermission() {
            const ROLE = this.user_role_options.find(role => role.id === this.user_role);

            console.log(ROLE);
            this.isChooseDepartment = this.checkPermission(ROLE);

            if (ROLE['name'] === 'headquarter' || ROLE['name'] === 'operator') {
                this.base = null;
            }
        },
    },
    created() {
        this.initData();
    },
    methods: {
        checkPermission(ROLE) {
            if (this.user_role === null) {
                return true;
            }

            if (ROLE['name'] === 'headquarter' || ROLE['name'] === 'operator') {
                return true;
            }

            return false;
        },
        async initData() {
            this.overlay.show = true;
            await this.handleGetListRole();
            await this.handleGetListDepartment();
            await this.handleGetUser();

            this.overlay.show = false;
        },
        async handleGetUser() {
            const UserID = this.$route.params.id;

            if (UserID) {
                try {
                    const URL = `${urlApi.getOneUser}/${UserID}`;

                    const { data } = await getOneUser(URL);

                    this.user_role = data['roles'][0]['id'] || null;
                    this.base = data['department_id'] || null;
                    this.user_id = data['user_code'] + '' || '';
                    this.user_name = data['user_name'] || '';
                } catch (error) {
                    this.$toast.error({
                        content: error['response']['data']['message'],
                    });

                    console.log('[Error] You have error when get User by ID');
                }
            }
        },
        backToUserManagementIndex() {
            this.$router.push('/master-management/user-management/list');
        },
        validation() {
            if (this.user_role === null && (isExitOption(getAllIdOption(this.user_role_options), this.user_role) === false)) {
                this.$toast.warning({
                    content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_USER_ROLE'),
                });
            } else if (!(this.user_id.length >= 1 && this.user_id.length <= 8 && this.user_id > 0)) {
                this.$toast.warning({
                    content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_USER_ID'),
                });
            } else if (this.user_name.length === 0) {
                this.$toast.warning({
                    content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_USER_NAME'),
                });
            } else if (this.pwd.length === 0) {
                this.$toast.warning({
                    content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_PASSWORD'),
                });
            } else if (!(this.pwd.length >= 8 && this.pwd.length <= 16)) {
                this.$toast.warning({
                    content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_PASSWORD_LENGTH'),
                });
            } else if (this.new_pwd.length === 0) {
                this.$toast.warning({
                    content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_NEW_PASSWORD'),
                });
            } else if (!(this.new_pwd.length >= 8 && this.new_pwd.length <= 16)) {
                this.$toast.warning({
                    content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_NEW_PASSWORD_LENGTH'),
                });
            } else {
                if (this.base !== null) {
                    if (isExitOption(getAllIdOption(this.base_options, 'id'), this.base) === false) {
                        this.$toast.warning({
                            content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_BASE'),
                        });
                    } else {
                        this.processUpdateUser();
                    }
                } else {
                    if (this.user_role === 3) {
                        if (this.base === null) {
                            this.$toast.warning({
                                content: this.$t('TOAST.CONTENT.USER_MANAGEMENT.REQUIRED_BASE'),
                            });
                        } else {
                            this.processUpdateUser();
                        }
                    } else {
                        this.processUpdateUser();
                    }
                }
            }
        },
        processUpdateUser() {
            const DATA = {
                roles: this.user_role,
                department_id: this.base,
                user_code: this.user_id,
                user_name: this.user_name,
                current_password: this.pwd,
                password: this.new_pwd,
            };

            this.handleUpdateUser(DATA);
        },
        async handleGetListRole() {
            const URL = urlApi.getListRole;

            try {
                const res = await getListRole(URL);

                if (res['code'] === 200) {
                    this.user_role_options = res['data'] || [];
                } else {
                    this.user_role_options = [];

                    this.$toast.warning({
                        content: res['message'],
                    });
                }
            } catch (error) {
                this.user_role_options = [];
                this.$toast.error({
                    content: error['response']['data']['message'],
                });

                console.log('[Error] You have error when get list role');
            }
        },
        async handleGetListDepartment() {
            const URL = urlApi.getListDepartment;

            try {
                const res = await getListDepartment(URL);

                if (res['code'] === 200) {
                    this.base_options = res['data'] || [];
                } else {
                    this.base_options = [];

                    this.$toast.warning({
                        content: res['message'],
                    });
                }
            } catch (error) {
                this.base_options = [];
                this.$toast.error({
                    content: error['response']['data']['message'],
                });

                console.log('[Error] You have error when get list department');
            }
        },
        async handleUpdateUser(User) {
            this.overlay.show = true;

            const UserID = this.$route.params.id;

            if (UserID) {
                const URL = `${urlApi.updateUser}/${UserID}`;

                try {
                    const data = await updateUser(URL, User);

                    if (data.code === 200) {
                        this.$toast.success({
                            content: this.$t('TOAST.TITLE.SUCCESS'),
                        });

                        this.$router.push({ path: '/master-management/user-management/list' });
                    } else {
                        this.$toast.warning({
                            content: data['message'],
                        });
                    }

                    this.overlay.show = false;
                } catch (error) {
                    this.$toast.error({
                        content: error['response']['data']['message'],
                    });
                    console.log('[Error] You have error when update user');

                    this.overlay.show = false;
                }
            }

            this.overlay.show = false;
        },
    },
};
</script>

<style lang="scss" scoped>
  @import "@/scss/variables.scss";

  .content-body {
    margin: 0 5px;
    margin: auto;
    max-width: 60%;
    padding-top: 60px;
    padding-bottom: 60px;

    .input-row {
        padding-top: 20px;

        .footer-functional-buttons {
            margin-top: 20px;
            text-align: center;

            button {
                max-width: 150px;
                margin-top: 50px;
            }
        }
    }
}
</style>
