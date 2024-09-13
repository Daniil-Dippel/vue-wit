<template>
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
  <div class="information__container">
    <div class="information__free flex">
      <div class="information__left">
        <h1>Streamline compliance workflows</h1>
        <p>
          Intuitive tools for your drivers and back office help simplify
          compliance throughout your organization. Maintain compliance while
          keeping up with changing regulations, driver training, onsite safety,
          and administrative management.
        </p>
      </div>
      <div class="information__right">
        <div class="right__box flex">
          <h1>1.</h1>
          <p>Manage HOS, DVIR, IFTA</p>
        </div>
        <div class="right__box flex">
          <h1>2.</h1>
          <p>User-friendly interface for administrative</p>
        </div>
        <div class="right__box flex">
          <h1>3.</h1>
          <p>Enable drivers with an intuitive Driver App</p>
        </div>
        <div class="right__box flex">
          <h1>4.</h1>
          <p>FMCSA-registered</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeWit",
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
.title__free {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.title__free span {
  font-family: Andika;
  font-size: 48px;
  color: #df4924;
  font-weight: 400;
}
.title__free li {
  font-family: Inter;
  font-size: 22px;
  font-weight: 600;
}
.price_title {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 500;
  color: #130f26;
}
.price_title span {
  color: #df4924;
  font-weight: 700;
}
.price_cent h2 {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #130f26;
  margin: 0;
}
.price_cent p {
  font-family: Inter;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 400;
  line-height: 19px;
  color: #7e7e7e;
}
.price_cent {
  align-items: center;
}
.price_svg p {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #df4924;
  margin: 0;
}
.price_svg {
  align-items: center;
}
.information__container {
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 100px;
}
.information__left h1 {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 400;
  line-height: 56px;
  color: #130f26;
}
.information__left p {
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #4e4f51;
  max-width: 860px;
}
.information__right {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 555px;
}
.information__free {
  justify-content: space-between;
}
.right__box h1 {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 400;
  line-height: 56px;
  color: #130f26;
}
.right__box p {
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  color: #4E4F51;
  margin-left: 5px;
}
.right__box{
  width: 240px;
  align-items: center;
}
</style>