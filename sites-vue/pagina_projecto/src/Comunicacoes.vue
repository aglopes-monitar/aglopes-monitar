<template>
  <div class="page-content">
    <h1>Documentos - Comunicações</h1>
    <ul class="comunicacoes-list">
      <li>
        Pinho P., Lopes S., Rodrigues G. and Colaço P. (2017). Ubiquitous Environmental Monitoring as Decision Tool - MONITAR SENSE:
        An Environmental Tool. 6th International Conference on Smart Cities and Green ICT Systems
        <br />
        <a target="_blank" v-bind:href="mylink">Link para o Arquivo</a>
      </li>
      <li>
        Lopes S., Pinho P., (2017). Monitar Sense: Uma Ferramenta de Apoio à Decisão em Smart Cities.
        In Proceedings of the XXI Congresso da Ordem dos Engenheiros, "Engenharia e Transformação Digital”
        <br />
        <a target="_blank" v-bind:href="mylink">Link para o Arquivo</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mylink: 'https://www.abola.pt/'
    }
  }
}
</script>
<style>
.comunicacoes-list{
font-size: 30px;
list-style:square;
}
.comunicacoes-list li{
  font-size: 30px;
  text-align: justify;
}
</style>
