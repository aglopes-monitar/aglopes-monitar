<template>
  <div class="page-content">
    <h1>Galeria</h1>
    <div class="Galeria-content">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <b-carousel-slide caption="XXI Congresso da Ordem dos Engenheiros, Engenharia e Transformação Digital, 23 e 24 de novembro de 2017"
                        img-src="/static/etd_1.jpg"
      ></b-carousel-slide>
      <b-carousel-slide caption="XXI Congresso da Ordem dos Engenheiros, Engenharia e Transformação Digital, 23 e 24 de novembro de 2017"
                        img-src="/static/etd_2.jpg"
      ></b-carousel-slide>
      <b-carousel-slide caption="Green Business Week 2017, 15 a 17 de março de 2017"
                        img-src="/static/gw_1.JPG"
      ></b-carousel-slide>
      <b-carousel-slide  caption="Green Business Week 2017, 15 a 17 de março de 2017"
                        img-src="/static/gw_2.JPG"
      ></b-carousel-slide>
      <b-carousel-slide caption="Green Business Week 2017, 15 a 17 de março de 2017"
                        img-src="/static/gw_3.JPG"
      ></b-carousel-slide>
      <b-carousel-slide caption="Green Business Week 2017, 15 a 17 de março de 2017"
                        img-src="/static/gw_4.JPG"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style>
.Galeria-content{
  width:60%;
  margin-left:20%;
  margin-right:20%;
  float:left;
  text-align: center;
  margin-bottom:20px;
}
</style>
