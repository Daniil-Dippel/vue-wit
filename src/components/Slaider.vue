<template>
  <div class="container__sleder">
    <h1 class="title__slider">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 2.8125V5.9375M15 22.5V27.5M7.1875 15H2.8125M26.5625 15H24.6875M23.0714 23.0714L22.1875 22.1875M23.3303 6.76973L21.5625 8.5375M6.15197 23.848L9.6875 20.3125M6.41085 6.51085L9.0625 9.1625"
          stroke="#DF4924"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      EFFORTLESS OPERATIONS
    </h1>
    <div class="slider__card center">
      <div class="card">
        <h2>Accounting</h2>
        <p>
          Automated invoicing streamlines the manual process, saving time and
          reducing the risk of errors. It generates multiple invoices
          simultaneously based on load information and customer details,
          expediting the invoicing process.
        </p>
        <img src="../assets/img/IMAGE1.jpg" alt="card" />
      </div>
      <div class="card">
        <h2>Unit status board</h2>
        <p>
          The Unit Status Board is crafted to keep you well-informed about the
          current statuses of different units. Whether you're overseeing a
          project, managing a team, or coordinating logistics, this board
          delivers real-time updates on each unit's status.
        </p>
        <img src="../assets/img/IMAGE2.jpg" alt="card" />
      </div>
      <div class="card">
        <h2>Smart load board</h2>
        <p>
          Our Smart Load Board leverages real-time data and predictive analytics
          to provide you with valuable insights and recommendations. It offers a
          user-friendly interface that allows you to easily input load
          requirements, select the most suitable options for your specific
          needs.
        </p>
        <img src="../assets/img/IMAGE3.jpg" alt="card" />
      </div>
    </div>
  </div>
</template>
  
<script>
</script>
  
<style scoped>
.card {
  width: 513px;
  height: 513px;
  border: 3px solid #ECEEF2;
  border-radius: 40px;
  padding: 15px;

}
.card:hover{
  border: 3px solid #E19F8E;
  
}
.slider__card {
  gap: 30px;
  flex-wrap: wrap;
}
.container__sleder {
  max-width: 1920px;
  margin: 0 auto;
}
.card h2 {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  color: #130f26;
}
.card p {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #4e4f51;
}
.title__slider {
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 72px;
  text-align: left;
  color: #130F26;
  align-items: center;
  display: flex;
  margin-top: 90px;
  margin-bottom: 90px;
  margin-left: 50px;
}
.title__slider svg{
  margin-right: 15px;
}
</style>