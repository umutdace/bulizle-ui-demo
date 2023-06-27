<template>
    <AdminSideBar></AdminSideBar>
    <AdminPlatformsComponent></AdminPlatformsComponent>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminPlatformsComponent from '@/components/admin/platforms/AdminPlatformsComponent.vue';
export default {
    components:{
        AdminSideBar,
        AdminPlatformsComponent
    }
}
</script>