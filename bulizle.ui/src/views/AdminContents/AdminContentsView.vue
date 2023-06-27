<template>
    <AdminSideBar></AdminSideBar>
    <AdminContentsComponent></AdminContentsComponent>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminContentsComponent from '@/components/admin/contents/AdminContentsComponent.vue';
export default {
    components:{
        AdminSideBar,
        AdminContentsComponent
    }
}
</script>