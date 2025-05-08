<template>
  <div class="favorites-container">
    <h2 class="favorites-title">⭐ 즐겨찾기 단어</h2>
    <ul class="favorites-list" v-if="favorites.length > 0">
      <li v-for="character in favorites" :key="character" class="favorite-item">
        {{ character }}
      </li>
    </ul>
    <div v-else class="empty-message">아직 즐겨찾기한 단어가 없어요!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
    };
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

.favorites-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.favorite-item {
  background: linear-gradient(90deg, #e9ecef 60%, #f5f7fa 100%);
  color: #333;
  font-size: 1.1em;
  margin-bottom: 0.7em;
  padding: 0.7em 1.2em;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(94, 114, 228, 0.06);
  transition: background 0.18s;
  font-weight: 500;
  letter-spacing: 0.5px;
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
