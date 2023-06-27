<template>
    <AdminSideBar></AdminSideBar>
    <AdminContentsAddComp></AdminContentsAddComp>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminContentsAddComp from '@/components/admin/contents/AdminContentsAddComp.vue';
export default {
    components:{
        AdminSideBar,
        AdminContentsAddComp
    }
}
</script>