<template>
        <AdminSideBar></AdminSideBar>
        <NewsList></NewsList>
</template>

<script>
import AdminSideBar from '../../components/admin/AdminNavbarComponent.vue'
import NewsList from '../../components/admin/news/AdminNewsComponent.vue'
export default {
    components: {
        AdminSideBar,
        NewsList
    }
}
</script>