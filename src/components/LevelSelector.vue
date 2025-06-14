<template>
  <div class="level-selector">
    <div v-for="(categories, level) in levels" :key="level" class="level-group">
      <button @click="selectLevel(level)" class="level-btn">
        {{ level }}
      </button>
      <div class="category-buttons" v-if="level === 'N1'">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectCategory(level, category.id)"
          class="category-btn"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const levels = ref({
  N1: [
    { id: 'adverb', name: '부사', path: '/n1/adverb' },
    { id: 'synonym', name: '동의어', path: '/n1/synonym' },
    { id: 'grammar', name: '문법', path: '/n1/grammar' },
  ],
  N2: [],
  N3: [],
  N4: [],
  N5: [],
});

function selectLevel(level) {
  router.push({ name: 'Level', params: { level } });
}

function selectCategory(level, categoryId) {
  const category = levels.value[level].find(c => c.id === categoryId);
  if (category) {
    router.push(category.path);
  }
}
</script>

<style scoped>
.level-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2em;
  margin: 2em 0;
}

.level-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8em;
}

.category-buttons {
  display: flex;
  gap: 0.6em;
}

.category-btn {
  padding: 0.5em 1em;
  border: none;
  border-radius: 8px;
  background: #f5f7fa;
  color: #5e72e4;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.category-btn:hover {
  background: #e9ecef;
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
