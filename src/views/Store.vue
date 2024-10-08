<script setup>
import Header from "../components/Header.vue";

import Footer from "../components/Footer.vue";
</script>
<template>
  <Header />
  <section>
    <div class="wrapper">
      <div class="store-container">
        <div class="store-container__title">
          <h1>PRODUCTS DESIGN JUST FOR YOU</h1>
          <p>
            Our company offers 24/7 customer service. Now, acquiring the
            equipment you need is effortless through our store.
          </p>
        </div>

        <div class="grid-container grid-store">
          <div class="item item-1">
            <img src="../assets/img/IMAGE.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>

            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-2">
            <img src="../assets/img/IMAGE.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-3">
            <img class="item-3__image" src="../assets/img/IMAGE-2.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-4">
            <img src="../assets/img/IMAGE.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-5">
            <img src="../assets/img/IMAGE.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-6">
            <img src="../assets/img/IMAGE.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-7">
            <img src="../assets/img/IMAGE.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-8">
            <img class="item-3__image" src="../assets/img/IMAGE-2.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-9">
            <img src="../assets/img/IMAGE.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
          <div class="item item-10">
            <img src="../assets/img/IMAGE.png" alt="" />
            <p class="item__descrip">PT30 - OBD II 16 Pin cable</p>

            <p class="item__price">$29.99 USD</p>
            <img class="svg-plus" src="../assets/img/+.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
}
.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}
.store-container {
  border-radius: 80px 80px 0 0;
  background: #fff;
}
.store-container__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
}
.store-container__title h1 {
  font-weight: 600;
  font-size: 48px;
  line-height: 150%;
  color: #130f26;
}
.store-container__title p {
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  text-align: right;
  color: #4e4f51;
  width: 26%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 равных столбца */
  grid-template-rows: repeat(3, 1fr); /* 3 строки с фиксированной высотой */

  width: 100%;
  height: auto;
  padding-top: 50px;
}

