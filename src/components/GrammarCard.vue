<template>
  <div class="word-card">
    <div class="kanji-block">
      <span class="kanji">{{ word.hiragana }}</span>
      <span class="reading">{{ word.meaning }}</span>
      <span class="meaning">{{ word.example }}</span>
    </div>
    <div class="btn-group">
      <button
        class="fav-btn"
        :class="{ active: isFavorite }"
        @click="toggleFavorite"
      >
        {{ isFavorite ? '★ 즐겨찾기 해제' : '☆ 즐겨찾기' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  word: {
    type: Object,
    required: true,
  },
  favorites: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['toggle-favorite']);

const isFavorite = computed(() =>
  props.favorites.some(f => f.kanji === props.word.kanji)
);

function toggleFavorite() {
  emit('toggle-favorite', {
    kanji: props.word.kanji,
    hiragana: props.word.hiragana,
    meaning: props.word.meaning,
  });
}
</script>

<style scoped>
.word-card {
  background: var(--card-bg, #fff);
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(44, 62, 80, 0.08);
  padding: 2rem 1rem 1.2rem 1rem;
  margin: 1.5rem 0;
  text-align: center;
  transition: background 0.3s;
}
.kanji-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.7em;
}
.kanji {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary, #2c3e50);
  margin-bottom: 0.4em;
  white-space: nowrap;
  word-break: keep-all;
}
.reading {
  font-size: 1.1rem;
  color: #888;
  margin-top: 0.1em;
}
.btn-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1em;
}
.toggle-btn,
.fav-btn {
  padding: 0.5em 1em;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  background: var(--secondary, #a8d8ea);
  color: var(--primary, #2c3e50);
  transition: background 0.2s, color 0.2s;
}
.toggle-btn:hover {
  background: #74b9ff;
  color: #fff;
}
.fav-btn {
  background: var(--accent, #ff9a9e);
  color: #fff;
}
.fav-btn.active,
.fav-btn:hover {
  background: #f67280;
  color: #fff;
}
.meaning {
  font-size: 1.2rem;
  margin: 1em 0 0.7em 0;
  color: var(--primary, #2c3e50);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.nav-btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1.2em;
  gap: 1rem;
}
.nav-btn {
  flex: 1;
  padding: 0.5em 0.7em;
  border: none;
  border-radius: 8px;
  background: var(--secondary, #a8d8ea);
  color: var(--primary, #2c3e50);
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.nav-btn:hover {
  background: #74b9ff;
  color: #fff;
}
@media (max-width: 600px) {
  .word-card {
    padding: 1rem 0.5rem 1rem 0.5rem;
  }
  .kanji {
    font-size: 1.5rem;
  }
  .meaning {
    font-size: 1rem;
  }
}
:root {
  --primary: #2c3e50;
  --secondary: #a8d8ea;
  --accent: #ff9a9e;
}
</style>
