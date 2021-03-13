<template>
  <div id="app">

    <form>
      <tbody>
        <tr v-for="result in results.character1" :key="result.id">
          <td>{{result.name}}</td>
        </tr>
      </tbody>
    </form>
    <form>
      <tbody>
        <tr v-for="result in results.character2" :key="result.id">
          <td>{{result.name}}</td>
        </tr>
      </tbody>
    </form>
  </div>
</template>

<script>
import CharacterServices from './services/characterservices'

export default {
    data() {
        return {
            result: {
                id: '',
                name: '',
                thumbnail: {
                  path: '',
                  extension: ''
                }
                
              },
              results: {
                character1: [],
                character2: []
              } 

              
            }
            
        },
        mounted() {
        this.showCharacterBlackPanther();
        this.showCharacterThor();
        },
        methods: {
            showCharacterBlackPanther() {
                CharacterServices.getCharacterBlackPanther().then(response => {
                    this.results.character1 = response.data.data.results
                })
            },
            showCharacterThor() {
                CharacterServices.getCharacterThor().then(response => {
                    this.results.character2 = response.data.data.results
                })
            }
        }
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
