<template>
<div class="contactscontent">
  <div class="contactstitle">
    <h1>Contactos</h1>
  </div>
  <div class="contactinfo">
			<strong>
			Monitar, Lda – Engenharia do Ambiente<br>
			Empreendimento Bela Vista<br>
			Lote 1, R/C DP, Loja 2 Repeses<br>
			3500-227 Viseu <br><br>
			</strong>
      <p><b>T/F:</b> 232 092 031</p>
      <p><b>E:</b> <a href="mailto:geral@monitar.pt">geral@monitar.pt</a></p>
			<p><b>E:</b> <a href="mailto:geral.monitar@gmail.com">geral.monitar@gmail.com</a></p>
			<br />
  </div>
  <div class="mapa">
    <gmap-map :center="center" :zoom="11" style="width:100%; height: 100%">
      <gmap-marker :key="index" v-for="(m, index) in markers" :title="m.title" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
    </gmap-map>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      verMapa: 0,
      center: {
        lat: 40.6378779,
        lng: -7.9283084
      },
      markers: [{
        position: {
          lat: 40.6378779,
          lng: -7.9283084
        },
        title:'MONITAR'
      }]
    }
  }
}
</script>
<style>
.contactscontent {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  float: left;
  margin-bottom: 10px;
}
.contactstitle{
  width:100%;
  float:left;
}
.contactinfo{
  width:100%;
  float:left;
}
.mapa{
  width:100%;
  height:300px;
  float:left;
  visibility: false;
}
</style>
