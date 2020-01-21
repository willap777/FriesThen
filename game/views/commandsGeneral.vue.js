import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';

import Opponent from '../lib/opponent.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default {
    data: function (){
	return{
	    iGame: Game,
	    wave: Wave,
            game : Game.state,
	    text: Game.locale.text
      }
    },
    methods:{
	play : function(){
	  if(this.game.paused){
	      var g = this.game;
			
	      this.game.paused = false;
	      this.wave.start(this.game);
	  }
	}
    },
    components:{
	lifeTile: commandLifeTile
    },
    template: `
    	<div>
    	<div class="col-3 col-sm-6">
		
	</div>
	<div class="col-3 col-sm-6">
		
	</div>
	<div class="col-3 col-sm-6">
		
	</div>
	<div class="col-3 col-sm-6" v-on:click="play();">
	<span v-if="game.paused" class="fas fa-play"></span><br />
	{{ text.wave }}: {{ wave.waveNb }}
	</div>
	<div class="col-3 col-sm-6">
		
	</div>
	<div class="col-3 col-sm-6">
		
	</div>
	<div class="col-3 col-sm-6">
	        
	</div>
	<life-tile></life-tile>
	</div>
	
    `
}
