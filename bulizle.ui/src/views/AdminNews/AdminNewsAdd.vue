<template>
    <AdminSideBar></AdminSideBar>
    <AdminNewsAddComp></AdminNewsAddComp>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminNewsAddComp from '@/components/admin/news/AdminNewsAddComp.vue';
export default {
    components:{
        AdminSideBar,
        AdminNewsAddComp
    }
}
</script>