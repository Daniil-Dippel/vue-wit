<template>
  <header class="header">
    <div class="container">
      <div class="nav">
        <ul class="right">
          <router-link class="router_link" to="/eld">
            <li
              :class="{ active: store.state.activeElement === 'eld' }"
              @click="setActive('eld')"
            >
              ELD
            </li>
          </router-link>
          <router-link class="router_link" to="/about">
            <li
              :class="{ active: store.state.activeElement === 'about' }"
              @click="setActive('about')"
            >
              ABOUT
            </li>
          </router-link>
          <router-link class="router_link" to="/store">
            <li
              :class="{ active: store.state.activeElement === 'store' }"
              @click="setActive('store')"
            >
              STORE
            </li>
          </router-link>
        </ul>
        <div class="line"></div>
        <ul>
          <router-link class="router_link" to="/tms">
            <li
              :class="{ active: store.state.activeElement === 'tms' }"
              @click="setActive('tms')"
            >
              TMS
            </li>
          </router-link>
          <router-link class="router_link" to="">
            <li
              :class="{ active: store.state.activeElement === 'price' }"
              @click="setActive('price')"
            >
              PRICE
            </li>
          </router-link>
          <router-link class="router_link" to="">
            <li
              :class="{ active: store.state.activeElement === 'help' }"
              @click="setActive('help')"
            >
              HELP
            </li>
          </router-link>
        </ul>
      </div>
      <div class="auth-buttons">
        <router-link to="/singIn">
          <button class="sign-in">Sign In</button>
        </router-link>
        <router-link to="/singUp">
          <button class="sign-up">Sign up</button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const setActive = (element) => {
  store.commit("upload", element);
};

const emit = defineEmits();
const store = useStore();
</script>

<style scoped>
.router_link {
  text-decoration: none;
  color: #fff;
}
.header {
  position: relative;
  background-color: #171416;
  padding: 20px 0;
}

.line {
  background: #fff;
  height: 79px;
  width: 1px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  display: flex;
  align-items: center;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav li {
  font-family: Inter;
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  font-size: 14px;
  padding: 0 10px;
  cursor: pointer;
}
.nav {
  color: #fff;
}
.right {
  text-align: right;
}

.auth-buttons {
  position: absolute;
  right: 100px;
  display: flex;
  gap: 20px; /* Пространство между кнопками */
}

.sign-in,
.sign-up {
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: #df4924;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  padding: 0;
}

.sign-up {
  color: #fff; /* Измените цвет, если нужно */
  font-weight: bold;
}
</style>



