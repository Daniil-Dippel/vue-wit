<template>
  <div class="level-up-container">
    <div class="level-up-header">
      <h1>Level up with <br> WIT</h1>
      <p>
        Keep up with demand - dispatch and track your fleet with real-time GPS,
        leveraging weather and traffic data to exceed your customers'
        expectations.
      </p>
    </div>

    <div class="level-up-steps">
      <!-- Шаг 1 -->
      <div class="step step-1">
        <div class="step-number">1</div>
        <p class="step_p1">
          Seamlessly stay compliant with flexible rulesets that automatically
          update based on your driver’s real-time GPS location.
        </p>
      </div>

      <!-- SVG линия -->
      <svg
        width="778"
        height="284"
        viewBox="0 0 778 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="zigzag-line"
      >
        <path
          d="M25 259L236.913 142H544.963L753 25"
          stroke="#2E2E2E"
          stroke-width="40"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- Шаг 2 -->
      <div class="step step-2">
        <div class="step-number">2</div>
        <p class="step_p2">
          Automate the most time-consuming tasks, such as annotating yard moves
          and managing unassigned HOS, with geofencing and AI-powered
          annotations.
        </p>
      </div>

      <!-- Шаг 3 -->
      <div class="step step-3">
        <div class="step-number">3</div>
        <p class="step_p3">
          Easily connect your compliance data to existing systems to ensure
          reporting accuracy, maximize administrative efficiency, and make
          smarter, informed decisions.
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "LevelUp",
};
</script>
  
<style scoped>
.level-up-container {
  width: 100%;
  max-width: 1370px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.level-up-header {
  display: flex;
  margin-top: 50px;
  margin-bottom: 180px;
  justify-content: space-between;
}
.level-up-header h1 {
  font-size: 48px;
  font-family: Poppins;
  color: #130F26;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: left;
}

.level-up-header p {
  font-size: 16px;
  font-weight: 400;
  font-family: Inter;
  color: #6C6C70;
  text-align: right;
  max-width: 685px;
}

.level-up-steps {
  position: relative;
  margin-top: 40px;
  margin-bottom: 200px;
}

.step {
  position: absolute;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  text-align: left;
}
.step p {
  position: absolute;
  max-width: 415px;
  font-family: Inter;
  font-size: 16px;
  color: #6c6c70;
  font-weight: 400;
}
.step_p1 {
  left: 30%;
}
.step_p2 {
  left: 35%;
  bottom: 80%;
}
.step_p3 {
  left: 40%;
  bottom: 80%;
}
.step-number {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 900;
  margin: 0 auto 10px;
  font-family: Inter;
}
.step-number:hover{
    color: #DF4924;
}

/* Позиционирование шагов поверх SVG */
.step-1 {
  top: 74%;
  right: 31%;
}

.step-2 {
  top: 39%;
  left: 50%;
  transform: translateX(-50%);
}

.step-3 {
  top: 4%;
  left: 31.1%;
}

/* Стили для SVG */
.zigzag-line {
  width: 70%;
  height: auto;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .level-up-header h1 {
    font-size: 2em;
  }

  .level-up-header p {
    font-size: 1em;
  }

  /* Адаптивное позиционирование шагов для мобильных устройств */
}
</style>
    