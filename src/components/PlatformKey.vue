<template>
  <div class="platform__container">
    <div class="platform__block">
      <h1 class="platform__title">PLATFORM KEY FEATURES</h1>
      <div class="platform__content center">
        <div class="platform__box">
          <h2>LOCATION</h2>
          <p>
            Effortlessly monitor progress by assigning dispatches and tracking
            them through our new Dispatch module and Fleet View, effectively
            reducing the workload for dispatchers.
          </p>
        </div>
        <div class="platform__box">
          <h2>SCALABILITY</h2>
          <p>
            By automating your processes, you'll minimize inefficiencies, cut
            down on wastage, reduce expenses, and pave the way for business
            expansion.
          </p>
        </div>
        <div class="platform__box">
          <h2>ACCOUNTING</h2>
          <p>
            Streamline your invoicing process by automating it for each load.
            This allows for effortless creation of batches, scheduling, and
            effective financial management.
          </p>
        </div>
        <div class="platform__box">
          <h2>ORDER MANAGEMENT</h2>
          <p>
            Craft comprehensive order details directly within our centralized
            dashboard. Utilize color-coded labels for swift dispatcher
            assessment, ensuring efficient attention and assignment of work
            orders.
          </p>
        </div>
        <div class="platform__box">
          <h2>AUTOMATION</h2>
          <p>
            The TT Loads App automatically generates arrival and departure
            confirmations at every stop, ensuring the back office stays updated
            on the driver's progress.
          </p>
        </div>
        <div class="platform__box">
          <h2>DELIVERY SATISFACTION</h2>
          <p>
            By utilizing a comprehensive dispatch and fleet management tool, you
            can prioritize providing exceptional customer service while
            streamlining your operations.
          </p>
        </div>
        <p class="platform__box__content">
          Our platform is tailored to amplify visibility, optimize processes,
          and fuel efficiency at every stage of the logistics journey,
          empowering your operations to reach new heights.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="free__container">
      <ul class="title__free">
        <li>ELD</li>
        <span>﹡</span>
        <li>FLEET MANAGER</li>
        <span>﹡</span>
        <li>ASSET TRACKER</li>
        <span>﹡</span>
        <li>LOG ANNOTIATION</li>
        <span>﹡</span>
        <li>IFTA REPORT</li>
        <span>﹡</span>
        <li>CHAT</li>
        <span>﹡</span>
        <li>TRACKING HISTORY</li>
        <span>﹡</span>
        <li>DRIVER ALARM</li>
        <span>﹡</span>
        <li>GPS TRACKING</li>
      </ul>
      <div class="free_price center">
        <div class="box">
          <h2 class="price_title">
            <span>WIT</span> is easy to operate and provides a comfortable user
            experience.
          </h2>
          <div class="price_cent center">
            <h2 class="cent">$89/mo.</h2>
            <p>$105/mo</p>
          </div>
          <div class="price_svg center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4V5.4C4 8.76031 4 10.4405 4.65396 11.7239C5.2292 12.8529 6.14708 13.7708 7.27606 14.346C8.55953 15 10.2397 15 13.6 15H20M20 15L15 10M20 15L15 20"
                stroke="#DF4924"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>contact us</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.platform__title {
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 72px;
  text-align: left;
  color: #130f26;
  margin-top: 250px;
  
}
.platform__container {
  max-width: 1450px;
  margin: 0 auto;
}
.platform__box {
  width: 158px;
  height: 464px;
  background: #df4924;
  margin: 20px 10px 20px 10px;
  
}
.platform__box__content {
  max-width: 269px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
  color: #6c6c70;
}
.platform__content {
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.platform__box h2 {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: #fff;
  text-align: center;
}
.platform__box p {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #130f26;
  max-width: 113px;
  margin-left: 23px;
}
</style>