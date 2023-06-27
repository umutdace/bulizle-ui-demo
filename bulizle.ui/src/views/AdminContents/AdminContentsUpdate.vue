<template>
    <AdminSideBar></AdminSideBar>
    <AdminContentsUpdComp></AdminContentsUpdComp>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminContentsUpdComp from '@/components/admin/contents/AdminContentsUpdComp.vue';
export default {
    components:{
        AdminSideBar,
        AdminContentsUpdComp
    }
}
</script>