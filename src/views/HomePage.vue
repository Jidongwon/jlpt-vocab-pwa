<template>
  <div class="app-container">
    <h1 class="app-title">JLPT 단어 학습 앱</h1>
    <LevelSelector />
  </div>
</template>

<script>
import LevelSelector from '../components/LevelSelector.vue';

export default {
  components: { LevelSelector },
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%);
  padding-top: 5vh;
}

.app-title {
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  font-size: 2.5em;
  font-weight: 800;
  color: #5e72e4;
  margin-bottom: 2.5em;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(94, 114, 228, 0.08);
  text-align: center;
}

/* LevelSelector의 버튼 스타일은 LevelSelector.vue에서 관리 */
</style>
