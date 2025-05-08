<template>
  <div class="level-selector">
    <button
      v-for="level in levels"
      :key="level"
      @click="selectLevel(level)"
      class="level-btn"
    >
      {{ level }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levels: ['N1', 'N2', 'N3', 'N4', 'N5'],
    };
  },
  methods: {
    selectLevel(level) {
      this.$router.push({ name: 'Level', params: { level } });
    },
  },
};
</script>

<style scoped>
.level-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2em;
  margin: 2em 0;
}

.level-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #5e72e4 60%, #825ee4 100%);
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  box-shadow: 0 4px 16px rgba(94, 114, 228, 0.15);
  transition: transform 0.12s, box-shadow 0.12s, background 0.18s;
  cursor: pointer;
  outline: none;
}

.level-btn:hover,
.level-btn:focus {
  transform: scale(1.12);
  background: linear-gradient(135deg, #825ee4 60%, #5e72e4 100%);
  box-shadow: 0 8px 24px rgba(94, 114, 228, 0.25);
}

@media (max-width: 600px) {
  .level-selector {
    gap: 0.6em;
  }
  .level-btn {
    width: 40px;
    height: 40px;
    font-size: 1em;
  }
}
</style>
