<template>
    <AdminSideBar></AdminSideBar>
    <AdminNewsUppComp></AdminNewsUppComp>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminNewsUppComp from '@/components/admin/news/AdminNewsUppComp.vue';
export default {
    components:{
        AdminSideBar,
        AdminNewsUppComp,
    }
}
</script>