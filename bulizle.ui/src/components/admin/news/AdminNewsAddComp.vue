<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Haberler</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="inputName">Haber Adı</label>
                                <input type="text" id="inputName" class="form-control" v-model="newsName">
                            </div>
                            <div class="form-group">
                                <label for="inputName">Haber Linki</label>
                                <input type="text" id="inputName" class="form-control" v-model="newsLink">
                            </div>
                            <div class="form-group">
                                <label for="inputName">Haber Özeti</label>
                                <input type="text" id="inputName" class="form-control" v-model="newsSummary">
                            </div>
                            <div class="form-group">
                                <label for="inputName">Haber Görseli</label>
                                <input type="text" id="inputName" class="form-control" v-model="newsImage">
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a href="/admin/news" class="btn btn-secondary">Geri Dön</a>
                    <input type="submit" @click="this.AddNews()" value="Kaydet" class="btn btn-success float-right">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsName: '',
            newsSummary: '',
            newsLink: '',
            newsImage: ''
        }
    },
    methods: {
        AddNews() {
            var data = {
                newsName: this.newsName,
                newsUrl: this.newsLink,
                newsImage: this.newsImage,
                newSummary: this.newsSummary,
            }
            fetch('https://localhost:7145/api/AdminNews', {
                method: "POST",
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
                    this.ShowSuccessWithLocation("Başarılı", '', "/admin/news");
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