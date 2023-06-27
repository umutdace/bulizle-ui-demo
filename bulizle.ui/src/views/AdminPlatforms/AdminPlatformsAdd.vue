<template>
    <AdminSideBar></AdminSideBar>
    <AdminPlatformsAddComp></AdminPlatformsAddComp>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminPlatformsAddComp from '@/components/admin/platforms/AdminPlatformsAddComp.vue';
export default {
    components:{
        AdminSideBar,
        AdminPlatformsAddComp
    }
}
</script>