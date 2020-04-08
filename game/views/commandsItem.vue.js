import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default {
    data: function (){
      return{
   	  text : Game.locale.text,
      }
    },
    components:{
	lifeTile: commandLifeTile
    },
    methods:{
	defense : function(){ return Game.state.defenses[Game.state.selectedTile]; }
    },
    template: `
    	<div>
    	<div class="col-3 col-sm-6">
	     {{ text[defense().name] }}
	</div>
	<div class="col-3 col-sm-6"  v-on:click="defense().sell()">
		{{ text.sell }}
                {{ defense().price / 2}} $
	</div>
	<div class="col-3 col-sm-6">
	     <div v-if="defense().name == 'potato_field'" v-on:click="defense().harvest()">
	        {{ text.harvest }}
             </div>
	</div>
	<div class="col-3 col-sm-6">
		
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
