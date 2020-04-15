import {Game} from '../lib/game.js';
import '../items/lang_selector.vue.js';

export default {
    data: function (){
      return{
        game : Game.state,
	text : Game.locale.text
      }
    },
    mounted(){
      $.getJSON( './game/maps/maps.json', function( json ) {
        Game.state.mapCount=json.length;
      })
    },
    methods:{
      loadMap:function(map_ind){
          $.getJSON( './game/maps/maps.json', function( json ) {
                      
            if(!map_ind)
            {
              let mapCount=Game.state.mapCount; 
              map_ind = 1 + Math.floor(mapCount*Math.random());
            } 
            
            Game.state.currentMap=map_ind;
            Game.state.map = json[map_ind-1];
            Game.state.screen='difficulty';
        })
      }
    } ,
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
                        <b>
                          {{ text.map }} #{{ indmap }} &nbsp;
                          <button v-on:click="loadMap(indmap)">
                            {{text.select}}
                          </button>
                        </b>
                      </div>
                    </div>                    
                  </div>
                  <div class="mt-2 mt-md-5"><button v-on:click="loadMap(0)" class="btn btn-success btn-lg">{{ text.alea }}</button></div>
                  <div class="mt-2 mt-md-5"><button v-on:click="game.screen = 'credit'" class="btn btn-secondary btn-lg">{{ text.credits }}</button></div>
            </div>
          </div>`
  } 
