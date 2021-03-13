<template>
  <div id="app">
  </div>
</template>

<script>
import CharacterServices from './services/characterservices'

export default {
    mounted() {
      CharacterServices.getCharacterBlackPanther().then((response) => {
        console.log(response);
      })
    },
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
