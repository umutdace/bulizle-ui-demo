<template>
    <div class="container-fluid ps-md-0">
        <div class="row g-0">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-lg-8 mx-auto">
                                <h3 class="login-heading mb-4">Hoşgeldiniz!</h3>
                                <!-- Sign In Form -->
                                <form>
                                    <div class="form-floating mb-3" :class="{ invalid: !email.isValid }">
                                        <input type="email" class="form-control" id="floatingInput"
                                            placeholder="E-posta adresinizi girin." v-model.trim="email.val" @blur="clearValidity
                                                ('email')">
                                        <label for="floatingInput">E-posta Adresi</label>
                                        <p v-if="!email.isValid">Lütfen bir e-posta adresi giriniz.</p>
                                    </div>
                                    <div class="form-floating mb-3" :class="{ invalid: !password.isValid }">
                                        <input :type="typePassword" class="form-control" id="floatingPassword"
                                            placeholder="Şifrenizi girin." v-model.trim="password.val" @blur="clearValidity
                                                ('password')">
                                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"
                                            @click="showPassword()"></span>
                                        <label for="floatingPassword">Şifre</label>
                                        <p v-if="!password.isValid">Lütfen bir şifre giriniz.</p>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                                        <label class="form-check-label" for="rememberPasswordCheck">
                                            Beni Hatırla
                                        </label>
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                            type="button" @click="Login()">Giriş yap</button>
                                        <div class="text-center">
                                            <label class="form-check-label go-register">Hesabın yok mu ? <a class="small"
                                                    href="/register">KAYIT OL!</a></label>
                                        </div>
                                        <p></p>
                                        <div class="text-center">
                                            <a class="small" href="/forgotpassword">Şifreni mi unuttun?</a>
                                        </div>
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
            email: {
                val: '',
                isValid: true,
            },
            password: {
                val: '',
                isValid: true,
            },
            formIsValid: true,
            typePassword: "password"
        }
    },
    created(){
        var session = sessionStorage.getItem("session");
        if(session != null)
            window.location.href = "/";
    },
    methods: {

        Login() {
            this.validateForm();
            if(this.formIsValid == false)
                return;
            var dataLogin = {
                email: this.email.val,
                password: this.password.val
            }
            fetch(this.baseUrl + "api/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataLogin),
            }).then((response) => {
                if (response.status == 200)
                    return response.json();
            }).then((data) => {
                if (!data.isSuccess)
                    this.ShowError("Hata/Error", data.message);
                else {
                    sessionStorage.setItem('session', data.token);
                    window.location.href = '/';
                }
            }).catch(() => {
                this.ShowError(
                    "Hata / Error",
                    "Yetkisiz İstek / Unauthorized Request"
                );
            });
        },
        clearValidity(input) {
            this[input].isValid = true;
        },
        validateEmail() {
            return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email.val);
        },
        validateForm() {
            this.formIsValid = true;
            if (this.email.val === "" || !this.validateEmail()) {
                this.email.isValid = false;
                this.formIsValid = false;
            }
            if (this.password.val === "") {
                this.password.isValid = false;
                this.formIsValid = false;
            }
        },
        showPassword() {
            this.typePassword = this.typePassword === "password" ? "text" : "password";           
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