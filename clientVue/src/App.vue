<script setup>
import { ref } from 'vue'
import axios from 'axios'

const textInput = ref('')
let results = ref([])
let count = ref(0)

async function onSubmit() {
  try {
    const response = await axios.post('/api', { text: textInput.value })
    // result.value = response.data.result
    results.value.push(response.data.result)
  } catch (error) {
    console.error(error)
  }
  textInput.value = ''
  count.value++
}
</script>

<template>
  <main class="main">
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Какой-нибудь текст" v-model="textInput">
      <input type="submit" value="Тест Express">
    </form>
    <div v-for="(item, index) in results" class="result">{{ index + 1 + ': ' + item }}</div>
  </main>
</template>

<style scoped>
.main {
  width: 250px;
  margin: 200px auto;
  gap: 5px;
  display: flex;
  flex-direction: column;
}

.main>form {
  display: flex;
  flex-direction: column;
  transition: 0.5s;
}

.main>form>input {
  margin: 2px;
  outline: none;
  transition: 0.2s all;

}


input[type="text"] {
  padding: 5px;
  border-radius: 10px 10px 0 0;
  background-color: rgb(255, 252, 247);
  border: 2px solid #000;
  
}

input[type="text"]:focus {
  background-color: #000;
  color: #fff;
  border: none;
  border: 2px solid #000;
  transition: 0.2s all;
  
}

input[type="submit"] {
  padding: 5px;
  border-radius: 0 0 10px 10px;
  background-color: rgb(255, 252, 247);
  border: 2px solid #000;
  transition: 0.1s;

}

input[type="submit"]:active {
  background-color: #000;
  color: #fff;
}

</style>
