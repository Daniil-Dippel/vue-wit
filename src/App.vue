<script setup>
import { RouterView } from 'vue-router'


</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.fon {
  background-image: url("./assets/img/fon.jpg");
  background-size: cover;
  padding-top: 50px;
  padding-bottom: 50px;
}
body{
    padding: 0;
    margin: 0;
    background-color: #171416;
}
body::-webkit-scrollbar {
    display: none;
}
.product-section{
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
}

</style>