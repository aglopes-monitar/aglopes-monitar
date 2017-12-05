// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import Documentos from './Documentos.vue';
import Equipa from './Equipa.vue';
import Eventos from './Eventos.vue';
import Galeria from './Galeria.vue';
import Home from './Home.vue';
import Contactos from './Contactos.vue';
import Projecto from './Projecto.vue';
import Resumo from './Resumo.vue';
import Objectivos from './Objectivos.vue';
import Comunicacoes from './Comunicacoes.vue';
import Cientificos from './Cientificos.vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.component('icon', Icon);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
});
const routes = [
  {path:'/',name:"Home",component:Home},
  {path:'/projecto',redirect:'/projecto/resumo'},
  {path:'/projecto/resumo',name:"Resumo",component:Resumo},
  {path:'/projecto/objectivos',name:"Objectivos",component:Objectivos},
  {path:'/equipa',name:"Equipa",component:Equipa},
  {path:'/documentos',redirect:"/documentos/cientificos"},
  {path:'/documentos/cientificos',name:"Cientificos",component:Cientificos},
  {path:'/documentos/comunicações',name:"Comunicacoes",component:Comunicacoes},
  {path:'/galeria',name:"Galeria",component:Galeria},
  {path:'/eventos',name:"Eventos",component:Eventos},
  {path:'/contactos',name:"Contactos",component:Contactos}
];

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass: 'active',
  linkExactActiveClass:'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
     App,
     Icon
    }
})
