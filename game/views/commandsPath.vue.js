import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default  {
    data: function (){
      return{
	 iGame : Game,
   	  text : Game.locale.text,
      }
    },
    components:{
	lifeTile: commandLifeTile
    },
    template: `
	<div>
		<div class="col-3 col-sm-6" v-on:click="iGame.buy('broken_glass')">
		{{ text.broken_glass }}
		10$
		</div>
		<div v-for="n in 6" class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6">
			
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
