<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/infa.jpg">
    <HelloWorld msg="Lab 6 Vue"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
