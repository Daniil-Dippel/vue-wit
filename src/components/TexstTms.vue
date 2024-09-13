<template>
  <div class="text__container">
    <div class="text__tms center">
      <h1 class="text__title__tms">ADVANCED LOAD <br>BOARD</h1>
      <div class="tms__text__right">
        <div class="text__box__tms">
          <p class="chislo__tms">01</p>
          <div class="linear__tms"></div>
          <p class="information__tms">
            Effortlessly manage driver data, schedules, finances by centralizing
            them in a streamlined hub for seamless organization.
          </p>
        </div>
        <div class="text__box__tms">
          <p class="chislo__tms">02</p>
          <div class="linear__tms"></div>
          <p class="information__tms">
            Unlock the power of real-time asset tracking and location insights
            to elevate dispatch decision-making and supercharge operational
            efficiency, empowering your team to make smarter choices.
          </p>
        </div>
        <div class="text__box__tms">
          <p class="chislo__tms">03</p>
          <div class="linear__tms"></div>
          <p class="information__tms">
            Efficiently assign orders to drivers or vehicles and track their
            deliveries in real-time using our Dispatch Board feature.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text__tms{
  align-items: center;
  margin-top: 200px;
}
.text__container {
  max-width: 1450px;
  margin: 0 auto;
}
.text__title__tms {
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 76px;
  text-align: left;
  color: #130f26;
}
.chislo__tms {
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #130f26;
  margin: 0;
}
.linear__tms {
  width: 1120px;
  height: 1px;
  background: #e7e7e7;
}
.information__tms {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #130f26;
  max-width: 1121px;
}
@media (max-width: 1115px) {
  .text__tms{
    flex-wrap: wrap;
  }
  @media (max-width: 900px) {
    .linear__tms{
      width: 600px;
    }
  }
}
</style>