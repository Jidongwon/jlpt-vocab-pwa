<template>
  <div class="quiz-card">
    <h2>퀴즈 모드</h2>
    <p>단어: {{ currentWord.character }} ({{ currentWord.kunyomi }})</p>
    <div v-if="quizType === 'meaning'">
      <input v-model="userAnswer" placeholder="뜻을 입력하세요" />
    </div>
    <div v-else>
      <input v-model="userAnswer" placeholder="철자를 입력하세요" />
    </div>
    <button @click="checkAnswer">제출</button>
    <p v-if="feedback">{{ feedback }}</p>
    <button @click="nextQuestion">다음 문제</button>
  </div>
</template>

<script>
export default {
  props: {
    words: Array,
  },
  data() {
    return {
      currentIndex: 0,
      userAnswer: '',
      feedback: '',
      quizType: 'meaning', // or 'spelling'
    };
  },
  computed: {
    currentWord() {
      return this.words[this.currentIndex];
    },
  },
  methods: {
    checkAnswer() {
      if (this.quizType === 'meaning') {
        if (this.userAnswer.trim() === this.currentWord.meaning) {
          this.feedback = '정답입니다!';
        } else {
          this.feedback = `오답입니다. 정답: ${this.currentWord.meaning}`;
        }
      } else {
        if (this.userAnswer.trim() === this.currentWord.kunyomi) {
          this.feedback = '정답입니다!';
        } else {
          this.feedback = `오답입니다. 정답: ${this.currentWord.kunyomi}`;
        }
      }
    },
    nextQuestion() {
      this.userAnswer = '';
      this.feedback = '';
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
    },
  },
};
</script>

<style scoped>
.quiz {
  border: 1px solid #ccc;
  padding: 1em;
  border-radius: 8px;
}
input {
  margin-bottom: 0.5em;
  width: 100%;
  padding: 0.5em;
}
button {
  margin-right: 0.5em;
}
</style>
