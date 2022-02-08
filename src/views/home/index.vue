<template>
  <LookMe />
</template>

<script setup>
import { onMounted } from 'vue'
import LookMe from '@/components/LookMe.vue'

onMounted(() => {
  console.log('我是首页的onMounted生命周期')
})
</script>
