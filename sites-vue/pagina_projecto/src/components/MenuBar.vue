<template>
<div id="barra-menu">
  <b-navbar toggleable="md" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/" v-on:click="desactivateParents" exact>INICIO</b-nav-item>
        <b-nav-item-dropdown id="proj-drop" text="PROJECTO" left>
          <b-dropdown-item v-on:click="activateParentProj" to="/projecto/resumo" exact>RESUMO</b-dropdown-item>
          <b-dropdown-item v-on:click="activateParentProj" to="/projecto/objectivos" exact>OBJECTIVOS</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-on:click="desactivateParents" to="/equipa" exact>EQUIPA</b-nav-item>
        <b-nav-item-dropdown id="docs-drop" text="DOCUMENTOS" left>
          <b-dropdown-item v-on:click="activateParentDoc" to="/documentos/cientificos" exact>Artigos Científicos</b-dropdown-item>
          <b-dropdown-item v-on:click="activateParentDoc" to="/documentos/comunicações" exact>Comunicações</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-on:click="desactivateParents" to="/galeria">GALERIA</b-nav-item>
        <b-nav-item v-on:click="desactivateParents" to="/eventos" exact>EVENTOS</b-nav-item>
        <b-nav-item v-on:click="desactivateParents" to="/contactos">CONTACTOS</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    data() {
      return {
        activeParent: 0
      }
    },
    mounted: function () {
        var path = this.$route.path;
        if(path.indexOf("projecto")>=0){
          document.getElementById("proj-drop").style.backgroundColor = "#007bff";
        }else{
          document.getElementById("proj-drop").style.backgroundColor = "black";
        }
        if(path.indexOf("documentos")>=0){
          document.getElementById("docs-drop").style.backgroundColor = "#007bff";
        }else{
          document.getElementById("docs-drop").style.backgroundColor = "black";
        }
        return 0;
    },
    methods: {
     activateParentProj: function () {
      document.getElementById("proj-drop").style.backgroundColor = "#007bff";
      document.getElementById("docs-drop").style.backgroundColor = "black";
      return 0;
      },
     desactivateParentProj:function(){
       document.getElementById("proj-drop").style.backgroundColor = "black";
       return 0;
     },
     activateParentDoc: function () {
      document.getElementById("docs-drop").style.backgroundColor = "#007bff";
      document.getElementById("proj-drop").style.backgroundColor = "black";
      return 0;
      },
     desactivateParentDoc:function(){
       document.getElementById("docs-drop").style.backgroundColor = "black";
       return 0;
     },
     desactivateParents:function(){
       document.getElementById("proj-drop").style.backgroundColor = "black";
       document.getElementById("docs-drop").style.backgroundColor = "black";
       return 0;
     },
  }
}
</script>

<style>
.active{
  /*border-style: solid;
  border-width: 0px 0px 2px 0px;
  border-color: #3EA99F;
  */
  background-color: #007bff  !important;
  color:#f0f0f0 !important;
}
.navbar{
  margin:0px !important;
  padding:0px !important;
  width:100% !important;
  background-color: black !important;

}
.navbar-nav{
  margin:0px !important;
  padding:0px !important;
  margin-left:10% !important;
}
.nav-item{
  margin:0px !important;
  padding:0px !important;
  font-size:16px !important;
  color:#f0f0f0 !important;
}
.nav-link{
  margin:0px !important;
  padding:0px !important;
  padding:4px 12px 4px 12px !important;
  color:#f0f0f0 !important;
}
.nav-link:hover{
  color:red !important;
}

.dropdown{
  color:white;
  background: black;
  display: inline-block;
}
.dropdown .dropdown-menu
{
  margin-top:0px;
  background-color: black;
  border-radius: 0px;
  margin-bottom:0px;
}
.dropdown .dropdown-menu a
{
  color: white;
}
.dropdown .dropdown-menu a:hover
{
  color: red;
  background-color: black;
}
.dropdown .dropdown-menu a:focus{
  color:white;
  background-color: black;
}
</style>
