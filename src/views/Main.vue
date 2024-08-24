<script setup>
import Header from '../components/Header.vue'
import Row from '../components/Row.vue'
import Puncts from '../components/Puncts.vue'
import LevelUp from '../components/LevelUp.vue'
import MobileApp from '../components/MobileApp.vue'
import Footer from '../components/Footer.vue'

</script> 

<template>
   <Header />
    <div class="product-section">
      <div class="product-container">
        <div class="product-image">
          <img
            src="../assets/img/laptop.jpg"
            alt="Laptop displaying the product"
          />
        </div>
        <div class="product-content">
          <h1>Unlock the power of our product to accelerate your workflow</h1>
          <h2 class="cta-link">Unlock the power</h2>
          <p>
            Simplify management. Streamline compliance, optimize fleet
            operations, prioritize driver safety—all in one comprehensive
            platform.
          </p>
        </div>
        
      </div>
      <div class="product-features">
        <div class="feature">
          <h4>01</h4>
          <div class="line"></div>
          <p>
            Everything you need to manage your fleet - all in one place: Driver
            Safety, GPS Tracking, and ELD Compliance. The most user-friendly ELD
            device and application.
          </p>
        </div>
        <div class="feature">
          <h4>02</h4>
          <div class="line"></div>
          <p>
            TT ELD is an industry-leading electronic logging device. Our ELD
            compliance solutions provide users with a wide variety of
            comprehensive features.
          </p>
        </div>
        <div class="feature">
          <h4>03</h4>
          <div class="line"></div>
          <p>
            We recognize the significance of a holistic approach to every case,
            and tailor our strategies uniquely to each one.
          </p>
        </div>
      </div>
      <Row />
      <Puncts />
      <LevelUp />
      <MobileApp />
    </div>
    <Footer />
</template>

<style scoped>
.product-section {
  background-color: #fff;
  padding: 60px 20px;
  
}

.product-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  text-align: right;
}

.product-content {
  flex: 1;
  padding: 20px;
}

.product-content h1 {
  color: #DF4924;
  font-weight: 600;
  font-family: Poppins;
  font-size: 64px;
  margin: 0;
  text-align: right;
}

.product-content .cta-link {
  display: inline-block;
  font-family: Poppins;
  color: #DF4924;
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
  margin: 0;
}

.product-content p {
  color: #2E2E2E;
  text-align: right;
  font-size: 20px;
  font-weight: 500;
  font-family: Inter;
  margin: 0;
  text-align: right;
}

.product-image {
  flex: 1;
  padding: 20px;
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-features {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 40px auto 0;
  text-align: left;
}

.line{
  height: 1px;
  width: 100%;
  background: #E7E7E7;
}
.feature {
  flex: 1;
  padding: 20px;
}

.feature h4 {
  font-size: 17px;
  font-family: Inter;
  margin-bottom: 10px;
  font-weight: 400;
  color: #6C6C70;
  
}

.feature p {
  color: #6C6C70;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
}
@media (max-width: 768px) {
  .product-container {
    flex-direction: column;
  }
  .product-content p {
    text-align: center;
  }
  .product-content,
  .product-image {
    max-width: 100%;
    text-align: center;
  }

  .product-features {
    flex-direction: column;
  }

  .feature {
    text-align: center;
  }
}
</style>

