<template>
<div class="w-100 allcontent bg-primary">
  <b-container fluid class="logocontainer">
    <b-row class="logorow">
      <b-col class="logocols" cols="6" sm="5" md="4" lg="3" xl="3">
        <div class="w-100 imglogodiv">
          <router-link to="/">
            <img class="img-responsive" src="../textures/logo.png">
          </router-link>
        </div>
      </b-col>
      <b-col class="logocols" cols="6" sm="7" md="8" lg="9" xl="9">
        <div class="divsociallogo">
          <ul>
            <li>
              <a target="_blank" v-bind:href="facebook">
                  <img class="img-responsive" src="../textures/fb.png">
              </a>
            </li>
            <li>
                <a target="_blank" v-bind:href="linkedin">
                <img class="img-responsive" src="../textures/lk.png">
              </a>
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row class="logorow">
      <b-col class="logocols">
        <div class="logomsg">
          <span>Monitorizar o ambiente envolvente!</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
export default {
  data() {
    return {
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://pt.linkedin.com/'
    }
  }
}
</script>

<style scoped>
.logocontainer {
  margin: 0px;
  padding: 0px;
  float: left;
}
.logorow{
  width:80%;
  margin:0px;
  padding:0px;
  margin-left:10%;
  margin-right:10%;
  float:left;
}
.logocols{
  margin:0px;
  padding:0px;
}
.imglogodiv {
  width: 100%;
  float: left;
}
.imglogodiv a img {
  float: left;
}
.logomsg span {
  float: left;
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  margin-bottom:10px;
  color:#f0f0f0;
  margin-left:10px;
}

@media only screen and (max-width: 576px) {
  .imglogodiv a img {
    width:150px;
    height:auto;
    float:left;
  }
  .logomsg span {
    font-size: 14px;
  }
  .divsociallogo ul li a img{
    width:20px;
    height:auto;
  }
}
.divsociallogo{
  width:100%;
  text-align: right;
}
.divsociallogo ul{
  margin-top:10px;
  list-style: none;
}
.divsociallogo ul li{
  display: inline-block;
}

</style>
