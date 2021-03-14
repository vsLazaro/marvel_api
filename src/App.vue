<template>
  <div id="app">
      <nav class="nav-height">
          <div class="nav-wrapper" >
              <a href="#" class="brand-logo center">
                  <img src="./assets/marvel.png" alt="Logo da Marvel" class="responsive-img logo">
              </a>
          </div>
      </nav>
      <div class="container stretch">      
          <section id="iron-man-section" class="item" v-for="result in results.character1" :key="result.id">
              <div id="iron-man-polaroid" class="character-img">
                  <div class="centralize-img">
                      <img :src="result.thumbnail.path + '/standard_fantastic.' + result.thumbnail.extension" alt="Iron Man Photo">
                  </div>
                  <h1>{{result.name}}</h1>
                  <p id="iron-man-storie-one" class="button-before-click">- First one: {{result.stories.items[0].name}}</p>
                  <p id="iron-man-storie-two" class="button-before-click">- Second onde {{result.stories.items[1].name}}</p>   
              </div>
              <a id="iron-man-button" class="waves-effect waves-light btn-small red darken-3 character-button" v-on:click="showIronManStories()">See More</a>              
          </section>
          <section id="thor-section" class="item" v-for="result in results.character2" :key="result.id">
              <div id="thor-polaroid" class="character-img">
                  <div class="centralize-img">
                      <img :src="result.thumbnail.path + '/standard_fantastic.' + result.thumbnail.extension" alt="Thor Photo">
                  </div>  
                  <h1>{{result.name}}</h1>
                  <p id="thor-storie-one" class="button-before-click">- First one: {{result.stories.items[0].name}}</p>
                  <p id="thor-storie-two" class="button-before-click">- Second one: {{result.stories.items[1].name}}</p>
              </div>
              <a id="thor-button" class="waves-effect waves-light btn-small red darken-3 character-button" v-on:click="showThorStories()">See More</a>              
          </section>          
      </div>
      <section class="align-return-button"> 
          <a id="return-button" class="waves-effect waves-light btn-small red darken-3 return-button" v-on:click="returnHomePage()"><i class="material-icons right">keyboard_return</i>Return</a>
      </section>
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
                },
                stories: {
                  items: [
                    {
                      name: ''
                    },
                    {
                      name: ''
                    }
                  ]
                }
                
              },
              results: {
                character1: [],
                character2: []
              },
              counter: '' 

              
            }
            
        },
        mounted() {
        this.showCharacterIronMan()
        this.showCharacterThor()
        },
        methods: {
            showCharacterIronMan() {
                CharacterServices.getCharacterIronMan().then(response => {
                    this.results.character1 = response.data.data.results
                })
            },
            showCharacterThor() {
                CharacterServices.getCharacterThor().then(response => {
                    this.results.character2 = response.data.data.results
                })
            },
            showThorStories() {
                const thorStorieOne = document.getElementById('thor-storie-one')
                const thorStorieTwo = document.getElementById('thor-storie-two')
                const ironManSection = document.getElementById('iron-man-section')
                const characterImg = document.getElementById('thor-polaroid')
                const thorButton = document.getElementById('thor-button')
                const returnButton = document.getElementById('return-button')

                thorStorieOne.style.display = 'block'
                thorStorieTwo.style.display = 'block'
                thorStorieOne.style.textAlign = 'center'
                thorStorieTwo.style.textAlign = 'center'                
                ironManSection.style.display = 'none'
                characterImg.style.height = '500px' 
                thorButton.style.display = 'none'
                returnButton.style.display = 'block'               
            },
            showIronManStories() {
                const ironManStorieOne = document.getElementById('iron-man-storie-one')
                const ironManStorieTwo = document.getElementById('iron-man-storie-two')
                const thorSection = document.getElementById('thor-section')
                const characterImg = document.getElementById('iron-man-polaroid')
                const ironManButton = document.getElementById('iron-man-button')
                const returnButton = document.getElementById('return-button')

                ironManStorieOne.style.display = 'block'
                ironManStorieTwo.style.display = 'block'
                ironManStorieOne.style.textAlign = 'center'
                ironManStorieTwo.style.textAlign = 'center'                
                thorSection.style.display = 'none'
                characterImg.style.height = '500px' 
                ironManButton.style.display = 'none'
                returnButton.style.display = 'block'
            },

            returnHomePage() {
                window.location.reload()
            }

        }
    }
    

</script>

<style>
#app {
  min-height:100%;
  position:relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
}
html, body {
  height:100%;
}

.logo {
  max-width:200px;
  max-height:90px;
  width: auto;
  height: auto; 
  padding-top: 10px
}

.nav-height {
  height: 100px;
  background-color: #f11a09;
  margin-bottom: 100px;
}

.background {
  background-color: #ff5f52;
}
.stretch {
  align-items: stretch;
}
.container {
  margin-top:100px;
  max-width: 2500px; 
  display: flex; 
}
.item {
  flex: 1;
	margin: 5px;  
}

.character-img {
  background-color: white;
  height: 400px;
  width: 400px;
  margin: auto;
  padding-top: 20px;  
}
.centralize-img {
  background-color: #1d1a17;
  height: 300px;
  width: 350px;
  margin-left: 25px;
  border: 2px solid black;  
}
.button-before-click {
    display: none;
}
.centralize-img img {
  margin-left: 50px;
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 9px 7px 5px rgba(0, 0, 0, 0.76);
}
h1 {
  font-size: 30px;
  text-align: center;
  color: black;
}
.character-button {
  margin-left: 190px;
  margin-top: 30px;
}

.return-button {
  display: none;
}

.align-return-button {
  width: 150px;
  margin: 30px auto auto auto;
}

footer {
  position:absolute;
  bottom:0;
  width:100%;

}


@media (max-width: 1920px) {
  .character-button {
    margin-left: 280px;
  }
  .container {
    margin-top: 200px;
  }
}

@media (max-width: 1280px) {
  .container {
    margin-top:115px;
  }
  .character-button {
    margin-left: 170px;
  }
  .return-button {
    margin-bottom: 30px;
  }
}

@media (max-width: 1000px) { 
  .container {
    justify-content: space-around;
    flex-direction: column;
  }
}
@media (max-width: 900px) {
  .item {
    margin:1px;
  }
  .character-img {
    width: 320px;  
  }
  .centralize-img {
    width: 270px;
  }
  .centralize-img img {
    margin-left: 10px;
  }
  .character-button {
    margin-left: 110px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
}

</style>
