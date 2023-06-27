<template>
  <div class="home">
    <SliderComponent></SliderComponent>
    <CardComponenet></CardComponenet>
    <SeriesContentComponent></SeriesContentComponent>
    <MovieContentComponent></MovieContentComponent>
  </div>
</template>

<script>

import CardComponenet from '@/components/CardComponenet.vue';
import SeriesContentComponent from '@/components/SeriesContentComponent.vue';
import MovieContentComponent from '@/components/MovieContentComponent.vue';
import SliderComponent from '@/components/SliderComponent.vue';
export default {
  name: 'HomeView',
  components: {
    SliderComponent,
    CardComponenet,
    MovieContentComponent,
    SeriesContentComponent
  },
  data(){
    return {
      user: null
    }
  },
  created(){
    var session = sessionStorage.getItem("session");
    this.Authentication(session);
  }
}
</script>
