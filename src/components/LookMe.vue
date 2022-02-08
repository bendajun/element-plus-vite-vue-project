<script setup>
import { ref } from 'vue'

const color = ref('red')
</script>

<template>
  <div>LookMe</div>
  <button @click="color = color === 'red' ? 'green' : 'red'">Color is: {{ color }}</button>
</template>

<style scoped>
button {
  color: v-bind(color);
}
</style>
