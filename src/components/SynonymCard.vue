<template>
  <div class="word-card">
    <div class="synonym-pair">
      <div class="word-item">
        <span class="kanji">{{ word.word1.kanji }}</span>
        <span class="hiragana">({{ word.word1.hiragana }})</span>
      </div>
      <span class="symbol">≒</span>
      <div class="word-item">
        <span class="kanji">{{ word.word2.kanji }}</span>
        <span class="hiragana">({{ word.word2.hiragana }})</span>
      </div>
    </div>
    <div class="meaning">{{ word.word1.meaning }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  word: {
    type: Object,
    required: true,
  },
  favorites: {
    type: Array,
    default: () => [],
  },
});
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
.synonym-pair {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  margin-bottom: 1.2em;
}
.word-item {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
}
.symbol {
  font-size: 2em;
  color: var(--accent);
}
.kanji {
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--primary, #2c3e50);
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
  background: #ffffff;
}
</style>
