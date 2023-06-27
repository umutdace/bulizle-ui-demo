<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Haberler</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <a class="btn btn-success btn-sm" href="/admin/news/add">
                                <i class="fa fa-plus" aria-hidden="true">
                                </i>
                                Haber Ekle
                            </a>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Haberler</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped projects">
                        <thead>
                            <tr>
                                <th style="width: 1%">
                                    #
                                </th>
                                <th style="width: 20%">
                                    Haber Adı
                                </th>
                                <th style="width: 30%">
                                    Haber Bağlantısı
                                </th>
                                <th style="width: 8%" class="text-center">
                                    Durumu
                                </th>
                                <th style="width: 20%">
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="index in news" :key="index.id" :name="index.title">
                            <tr>
                                <td>
                                    #
                                </td>
                                <td>
                                    <a>
                                        {{ index.name }}
                                    </a>
                                </td>
                                <td>
                                    <a>{{ index.link }}</a>
                                </td>
                                <td class="project-state">
                                    <span class="badge badge-success" v-if="index.isDelete == false">Yayında</span>
                                    <span class="badge badge-danger" v-else>Yayında Değil</span>
                                </td>
                                <td class="project-actions text-right">
                                    <a class="btn btn-primary btn-sm" :href="'/admin/news/update?id='+index.id">
                                        <i class="fa fa-pencil" aria-hidden="true">
                                        </i>
                                        Düzenle
                                    </a>
                                    <a class="btn btn-danger btn-sm" href="#" @click="Delete(index.id)">
                                        <i class="fa fa-trash-o" aria-hidden="true">
                                        </i>
                                        Sil
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: {
                id: 0,
                name: '',
                link: '',
                image: '',
                summary: '',
                isDelete: false
            }
        }
    },
    created() {
        fetch(this.baseUrl + "api/News", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok)
                return response.json();
        }).then((data) => {
            this.news = data;
            console.log(this.news);
        })
    },
    methods: {
        Delete(id) {
            fetch(this.baseUrl + "api/AdminNews?id="+id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                if (response.ok)
                    return response.json();
            }).then((data) => {
                if (!data.isSuccess)
                    this.ShowError("Hata/Error", data.message);
                else {
                    this.ShowSuccess("Başarılı", data.message);
                }
            })
        }
    }
}
</script>

<style scoped>
@import url('../../../css/adminlte.min.css');
</style>