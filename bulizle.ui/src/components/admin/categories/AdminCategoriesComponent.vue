<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Kategoriler</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <a class="btn btn-success btn-sm" href="/admin/categories/add">
                                <i class="fa fa-plus" aria-hidden="true">
                                </i>
                                Kategori Ekle
                            </a>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Kategoriler</h3>
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
                                    Kategori Adı
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="index in categories" :key="index.id" :name="index.name">
                            <tr>
                                <td>
                                    #
                                </td>
                                <td>
                                    <a>
                                        {{ index.name }}
                                    </a>
                                </td>
                                <td class="project-actions text-right">
                                    <a class="btn btn-primary btn-sm" :href="'/admin/categories/update?id='+index.id">
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
            categories: {
                id: 0,
                name: '',
            }
        }
    },
    created() {
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
        Delete(id) {
            fetch(this.baseUrl + "api/AdminCategories?id="+id, {
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
                    this.ShowSuccessWithLocation("Başarılı",data.message,"/admin/categories");
                }
            })
        }
    }
}
</script>

<style scoped>
@import url('../../../css/adminlte.min.css');
</style>