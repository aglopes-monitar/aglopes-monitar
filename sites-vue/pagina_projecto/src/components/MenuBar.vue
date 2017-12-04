<template>
<div>
  <b-navbar toggleable="sm" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav is-nav>
        <b-nav-item to="/" exact>INICIO</b-nav-item>
        <b-nav-item to="/projecto">PROJECTO</b-nav-item>
        <b-nav-item to="/equipa" exact>EQUIPA</b-nav-item>
        <b-nav-item to="/documentos" exact>DOCUMENTOS</b-nav-item>
        <b-nav-item to="/galeria">GALERIA</b-nav-item>
        <b-nav-item to="/eventos" exact>EVENTOS</b-nav-item>
        <b-nav-item to="/contactos">CONTACTOS</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style scoped >
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
  color:#007bff !important;
}
.active:hover{
  color:black !important;
}
@media screen and (max-width: 768px) and (min-width: 576px) {
  .nav-item{
    margin:0px !important;
    padding:0px !important;
    font-size:14px !important;
    color:#f0f0f0 !important;
  }
  .nav-link{
    margin:0px !important;
    padding:0px !important;
    padding:4px 8px 4px 8px !important;
    color:#f0f0f0 !important;
  }
}
@media only screen and (max-width: 576px) {
  .nav-item{
    margin:0px !important;
    padding:0px !important;
    font-size:10px !important;
    color:#f0f0f0 !important;
  }
  .nav-link{
    margin:0px !important;
    padding:0px !important;
    padding:4px 4px 4px 4px !important;
    color:#f0f0f0 !important;
  }
  .navbar-toggler{
    width:30px;
    height:30px;
    margin:0px !important;
    padding:0px !important;
  }
  .navbar-toggler-icon{
    width:20px;
    height:20px;
    margin:0px !important;
    padding:0px !important;
  }
}

</style>
