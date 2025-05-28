<template>
  <!-- 템플릿 부분은 기존과 동일 -->
  <div :class="['level-container', { mobile: isMobile }]">
    <h2>{{ level }} 단어 리스트</h2>
    <div class="progress">{{ currentIndex + 1 }} / {{ words.length }}</div>
    <WordCard
      v-if="currentWord"
      :word="currentWord"
      :favorites="favorites"
      @prev-word="prevWord"
      @next-word="nextWord"
      @toggle-favorite="toggleFavorite"
    />
    <div class="button-group">
      <button class="nav-btn prev-btn" @click="prevWord">← 이전</button>
      <button class="nav-btn next-btn" @click="nextWord">다음 →</button>
    </div>
    <div class="action-group">
      <button class="random-btn" @click="randomWord">🎲 랜덤 단어</button>
      <router-link
        class="quiz-link"
        :to="{
          name: 'Quiz',
          params: { level },
          query: { start: currentIndex },
        }"
      >
        📝 퀴즈 모드
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, inject } from 'vue';
import { useRoute } from 'vue-router';
import { useLocalStorage } from '@vueuse/core';
import WordCard from '../components/WordCard.vue';
import wordsData from '../assets/words/words.json';

const route = useRoute();
const isMobile = inject('isMobile');

// 반응형 데이터
const level = ref(route.params.level || 'N1');
const words = ref([...wordsData]);
const currentIndex = useLocalStorage(
  'jlpt-quiz-index',
  Number(route.query.start) || 0
);
const favorites = useLocalStorage('favorites', []);

const filteredWords = computed(() =>
  words.value.filter(
    word => !favorites.value.some(fav => fav.kanji === word.kanji)
  )
);
// 계산된 속성
const currentWord = computed(() =>
  filteredWords.value.length
    ? filteredWords.value[currentIndex.value]
    : { kanji: '', hiragana: '', meaning: '' }
);

// 감시자
watch(currentIndex, newVal => {
  localStorage.setItem('jlpt-quiz-index', newVal);
});

// 메서드
const prevWord = () => {
  currentIndex.value =
    (currentIndex.value - 1 + filteredWords.value.length) %
    filteredWords.value.length;
};

const nextWord = () => {
  currentIndex.value = (currentIndex.value + 1) % filteredWords.value.length;
};

const randomWord = () => {
  currentIndex.value = Math.floor(Math.random() * filteredWords.value.length);
};

const toggleFavorite = word => {
  const index = favorites.value.findIndex(f => f.kanji === word.kanji);

  if (index === -1) {
    // 즐겨찾기 추가
    favorites.value.push({
      kanji: word.kanji,
      hiragana: word.hiragana,
      meaning: word.meaning,
    });

    // 전체 단어 리스트에서 제거
    const wordIndex = words.value.findIndex(w => w.kanji === word.kanji);
    if (wordIndex !== -1) {
      words.value.splice(wordIndex, 1);
      if (currentIndex.value >= words.value.length) {
        currentIndex.value = words.value.length - 1;
      }
    }
  } else {
    // 즐겨찾기 제거
    favorites.value.splice(index, 1);
    // 전체 단어 리스트에 다시 추가
    words.value.push(word);
  }
};
</script>

<style>
:root {
  --primary: #2c3e50;
  --secondary: #a8d8ea;
  --accent: #ff9a9e;
}

.level-container {
  max-width: 480px;
  margin: 2rem auto;
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  background: #f8f9fa;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(44, 62, 80, 0.08);
  text-align: center;
  transition: background 0.3s;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--primary);
  margin-bottom: 0.5em;
}

.progress {
  font-size: 1rem;
  color: #888;
  margin-bottom: 1em;
}

.button-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0 1rem 0;
}

.nav-btn {
  padding: 0.7em 1.2em;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: var(--secondary);
  color: var(--primary);
  cursor: pointer;
  transition: background 0.2s;
}

.nav-btn:hover {
  background: #74b9ff;
  color: #fff;
}

.action-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.2rem;
}

.random-btn {
  padding: 0.7em 1.2em;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.random-btn:hover {
  background: #f67280;
}

.quiz-link {
  display: inline-block;
  padding: 0.7em 1.2em;
  font-size: 1rem;
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  text-decoration: none;
  transition: background 0.2s;
}

.quiz-link:hover {
  background: #34495e;
}

.word-card {
  transition: transform 0.3s ease;
}
.word-card:hover {
  transform: translateY(-5px) scale(1.02);
}

@media (max-width: 600px) {
  .level-container {
    padding: 1rem 0.5rem 1.5rem 0.5rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  .nav-btn,
  .random-btn,
  .quiz-link {
    font-size: 0.95rem;
    padding: 0.6em 0.8em;
  }
}

.dark .level-container {
  background: #2c3e50;
  color: #fff;
}
.dark h2 {
  color: #a8d8ea;
}
.dark .nav-btn {
  background: #34495e;
  color: #a8d8ea;
}
.dark .nav-btn:hover {
  background: #636e72;
  color: #fff;
}
.dark .random-btn {
  background: #ff9a9e;
  color: #2c3e50;
}
.dark .random-btn:hover {
  background: #f67280;
  color: #fff;
}
.dark .quiz-link {
  background: #a8d8ea;
  color: #2c3e50;
}
.dark .quiz-link:hover {
  background: #74b9ff;
  color: #2c3e50;
}
</style>
