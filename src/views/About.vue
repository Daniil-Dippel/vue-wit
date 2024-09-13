<script setup>
import Header from "../components/Header.vue";
import Zigzag from "../components/Zigzag.vue";
import ValuesInfo from "../components/ValuesInfo.vue";
import TextNews from "../components/TextNews.vue";
import Footer from "../components/Footer.vue";
</script> 

<template>
  <Header />
  <div class="product-section">
    <div class="product-container">
      <div class="product-image">
        <h1>ABOUT <span>US</span></h1>
        <p>
          We recognize the significance of a holistic approach to every case and
          approach each one uniquely.
        </p>
      </div>
      <div class="product-content">
        <h1>
          WIT LOG <br />
          -         <br />
          Your Reliable <br />Logistics <br />Partner
        </h1>
      </div>
    </div>
    <Zigzag />
    <ValuesInfo />
    <TextNews />
  </div>
  <Footer />
</template>

<style>
.product-section {
  background-color: #fff;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 130px;
}

.product-content {
  flex: 1;
  padding: 20px;
}

.product-content h1 {
  max-width: 1030px;
  color: #df4924;
  font-family: Inter;
  font-size: 128px;
  font-weight: 600;
  line-height: 123px;
  text-align: right;
}

.product-image {
  flex: 0.5;
  padding: 20px;
}

.product-image h1 {
  font-family: Poppins;
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-align: left;
  color: #130f26;
}
.product-image span {
  color: #df4924;
}
.product-image p {
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #6c6c70;
}
h1 {
  margin: 0;
}
</style>