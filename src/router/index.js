import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LevelPage from '@/views/LevelPage.vue';
import FavoriteWord from '@/views/FavoriteWord.vue';
import QuizPage from '@/views/QuizPage.vue';
import AdverbPage from '@/views/AdverbPage.vue';
import SynonymPage from '@/views/SynonymPage.vue';
import GrammarPage from '@/views/GrammarPage.vue';
const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/level/:level', name: 'Level', component: LevelPage },
  { path: '/favorites', name: 'Favorites', component: FavoriteWord },
  { path: '/quiz/:level', name: 'Quiz', component: QuizPage },
  { path: '/n1/adverb', name: 'Adverb', component: AdverbPage },
  { path: '/n1/synonym', name: 'Synonym', component: SynonymPage },
  { path: '/n1/grammar', name: 'Grammar', component: GrammarPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
