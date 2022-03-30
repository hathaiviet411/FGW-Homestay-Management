<template>
	<div class="auth-wrapper auth-v1">
		<div class="auth-inner">
			<v-card class="auth-card">
				<v-card-title class="d-flex align-center justify-center py-7">
					<router-link
						to="/"
						class="d-flex align-center"
					>
						<v-img
							:src="require('@/assets/images/logos/aviato.png')"
							max-height="30px"
							max-width="30px"
							alt="logo"
							contain
							class="me-3 "
						/>

						<h2 class="text-2xl font-weight-semibold">
							HIMS
						</h2>
					</router-link>
				</v-card-title>

				<!-- title -->
				<v-card-text>
					<p class="text-2xl font-weight-semibold text--primary mb-2">
						Welcome to HIMS! 👋🏻
					</p>
					<p class="mb-2">
						Please sign-in to your account and start the adventure
					</p>
				</v-card-text>

				<v-card-text>
					<v-form>
						<v-text-field
							v-model="userID"
							outlined
							label="User ID"
							placeholder="123456"
							hide-details
							type="number"
							class="mb-3"
						/>

						<v-text-field
							v-model="password"
							outlined
							:type="isPasswordVisible ? 'text' : 'password'"
							label="Password"
							placeholder="············"
							:append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
							hide-details
							@click:append="isPasswordVisible = !isPasswordVisible"
						/>

						<div class="d-flex align-center justify-space-between flex-wrap">
							<v-checkbox
								label="Remember Me"
								hide-details
								class="me-3 mt-1"
							/>

							<a
								href="javascript:void(0)"
								class="mt-1"
							>
								Forgot Password?
							</a>
						</div>

						<v-btn
							block
							color="primary"
							class="mt-6"
							@click="doLogin()"
						>
							Login
						</v-btn>
					</v-form>
				</v-card-text>

				<v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
					<span class="me-2">
						Do have an account?
					</span>
					<router-link to="/">
						Contact with your manager.
					</router-link>
				</v-card-text>

				<v-card-text class="d-flex align-center mt-2">
					<v-divider />
					<span class="mx-5">@FGW-18846</span>
					<v-divider />
				</v-card-text>

			</v-card>
		</div>

		<img
			class="auth-mask-bg"
			height="573"
			:src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
		>

		<v-img
			class="auth-tree"
			width="247"
			height="185"
			src="@/assets/images/misc/tree.png"
		/>

		<v-img
			class="auth-tree-3"
			width="377"
			height="289"
			src="@/assets/images/misc/tree-3.png"
		/>
	</div>
</template>

<script>
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';

export default {
    data() {
        return {
            isPasswordVisible: false,
            userID: '',
            password: '',

            icons: {
                mdiEyeOutline,
                mdiEyeOffOutline,
            },
        };
    },

    methods: {
        doLogin() {
            this.$router.push('/account-settings');
        },
    },
};
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
