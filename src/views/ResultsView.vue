<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/domain/game/gameStore'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()
const store  = useGameStore()

if (store.phase !== 'results') router.replace('/')

const sorted  = computed(() => [...store.teams].sort((a, b) => b.score - a.score))
const winners = computed(() => store.winners)
const isTie   = computed(() => winners.value.length > 1)

const medals = ['🥇', '🥈', '🥉']

function newRound() { store.newRound(); router.push('/game') }
function setupTeams() { store.backToSetup(); router.push('/') }
</script>

<template>
  <div class="results-page">
    <div class="bg-blob" style="width:500px;height:500px;background:#c4b5fd;top:-160px;right:-120px" />
    <div class="bg-blob" style="width:380px;height:380px;background:#fde68a;bottom:-90px;left:-80px" />
    <div class="bg-blob" style="width:300px;height:300px;background:#fbcfe8;top:35%;left:20%" />

    <div class="results-wrap">
      <!-- Winner banner -->
      <div class="winner-banner">
        <div class="banner-confetti">🎊 🎉 🎊</div>
        <div class="trophy">🏆</div>
        <h1 v-if="!isTie">{{ winners[0]?.name }}</h1>
        <h1 v-else>Ничья! 🤝</h1>
        <p v-if="isTie" class="tie-sub">{{ winners.map(w => w.name).join(' и ') }}</p>
        <div class="winner-score-badge">{{ winners[0]?.score }} очков</div>
      </div>

      <!-- Leaderboard -->
      <div class="card">
        <h2 class="card-title">📊 Итоговый счёт</h2>
        <div class="rank-list">
          <div
            v-for="(team, i) in sorted"
            :key="team.id"
            class="rank-row"
            :class="{ 'rank-row--winner': winners.some(w => w.id === team.id) }"
          >
            <span class="rank-medal">{{ medals[i] ?? `${i + 1}.` }}</span>
            <span class="rank-name">{{ team.name }}</span>
            <span class="rank-pts">{{ team.score }}</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="actions">
        <AppButton size="lg" @click="newRound">↺ Ещё раунд</AppButton>
        <AppButton size="lg" variant="secondary" @click="setupTeams">⚙ Изменить команды</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.results-page {
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  position: relative;
}

.results-wrap {
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
}

/* Winner banner */
.winner-banner {
  text-align: center;
  padding: 28px 24px;
  background: var(--bg-card);
  border: var(--border-black3);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-hard-lg);
  position: relative;
  overflow: hidden;
}
.banner-confetti {
  font-size: 24px;
  margin-bottom: 4px;
  letter-spacing: 8px;
}
.trophy { font-size: 72px; margin-bottom: 4px; }
h1 {
  font-size: clamp(28px, 6vw, 44px);
  font-weight: 900;
  letter-spacing: -1px;
  margin-bottom: 6px;
}
.tie-sub { font-size: 18px; color: var(--text-secondary); margin-bottom: 10px; }

.winner-score-badge {
  display: inline-block;
  background: var(--color-violet-bright);
  color: white;
  border: var(--border-black);
  border-radius: 999px;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 800;
  box-shadow: var(--shadow-hard-sm);
  margin-top: 6px;
}

/* Card */
.card {
  background: var(--bg-card);
  border: var(--border-black);
  border-radius: var(--border-radius-xl);
  padding: 20px 24px;
  box-shadow: var(--shadow-hard-md);
}
.card-title { font-size: 18px; font-weight: 900; margin-bottom: 14px; }

/* Leaderboard */
.rank-list { display: flex; flex-direction: column; gap: 8px; }
.rank-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: var(--border-radius-sm);
  background: var(--bg-surface);
  border: 2px solid transparent;
  font-size: 15px;
}
.rank-row--winner {
  border-color: var(--color-violet-bright);
  background: var(--color-violet-light);
  box-shadow: var(--shadow-hard-violet);
}

.rank-medal { font-size: 22px; width: 30px; text-align: center; }
.rank-name  { flex: 1; font-weight: 700; }
.rank-pts   { font-size: 24px; font-weight: 900; color: var(--color-violet-bright); }

/* Actions */
.actions { display: flex; gap: 12px; flex-wrap: wrap; }
.actions > * { flex: 1; }
</style>
