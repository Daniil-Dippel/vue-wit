<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-column">
        <h4>Legal Information</h4>
        <ul>
          <li>Terms and Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Refunds Policy</li>
          <li>Product Warranty</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li>TMS</li>
          <li>About us</li>
          <li>Store</li>
          <li>Developers</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Help</h4>
        <ul>
          <li>Contact</li>
          <li>Guides</li>
          <li>Download</li>
          <li>Developers</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Address</h4>
        <p>3864 CENTER RD STE - A12 BRUNSWICK, OH 44212</p>
        <p>+1 (833) 888 - 83 - 53</p>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #bfbfbf;
  padding: 20px 0;
  font-size: 14px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-column {
  flex: 1;
  font-family: Inter;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 400;
}

.footer-column h4 {
  margin-bottom: 15px;
  color: #DF4924;
  font-size: 20px;
  font-family: Poppins;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;

}

.footer-column ul li  {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.footer-column ul li:hover {
  text-decoration: underline;
}

.footer-column p {
  color: #fff;
  margin: 5px 0;
}
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-column {
    max-width: 100%;
    text-align: center;
  }
}

</style>