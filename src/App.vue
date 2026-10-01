<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/domain/game/gameStore'

const router = useRouter()
const store  = useGameStore()

onMounted(() => {
  const restored = store.loadState()
  if (restored) {
    if (store.phase === 'results') router.replace('/results')
    else if (store.phase !== 'setup') router.replace('/game')
  }
})
</script>

<template>
  <RouterView />
</template>
