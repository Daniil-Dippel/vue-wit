<script setup>
import SlaidBar from "../components/SlaidBar.vue";
</script>

<template>
  <section class="section">
    <div class="wrapper">
      <div class="add-load">
        <div class="add-load__menu">
          <SlaidBar />
        </div>
        <div class="add-load__window">
          <div class="window-title">
            <h1 class="window-title__h1">Add Load</h1>
          </div>
          <div class="window-second">
            <a href="" class="link-load">Load Files</a>
            <div class="window-secinput">
              <div class="window-secinput__inputs">
                <label for="name" class="window-name">Load Id</label>
                <input type="text" class="window-input" />
              </div>
              <div class="window-secinput__inputs">
                <label for="name" class="window-name">Price</label>
                <input type="text" class="window-input" />
              </div>
              <div class="window-secinput__inputs">
                <label for="name" class="window-name">Select type</label>
                <input type="text" class="window-input" />
              </div>
              <div class="window-secinput__inputs">
                <label for="name" class="window-name">Select stop</label>
                <input type="text" class="window-input" />
              </div>
            </div>
          </div>

          <div class="folder-block">
            <div class="window-secinput__inputs">
              <div>
                <label for="name" class="window-name">Broker</label>
                <div class="folder-block__plus">
                  <input type="text" class="window-input folder-input" />
                  <a href="" class="link-plus">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_148_5387)">
                        <path
                          d="M12 7.91943V16.0598"
                          stroke="#DF4924"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.0778 11.9893H7.92969"
                          stroke="#DF4924"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.2081 0.888672H6.79539C3.16576 0.888672 0.890625 3.45766 0.890625 7.0944V16.9051C0.890625 20.5419 3.15518 23.1108 6.79539 23.1108H17.2081C20.8483 23.1108 23.1129 20.5419 23.1129 16.9051V7.0944C23.1129 3.45766 20.8483 0.888672 17.2081 0.888672Z"
                          stroke="#DF4924"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_148_5387">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>

              <label for="name" class="window-name">Dispatcher</label>
              <input type="text" class="window-input folder-input" />
              <label for="name" class="window-name">Empty mile</label>
              <input type="text" class="window-input folder-input" />
            </div>
            <div class="window-secinput__inputs">
              <label for="name" class="window-name">Broker Emails</label>
              <div class="folder-block__plus">
                <input type="text" class="window-input folder-input" />
                <a href="" class="link-plus">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_148_5387)">
                      <path
                        d="M12 7.91943V16.0598"
                        stroke="#DF4924"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.0778 11.9893H7.92969"
                        stroke="#DF4924"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.2081 0.888672H6.79539C3.16576 0.888672 0.890625 3.45766 0.890625 7.0944V16.9051C0.890625 20.5419 3.15518 23.1108 6.79539 23.1108H17.2081C20.8483 23.1108 23.1129 20.5419 23.1129 16.9051V7.0944C23.1129 3.45766 20.8483 0.888672 17.2081 0.888672Z"
                        stroke="#DF4924"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_148_5387">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <label for="name" class="window-name">Unit</label>
              <input type="text" class="window-input folder-input" />
              <label for="name" class="window-name">Loaded mile</label>
              <input type="text" class="window-input folder-input" />
            </div>
            <div class="image-folder">
              <img src="../assets/img/img-1.png" alt="" />
              <a href="" class="image-folder__link"
                >Drag and drop or Click here</a
              >
              <p class="image-folder__text">
                The largest file size that can be uploaded is 10 mb
              </p>
            </div>
          </div>

          <div class="load-information">
            <h2 class="load-information__title">Load Information</h2>
            <p class="window-name">Notes</p>
            <input type="text" class="window-input load-information__input" />
          </div>
          <div class="border-block">
            <div class="border-block__copy">
              <a href="">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8.1665H4V24.4998H16V8.1665Z"
                    stroke="#636366"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 8.16667V3.5H20V19.8333H16"
                    stroke="#636366"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div class="border-block__inputs">
              <div class="window-secinput__inputs border-block__width">
                <label for="name" class="window-name">Shipper</label>
                <input type="text" class="window-input border-block__width" />
              </div>
              <div class="window-secinput__inputs border-block__width">
                <label for="name" class="window-name">From Date</label>
                <div class="input-container">
                  <input
                    type="text"
                    class="window-input input-svg border-block__width"
                  />
                  <!-- Вставляем иконку -->
                  <span class="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.32031 7.05322H15.6883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3281 9.98242H12.335"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 9.98242H9.00695"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.67188 9.98242H5.67883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3281 12.897H12.335"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 12.897H9.00695"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.67188 12.897H5.67883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0312 1.5V3.96809"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.97656 1.5V3.96809"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.1787 2.68457H5.82822C3.6257 2.68457 2.25 3.91152 2.25 6.16684V12.9541C2.25 15.2449 3.6257 16.5002 5.82822 16.5002H12.1718C14.3812 16.5002 15.75 15.2662 15.75 13.0108V6.16684C15.7569 3.91152 14.3882 2.68457 12.1787 2.68457Z"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="window-secinput__inputs border-block__width">
                <label for="name" class="window-name">To Date</label>
                <!-- <input type="text" class=" window-input input-svg"> -->
                <div class="input-container">
                  <input
                    type="text"
                    class="window-input input-svg border-block__width"
                  />

                  <span class="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.32031 7.05322H15.6883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3281 9.98242H12.335"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 9.98242H9.00695"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.67188 9.98242H5.67883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3281 12.897H12.335"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 12.897H9.00695"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.67188 12.897H5.67883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0312 1.5V3.96809"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.97656 1.5V3.96809"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.1787 2.68457H5.82822C3.6257 2.68457 2.25 3.91152 2.25 6.16684V12.9541C2.25 15.2449 3.6257 16.5002 5.82822 16.5002H12.1718C14.3812 16.5002 15.75 15.2662 15.75 13.0108V6.16684C15.7569 3.91152 14.3882 2.68457 12.1787 2.68457Z"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="border-block__2inputs">
              <div class="border-block__location">
                <label for="name" class="window-name">Location</label>
                <div class="folder-block__plus">
                  <input type="text" class="window-input folder-input" />
                  <a href="" class="link-plus border-block__plus"> </a>
                </div>
              </div>
              <div class="border-block__location">
                <label for="name" class="window-name">Location Contact</label>
                <div class="folder-block__plus">
                  <input type="text" class="window-input folder-input" />
                  <a href="" class="link-plus border-block__plus"> </a>
                </div>
              </div>
              <div class="window-secinput__inputs border-block__width">
                <label for="name" class="window-name">Pickup number</label>
                <input type="text" class="window-input border-block__width" />
              </div>
            </div>
            <div class="window-secinput__inputs traieler">
              <label for="name" class="window-name">Trailer</label>
              <input type="text" class="window-input" />
            </div>
            <div class="load-information">
              <p class="window-name">Notes</p>
              <input type="text" class="window-input load-information__input" />
            </div>
            <div class="save">
              <a href="" class="save-link">Save</a>
            </div>
          </div>
          <div class="border-block">
            <div class="yellow-block">
              <h2 class="border-block__yellow">Stop 2</h2>

              <div class="border-block__copy">
                <a href="">
                  <svg
                    width="24"
                    height="28"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8.1665H4V24.4998H16V8.1665Z"
                      stroke="#636366"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 8.16667V3.5H20V19.8333H16"
                      stroke="#636366"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="border-block__inputs">
              <div class="window-secinput__inputs border-block__width">
                <label for="name" class="window-name">Type</label>
                <input type="text" class="window-input border-block__width" />
              </div>
              <div class="window-secinput__inputs border-block__width">
                <label for="name" class="window-name">From Date</label>
                <div class="input-container">
                  <input
                    type="text"
                    class="window-input input-svg border-block__width"
                  />

                  <span class="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.32031 7.05322H15.6883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3281 9.98242H12.335"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 9.98242H9.00695"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.67188 9.98242H5.67883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3281 12.897H12.335"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 12.897H9.00695"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.67188 12.897H5.67883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0312 1.5V3.96809"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.97656 1.5V3.96809"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.1787 2.68457H5.82822C3.6257 2.68457 2.25 3.91152 2.25 6.16684V12.9541C2.25 15.2449 3.6257 16.5002 5.82822 16.5002H12.1718C14.3812 16.5002 15.75 15.2662 15.75 13.0108V6.16684C15.7569 3.91152 14.3882 2.68457 12.1787 2.68457Z"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="window-secinput__inputs border-block__width">
                <label for="name" class="window-name">To Date</label>

                <div class="input-container">
                  <input
                    type="text"
                    class="window-input input-svg border-block__width"
                  />

                  <span class="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.32031 7.05322H15.6883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3281 9.98242H12.335"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 9.98242H9.00695"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.67188 9.98242H5.67883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3281 12.897H12.335"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 12.897H9.00695"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.67188 12.897H5.67883"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0312 1.5V3.96809"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.97656 1.5V3.96809"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.1787 2.68457H5.82822C3.6257 2.68457 2.25 3.91152 2.25 6.16684V12.9541C2.25 15.2449 3.6257 16.5002 5.82822 16.5002H12.1718C14.3812 16.5002 15.75 15.2662 15.75 13.0108V6.16684C15.7569 3.91152 14.3882 2.68457 12.1787 2.68457Z"
                        stroke="#D1D1D1"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="border-block__2inputs">
              <div class="border-block__location">
                <label for="name" class="window-name">Location</label>
                <div class="folder-block__plus">
                  <input type="text" class="window-input folder-input" />
                  <a href="" class="link-plus border-block__plus"> </a>
                </div>
              </div>
              <div class="border-block__location">
                <label for="name" class="window-name">Location Contact</label>
                <div class="folder-block__plus">
                  <input type="text" class="window-input folder-input" />
                  <a href="" class="link-plus border-block__plus"> </a>
                </div>
              </div>
              <div class="window-secinput__inputs border-block__width">
                <label for="name" class="window-name">Pickup number</label>
                <input type="text" class="window-input border-block__width" />
              </div>
            </div>

            <div class="load-information padding-block">
              <p class="window-name">Notes</p>
              <input type="text" class="window-input load-information__input" />
            </div>
            <div class="save">
              <a href="" class="save-link">Save</a>
            </div>
          </div>
          <div class="footer-container">
            <h2>Total stop - 2</h2>
            <div class="footer-container__links">
              <div class="trip">
                <a href="" class="btn-trip">Round trip</a>
                <a href="" class="btn-stop"
                  >Add Stop
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_148_5668)">
                      <path
                        d="M9 5.93945V12.0447"
                        stroke="#FFB94A"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0564 8.99219H5.94531"
                        stroke="#FFB94A"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.9021 0.666504H5.09264C2.37042 0.666504 0.664062 2.59324 0.664062 5.3208V12.6788C0.664062 15.4064 2.36248 17.3331 5.09264 17.3331H12.9021C15.6323 17.3331 17.3307 15.4064 17.3307 12.6788V5.3208C17.3307 2.59324 15.6323 0.666504 12.9021 0.666504Z"
                        stroke="#FFB94A"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_148_5668">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div class="btn-footer">
                <a href="">Cancel</a>
                <a href="">Create</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
