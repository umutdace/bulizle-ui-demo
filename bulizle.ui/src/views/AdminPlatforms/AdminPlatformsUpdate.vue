<template>
    <AdminSideBar></AdminSideBar>
    <AdminPlatformsUpdComp></AdminPlatformsUpdComp>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import AdminPlatformsUpdComp from '@/components/admin/platforms/AdminPlatformsUpdComp.vue';
export default {
    components:{
        AdminSideBar,
        AdminPlatformsUpdComp
    }
}
</script>