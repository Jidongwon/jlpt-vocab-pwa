<template>
  <div class="favorites-container">
    <h2 class="favorites-title">⭐ 즐겨찾기 단어</h2>
    <ul class="favorites-list" v-if="favorites.length > 0">
      <li
        v-for="word in filteredFavorites"
        :key="word.kanji"
        class="favorite-item"
      >
        <div class="word-kanji">{{ word.kanji }}</div>
        <div class="word-hiragana">{{ word.hiragana }}</div>
        <div class="word-meaning">{{ word.meaning }}</div>
      </li>
    </ul>
    <div v-else class="empty-message">아직 즐겨찾기한 단어가 없어요!</div>
    <button @click="clearFavorites" class="clear-btn">즐겨찾기 초기화</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [],
    };
  },
  computed: {
    filteredFavorites() {
      return this.favorites.filter(
        word =>
          typeof word === 'object' &&
          word.kanji &&
          word.hiragana &&
          word.meaning
      );
    },
  },
  methods: {
    clearFavorites() {
      localStorage.removeItem('favorites');
      this.favorites = [];
    },
  },
  mounted() {
    try {
      this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch (e) {
      console.error('Error parsing favorites:', e);
      this.favorites = [];
      localStorage.removeItem('favorites');
    }
  },
};
</script>
<style scoped>
.favorites-container {
  max-width: 400px;
  margin: 2em auto;
  padding: 2em 1em 1.5em 1em;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(94, 114, 228, 0.09);
}

.favorites-title {
  font-size: 1.5em;
  color: #5e72e4;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.2em;
  letter-spacing: 1px;
}

.clear-btn {
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.favorites-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.favorite-item {
  background: linear-gradient(90deg, #e9ecef 60%, #f5f7fa 100%);
  color: #333;
  margin-bottom: 0.7em;
  padding: 1em 1.2em;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(94, 114, 228, 0.06);
  transition: background 0.18s;
}

.word-kanji {
  font-size: 1.3em;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.2em;
}

.word-hiragana {
  font-size: 1em;
  color: #666;
  margin-bottom: 0.4em;
}

.word-meaning {
  font-size: 0.95em;
  color: #444;
}

.favorite-item:last-child {
  margin-bottom: 0;
}

.empty-message {
  color: #aaa;
  text-align: center;
  font-size: 1.1em;
  margin-top: 1.5em;
}

@media (max-width: 500px) {
  .favorites-container {
    padding: 1em 0.5em 1em 0.5em;
  }
  .favorites-title {
    font-size: 1.2em;
  }
  .favorite-item {
    font-size: 1em;
    padding: 0.6em 0.7em;
  }
}
</style>
