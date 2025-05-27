<template>
  <QuizCard :words="words" :is-mobile="isMobile" />
</template>

<script setup>
import { inject } from 'vue';
import QuizCard from '../components/QuizCard.vue';
import words from '../assets/words/words.json';

// 상위(App.vue 등)에서 provide('isMobile', ...) 했다고 가정
const isMobile = inject('isMobile');
</script>
