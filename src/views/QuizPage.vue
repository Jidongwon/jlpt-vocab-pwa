<template>
  <QuizCard :words="words" />
</template>

<script>
import QuizCard from '../components/QuizCard.vue';
import words from '../assets/words/words.json';

export default {
  components: { QuizCard },
  data() {
    return {
      words: words,
    };
  },
};
</script>
