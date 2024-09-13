<script setup>
import Header from "../components/Header.vue";
import Slaider from "../components/Slaider.vue";
import TexstTms from "../components/TexstTms.vue";
import PlatformKey from "../components/PlatformKey.vue";
import MobileTms from "../components/MobileTms.vue";
import FAQ from "../components/FAQ.vue";
import PromoBanner from "../components/PromoBanner.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Header />
  <div class="product-section">
    <div class="product__containers flex">
      <div class="product__imgs">
        <img src="../assets/img/tms.jpg" alt="" />
      </div>
      <div class="product__contents">
        <h1>SIMPLIFY OPERATIONS WITH OUR PRODUCTS</h1>
        <p>
          We offer you a new generation of task management system. Plan, manage
          & track all your tasks in one flexible tool.
        </p>
        <button class="product__btn">
          START NOW
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2.625V5.54167M14 21V25.6667M6.70833 14H2.625M24.7917 14H23.0417M21.5333 21.5333L20.7083 20.7083M21.7749 6.31842L20.125 7.96833M5.74183 22.2582L9.04167 18.9583M5.98346 6.07679L8.45833 8.55167"
              stroke="#130F26"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <Slaider />
    <TexstTms />
    <PlatformKey />
    <MobileTms />
    <FAQ />
    <PromoBanner />
  </div>
  <Footer />
</template>


<style>
.product-section {
  background-color: #fff;
}
.product__containers {
  background: #df4924;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  padding: 0;
  width: 100%;
  max-width: 1920px;
  box-sizing: border-box;
  margin: 0 auto;
}
.product__imgs img {
  border-top-left-radius: 80px;
}
.product__contents {
  max-width: 36.5%;
}
.product__imgs img {
  width: 100%;
  height: 100%;
  max-width: 1253px;
}
.product__contents h1 {
  font-family: Inter;
  font-size: 96px;
  font-weight: 600;
  line-height: 123px;
  text-align: right;
  color: #130f26;
  max-width: 700px;
  margin: 0;
  margin-top: 20px;
  margin-right: 20px;
}
.product__contents p {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
  color: #130f26;
  margin-left: auto;
  max-width: 460px;
  margin-bottom: 70px;
  margin-right: 20px;
}
.product__btn {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #171416;
  border-radius: 15px;
  border: none;
  margin: 0;
  padding: 0;
  padding: 15px 25px 10px 25px;
  display: flex;
  cursor: pointer;
  margin-left: auto;
  margin-right: 60px;
}
.product__btn svg {
  padding-left: 20px;
}
@media (max-width: 1320px) {
  .product__contents h1 {
    font-size: 74px;
  }
  @media (max-width: 1275px) {
    .product__contents h1 {
      font-size: 56px;
    }
    @media (max-width: 874px) {
      .product__imgs img {
        max-width: 100%;
      }
      .product__containers {
        flex-wrap: wrap;
      }
      .product__contents {
        max-width: 100%;
      }
      .product__contents h1 {
        text-align: center;
      }
      .product__imgs img {
        border-top-right-radius: 80px;
      }
    }
  }
}
</style>