<template>
  <div class="quiz-card">
    <h2 class="quiz-title">📝 퀴즈 모드</h2>
    <div v-if="words.length" class="quiz-word">
      <span class="quiz-kanji">{{ currentWord.kanji }}</span>
      <span class="quiz-hiragana">({{ currentWord.hiragana }})</span>
    </div>
    <div v-else class="quiz-word">
      <span class="quiz-kanji">단어를 불러오는 중...</span>
    </div>
    <div class="quiz-input-wrap">
      <input
        v-model="userAnswer"
        :placeholder="
          quizType === 'meaning' ? '뜻을 입력하세요' : '철자를 입력하세요'
        "
        class="quiz-input"
        @keyup.enter="checkAnswer"
        :disabled="!words.length"
        autofocus
      />
      <button
        class="submit-btn"
        @click="checkAnswer"
        :disabled="!words.length || !userAnswer.trim()"
      >
        제출
      </button>
    </div>
    <transition name="fade">
      <p
        v-if="feedback"
        :class="{ feedback: true, correct: isCorrect, wrong: !isCorrect }"
      >
        {{ feedback }}
      </p>
    </transition>
    <button class="next-btn" @click="nextQuestion" v-if="feedback">
      다음 문제
    </button>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
      userAnswer: '',
      feedback: '',
      quizType: 'meaning',
      isCorrect: false,
    };
  },
  computed: {
    currentWord() {
      return this.words.length
        ? this.words[this.currentIndex]
        : {
            kanji: '',
            hiragana: '',
            meaning: '',
          };
    },
  },
  methods: {
    checkAnswer() {
      if (!this.words.length || !this.userAnswer.trim()) return;

      let correct;
      if (this.quizType === 'meaning') {
        // 정답과 사용자 입력을 쉼표로 분리하고 공백 제거
        const correctAnswers = this.currentWord.meaning
          .split(',')
          .map(ans => ans.trim());
        const userAnswers = this.userAnswer.split(',').map(ans => ans.trim());

        // 사용자 답안 중 하나라도 정답 배열에 있으면 정답
        correct = userAnswers.some(userAns => correctAnswers.includes(userAns));

        this.feedback = correct
          ? '정답입니다! 🎉'
          : `오답입니다. 정답: ${this.currentWord.meaning}`;
      }
      this.isCorrect = correct;
    },
    nextQuestion() {
      this.userAnswer = '';
      this.feedback = '';
      if (this.words.length) {
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
      }
      this.isCorrect = false;
    },
  },
};
</script>

<style scoped>
.quiz-card {
  max-width: 420px;
  margin: 2.5em auto;
  padding: 2em 1.5em 2em 1.5em;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(94, 114, 228, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quiz-title {
  font-size: 1.7em;
  color: #5e72e4;
  font-weight: 800;
  margin-bottom: 1.5em;
  letter-spacing: 1px;
  text-align: center;
}

.quiz-word {
  font-size: 1.3em;
  margin-bottom: 1.3em;
  display: flex;
  align-items: center;
  gap: 0.7em;
}

.quiz-kanji {
  font-weight: bold;
  color: #222;
  font-size: 1.5em;
}

.quiz-hiragana {
  color: #888;
  font-size: 1em;
}

.quiz-input-wrap {
  display: flex;
  width: 100%;
  gap: 0.5em;
  margin-bottom: 1em;
}

.quiz-input {
  flex: 1;
  padding: 0.6em 1em;
  border: 1.5px solid #5e72e4;
  border-radius: 8px;
  font-size: 1.1em;
  outline: none;
  transition: border 0.15s;
}
.quiz-input:focus {
  border: 2px solid #825ee4;
}

.submit-btn {
  background: linear-gradient(135deg, #5e72e4 60%, #825ee4 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 1.2em;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.15s, transform 0.12s;
}
.submit-btn:hover:enabled {
  background: linear-gradient(135deg, #825ee4 60%, #5e72e4 100%);
  transform: scale(1.04);
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.feedback {
  margin: 1.2em 0 0.5em 0;
  font-size: 1.15em;
  font-weight: bold;
  text-align: center;
  transition: color 0.15s;
}
.correct {
  color: #18bc9c;
}
.wrong {
  color: #ff4d4f;
}

.next-btn {
  margin-top: 0.5em;
  background: #f5f7fa;
  color: #5e72e4;
  border: none;
  border-radius: 8px;
  padding: 0.5em 1.3em;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.13s;
}
.next-btn:hover {
  background: #e9ecef;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 500px) {
  .quiz-card {
    padding: 1.2em 0.5em;
  }
  .quiz-title {
    font-size: 1.1em;
  }
  .quiz-word {
    font-size: 1em;
    gap: 0.4em;
  }
  .quiz-input,
  .submit-btn {
    font-size: 1em;
    padding: 0.5em 0.7em;
  }
}
</style>
