<script setup>
import { ref, watch, onMounted } from "vue";
import SlaidBar from "../components/SlaidBar.vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const map = ref(null);
const marker = ref(null);
const userLocation = ref([34.0522, -118.2437]); // Начальная точка (Лос-Анджелес)
const userPath = ref([]); // Массив для хранения маршрута пользователя
const polyline = ref(null); // Полилиния для отображения линии

// Координаты маршрута
const routeCoordinates = [
  [34.0522, -118.2437],
  [34.0525, -118.245],
  [34.053, -118.246],
  [34.054, -118.247],
  [34.055, -118.248],
  [34.056, -118.249],
  [34.057, -118.25],
  [34.058, -118.251],
  [34.059, -118.252],
  [34.06, -118.253],
  [34.061, -118.254],
]; // Примерные координаты для "поездки"

let currentPointIndex = 0; // Индекс текущей точки маршрута

// Функция для интерполяции координат
const interpolateCoordinates = (start, end, factor) => {
  return [
    start[0] + (end[0] - start[0]) * factor,
    start[1] + (end[1] - start[1]) * factor,
  ];
};

onMounted(() => {
  const americaBounds = [
    [85, -170], // Северо-западная граница
    [-60, -30], // Юго-восточная граница
  ];

  // Создание карты
  map.value = L.map("map", {
    center: userLocation.value, // Центр карты на начальные координаты пользователя
    zoom: 14, // Более детальный зум
    minZoom: 3,
    maxZoom: 18,
    maxBounds: americaBounds,
    maxBoundsViscosity: 1.0,
    scrollWheelZoom: true,
    dragging: true,
  });

  // Добавление слоя карты
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map.value);

  // Добавление маркера пользователя
  marker.value = L.marker(userLocation.value, {
    riseOnHover: true,
    riseOffset: 250,
  }).addTo(map.value);
  marker.value.bindPopup("<b>User</b>").openPopup();

  // Инициализация полилинии для маршрута пользователя
  userPath.value.push(userLocation.value); // Добавляем начальные координаты в маршрут
  polyline.value = L.polyline(userPath.value, {
    color: "black",
    weight: 5,
    opacity: 0.7,
  }).addTo(map.value);

  // Плавное перемещение между точками маршрута
  const moveUser = (start, end) => {
    const steps = 100; // Количество шагов для плавности
    let step = 0;

    const intervalId = setInterval(() => {
      if (step <= steps) {
        const factor = step / steps;
        const newLocation = interpolateCoordinates(start, end, factor);
        userLocation.value = newLocation; // Обновляем координаты
        marker.value.setLatLng(newLocation); // Перемещаем маркер
        userPath.value.push(newLocation); // Добавляем в маршрут
        polyline.value.setLatLngs(userPath.value); // Обновляем линию
        step++;
      } else {
        clearInterval(intervalId); // Останавливаем интервал, когда шаги завершены
        currentPointIndex++;

        if (currentPointIndex < routeCoordinates.length - 1) {
          // Переходим к следующей точке маршрута
          moveUser(
            routeCoordinates[currentPointIndex],
            routeCoordinates[currentPointIndex + 1]
          );
        }
      }
    }, 2);
  };

  // Начинаем плавное движение по маршруту
  moveUser(routeCoordinates[0], routeCoordinates[1]);
});
</script>
  
<template>
  <div class="maps">
    <div id="map" style="height: 800px; width: 100%"></div>
    <SlaidBar />

    <!-- САЙДБАР -->
    <div class="main">
      <header class="main-header">
        <div class="main-header__content">
          <div class="main-btn">
            <div class="main-dash">
              <button class="main-btn-logs">Dashboard</button>
              <button class="main-btn-logs">Logs</button>
              <button class="main-btn-logs">Logs by driver</button>
              <button class="main-btn-logs">Trackings</button>
            </div>
            <input class="main-input" type="search" placeholder="Search..." />
            <div class="main-inputs-btn">
              <button class="main-btn-in">
                <i class="fas fa-search"></i>
              </button>
              <button class="main-btn-in">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div class="box">
        <input class="box-input" type="search" placeholder="search by name" />
        <div class="box-border">
          <div class="box-small">
            <h4 class="box-h4">Michael Greer (Unit 1234)</h4>
            <div class="box-mph">53 mph</div>
          </div>
          <div class="box-location">
            <img src="../icons/Icon - location.svg" alt="" />
            <p>3.43 mi S of Mayview, MO</p>
            <img class="box-copy" src="../icons/icon - copy.svg" alt="" />
          </div>
          <div class="box-small-p">
            <p class="box-p">Started: 08-02-2024, 20:36 CDT</p>
          </div>
        </div>
        <div class="section" onclick="toggleSection(this)">
          <div class="section-title">Diagnostics</div>
          <img src="../icons/Icon - arrow.svg" alt="" />
        </div>
        <div class="section-content">
          <p>Diagnostic content goes here...</p>
        </div>

        <div class="section" onclick="toggleSection(this)">
          <div class="section-title">Trip history</div>
          <img src="../icons/Icon - arrow.svg" alt="" />
        </div>
        <div class="section-content">
          <p>Trip history content goes here...</p>
        </div>
      </div>
    </div>
  </div>
