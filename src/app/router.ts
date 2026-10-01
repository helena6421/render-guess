import { createRouter, createWebHashHistory } from 'vue-router'
import StartView   from '@/views/StartView.vue'
import GameView    from '@/views/GameView.vue'
import ResultsView from '@/views/ResultsView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',        component: StartView },
    { path: '/game',    component: GameView },
    { path: '/results', component: ResultsView },
  ],
})
