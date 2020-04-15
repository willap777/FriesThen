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
                  <div class="btn-danger">Difficile<div>
                  <div class="btn-danger">Medium<div>
                  <div class="btn-danger">Easy<div>
                  <div class="btn-info" v-on:click="commencerPartie()">GO!</div>
                  <div class="btn-info" v-on:click="retourSelection()">Retour à la sélection de la carte</div>
            </div>
          </div>`
  } 
