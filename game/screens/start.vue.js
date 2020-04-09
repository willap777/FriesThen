import {Game} from '../lib/game.js';
import '../items/lang_selector.vue.js';

export default {
    data: function (){
      return{
        game : Game.state,
	text : Game.locale.text
      }
    },
    template : `
          <div class="d-flex justify-content-center align-items-center">
            <btn-select-lang class="text-right fixed-top mt-4 mr-3 mr-md-5"></btn-select-lang>
            <div id="start-screen" class="text-center">
                  <div>
                    <h1>{{ text.welcome_title }}</h1>
                    <span>{{ text.welcome_desc }} </span>
                  </div>
                  <div id="map-selection">
                    <h3>{{text.selectMap}}</h3>
                    <div class="map-container">
                      <div class="map-option" v-for="indmap in game.mapCount">                    
                        <h4>
                          {{ text.map }} #{{ indmap }} &nbsp;
                          <button v-on:click="game.screen = 'play';game.currentMap=indmap">
                            {{text.play}}
                          </button>
                        </h4>
                      </div>
                    </div>                    
                  </div>
                  <div class="mt-2 mt-md-5"><button v-on:click="game.screen = 'play'; game.currentMap=0" class="btn btn-success btn-lg">{{ text.alea }}</button></div>
                  <div class="mt-2 mt-md-5"><button v-on:click="game.screen = 'credit'" class="btn btn-secondary btn-lg">{{ text.credits }}</button></div>
            </div>
          </div>`
  }//rendre l'outil de sélection de maps dynamique  
