<template>
  <div class="container">
    <div class="timeline">
      <div class="step">
        <div class="icon-placeholder"></div>
        <h3>Save time</h3>
        <p>
          Discover the full spectrum of solutions for you and your business by
          seamlessly integrating our product TT ELD into your operations.
        </p>
      </div>

      <div class="step">
        <div class="icon-placeholder"></div>
        <h3>Increase profit</h3>
        <p>
          Maximize profits with our innovative electronic time logging and
          transportation management solution.
        </p>
      </div>

      <div class="step">
        <div class="icon-placeholder"></div>
        <h3>Improve performance</h3>
        <p>
          Empower your business with our comprehensive, all-in-one platform
          equipped with all the tools you need for success, conveniently housed
          in one location.
        </p>
      </div>
    </div>

    <p class="footer-text">
      Streamline compliance across your operations with ever-changing
      regulations. Keeping your teams compliant can be a challenge, but with TT
      ELD's intuitive tools and pre-built reports, managing compliance
      efficiently throughout your operations is effortless.
    </p>
  </div>
</template>

<script>
export default {
  name: "InfoSection",
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #e0e0e0;
  z-index: 1;
}

.step {
  position: relative;
  background-color: white;
  padding: 20px;
  z-index: 2;
  flex: 1;
}

.icon-placeholder {
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  background-color: #f0f0f0;
  border-radius: 50%;
}

h3 {
  margin: 10px 0;
  font-size: 18px;
  color: #333;
}

p {
  font-size: 14px;
  color: #666;
}

.footer-text {
  font-size: 14px;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
  }

  .timeline::before {
    display: none;
  }

  .step {
    margin-bottom: 20px;
  }

  .step:last-child {
    margin-bottom: 0;
  }
}
</style>
