<template>
  <div class="rodape">
    <b-container fluid class="rodape-container">
      <b-row class="logos-row">
        <b-col class="first-logo">
          <img class="img-responsive" src="../textures/ue.png">
        </b-col>
        <b-col class="second-logo">
          <img class="img-responsive" src="../textures/pt2020.png">
        </b-col>
        <b-col class="third-logo">
          <img class="img-responsive" src="../textures/c2020.png">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped>
.rodape{
  width:100%;
  float:left;
}
.rodape-container{
  width:80%;
  margin:0px;
  padding:0px;
  margin-left:10%;
  margin-right:10%;
}
.first-logo img{
  float:right;
}
.second-logo{
    text-align:center;
}
.third-logo img{
  float:left;
}
.logos-row{
  width:100%;
  height:auto;
}
@media screen and (max-width: 992px) and (min-width: 768px) {
  .logos-row img{
    width:150px;
    height:auto;
  }
}
@media screen and (max-width: 768px) and (min-width: 576px) {
  .logos-row img{
    width:100px;
    height:auto;
  }
}
@media screen and (max-width: 576px) and (min-width: 340px) {
  .logos-row img{
    width:50px;
    height:auto;
  }
}
@media only screen and (max-width: 340px) {
  .logos-row img{
    width: 30px;
    height:auto;
  }
}
</style>
