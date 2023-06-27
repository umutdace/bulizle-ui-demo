<template>
    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
            <div class="card-body">
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 profile-title">Şifreni Değiştir</h6>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label class="labels">Eski Şifre</label><input type="password" class="form-control"
                                placeholder="Eski şifrenizi giriniz" v-model="oldPassword">
                        </div>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label class="labels">Yeni Şifre</label><input type="password" class="form-control"
                                placeholder="Yeni şifrenizi giriniz." v-model="newPassword">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label class="labels">Yeni Şifre(Tekrar)</label><input type="password" class="form-control"
                                placeholder="Yeni şifrenizi tekrar giriniz." v-model="confirmNewsPassword">
                        </div>
                    </div>
                </div>
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">
                            <button type="button" id="submit" name="submit"
                                class="btn btn-primary top-style" @click="ResetPassword()">Değiştir</button>
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
            user: {
                id: 0,
                name: '',
                surname: '',
                email: '',
                phone: '',
                birthDate: '',
                education: '',
                gender: '',
            },
            oldPassword: '',
            newPassword: '',
            confirmNewsPassword: ''
        }
    },
    created() {
        var session = sessionStorage.getItem("session");
        fetch(this.baseUrl + "api/Profile?session=" + session, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            console.log(response);
            if (response.ok)
                return response.json();
            else
                window.location.href = '/'
        }).then((data) => {
            this.user = data;
            if(this.user.birthDate != null);
                this.user.birthDate = data.birthDate.substring(0,10);
            console.log(this.user);
        }).catch(() => {
            window.location.href = '/'
        });
    },
    methods: {
        ResetPassword() {
            console.log(this.user.id);
            var data = {
                userId: this.user.id,
                OldPassword: this.oldPassword,
                Password: this.newPassword,
                ConfirmPassword: this.confirmNewsPassword,
            }
            console.log(data);
            fetch(this.baseUrl + "api/ResetPassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((response) => {
                if (response.status == 200)
                    return response.json();
            }).then((data) => {
                if (!data.isSuccess)
                    this.ShowError("Hata/Error", data.message);
                else {
                    this.ShowSuccessWithLocation("Başarılı", data.message, "/resetpassword");
                }
            }).catch(() => {
                this.ShowError(
                    "Hata / Error",
                    "Yetkisiz İstek / Unauthorized Request"
                );
            });
        },
    }
}
</script>
<style scoped>
body {
    margin: 0;
    padding-top: 40px;
    color: #2e323c;
    background: #f5f6fa;
    position: relative;
    height: 100%;
}

.top-style {
    margin-top: 10px;
}

.profile-title {
    color: red;
}

.cont {
    margin-top: 30px;
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

.account-settings .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
}

.account-settings .user-profile .user-avatar {
    margin: 0 0 1rem 0;
}

.account-settings .user-profile .user-avatar img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
}

.account-settings .user-profile h5.user-name {
    margin: 0 0 0.5rem 0;
}

.account-settings .user-profile h6.user-email {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #9fa8b9;
}

.account-settings .about {
    margin: 2rem 0 0 0;
    text-align: center;
}

.account-settings .about h5 {
    margin: 0 0 15px 0;
    color: red;
}

.account-settings .about p {
    font-size: 0.825rem;
}

.form-control {
    border: 1px solid #cfd1d8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: .825rem;
    background: #ffffff;
    color: #2e323c;
}

.card {
    background: #ffffff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;
}</style>