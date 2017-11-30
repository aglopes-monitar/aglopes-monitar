<template>
<div class="contact_bar bg-primary">
  <!--<ul class="listacontacto">
        <li>
          <img src="../textures/phone.png"/><span> -   232 400 500</span>
        </li>
        <li>
           <span>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp</span>
        </li>
        <li >
          <img src="../textures/envelope.png"/><span>&nbsp-   emaildamonitar@gmail.com</span>
        </li>
      </ul>-->
  <ul class="listacontacto">
    <li>
      <a href="tel:+351232400500">
        <icon name="phone-square"></icon><span> -   232 400 500</span>
      </a>
    </li>
    <li>
      <span>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp</span>
    </li>
    <li>
      <a href="mailto:test@test.com">
        <icon name="envelope"></icon><span>&nbsp-   emaildamonitar@gmail.com</span>
      </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {}
</script>

<style>
.contact_bar {
  width: 100%;
  float: left;
  text-align: center;
}

.listacontacto {
  padding: 0px;
  margin: 0px;
}
.listacontacto li {
  display: inline-block;
  padding: 0px;
  margin: 0px;
  color: white;
  font-size: 18px;
}
.listacontacto li a{
  color: white;
  font-size: 18px;
  text-decoration: none;
}
.fa-icon {
  width: auto;
  height: 1.2em;
  margin-bottom: -5px;
}

.listacontacto li a:hover {
  color: lightgreen;
}
</style>
