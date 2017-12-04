<template>
<div class="contact-bar bg-primary">
  <ul class="lista-contacto">
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

<style scoped>
.contact-bar {
  width: 100%;
  float: left;
  text-align: center;
}

.lista-contacto {
  padding: 0px;
  margin: 0px;
}
.lista-contacto li {
  display: inline-block;
  padding: 0px;
  margin: 0px;
  color: white;
  font-size: 18px;
}
.lista-contacto li a{
  color: white;
  font-size: 18px;
  text-decoration: none;
}
.fa-icon {
  width: auto;
  height: 1.2em;
  margin-bottom: -5px;
}

.lista-contacto li a:hover {
  color: lightgreen;
}
@media screen and (max-width: 992px) and (min-width: 768px) {
  .lista-contacto li {
    font-size: 16px;
  }
  .lista-contacto li a{
    font-size: 16px;
  }
  .fa-icon {
    width: auto;
    height: 1.2em;
    margin-bottom: -4px;
  }
}
@media screen and (max-width: 768px) and (min-width: 576px) {
  .lista-contacto li {
    font-size: 14px;
  }
  .lista-contacto li a{
    font-size: 14px;
  }
  .fa-icon {
    width: auto;
    height: 1.2em;
    margin-bottom: -4px;
  }
}
@media screen and (max-width: 576px) and (min-width: 340px) {
  .lista-contacto li {
    font-size: 12px;
  }
  .lista-contacto li a{
    font-size: 12px;
  }
  .fa-icon {
    width: auto;
    height: 1.2em;
    margin-bottom: -3px;
  }
}
@media only screen and (max-width: 340px) {
  .lista-contacto li {
    font-size: 7px;
  }
  .lista-contacto li a{
    font-size: 7px;
  }
  .fa-icon {
    width: auto;
    height: 1.2em;
    margin-bottom: -2px;
  }
}

</style>
