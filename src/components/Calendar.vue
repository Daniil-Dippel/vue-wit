<template>
    <div class="calendar">
      <div class="calendar-header">
        <button @click="prevMonth">Prev</button>
        <span>{{ currentMonth }} {{ currentYear }}</span>
        <button @click="nextMonth">Next</button>
      </div>
      <div class="calendar-grid">
        <div class="day" v-for="day in days" :key="day">{{ day }}</div>
        <div
          class="date"
          v-for="date in displayedDates"
          :key="date"
          @click="selectDate(date)"
        >
          {{ date }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineEmits } from 'vue';
  
  const emit = defineEmits(['selectDate', 'close']);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const currentMonth = ref(currentDate.getMonth());
  const currentYear = ref(currentDate.getFullYear());
  const displayedDates = computed(() => {
    const firstDay = new Date(currentYear.value, currentMonth.value, 1);
    const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);
    const dates = [];
  
    // Добавляем пустые ячейки до первого дня месяца
    for (let i = 0; i < firstDay.getDay(); i++) {
      dates.push('');
    }
  
    // Заполняем числами
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push(i);
    }
  
    return dates;
  });
  
  const selectDate = (date) => {
    if (date) {
      const selectedDate = new Date(currentYear.value, currentMonth.value, date);
      const formattedDate = selectedDate.toLocaleDateString(); // Форматируем дату
      emit('selectDate', formattedDate); // Отправляем выбранную дату
    }
  };
  
  const prevMonth = () => {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value--;
    } else {
      currentMonth.value--;
    }
  };
  
  const nextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  };
  </script>
  
  <style scoped>
  .calendar {
    position: absolute;
    background: white; /* Цвет фона календаря */
    border: 1px solid #ddd; /* Граница календаря */
    z-index: 10; /* Показать календарь поверх других элементов */
  }
  .calendar-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  .day,
  .date {
    text-align: center;
    padding: 10px;
    cursor: pointer;
  }
  .date:hover {
    background-color: #f0f0f0; /* Эффект наведения на даты */
  }
  </style>