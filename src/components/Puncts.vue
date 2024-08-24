<template>
  <div class="container">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <div class="card-number">{{ card.number }}</div>
      <div class="card-title">{{ card.title }}</div>
      <div class="card-description">{{ card.description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          number: "01",
          title: "Real-time status updates",
          description:
            "Streamline compliance across your operations with ever-changing regulations. Keeping your teams compliant can be a challenge, but with WIT intuitive tools and pre-built reports, managing compliance efficiently throughout your operations is effortless.",
        },
        {
          number: "02",
          title: "Access preferred carrier networks",
          description:
            "Streamline compliance across your operations with ever-changing regulations. Keeping your teams compliant can be a challenge, but with WIT intuitive tools and pre-built reports, managing compliance efficiently throughout your operations is effortless.",
        },
        {
          number: "03",
          title: "Find new carriers and grow your network",
          description:
            "Streamline compliance across your operations with ever-changing regulations. Keeping your teams compliant can be a challenge, but with WIT intuitive tools and pre-built reports, managing compliance efficiently throughout your operations is effortless.",
        },
        {
          number: "04",
          title: "Search and access all docs & report",
          description:
            "Streamline compliance across your operations with ever-changing regulations. Keeping your teams compliant can be a challenge, but with WIT intuitive tools and pre-built reports, managing compliance efficiently throughout your operations is effortless.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  max-width: 1440px;
  margin: 0 auto;
}

.card {
  margin-top: 86px;
  flex: 0 1 calc(23% - 20px); /* Чуть уже карточки, чтобы они выглядели пропорционально */
  padding: 20px;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: relative; /* Для позиционирования разделительной полосы */
  max-width: 360px;
}

.card-number {
  font-size: 64px;
  font-weight: 500;
  color: #4e4f51;
  font-family: Poppins;
}

.card-title {
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0;
  font-family: Inter;
}

.card-description {
  font-size: 15px;
  color: #4e4f51;
  font-family: Inter;
  font-weight: 400;
}

/* Полоса разделения */
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
  width: 3px;
  background-color: #efeff6;
}

/* Убираем полосу для последней карточки в ряду */
.card:nth-child(4n)::before {
  display: none;
}

/* Анимация при наведении на все блоки */
.card:hover {
  background-color: #ff5722;
  transform: translateY(-10px);
}

.card:hover .card-number,
.card:hover .card-description,
.card:hover .card-title {
  color: #fff;
}

@media (max-width: 1024px) {
  .card {
    flex: 0 1 calc(48% - 20px); /* 2 карточки в ряд на средних экранах */
  }
}

@media (max-width: 768px) {
  .card {
    flex: 0 1 calc(100% - 20px); /* 1 карточка в ряд на мобильных экранах */
  }
}
</style>
