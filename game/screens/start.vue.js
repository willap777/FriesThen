import {Game} from '../lib/game.js';
import '../items/lang_selector.vue.js';

export default {
    data: function (){
      return{
      game : Game.state,
      text : Game.locale.text,
      styles: this.getStyles(window.screen.width/window.screen.height)
      }
    },
    created(){
      window.addEventListener("resize", this.handleChange);
    },
    destroyed(){
      window.removeEventListener("resize", this.handleChange);
    },
    mounted(){
      $.getJSON( './game/maps/maps.json', function( json ) {
        Game.state.mapCount=json.length;
      })
    },
    methods:{

      handleChange(){
        this.styles=this.getStyles(window.screen.width/window.screen.height);
      },
      getStyles:function(screenRatio){
        return {
          welcomeTitleStyle:{
            fontSize:'6vmin',
            marginBottom: screenRatio>1?'1vmin':'1vmax'
          },
          welcomeDescStyle:{
            fontSize:'4vmin',
            marginBottom: screenRatio>1?'2vmin':'2vmax'
          },
          mapSelectStyle:{
            width: screenRatio>1?1/screenRatio*60+'vmax':'60vmin',
            height: screenRatio>1?'40vmin':'30vmax',
          },
          mapTitleStyle:{
            fontSize:'4vmin',
            marginBottom:'3%'
          },
          mapContainerStyle:{
            width: '80%',            
            height: '70%',
            maxHeight: '70%'
          },
          mapOptionStyle:{
            fontSize:'3vmin'
          },
          btnSuccessStyle:{
            fontSize:screenRatio>1?'3vmin':'2vmax',
            margin: screenRatio>1?'3vmin':'6vmax'
          },
          btnSecStyle:{
            width:'40vmin',
            fontSize:'3vmin'
          }
        }
      },
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
                    <b><div :style=styles.welcomeTitleStyle>{{ text.welcome_title }}</div></b>
                    <div :style=styles.welcomeDescStyle>{{ text.welcome_desc }} </div>
                  </div>
                  <div id="map_selection" :style=styles.mapSelectStyle> 
                    <span id="map_title" :style=styles.mapTitleStyle>{{text.selectMap}}</span>
                    <div id="map_container" :style=styles.mapContainerStyle>
                      <div class="map_option" :style=styles.mapOptionStyle v-for="indmap in game.mapCount">                    
                        <b>
                          {{ text.map }} #{{ indmap }} &nbsp;
                          <button v-on:click="loadMap(indmap)">
                            {{text.select}}
                          </button>
                        </b>
                      </div>
                    </div>                    
                  </div><br>
                  <button :style=styles.btnSuccessStyle v-on:click="loadMap(0)" class="btn btn-success btn-lg">{{ text.alea }}</button><br>
                  <button :style=styles.btnSecStyle v-on:click="game.screen = 'credit'" class="btn btn-secondary btn-lg">{{ text.credits }}</button>
            </div>
          </div>`
  } 
