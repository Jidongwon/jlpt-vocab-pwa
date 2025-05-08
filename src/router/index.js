import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LevelPage from '@/views/LevelPage.vue';
import FavoriteWord from '@/views/FavoriteWord.vue';
import QuizPage from '@/views/QuizPage.vue';
const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/level/:level', name: 'Level', component: LevelPage },
  { path: '/favorites', name: 'Favorites', component: FavoriteWord },
  { path: '/quiz/:level', name: 'Quiz', component: QuizPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
