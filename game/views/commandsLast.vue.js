import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default  {
    data: function (){
      return{
   	  text : Game.locale.text,
	   game : Game.state
      }
    },
    methods:{
	loseLife: function(){
		  this.game.frites--;
		  if(this.game.frites <= 0){
		  		      game.state.screen = 'game-over';
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
	<div class="col-3 col-sm-6" v-on:click="loseLife()">
		{{text.eat}}
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