</template>
  

  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.sidebar {
  z-index: 1;
}
.maps {
  height: 100%;
  margin: 0;
  position: relative;
}
#map {
  height: 100%; /* Карта занимает весь контейнер */
  width: 100%;
  z-index: 0; /* Устанавливаем низкий z-index для карты */
}
.menu-item {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.menu-item img {
  margin-right: 10px;
}

.active img {
  filter: hue-rotate(0deg) brightness(1) contrast(1) saturate(1) sepia(0)
    drop-shadow(0 0 0) !important; /* Или вы можете использовать другой способ изменения цвета */
}

.active-text {
  color: #df4924; /* Цвет текста при активном состоянии */
}

/* Стили для кнопки */
.sidebar-btn {
  cursor: pointer;
}
/* Базовые стили для свернутой боковой панели */
.sidebar {
  position: fixed;
  height: 100%;
  width: 100px; /* Ширина боковой панели по умолчанию */
  top: 0;
  left: 0;
  background-color: #111;
  display: flex;
  flex-direction: column;

  /* padding-top: 10px; */
  transition: width 0.3s; /* Плавная анимация изменения ширины */
}

/* Развернутая боковая панель */
.sidebar.expanded {
  width: 300px; /* Ширина при развернутой панели */
}

/* Стили для текста в свернутом состоянии */
.sidebar p span {
  display: none; /* Прячем текст по умолчанию */
}

/* Когда боковая панель развернута, показываем текст */
.sidebar.expanded p span {
  display: inline-block;
  margin-left: 10px;
  color: white;
  font-size: 18px;
  font-family: "inter"; /* Добавляем отступ слева */
}

/* Стрелка для открытия/закрытия панели */
#toggle-btn {
  position: absolute;
  top: 20px;
  right: 10px; /* Положение стрелки */
  cursor: pointer;
}

/* Поворот стрелки при развернутой панели */
.sidebar.expanded #toggle-btn img {
  transform: rotate(180deg);
}

.sidebar-arrow {
  /* padding-right: 550px; */
  position: relative;
  left: 50px;
  top: 10px;
}

/* Main content style */
.main {
  margin-left: 120px;
  max-width: 1520px;
  margin: 0 auto;
  padding: 16px;
  position: absolute;
  left: 10%;
  top: 0;
}

.sterl-right {
  display: flex;
  padding-left: 57px;
}
.sidebar-btn {
  background-color: transparent;
  border: none;
}
.main-btn-logs {
  width: 146px;
  height: 34px;
  border-radius: 50px;
  background-color: #3e3d3e;
  border: none;
  color: white;
  font-family: "inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 33px;
}
.main-btn-logs:nth-child(1) {
  background-color: #df4924;
  color: black;
}
.main-btn-in {
  width: 146px;
  height: 34px;
  border-radius: 50px;
  background-color: #3e3d3e;
  border: none;
  color: white;
  font-family: "inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 33px;
}
.main-btn {
  margin-top: 20px;
  display: flex;
  gap: 30px;
}
.main-dash {
  display: flex;
  gap: 30px;
}

/* Стили для поля ввода */
.main-input {
  width: 200px; /* Немного увеличим ширину */
  height: 34px;
  border-radius: 50px;
  background-color: #3e3d3e;
  border: none;
  padding-left: 15px; /* Внутренний отступ для текста */
  color: white; /* Убираем стандартное обрамление */
  margin-right: 10px;
  font-size: 14px;
}
p {
  margin-top: 40px;
}
.main-input::placeholder {
  color: #a3a3a3; /* Цвет плейсхолдера */
}

