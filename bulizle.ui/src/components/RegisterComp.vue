<template>
    <div class="container-fluid ps-md-0">
        <div class="row g-0">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-lg-8 mx-auto">
                                <h3 class="register-heading mb-4">Kayıt Olun!</h3>

                                <!-- Sign In Form -->
                                <form>
                                    <div class="form-floating mb-3" :class="{
                                        invalid: !name
                                            .isValid
                                    }">
                                        <input type="text" class="form-control" id="floatingInput"
                                            placeholder="E-posta adresinizi girin." v-model.trim="this.name.val" @blur="clearValidity
                                                ('name')">
                                        <label for="floatingInput">Ad</label>
                                        <p v-if="!name.isValid">Lütfen adınızı giriniz.</p>
                                    </div>
                                    <div class="form-floating mb-3" :class="{
                                        invalid: !surName
                                            .isValid
                                    }">
                                        <input type="text" class="form-control" id="floatingInput"
                                            placeholder="E-posta adresinizi girin." v-model.trim="this.surName.val" @blur="clearValidity
                                                ('surName')">
                                        <label for="floatingInput">Soyad</label>
                                        <p v-if="!surName.isValid">Lütfen soyadınızı giriniz.</p>
                                    </div>
                                    <div class="form-floating mb-3" :class="{
                                        invalid: !email
                                            .isValid
                                    }">
                                        <input type="email" class="form-control" id="floatingInput"
                                            placeholder="E-posta adresinizi girin." required v-model.trim="this.email.val"
                                            @blur="clearValidity
                                                ('email')">
                                        <label for="floatingInput">E-posta Adresi</label>
                                        <p v-if="!email.isValid">Lütfen bir e-posta adresi giriniz.</p>
                                    </div>
                                    <div class="form-floating mb-3" :class="{
                                        invalid: !password
                                            .isValid
                                    }">
                                        <input :type="typePassword" class="form-control" id="floatingPassword"
                                            placeholder="Şifrenizi girin." v-model.trim="this.password.val" @blur="clearValidity
                                                ('password')">
                                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"
                                            @click="showPassword()"></span>
                                        <label for="floatingPassword">Şifre</label>
                                        <p v-if="!password.isValid">Lütfen bir şifre giriniz.</p>
                                    </div>
                                    <div class="form-floating mb-3" :class="{
                                        invalid: !confirmPassword
                                            .isValid
                                    }">
                                        <input :type="typeConfirm" class="form-control" id="floatingPassword"
                                            placeholder="Şifrenizi girin." v-model.trim="this.confirmPassword.val" @blur="clearValidity
                                                ('confirmPassword')">
                                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"
                                            @click="showConfirm()"></span>
                                        <label for="floatingPassword">Şifre(Tekrar)</label>
                                        <p v-if="!confirmPassword.isValid">Lütfen şifrenizi tekrar giriniz.</p>
                                    </div>


                                    <div class="form-check mb-3" :class="{
                                        invalid: !contracts
                                            .isValid
                                    }">
                                        <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"
                                            v-model.trim="this.contracts.val" @blur="clearValidity
                                                ('contracts')">
                                        <label class="form-check-label" for="rememberPasswordCheck">
                                            Gizlilik sözleşmesi ve aydınlanma metnini okudum kabul ediyorum
                                        </label>
                                        <p v-if="!contracts.isValid">Lütfen sözleşmeleri onaylayınız.</p>
                                    </div>

                                    <div class="d-grid">
                                        <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                            type="button" @click="Register()">Kayıt Ol</button>
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
            name: {
                val: '',
                isValid: true,
            },
            surName: {
                val: '',
                isValid: true,
            },
            email: {
                val: '',
                isValid: true,
            },
            password: {
                val: '',
                isValid: true,
            },
            confirmPassword: {
                val: '',
                isValid: true
            },
            contracts: {
                val: [],
                isValid: true,
            },
            formIsValid: true,
            typePassword: 'password',
            typeConfirm: 'password',
        }
    },

    methods: {
        Register() {
            this.validateForm();
            if (!this.formIsValid)
                return;
            var dataRegister = {
                name: this.name.val,
                surname: this.surName.val,
                email: this.email.val,
                password: this.password.val,
                passwordConfirm: this.confirmPassword.val
            }
            fetch(this.baseUrl + "api/Register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataRegister),
            }).then((response) => {
                if (response.status == 200)
                    return response.json();
            }).then((data) => {
                if (!data.isSuccess)
                    this.ShowError("Hata/Error", data.message);
                else {
                    this.ShowSuccessWithLocation("Hesabın kaydedildi!", "Hesabını aktif etmen için gönderdiğimiz e-posta'yı onaylamalısın.", "/");
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
        validateName() {
            return !/[0-9]/.test(this.name.val);
        
        },
        validateSurName() {
            return !/[0-9]/.test(this.surName.val);
        
        },
        validateForm() {
            this.formIsValid = true;
            if (this.name.val === "" || !this.validateName()) {
                this.name.isValid = false;
                this.formIsValid = false;
            }
            if (this.surName.val === "" || !this.validateSurName()) {
                this.surName.isValid = false;
                this.formIsValid = false;
            }
            if (this.email.val === "" || !this.validateEmail()) {
                this.email.isValid = false;
                this.formIsValid = false;
            }

            if (this.password.val === "") {
                this.password.isValid = false;
                this.formIsValid = false;
            }
            if (this.confirmPassword.val === "") {
                this.confirmPassword.isValid = false;
                this.formIsValid = false;
            }
            if (this.contracts.val.length === 0) {
                this.contracts.isValid = false;
                this.formIsValid = false;
            }
        },
        showPassword() {
            this.typePassword = this.typePassword === "password" ? "text" : "password";

        },
        showConfirm() {
            this.typeConfirm = this.typeConfirm === "password" ? "text" : "password";
        }
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
    color: red;
}
</style>