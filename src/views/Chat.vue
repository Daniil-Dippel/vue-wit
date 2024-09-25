<script setup>
import { ref } from "vue";
import SlaidBar from "../components/SlaidBar.vue";

const i = ref(0);
const clicks = () =>{
    if (i.value === 0) {
        i.value = 1
    } else {
        i.value = 0
    }
};
</script>
<template>
  <section class="section">
    <div class="wrapper">
      <div class="add-load">
        <div class="add-load__menu">
            <SlaidBar />
        </div>
        <div class="add-load__window">
          <div class="chat-icons">
            <div class="chat-icons__container">
              <div class="input-container">
                <input type="text" class="chat-icons__input" />

                <span class="icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                      stroke="#DF4924"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <a href="" class="btns-container"
                ><svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.87886 11.3705C6.77619 12.1003 6.417 12.768 5.86727 13.251C5.31753 13.7341 4.61417 14 3.88636 14C3.15856 14 2.4552 13.7341 1.90546 13.251C1.35572 12.768 0.996533 12.1003 0.893864 11.3705H0V0.874658C0 0.642684 0.09099 0.420212 0.252953 0.256181C0.414916 0.0921513 0.634586 0 0.863636 0H12.9545C13.1836 0 13.4033 0.0921513 13.5652 0.256181C13.7272 0.420212 13.8182 0.642684 13.8182 0.874658V2.62397H16.4091L19 6.17158V11.3705H17.2425C17.1398 12.1003 16.7806 12.768 16.2309 13.251C15.6812 13.7341 14.9778 14 14.25 14C13.5222 14 12.8188 13.7341 12.2691 13.251C11.7194 12.768 11.3602 12.1003 11.2575 11.3705H6.87886ZM12.0909 1.74932H1.72727V8.79031C2.06803 8.43799 2.48779 8.17427 2.95083 8.02159C3.41387 7.8689 3.90648 7.83178 4.38673 7.91337C4.86699 7.99496 5.32067 8.19286 5.70916 8.49022C6.09766 8.78757 6.40946 9.17559 6.61805 9.62123H11.5183C11.6634 9.31248 11.8577 9.03171 12.0909 8.79031V1.74932ZM13.8182 6.99726H17.2727V6.74798L15.5385 4.37329H13.8182V6.99726ZM14.25 12.2452C14.5937 12.2452 14.9233 12.1069 15.1663 11.8608C15.4094 11.6147 15.5459 11.2809 15.5459 10.9328C15.5459 10.5847 15.4094 10.2509 15.1663 10.0048C14.9233 9.75863 14.5937 9.62036 14.25 9.62036C13.9063 9.62036 13.5767 9.75863 13.3337 10.0048C13.0906 10.2509 12.9541 10.5847 12.9541 10.9328C12.9541 11.2809 13.0906 11.6147 13.3337 11.8608C13.5767 12.1069 13.9063 12.2452 14.25 12.2452ZM5.18182 10.9332C5.18182 10.7609 5.14831 10.5903 5.08321 10.4311C5.01811 10.272 4.92268 10.1273 4.80239 10.0055C4.68209 9.88368 4.53928 9.78704 4.38211 9.7211C4.22494 9.65517 4.05649 9.62123 3.88636 9.62123C3.71624 9.62123 3.54779 9.65517 3.39061 9.7211C3.23344 9.78704 3.09063 9.88368 2.97034 10.0055C2.85004 10.1273 2.75462 10.272 2.68952 10.4311C2.62442 10.5903 2.59091 10.7609 2.59091 10.9332C2.59091 11.2812 2.72739 11.6149 2.97034 11.8609C3.21328 12.107 3.54279 12.2452 3.88636 12.2452C4.22994 12.2452 4.55944 12.107 4.80239 11.8609C5.04533 11.6149 5.18182 11.2812 5.18182 10.9332Z"
                    fill="#F99E2C"
                  />
                </svg>
                <div class="krug"></div>
                61<svg
                  width="2"
                  height="24"
                  viewBox="0 0 2 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.9375" width="1" height="24" fill="#171416" />
                </svg>
                <div class="krug"></div>
                41</a
              >
              <a href="" class="btns-rgb">
                <div class="green-text">dr</div>
                <div class="green-krug"></div>
                <div class="green-text">8</div>
                <svg
                  width="2"
                  height="24"
                  viewBox="0 0 2 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.9375" width="1" height="24" fill="#171416" />
                </svg>
                <div class="blue-text">on</div>
                <div class="blue-krug"></div>
                <div class="blue-text">8</div>
                <svg
                  width="2"
                  height="24"
                  viewBox="0 0 2 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.9375" width="1" height="24" fill="#171416" />
                </svg>
                <div class="yellow-text">on</div>
                <div class="yellow-krug"></div>
                <div class="yellow-text">8</div>
                <svg
                  width="2"
                  height="24"
                  viewBox="0 0 2 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.9375" width="1" height="24" fill="#171416" />
                </svg>
                <div class="dark-text">off</div>
                <div class="dark-krug"></div>
                <div class="dark-text">8</div>
              </a>
            </div>
          </div>
          <div class="chat-window-all">
            <div class="chat-from">
              <div class="accaunt-person">
                <a href=" " class="chat-openmsg__link">
                  <svg
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51485 45.4061C11.061 41.7634 14.6709 39.2085 18.8776 39.2085H34.1276C38.3343 39.2085 41.9442 41.7634 43.4903 45.4061M36.6693 20.146C36.6693 25.7609 32.1175 30.3127 26.5026 30.3127C20.8877 30.3127 16.3359 25.7609 16.3359 20.146C16.3359 14.5311 20.8877 9.97933 26.5026 9.97933C32.1175 9.97933 36.6693 14.5311 36.6693 20.146ZM51.9193 26.5002C51.9193 40.5374 40.5398 51.9168 26.5026 51.9168C12.4654 51.9168 1.08594 40.5374 1.08594 26.5002C1.08594 12.4629 12.4654 1.0835 26.5026 1.0835C40.5398 1.0835 51.9193 12.4629 51.9193 26.5002Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <div class="accaunt-person__name">
                  <h2>Daut Ismailov</h2>
                  <p>Dispatcher</p>
                </div>
              </div>
              <div class="input-container">
                <input type="text" class="chat-icons__input folder-input" />

                <span class="icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                      stroke="#DF4924"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div class="accaunt-person">
                <a href=" " class="chat-openmsg__link">
                  <svg
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51485 45.4061C11.061 41.7634 14.6709 39.2085 18.8776 39.2085H34.1276C38.3343 39.2085 41.9442 41.7634 43.4903 45.4061M36.6693 20.146C36.6693 25.7609 32.1175 30.3127 26.5026 30.3127C20.8877 30.3127 16.3359 25.7609 16.3359 20.146C16.3359 14.5311 20.8877 9.97933 26.5026 9.97933C32.1175 9.97933 36.6693 14.5311 36.6693 20.146ZM51.9193 26.5002C51.9193 40.5374 40.5398 51.9168 26.5026 51.9168C12.4654 51.9168 1.08594 40.5374 1.08594 26.5002C1.08594 12.4629 12.4654 1.0835 26.5026 1.0835C40.5398 1.0835 51.9193 12.4629 51.9193 26.5002Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <div @click="clicks" class="accaunt-person__name">
                  <h2>Daut Ismailov</h2>
                  <div class="accaunt-details">
                    <p class="accaunt-details__text">Dispatcher</p>
                    <p class="accaunt-details__time">04:01</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="i === 1" class="chat-openmsg">
              <div class="chat-openmsg__person">
                <a href=" " class="chat-openmsg__link">
                  <svg
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.51485 45.4061C11.061 41.7634 14.6709 39.2085 18.8776 39.2085H34.1276C38.3343 39.2085 41.9442 41.7634 43.4903 45.4061M36.6693 20.146C36.6693 25.7609 32.1175 30.3127 26.5026 30.3127C20.8877 30.3127 16.3359 25.7609 16.3359 20.146C16.3359 14.5311 20.8877 9.97933 26.5026 9.97933C32.1175 9.97933 36.6693 14.5311 36.6693 20.146ZM51.9193 26.5002C51.9193 40.5374 40.5398 51.9168 26.5026 51.9168C12.4654 51.9168 1.08594 40.5374 1.08594 26.5002C1.08594 12.4629 12.4654 1.0835 26.5026 1.0835C40.5398 1.0835 51.9193 12.4629 51.9193 26.5002Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Daut Ismailov
                </a>

                <div class="chat-info">
                  <a href=""
                    ><svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 15.725H7.50929M3.97143 20H11.0286C12.0687 20 12.5887 20 12.986 19.7929C13.3354 19.6108 13.6195 19.3201 13.7976 18.9626C14 18.5562 14 18.0241 14 16.96V4.04C14 2.9759 14 2.44385 13.7976 2.03742C13.6195 1.67991 13.3354 1.38925 12.986 1.20709C12.5887 1 12.0687 1 11.0286 1H3.97143C2.93133 1 2.41128 1 2.01402 1.20709C1.66457 1.38925 1.38047 1.67991 1.20242 2.03742C1 2.44385 1 2.9759 1 4.04V16.96C1 18.0241 1 18.5562 1.20242 18.9626C1.38047 19.3201 1.66457 19.6108 2.01402 19.7929C2.41128 20 2.93133 20 3.97143 20ZM7.96429 15.725C7.96429 15.9873 7.75642 16.2 7.5 16.2C7.24358 16.2 7.03571 15.9873 7.03571 15.725C7.03571 15.4627 7.24358 15.25 7.5 15.25C7.75642 15.25 7.96429 15.4627 7.96429 15.725Z"
                        stroke="#BBBBBB"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a href=""
                    ><svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.2322 16.7678C12.2559 15.7915 12.2559 14.2085 13.2322 13.2322C14.2085 12.2559 15.7915 12.2559 16.7678 13.2322C17.7441 14.2085 17.7441 15.7915 16.7678 16.7678M9.6967 20.3033C6.76777 17.3744 6.76777 12.6256 9.6967 9.6967C12.6256 6.76777 17.3744 6.76777 20.3033 9.6967C23.2322 12.6256 23.2322 17.3744 20.3033 20.3033M6.16117 23.8388C1.27961 18.9573 1.27961 11.0427 6.16117 6.16117C11.0427 1.27961 18.9573 1.27961 23.8388 6.16117C28.7204 11.0427 28.7204 18.9573 23.8388 23.8388"
                        stroke="#BBBBBB"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="chat-messege">
                <div class="chat-messege__from">
                  <div class="chat-name">
                    <h3>Daut Ismailov</h3>
                    <p>select</p>
                  </div>
                  <div class="chat-sms">
                    <p class="chat-sms__messeg">OK</p>
                    <p class="chat-sms__time">
                      12:21<svg
                        width="21"
                        height="13"
                        viewBox="0 0 21 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.1875L5.43182 12L16 1"
                          stroke="#27AE60"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 7.1875L9.43182 12L20 1"
                          stroke="#27AE60"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div class="chat-messege__from">
                  <div class="chat-name chat-name__RED">
                    <h3>Ramy Darvil</h3>
                    <p>select</p>
                  </div>
                  <div class="chat-sms">
                    <p class="chat-sms__messeg">Thank you</p>
                    <p class="chat-sms__time">
                      12:21<svg
                        width="21"
                        height="13"
                        viewBox="0 0 21 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.1875L5.43182 12L16 1"
                          stroke="#27AE60"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 7.1875L9.43182 12L20 1"
                          stroke="#27AE60"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div class="chat-messege__from">
                  <div class="chat-name">
                    <h3>Daut Ismailov</h3>
                    <p>select</p>
                  </div>
                  <div class="chat-sms">
                    <p class="chat-sms__messeg">OK</p>
                    <p class="chat-sms__time">
                      12:21<svg
                        width="21"
                        height="13"
                        viewBox="0 0 21 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.1875L5.43182 12L16 1"
                          stroke="#27AE60"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 7.1875L9.43182 12L20 1"
                          stroke="#27AE60"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div class="chat-messege__from">
                  <div class="chat-name chat-name__RED">
                    <h3>Ramy Darvil</h3>
                    <p>select</p>
                  </div>
                  <div class="chat-sms">
                    <p class="chat-sms__messeg">Thank you</p>
                    <p class="chat-sms__time">
                      12:21<svg
                        width="21"
                        height="13"
                        viewBox="0 0 21 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.1875L5.43182 12L16 1"
                          stroke="#27AE60"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 7.1875L9.43182 12L20 1"
                          stroke="#27AE60"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
              <div class="CONTAINER-ALARM">
                <a href="" class="btn-alarm">Alarm</a>
              </div>
            </div>
            <div v-if="i === 0" class="chat-openmsg">
                <p class="empty-messege">Chose to write a message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style>
</style>