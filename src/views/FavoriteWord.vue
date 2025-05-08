<template>
  <div>
    <h2>즐겨찾기 단어</h2>
    <ul>
      <li v-for="character in favorites" :key="character">{{ character }}</li>
    </ul>
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
