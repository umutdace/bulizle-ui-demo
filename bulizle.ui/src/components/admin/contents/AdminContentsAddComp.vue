<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">İçerik</h3>

                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="inputName">İçerik Adı</label>
                                <input type="text" id="inputName" class="form-control" v-model="this.content.name">
                            </div>
                            <div class="form-group">
                                <label for="inputDescription">İçerik Özeti</label>
                                <textarea id="inputDescription" class="form-control" rows="4" v-model="this.content.summary"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="inputClientCompany">İçerik Linki</label>
                                <input type="text" id="inputClientCompany" class="form-control" v-model="this.content.link">
                            </div>
                            <div class="form-group">
                                <label for="inputProjectLeader">İçerik Fragmanı</label>
                                <input type="text" id="inputProjectLeader" class="form-control" v-model="this.content.fragmanUrl">
                            </div>
                            <div class="form-group">
                                <label for="inputProjectLeader">İçerik Görseli</label>
                                <input type="text" id="inputProjectLeader" class="form-control" v-model="this.content.image">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-secondary">
                        <div class="card-header">
                            <h3 class="card-title">İçerik Detay</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="inputStatus">İçerik Kategorisi</label>
                                <select id="inputStatus" class="form-control custom-select" v-model="this.content.categoryId">
                                    <option v-for="index in categories" :key="index.id" :value="index.id"> {{ index.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputStatus">İçerik Platformu</label>
                                <select id="inputStatus" class="form-control custom-select" v-model="this.content.platformId">
                                    <option v-for="index in platforms" :key="index.id" :value="index.id"> {{ index.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputEstimatedDuration">İçerik Türü</label>
                                <select id="inputStatus" class="form-control custom-select" v-model="this.content.series">
                                    <option :value="true">Dizi</option>
                                    <option :value="false">Film</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a href="/admin/contents" class="btn btn-secondary">Geri Dön</a>
                    <input type="submit" value="Kaydet" @click="AddContent()" class="btn btn-success float-right">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            platforms: {
                id: 0,
                name: '',
                link: '',
                logo: '',
            },
            content: {
                name: '',
                summary: '',
                link: '',
                fragmanUrl: '',
                image: '',
                series: null,
                categoryId: 0,
                platformId: 0,
            },
            categories: {
                id: 0,
                name: '',
            }
        }
    },
    created() {
        fetch(this.baseUrl + "api/AdminPlatforms", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok)
                return response.json();
        }).then((data) => {
            this.platforms = data;
            console.log(this.platforms);
        })
        fetch(this.baseUrl + "api/AdminCategories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok)
                return response.json();
        }).then((data) => {
            this.categories = data;
            console.log(this.categories);
        })
    },
    methods: {
        AddContent() {
            fetch('https://localhost:7145/api/AdminContents', {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.content),
            }).then((response) => {
                if (response.status == 200)
                    return response.json();
            }).then((data) => {
                if (!data.isSuccess)
                    this.ShowError("Hata/Error", data.message);
                else {
                    this.ShowSuccessWithLocation("Başarılı", '', "/admin/contents");
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
@import url('../../../css/adminlte.min.css');

.content-wrapper {
    background-color: white;
    margin-top: 30px;
}
</style>