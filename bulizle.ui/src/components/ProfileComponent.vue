<template>
    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 class="mb-2 profile-title">Profil Ayrıntıları</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label class="labels">Ad</label><input type="text" class="form-control"
                                        placeholder="first name" :value="user.name" disabled>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label class="labels">Soyad</label><input type="text" class="form-control"
                                        :value="user.surname" placeholder="surname" disabled>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label class="labels">E-posta</label><input type="text" class="form-control"
                                        placeholder="enter phone number" :value="user.email" disabled>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label class="labels">Telefon No</label><input type="tel" id="inputPhone"
                                        name="inputPhone" maxlength="16" class="form-control"
                                        placeholder="Telefon numaranızı girin" v-model="user.phone" @input="acceptNumber">
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label class="labels">Cinsiyet</label><select id="genderBox" class="form-control">
                                        <option v-if="user.gender === ''">Cinsiyet seçin</option>
                                        <option value="E" v-if="user.gender == 'E'">Erkek</option>
                                        <option selected value="K" v-else-if="user.gender == 'K'">Kız</option>
                                        <option value="E" v-show="user.gender != 'E'">Erkek</option>
                                        <option value="K" v-show="user.gender != 'K'">Kız</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label class="labels">Doğum Tarihi</label><input type="date" class="form-control"
                                        placeholder="Doğum tarihinizi girin" v-model="user.birthDate">
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label class="labels">Eğitim</label><input type="text" class="form-control"
                                        placeholder="Eğitim durumunuzu girin" v-model="user.education">
                                </div>
                            </div>
                        </div>
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="text-right">
                                    <button type="button" id="submit" name="submit" class="btn btn-primary top-style" @click="UpdateProfile()">Kaydet</button>
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
        UpdateProfile() {
            this.user.gender = document.getElementById("genderBox").value;
            var data = {
                id: this.user.id,
                phoneNumber: this.user.phone,
                dateOfBirth: this.user.birthDate,
                gender: this.user.gender,
                education: this.user.education
            }
            console.log(data);
            fetch(this.baseUrl + "api/Profile", {
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
                    this.ShowSuccessWithLocation("Başarılı", data.message, "/profile");
                }
            }).catch(() => {
                this.ShowError(
                    "Hata / Error",
                    "Yetkisiz İstek / Unauthorized Request"
                );
            });
        },
        acceptNumber() {
            var x = this.user.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.user.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
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

.top-style{
    margin-top: 10px;
}

.profile-title{
    color: red;
}

.cont{
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
}
</style>