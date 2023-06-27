<template>
    <AdminSideBar></AdminSideBar>
    <AdminCategoresAddComp></AdminCategoresAddComp>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminCategoresAddComp from '@/components/admin/categories/AdminCategoresAddComp.vue';
export default {
    components:{
        AdminSideBar,
        AdminCategoresAddComp
    }
}
</script>