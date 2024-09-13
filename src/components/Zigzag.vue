<template>
  <div class="zigzag-container">
    <div class="zigzag__svg">
      <img class="zigzag-svg" src="../assets/img/zigzag.svg" alt="zigzag">
    </div>
  </div>
  <div class="citata__container center">
    <svg
      width="64"
      height="183"
      viewBox="0 0 64 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.7305 0.5H1.23047V50.5H63.7305V0.5ZM63.3398 88H0.839844V137.902C0.839844 146.171 2.27214 153.104 5.13672 158.703C8.0013 164.367 11.7773 168.924 16.4648 172.375C21.1523 175.891 26.4909 178.397 32.4805 179.895C38.4701 181.392 44.5898 182.141 50.8398 182.141V150.5C49.6029 150.435 48.2682 150.207 46.8359 149.816C45.4036 149.426 44.069 148.775 42.832 147.863C41.5951 146.952 40.5534 145.682 39.707 144.055C38.8607 142.492 38.4375 140.474 38.4375 138H63.3398V88Z"
        fill="#171416"
      />
    </svg>
    <p>
      We are dedicated to ongoing process improvement, investment in
      cutting-edge technologies, and fostering a culture of innovation. This
      commitment enables us to consistently deliver top-tier logistics solutions
      of the highest quality.
    </p>
  </div>
</template>

<script>
export default {
  name: "Zigzag",
};
</script>

<style>
.zigzag-container {
  width: 100%;
  max-width: 1461px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}

.zigzag-svg {
  width: 100%;
  height: auto;
  max-width: 1461px;
}
.citata__container p {
  font-family: Inter;
  font-size: 36px;
  font-weight: 400;
  line-height: 39px;
  text-align: right;
  color: #4e4f51;
  max-width: 1092px;
  margin-left: 6px;
}
.citata__container{
    margin-top: 180px;
}
</style>