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

<script>
export default {
  props: {
    word: {
      type: Object,
      required: true,
    },
    favorites: {
      type: Array,
      default: () => [],
    },
  },
};
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
    font-size: 2.1rem;
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
