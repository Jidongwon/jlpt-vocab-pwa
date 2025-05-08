<template>
  <div class="level-selector">
    <button @click="selectLevel('N1')">N1</button>
    <button @click="selectLevel('N2')">N2</button>
    <button @click="selectLevel('N3')">N3</button>
    <button @click="selectLevel('N4')">N4</button>
    <button @click="selectLevel('N5')">N5</button>
  </div>
</template>

<script>
export default {
  methods: {
    selectLevel(level) {
      this.$router.push({ name: 'Level', params: { level } });
    },
  },
};
</script>

<style scoped>
.level-selector button {
  margin-right: 0.5em;
  padding: 0.5em 1em;
}
</style>
