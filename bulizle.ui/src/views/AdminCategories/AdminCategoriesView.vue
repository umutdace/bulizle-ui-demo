<template>
    <AdminSideBar></AdminSideBar>
    <AdminCategoriesComponent></AdminCategoriesComponent>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminCategoriesComponent from '@/components/admin/categories/AdminCategoriesComponent.vue';
export default {
    components:{
        AdminSideBar,
        AdminCategoriesComponent
    }
}
</script>