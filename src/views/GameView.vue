<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/domain/game/gameStore'
import GameBoard from '@/components/game/GameBoard.vue'

const router = useRouter()
const store  = useGameStore()

onMounted(() => {
  if (store.phase === 'setup') router.replace('/')
  if (store.phase === 'results') router.replace('/results')
})

watch(() => store.phase, (p) => {
  if (p === 'results') router.push('/results')
})
</script>

<template>
  <!-- GameBoard takes 100vh, no extra wrapping needed -->
  <GameBoard />
</template>
