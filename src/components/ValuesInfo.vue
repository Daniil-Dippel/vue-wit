<template>
  <div class="values__container center">
    <div class="left_values">
      <div class="left_values_ box1">
        <h1>Research First</h1>
        <p>
          At our company, we understand the value of time and are dedicated to
          its efficient use. We prioritize anticipation, planning, and swift
          action to ensure both our customers and ourselves achieve optimal
          efficiency.
        </p>
      </div>
      <div class="left_values_ box2">
        <h1>Customer focused services</h1>
        <p>
          Our unwavering commitment to customer care positions us as trusted
          partners in crafting transformative experiences for our clientele.
        </p>
      </div>
      <div class="left_values_ box3">
        <h1>Proactive strategy</h1>
        <p>
          We are actively pursuing our goals at TT ELD, striving to stay ahead
          of the curve and provide cutting-edge solutions in technology and
          electronic timekeeping.
        </p>
      </div>
    </div>
    <div class="right_values">
      <div class="right_values_title flex">
        <h1>CORE VALUES</h1>
        <div class="lenear_title"></div>
      </div>
      <div class="information_values flex">
        <div class="chislo_values">
          <h2>30+</h2>
          <p>Experienced Dispatcher</p>
        </div>
        <div class="chislo_values">
          <h2>50 000+</h2>
          <p>Loads Delivered</p>
        </div>
        <div class="chislo_values">
          <h2>100+</h2>
          <p>Semi-Trucks</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ValuesInfo",
};
</script>

<style>
.left_values_ h1 {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: #130f26;
}
.left_values_ p {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  max-width: 353px;
  color: #4e4f51;
}
.box2 h1 {
  text-align: right;
}
.box2 p {
  text-align: right;
  margin-left: auto;
}
.left_values {
  width: 700px;
}
.chislo_values {
  text-align: center;
}
.chislo_values h2 {
  font-family: Poppins;
  font-size: 36px;
  font-weight: 400;
  line-height: 56px;
  text-align: center;
  margin: 0;
  margin-top: 170px;
}
.chislo_values p {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  margin: 0;
}
.right_values_title h1 {
  font-family: Poppins;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-align: left;
  margin-left: 20px;
}
.right_values_title {
  align-items: center;
}
.lenear_title {
  height: 100px;
  width: 7px;
  background: #fff;
}
.right_values {
  margin-left: 100px;
  margin-top: 155px;
  background: #171416;
  color: #fff;
  padding-top: 100px;
  padding-left: 50px;
  padding-bottom: 238px;
  border-radius: 0px 0px 0px 100px;
  padding-right: 150px;
}
.information_values {
  justify-content: space-between;
}
</style>