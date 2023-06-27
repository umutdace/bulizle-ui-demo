<template>
    <div class="container-fluid ps-md-0">
        <div class="row g-0">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-lg-8 mx-auto">
                                <h3 class="login-heading mb-4">Şifreni Değiştir!</h3>
                                <!-- Sign In Form -->
                                <form>
                                    <div class="form-floating mb-3" :class="{ invalid: !password.isValid }">
                                        <input :type="typePassword" class="form-control" id="floatingPassword"
                                            placeholder="Şifrenizi girin." v-model.trim="password.val" @blur="clearValidity
                                                ('password')">
                                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"
                                            @click="showPassword()"></span>
                                        <label for="floatingPassword">Şifre</label>
                                        <p v-if="!password.isValid">Lütfen bir şifre giriniz.</p>
                                    </div>
                                    <div class="form-floating mb-3" :class="{ invalid: !confirmPassword.isValid }">
                                        <input :type="typeConfirm" class="form-control" id="floatingPassword"
                                            placeholder="Şifrenizi girin." v-model.trim="confirmPassword.val" @blur="clearValidity
                                                ('confirmPassword')">
                                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"
                                            @click="showConfirmPassword()"></span>
                                        <label for="floatingPassword">Şifre(Tekrar)</label>
                                        <p v-if="!password.isValid">Lütfen şifrenizi tekrar giriniz.</p>
                                    </div>

                                    <div class="d-grid">
                                        <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                            type="button" @click="ChangePassword()">Değiştir</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: {
                val: '',
                isValid: true,
            },
            confirmPassword: {
                val: '',
                isValid: true,
            },
            formIsValid: true,
            typePassword: "password",
            typeConfirm: "password",
            userId: 0,
        }
    },
    created(){
        this.CheckToken();
    },
    methods: {

        ChangePassword() {
            this.validateForm();
            var data = {
                password: this.password.val,
                confirmPassword: this.confirmPassword.val,
                userId: this.userId
            }
            fetch(this.baseUrl + "api/ChangePassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((response) => {
                console.log(response);
                if (response.ok)
                    return response.json();
            }).then((data) => {
                console.log(data);
                if (!data.isSuccess)
                    this.ShowError("Hata/Error", data.message);
                else {
                    this.ShowSuccessWithLocation("Şifreniz Değiştirildi!", "Yeni şifreniz ile giriş yapabilirsiniz.", "/login");
                }
            }).catch(() => {
                this.ShowError(
                    "Hata / Error",
                    "Yetkisiz İstek / Unauthorized Request"
                );
            });
        },
        CheckToken: async function () {
            var token = this.$route.query.token;
            if (token == null || token.length < 32)
                window.location.href = '/errorpage';
            fetch(this.baseUrl + "api/TokenCheck?token=" + token, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else
                    window.location.href = '/errorpage'
            }).then((data) => {
                this.userId = data;
            })
            .catch(() => {
                    window.location.href = '/errorpage'
            });
        },
        clearValidity(input) {
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            if (this.password.val === "") {
                this.password.isValid = false;
                this.formIsValid = false;
            }
            if (this.confirmPassword.val === "") {
                this.confirmPassword.isValid = false;
                this.formIsValid = false;
            }
        },
        showPassword() {
            this.typePassword = this.typePassword === "password" ? "text" : "password";
        },
        showConfirmPassword() {
            this.typeConfirm = this.typeConfirm === "password" ? "text" : "password";
        },
    }
}
</script>

<style scoped>
.field-icon {
    float: right;
    margin-right: 5px;
    margin-top: -35px;
    position: relative;
    z-index: 2;
}

.login {
    min-height: 100vh;
}


.bg-image {
    background-image: url('../assets/wp5556216.jpg');
    background-size: cover;
    background-position: center;
}

.login-heading {
    font-weight: 300;
}

.go-register {
    font-weight: bold;
}

.btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
    background-color: black;
}

.btn-login:hover {
    background-color: #d72929;
}

.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #d72929;
    --bs-btn-border-color: black;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #d72929;
    --bs-btn-hover-border-color: #d729290a58ca;
    --bs-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #d72929;
    --bs-btn-active-border-color: #d72929;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #d72929;
    --bs-btn-disabled-border-color: #d72929;
}

.small {
    color: black;
}

.small:hover {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 2px solid red;
}

p {
    color: red
}
</style>