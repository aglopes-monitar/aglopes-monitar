<template>
  <div id="app">
    <LogoBar></LogoBar>
    <MenuBar></MenuBar>
    <TextNavBar></TextNavBar>
    <router-view/>
    <ContactBar></ContactBar>
    <Rodape></Rodape>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import LogoBar from './components/LogoBar.vue'
import TextNavBar from './components/TextNavBar.vue'
import ContactBar from './components/ContactBar.vue'
import Rodape from './components/Rodape.vue'
export default {
  name: 'app',
  components:{
    LogoBar,
     MenuBar,
     TextNavBar,
     ContactBar,
     Rodape
   }
}
</script>
<style>
body{
  font-family: "Trebuchet MS";
	font-style: normal;
	font-variant: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
#app{
  width:100%;
  float:left;
}
.allcontent{
  float:left;
}
.page-content{
  width:80%;
  float:left;
  margin-left:10%;
  margin-right:10%;
}
</style>
