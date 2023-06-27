<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Platform</h3>

                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="inputName">Platform Adı</label>
                                <input type="text" id="inputName" class="form-control" v-model="this.platform.name">
                            </div>
                            <div class="form-group">
                                <label for="inputName">Platform Linki</label>
                                <input type="text" id="inputName" class="form-control" v-model="this.platform.link">
                            </div>
                            <div class="form-group">
                                <label for="inputName">Platform Logosu</label>
                                <input type="text" id="inputName" class="form-control" v-model="this.platform.logo">
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a href="/admin/platforms" class="btn btn-secondary">Geri Dön</a>
                    <input type="submit" @click="UpdatePlatform()" value="Kaydet" class="btn btn-success float-right">
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    data() {
        return {
            platform: {
                name: '',
                link: '',
                logo: '',
            }
        }
    },
    created() {
        var id = this.$route.query.id;
        fetch(this.baseUrl + "api/GetPlatform?id=" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok)
                return response.json();
        }).then((data) => {
            console.log(data);
            this.platform = data;
        })
    },
    methods: {
        UpdatePlatform() {
            var data = {
                id: this.$route.query.id,
                name: this.platform.name,
                link: this.platform.link,
                logo: this.platform.logo,
            }
            fetch('https://localhost:7145/api/AdminPlatforms', {
                method: "PUT",
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then((response) => {
                if (response.status == 200)
                    return response.json();
            }).then((data) => {
                if (!data.isSuccess)
                    this.ShowError("Hata/Error", data.message);
                else {
                    this.ShowSuccessWithLocation("Başarılı", '', "/admin/platforms");
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