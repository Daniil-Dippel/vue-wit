<template>
  <div class="container">
    <div class="promo-banner center">
      <div class="text-content">
        <h2>Want to take your trucking business to the next level?</h2>
        <p>
          TT ELD is a large and experienced team that works with many companies
          at the same time. We look forward to seeing you among our customers.
        </p>
      </div>
      <h2 class="join-us">
        Join <br />us <br />
        >
      </h2>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "PromoBanner",
};
</script>
  
<style scoped>
.promo-banner {
  border: 3px solid #595756;
  border-radius: 30px;
  padding: 40px;
  padding: 0px 80px 20px 80px;
  margin-top: 220px;
  margin-bottom: 200px;
}

.text-content h2 {
  font-family: Poppins;
  font-size: 40px;
  font-weight: 400;
  line-height: 64px;
  text-align: left;
  color: #130f26;
}

.text-content p {
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: #4e4f51;
  max-width: 716px;
}

.join-us {
  font-family: Poppins;
  font-size: 64px;
  font-weight: 600;
  line-height: 59px;
  text-align: right;
  color: #df4924;
}

@media (min-width: 768px) {
  .promo-banner {
    flex-direction: row;
    text-align: left;
  }

  .text-content {
    flex: 5;
  }

  .join-us {
    flex: 1;
    align-self: flex-end;
  }
}
@media (max-width: 768px) {
  .promo-banner {
    padding: 20px;
  }
}
</style>
  