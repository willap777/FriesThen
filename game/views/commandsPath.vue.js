import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default  {
    data: function (){
      return{
	 iGame : Game,
   	  text : Game.locale.text,
      }
	},
	computed:{
		getScreenWidth:function(){
			return window.screen.width;
		},
		headerFontSize:function(){
			return {
				fontSize:this.getScreenWidth<1000?'10px':'30px'
			}
		}
	},
    components:{
	lifeTile: commandLifeTile
    },
    template: `
	<div>
		<div class="col-3 col-sm-12" :style="headerFontSize">
			<b>{{text.pathMenu}}</b>
		</div>
		<div class="col-3 col-sm-6" v-on:click="iGame.buy('broken_glass')">
		{{ text.broken_glass }}
		10$
		</div>
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6" v-if="getScreenWidth<1000">
				
		</div>
		<life-tile></life-tile>
	</div>
	
    `
}
