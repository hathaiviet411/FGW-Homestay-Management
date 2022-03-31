<template>
	<div class="auth-wrapper auth-v2">
		<b-row class="auth-inner m-0">

			<!-- Brand logo-->
			<b-link class="brand-logo">
				<vuexy-logo />
				<h2 class="brand-text text-primary ml-1">
					HIMS
				</h2>
			</b-link>
			<!-- /Brand logo-->

			<!-- Left Text-->
			<b-col
				lg="8"
				class="d-none d-lg-flex align-items-center p-5"
			>
				<div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
					<b-img
						fluid
						:src="sideImg"
						alt="login-logo"
					/>
				</div>
			</b-col>
			<!-- /Left Text-->

			<!-- Login-->
			<b-col
				lg="4"
				class="d-flex align-items-center auth-bg px-2 p-lg-5"
			>
				<b-col
					sm="8"
					md="6"
					lg="12"
					class="px-xl-2 mx-auto"
				>
					<b-card-title
						title-tag="h2"
						class="font-weight-bold mb-1"
					>
						Welcome to HIMS! 👋
					</b-card-title>
					<b-card-text class="mb-2">
						Please sign-in to your account to continue
					</b-card-text>

					<!-- Form Input -->
					<validation-observer ref="loginValidation">
						<b-form
							class="auth-login-form mt-2"
							@submit.prevent
						>
							<!-- User ID -->
							<b-form-group
								label="User ID"
							>
								<validation-provider
									#default="{ errors }"
									name="User ID"
									rules="required"
								>
									<b-form-input
										v-model="Account.user_id"
										:onkeydown="numberInputOnly()"
										placeholder="123456"
										:class="errors.length > 0 ? 'is-invalid' : null"
									/>
									<small class="text-danger">{{ errors[0] }}</small>
								</validation-provider>
							</b-form-group>

							<!-- Forgot Password -->
							<b-form-group>
								<div class="d-flex justify-content-between">
									<label for="login-password">Password</label>
									<b-link to="/">
										<small>Forgot Password?</small>
									</b-link>
								</div>
								<validation-provider
									#default="{ errors }"
									name="Password"
									rules="required"
								>
									<b-input-group
										class="input-group-merge"
									>
										<b-form-input
											v-model="password"
											:class="['form-control-merge', errors.length > 0 ? 'is-invalid' : null]"
											:type="passwordFieldType"
											placeholder="············"
										/>
										<b-input-group-append is-text>
											<feather-icon
												class="cursor-pointer"
												:icon="passwordToggleIcon"
												@click="togglePasswordVisibility"
											/>
										</b-input-group-append>
									</b-input-group>
									<small class="text-danger">{{ errors[0] }}</small>
								</validation-provider>
							</b-form-group>

							<!-- Checkbox -->
							<b-form-group>
								<b-form-checkbox
									id="remember-me"
									v-model="status"
								>
									Remember Me
								</b-form-checkbox>
							</b-form-group>

							<!-- Submit buttons -->
							<b-button
								type="submit"
								variant="primary"
								block
								@click="validationForm"
							>
								Sign in
							</b-button>
						</b-form>
					</validation-observer>

					<b-card-text class="text-center mt-2">
						<span>Accounts are only created from HIMS's internal system.</span>
					</b-card-text>

					<b-card-text class="text-center mt-2">
						<span>If you do not have an account, please contact with you</span>
						<b-link to="/">
							<span>&nbsp;Manager</span>
						</b-link>
					</b-card-text>

					<!-- Divider -->
					<div class="divider my-2">
						<div class="divider-text">
							or
						</div>
					</div>

					<b-card-text class="text-center mt-2">
						<b-link to="/">
							<span>&nbsp;HR Headquarter</span>
						</b-link>
					</b-card-text>
				</b-col>
			</b-col>
			<!-- /Login-->
		</b-row>
	</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import VuexyLogo from '@core/layouts/components/Logo.vue';
import { required } from '@validations';
import { togglePasswordVisibility } from '@core/mixins/ui/forms';
import { numberInputOnly } from '@/utils/number-input-only';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';

export default {
    components: {
        VuexyLogo,
        ValidationProvider,
        ValidationObserver,
    },
    mixins: [togglePasswordVisibility],
    data() {
        return {
            numberInputOnly: numberInputOnly,
            status: '',

            Account: {
                user_id: '',
                password: '',
            },

            sideImg: require('@/assets/images/pages/login-v2.svg'),
            required,
        };
    },
    computed: {
        passwordToggleIcon() {
            return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon';
        },
    },
    methods: {
        validationForm() {
            this.$refs.loginValidation.validate().then(success => {
                if (success) {
                    this.$toast({
                        component: ToastificationContent,
                        props: {
                            title: 'Form Submitted',
                            icon: 'EditIcon',
                            variant: 'success',
                        },
                    });

                    this.$router.push({ path: '/home' });
                }
            });
        },
    },
};
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
