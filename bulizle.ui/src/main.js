import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert from "vue-sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css"
import "sweetalert2/dist/sweetalert2.min.css";
import "font-awesome/css/font-awesome.min.css"
import "bootstrap"

createApp(App).use(store).use(router).use(VueSweetalert).mixin({
  data() {
    return {
      baseUrl: 'https://localhost:7145/',
      authenticationValue: ''     
    }
  },
  methods: {
    ShowSuccess: function (title, msg) {
      this.$swal({
        icon: "success",
        title: title,
        text: msg,
      });
    },
    ShowError: function (title, msg) {
      this.$swal({
        icon: "error",
        title: title,
        text: msg,
      });
    },
    ShowSuccessWithLocation: function (title, msg, location) {
      this.$swal({
        icon: "success",
        title: title,
        text: msg,
        timer: 4500,
      }).then(function () {
        window.location.href = location
      });
      
    },
    ShowMoreInfo: function (name, summary, fragman, link) {
      this.$swal({
        title: name,
        icon: 'info',
        html:
          '<iframe width="450" height="315" src="'+fragman+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <p>'+summary+'</p>',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<a href="'+link+'" target="_blank" style="color:white;"<i class="fa fa-thumbs-up"></i> Şimdi İzle!</a>',
        confirmButtonAriaLabel: 'Thumbs up, great!',
      })
    },
    Authentication : async function(session) {
      fetch(this.baseUrl + "api/Authentication?session=" + session, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok)
          return response.json();
        else
          window.location.href = '/'
      }).then((data) => {
        this.authenticationValue = data;
      }).catch(() => {
        window.location.href = '/'
      })
    },
    clearAuthentication(){
      this.authenticationValue = '';
    }
  }
}).mount('#app')
