<template>
  <div id="app">
    <nav>
      <router-link to="/">홈</router-link>
      |
      <router-link to="/favorites">즐겨찾기</router-link>
      <button class="dark-toggle" @click="toggleDark()">
        {{ isDark ? '🌙 다크모드 해제' : '🌞 다크모드 적용' }}
      </button>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import {
  useDark,
  useToggle,
  useBreakpoints,
  breakpointsTailwind,
} from '@vueuse/core';
import { provide } from 'vue';

// isDark: 반응형 불린, toggleDark: 함수
const isDark = useDark({
  storageKey: 'jlpt-dark', // localStorage에 저장되는 key
  valueDark: 'dark', // 다크모드 클래스 이름
  valueLight: '', // 라이트모드 클래스(없으면 '')
  selector: 'html',
});
const toggleDark = useToggle(isDark);

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smallerOrEqual('sm');
provide('isMobile', isMobile);
</script>

<style>
:root {
  --primary: #2c3e50;
  --secondary: #a8d8ea;
  --accent: #ff9a9e;
  --card-bg: #fff;
}
body,
#app {
  background: #f8f9fa;
  color: var(--primary);
  min-height: 100vh;
}
nav {
  padding: 1em;
  background-color: #f0f0f0;
  display: flex;
  gap: 1em;
  align-items: center;
}
nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: var(--accent, #ff9a9e);
}
.dark-toggle {
  margin-left: auto;
  padding: 0.4em 1em;
  border-radius: 8px;
  border: none;
  background: var(--secondary, #a8d8ea);
  color: var(--primary, #2c3e50);
  cursor: pointer;
  font-size: 1em;
  transition: background 0.2s;
}
.dark-toggle:hover {
  background: #74b9ff;
  color: #fff;
}
.dark {
  --primary: #a8d8ea;
  --secondary: #34495e;
  --accent: #f67280;
  --card-bg: #2c3e50;
  background: #2c3e50;
  color: #fff;
}
.dark nav {
  background: #34495e;
}
.dark nav a {
  color: #a8d8ea;
}
.dark nav a.router-link-exact-active {
  color: #f67280;
}
</style>
