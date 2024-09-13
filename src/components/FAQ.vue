<template>
  <div class="box">
    <div class="faq_container">
      <div class="__faq">
        <div class="faq_title center border__bottom">Frequently asked questions</div>
        <div class="faq_item">How does WIT work <span>?</span></div>
      </div>
      <div class="__faq">
        <div class="faq_item border__bottom">What is WIT <span>?</span></div>
        <div class="faq_item border__bottom">
          What are the advantages of WIT <span>?</span>
        </div>
        <div class="faq_item">Can I order device from you<span>?</span></div>
      </div>
      <div class="__faq">
        <div class="faq_item border__bottom">How can WIT help me <span>?</span></div>
        <div class="faq_item border__bottom">
          Which devices are suitable for WIT software ?
        </div>
        <div class="faq_item">What is WIT <span>?</span></div>
      </div>

      <div class="d__faq">
        <div class="faq_item border__bottom">
          What are the advantages of WIT <span>?</span>
        </div>
        <div class="faq_item border__bottom">
          What are the advantages of WIT <span>?</span>
        </div>
        <div class="faq_note center">
          If you don’t find the answer you’re looking for, please don’t hesitate
          to reach out, and we’ll be happy to provide you with the information
          you need.
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "FAQ",
};
</script>
  
<style scoped>
.faq_container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 200px;
  padding: 100px;
  padding-bottom: 50px;
}
.__faq{
  border-right: 2px solid #C14324;
}
.border__bottom{
  border-bottom: 2px solid #C14324;
}
.faq_item {
  width: 355px;
  height: 250px;
  color: #fbbfb1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
}
.faq_item span {
  font-weight: 600;
}
.faq_title {
  width: 350px;
  height: 502px;
  font-family: Poppins;
  font-size: 64px;
  font-weight: 400;
  line-height: 133px;
  text-align: left;
  color: #130f26;
}

.box {
  width: 100%;
  background: #df4924;
}
.faq_note {
  width: 355px;
  height: 250px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  text-align: right;
  
}
</style>
  