/* Стили для кнопок */
.main-inputs-btn {
  display: flex;
  gap: 10px; /* Пространство между кнопками */
}

.main-btn-in {
  width: 134px;
  height: 34px;
  /* border-radius: 50%; */
  background-color: #575757; /* Цвет кнопки */
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.main-btn-in:hover {
  background-color: #ff9900; /* Цвет кнопки при наведении */
}

/* Иконки FontAwesome внутри кнопок */
.main-btn-in i {
  color: white;
}

.box {
  position: absolute;
  width: 400px;
  height: 594px;
  top: 133px;
  background-color: #3e3d3e;
  border-radius: 25px;
  left: 90%;
}
.box-input {
  width: 373px;
  height: 41px;
  border-radius: 20px;
  background: transparent;
  border-color: white;
  margin: 20px 13px;
  font-size: 16px;
  text-align: end;
  color: white;
}
.box-input:focus {
  width: 373px;
  transition: width 0.3s ease;
}
.box-small {
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  /* border-bottom: 2px solid black; */
}
.box-h4 {
  font-family: "inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 1px;
  color: white;
}
.box-mph {
  margin-top: 12px;
  padding: 7px 7px;
  width: 61px;
  height: 20px;
  border-radius: 10px;
  font-family: "inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 15px;
  color: white;
  background-color: #df4924;
  border: none;
}
.box-location {
  display: flex;
  font-family: "inter";
  font-size: 16px;
  font-weight: 200;
  line-height: 13px;
  color: white;
  padding-left: 25px;
}
.box-copy {
  padding-left: 5px;
}
.box-p {
  padding-bottom: 20px;
  font-family: "inter";
  padding-left: 25px;
  color: white;
  font-weight: 100;
  line-height: 1px;
  font-size: 16px;
  border-bottom: 2px solid gray;
}
.box-border {
  cursor: pointer;
}
.box-title {
  font-family: "inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  border: 2px solid black;
}
.section {
  border-bottom: 2px solid gray;
  padding: 15px 27px;
  margin: 10px 0;
  /* border-radius: 5px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: "inter";
  color: white;
}
.section-title {
  font-size: 18px;
}
.arrow {
  font-size: 18px;
  color: #ff4500;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}
.expanded .arrow {
  transform: rotate(180deg);
}
.section-content {
  display: none;
  padding: 10px 0;
  color: #ccc;
}
.expanded .section-content {
  display: block;
}
.sidebar p {
  align-items: center;
  padding-left: 30px;
}
@media screen and (max-width: 1690px) {
  .main {
    left: 5%;
  }
  @media screen and (max-width: 1615px) {
    .main {
      left: 0%;
    }
  }
  @media screen and (max-width: 1538px) {
    .main-inputs-btn {
      position: absolute;
      top: 90px;
      left: 161px;
    }
    .main-input {
      position: relative;
      top: 50px;
      right: 200px;
    }
    .main {
      left: 25%;
    }
    .box {
      left: 90%;
      top: 170px;
    }
    @media screen and (max-width: 921px) {
      /* Боковая панель становится шире или уже */
      .sidebar {
        width: 60px; /* Можете изменить на другое значение */
      }

      /* Когда боковая панель развернута */
      .sidebar.expanded {
        width: 180px;
      }

      /* Убираем текст, если не помещается */
      .sidebar p {
        font-size: 12px; /* Уменьшаем текст */
      }

      .main {
        margin-left: 35%; /* Подстраиваем основной контент */
      }

      /* Настройка кнопок для мобильных */
      .main-btn-logs,
      .main-btn-in {
        width: 100px;
        height: 28px;
        font-size: 14px;
      }

      /* Поле ввода на мобильных */
      .main-input {
        width: 150px;
      }
      .body {
        background-repeat: no-repeat;
      }

      .main-input:focus {
        width: 180px;
      }
      .sidebar {
        height: 989px;
      }
      .main-dash {
        gap: 10;
      }
      .box {
        left: 15%;
        top: 170px;
      }
      .main-btn {
        margin-left: 30px;
      }
      .main-inputs-btn {
        position: absolute;
        top: 90px;
        left: 161px;
      }
      .main-input {
        position: relative;
        top: 50px;
        right: 200px;
      }
      .fas1 {
        margin-top: 90px;
      }
      p {
        margin-top: 40px;
      }
    }
  }
}
</style>
  
  
  