<template>
  <div class="container">
    <div class="text__news flex">
      <h1 class="news__title">NEWS</h1>
      <div v-for="i in 4" class="title__text__news" :key="i">
        <h2>24 JUNE 2024</h2>
        <div class="p flex">
          <p>
            How ELDs Improve Communication and Collaboration between Drivers and
            Dispatchers
          </p>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 23C22.1046 23 23 22.1046 23 21L23 3C23 1.89543 22.1046 0.999999 21 0.999999C19.8954 0.999999 19 1.89543 19 3L19 19L3 19C1.89543 19 0.999999 19.8954 0.999999 21C0.999999 22.1046 1.89543 23 3 23L21 23ZM0.585786 3.41421L19.5858 22.4142L22.4142 19.5858L3.41421 0.585786L0.585786 3.41421Z"
              fill="#DF4924"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextNews",
};
</script>

<style>
.news__title {
  transform: rotate(270deg);
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  color: #df4924;
  position: absolute;
  top: 30%;
  left: -5%;
}
.text__news {
  position: relative;
  flex-wrap: wrap;
  margin-bottom: 240px;
  margin-top: 250px;
}
.title__text__news {
  width: 340px;
  margin: 20px;
}
.title__text__news h2 {
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  text-align: left;
  color: #171416;
  margin: 0;
}
.p p {
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  color: #130f26;
  margin: 0;
}
.p {
  position: relative;
}
.p svg {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 45%;
}
</style>