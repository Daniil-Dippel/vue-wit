<template>
  <div class="input-container">
    <input
      type="text"
      class="window-input input-svg border-block__width"
      v-model="formattedDate"
      readonly
    />
    <span  @click="toggleCalendar" class="icon">
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
    <Calendar
      v-if="isCalendarVisible"
      @selectDate="handleDateSelect"
      @close="closeCalendar"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import Calendar from './Calendar.vue'; // Импортируйте компонент календаря

const props = defineProps(['modelValue']); // Получаем дату от родителя
const formattedDate = ref(props.modelValue); // Локальная переменная для даты
const isCalendarVisible = ref(false);

const toggleCalendar = () => {
  isCalendarVisible.value = !isCalendarVisible.value;
};

const handleDateSelect = (date) => {
  formattedDate.value = date; // Устанавливаем выбранную дату
  isCalendarVisible.value = false; // Скрываем календарь после выбора даты
  emit('update:modelValue', date); // Обновляем дату в родительском компоненте
};

const closeCalendar = () => {
  isCalendarVisible.value = false; // Закрыть календарь
};
</script>

<style>
</style>