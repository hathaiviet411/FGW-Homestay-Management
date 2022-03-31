<template>
    <div>
        <v-app> 
            <v-card class="mx-auto my-12">
                <v-card-title>
                    <span>Login Form</span>
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="form.email" label="Email"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field v-model="form.password" label="Password"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-row>
                        <v-col cols="12">
                            <v-btn color="primary" block elevation="12" @click="doLogin()">
                                <span>Login</span>
                            </v-btn>                            
                        </v-col>

                        <v-col cols="12">
                            <v-btn color="error" block elevation="12" @click="doRegister()">
                                <span>Register</span>
                            </v-btn>
                        </v-col>

                        <v-col cols="12">
                            <v-btn color="warning" block elevation="12" @click="doResetPassword()">
                                <span>Forgot Password</span>
                            </v-btn>                            
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    // Apis
    import { postLogin } from '../../api/modules/login';

    // Apis url
    const urlApi = {
        apiLogin: '/auth/login',
    }

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async doLogin() {
                console.log('Do Login');
                try {
                    const response = await postLogin(urlApi.apiLogin, this.form);
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            },

            formLoginValidate() {},

            doRegister() {
                console.log('Do Register');
            },

            doResetPassword() {
                console.log('Do Reset Password');
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>