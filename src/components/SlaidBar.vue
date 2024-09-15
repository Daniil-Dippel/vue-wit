<template>
  <div :class="['sidebar', { expanded: isExpanded }]">
    <div class="sterl-right">
      <button @click="toggleSidebar" class="sidebar-btn">
        <img class="sidebar-arrow" src="../icons/arrow.svg" alt="" />
      </button>
    </div>
    <p
      v-for="(item, index) in menuItems"
      :key="index"
      @click="setActive(index)"
      :class="{ active: activeIndex === index }"
      class="menu-item"
    >
      <img
        :src="activeIndex === index ? item.activeIconSrc : item.iconSrc"
        :alt="item.text"
        :class="item.iconClass"
      />
      <span
        :class="{ 'active-text': activeIndex === index }"
        v-if="isExpanded"
        >{{ item.text }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      activeIndex: null,
      menuItems: [
        {
          text: "Overview",
          iconClass: "fa-tachometer-alt",
          iconSrc: "../icons/1. Overview (1).svg",
          activeIconSrc: "../icons/1. Overview.svg", 
        },
        {
          text: "Feedback",
          iconClass: "fas fa-clipboard-list",
          iconSrc: "../icons/10. Feedback.svg",
          activeIconSrc: "../icons/10. Feedback-active.svg", // Путь к активной иконке
        },
        {
          text: "Dispatch",
          iconClass: "fas fa-user",
          iconSrc: "../icons/2. Dispatch.svg",
          activeIconSrc: "../icons/2. Dispatch-active.svg", // Путь к активной иконке
        },
        {
          text: "ELD",
          iconClass: "fas fa-map-marker-alt",
          iconSrc: "../icons/3. ELD.svg",
          activeIconSrc: "../icons/Icon - ELD.svg",
        },
        {
          text: "Report",
          iconClass: "fas fa-cog",
          iconSrc: "../icons/4. Report.svg",
          activeIconSrc: "../icons/Icon - ELD.svg",
        },
        {
          text: "List",
          iconClass: "fas fa-cog",
          iconSrc: "../icons/5. List.svg",
          activeIconSrc: "../icons/Icon - ELD.svg",
        },
        {
          text: "Chat",
          iconClass: "fas fa-cog",
          iconSrc: "../icons/6. Chat.svg",
          activeIconSrc: "../icons/Icon - ELD.svg",
        },
        {
          text: "Notification",
          iconClass: "fas fa-cog",
          iconSrc: "../icons/7. Notofocations.svg",
          activeIconSrc: "../icons/Icon - ELD.svg",
        },
        {
          text: "User",
          iconClass: "fas1 fa-cog",
          iconSrc: "../icons/user.svg",
          activeIconSrc: "../icons/Icon - ELD.svg",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
    },
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.maps {
  height: 100%;
  margin: 0;
}

.maps {
  background-image: url("../icons/map.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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
  filter: hue-rotate(0deg) brightness(1) contrast(1) saturate(1) sepia(0) drop-shadow(0 0 0) !important; /* Или вы можете использовать другой способ изменения цвета */
}

.active-text {
  color: #DF4924; /* Цвет текста при активном состоянии */
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
  margin-left: 60px;
  padding: 16px;
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
  justify-content: space-evenly;
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
  color: white;
  outline: none; /* Убираем стандартное обрамление */
  margin-right: 10px;
  font-size: 14px;
  transition: width 0.3s ease;
}
p {
  margin-top: 40px;
}
.main-input::placeholder {
  color: #a3a3a3; /* Цвет плейсхолдера */
}

/* Изменение ширины при фокусе */
.main-input:focus {
  width: 250px; /* Увеличение при фокусе */
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
  left: 1100px;
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

@media screen and (max-width: 768px) {
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
    margin-left: 60px; /* Подстраиваем основной контент */
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
    left: 150px;
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
</style>
