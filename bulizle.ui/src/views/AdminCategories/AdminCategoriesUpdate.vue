<template>
    <AdminSideBar></AdminSideBar>
    <AdminCategoresUppComp></AdminCategoresUppComp>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminCategoresUppComp from '@/components/admin/categories/AdminCategoresUppComp.vue';
export default {
    components:{
        AdminSideBar,
        AdminCategoresUppComp
    }
}
</script>