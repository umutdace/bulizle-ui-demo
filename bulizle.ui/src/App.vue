<template>
  <navbar-comp></navbar-comp>
  <router-view/>
</template>


<script>
import NavbarComp from "./components/layout/NavbarComp.vue"
export default{

  components:{
    NavbarComp
  }
}
</script>


