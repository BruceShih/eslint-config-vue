<script setup>
import { ref } from 'vue'

const message = ref('Hello, Vue 3 with script setup!')
const counter = ref(0)
const increment = () => counter.value++
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <div>Count: {{ counter }}</div>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
