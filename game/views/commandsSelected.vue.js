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
			<b>{{text.selectedMenu}}</b>
		</div>

		<div class="col-3 col-sm-6"  v-on:click="iGame.buy('patator')">
			{{ text.patator }}
			50$
		</div>

		<div class="col-3 col-sm-6" v-on:click="iGame.buy('sniper')">
			{{ text.sniper }}	
			125$		
		</div>

		<div class="col-3 col-sm-6">
			
		</div>

		<div class="col-3 col-sm-6">
			
		</div>

		<div class="col-3 col-sm-6"  v-on:click="iGame.buy('potato_field')">
			{{ text.potato_field }}
			150$
		</div>

		<div class="col-3 col-sm-6" v-if="getScreenWidth<1000">
				
		</div>

		<life-tile></life-tile>
	</div>
	
    `
}