.item {
  border: 3px solid #4e4f51;
  /* background-color: #add8e6; */
  /* border: 1px solid #ddd; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10px;
    font-size: 14px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}
.item-3 {
  grid-column: 3 / 5;
}
.item-8 {
  grid-column: 1 / 3;
}

.item__descrip {
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: #130f26;
}
.inbox-text {
  display: flex;
}
.item__price {
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  text-align: center;
  color: #130f26;
}
.svg-plus {
  align-self: flex-end;
}
/* 
.item-3__image{
    width: 584px;
height: 336px;
} */

@media screen and (max-width: 1432px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .item-3 {
    grid-column: 1 / 3;
  }
  .item-8 {
    grid-column: 1 / 3;
  }
}

@media screen and (max-width: 1128px) {
  .store-container__title {
    justify-content: center;
    flex-wrap: wrap;
  }
  .store-container__title p {
    text-align: center;
    width: 50%;
  }
}
@media screen and (max-width: 844px) {
  .store-container__title h1 {
    font-size: 35px;
    text-align: center;
  }
}
@media screen and (max-width: 628px) {
  .store-container__title p {
    width: 70%;
  }
}

/*- store-product---------*/

.conatienr-log {
  display: flex;
  gap: 17px;
  align-items: center;
}

.conatienr-log h2 {
  font-weight: 400;
  font-size: 32px;
  line-height: 75%;
  text-align: center;
  color: #15171a;
}
.store-product__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
}
.nav-store__list {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.nav-store__link {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #171416;
}
.sing-container__link {
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  color: #df4924;
}
.breadcrumb {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  /* text-align: center; */
  color: #130f26;
}
.store-device__title {
  font-weight: 600;
  font-size: 72px;
  line-height: 33%;
  /* text-align: center; */
  color: #000;
}
.store-device__desc {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #000;
  width: 60%;
}
.store-device {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.store-device__red {
  border: 3px solid #df4924;
  border-radius: 20px;
  width: 60%;
  padding: 40px;
  margin-bottom: 24px;
}
.red-list {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #000;
}
.store-device__red h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  /* text-align: center; */
  color: #000;
}
.list-tire {
  list-style-type: "– ";
}
.red-btns__empty {
  border: 1px solid #000;
  border-radius: 10px;
  width: 90px;
  height: 20px;
  display: flex;
  justify-content: center;
}
.red-btns__full {
  border-radius: 10px;
  width: 90px;
  height: 20px;
  background: #df4924;
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  text-align: center;
  color: #000;
  align-items: center;
}
.red-btns {
  display: flex;
  gap: 30px;
  padding-top: 10px;
}
/*       */
.card-shop {
  display: flex;
  justify-content: space-between;
}
.card-shop__item p {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #130f26;
}
.card-shop__item {
  display: flex;
  gap: 40px;
  align-items: center;
}
.card-prices {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.card-cena,
.card-total {
  display: flex;
  align-items: center;
  gap: 20px;
}
.card-total {
  padding-top: 10px;
}
.counter-btn {
  border: 0;
  background: transparent;
  font-weight: 400;
  font-size: 32px;
  line-height: 75%;
  text-align: center;
  color: #130f26;
}
.numbers {
  font-weight: 400;
  font-size: 32px;
  line-height: 75%;
  text-align: center;
  color: #130f26;
}
.card-main {
  font-weight: 600;
  font-size: 36px;
  line-height: 67%;
  /* text-align: center; */
  color: #000;
}

/**********/
.img-pay {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
.section-line {
  border-bottom: 2px solid #595756;
}
.form-container {
  display: flex;
  gap: 70px;
  padding-top: 50px;
  justify-content: center;
  align-items: start;
}
.container-input {
  border: 1px solid #595756;
  border-radius: 20px;
  padding: 20px 30px;
}
.container-input__input {
  border: 1px solid #595756;
  border-radius: 10px;
  width: 407px;
  height: 50px;
}

.container-second__input {
  border: 1px solid #595756;
  border-radius: 20px;
  padding: 20px 30px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.content-radio__dysp {
  display: flex;
  align-items: flex-start;
  gap: 5px;
  padding-top: 10px;
}
.content-radio__text p {
  color: #50555c;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 457%; */
}
.content-radio__text label {
  font-weight: 400;
  font-size: 14px;
  /* line-height: 457%; */
  color: #130f26;
}
.accent-radio {
  accent-color: #df4924;
  border: #df4924;
}
.content-radio {
  border: 1px solid #595756;
  border-radius: 10px;
  padding: 20px 20px;
  /* margin-top: 20px;
margin-bottom: 30px; */
}
.label-text {
  font-weight: 400;
  font-size: 20px;

  color: #130f26;
}
.input-naming {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.input-naming__item {
  border: 1px solid #595756;
  border-radius: 10px;
  /* width: 407px; */
  height: 50px;
}
.input-naming__item::placeholder,
.input-adress::placeholder {
  padding-left: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 457%;
  color: #130f26;
}
.input-adress {
  width: 100%;
  border: 1px solid #595756;
  border-radius: 10px;
  /* width: 407px; */
  height: 50px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 457%;
  color: #130f26;
}
.input-phone {
  margin-top: 14px;
  width: 100%;
}
.order-summary {
  border: 1px solid #595756;
  border-radius: 20px;
  padding: 20px;
  width: 30%;
}
.order-summary h2 {
  font-weight: 500;
  font-size: 24px;
  line-height: 267%;
  color: #130f26;
}
.order-summary h3 {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #130f26;
}
.order-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remove-link {
  font-weight: 400;
  font-size: 20px;
  /* line-height: 320%; */
  color: #6d6d6d;
}
.order-content__price {
  display: flex;
  flex-direction: column;
}
.order-content__price p {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #130f26;
  align-self: flex-end;
}
.order-content__price a {
  align-self: flex-end;
}
.product-total {
  display: flex;
  justify-content: space-between;
}
.product-total p {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #130f26;
}

.product-naming {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
}
.product-titles {
  font-weight: 500;
  font-size: 24px;
  /* line-height: 267%; */
  color: #6d6d6d;
}
.container-input__link {
  background: #df4924;
  border-radius: 10px;
  width: 170px;
  height: 51px;
  font-weight: 400;
  font-size: 16px;
  line-height: 94%;
  text-align: center;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.form-last {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1284px) {
  .form-container {
    flex-wrap: wrap;
  }
  .order-summary {
    width: 60%;
  }
}
</style>