import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default  {
    data: function (){
      return{
	 iGame : Game,
	 game:Game.state,
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
	methods:{
		rainCooldownStyle:function(){
			let barHeight=(1000-this.game.rainTime)/10;
			return {
				background:'rgba(80,180,0,0.2)',
				zIndex:1,
				position:'absolute',
				bottom:0,
				height:barHeight+'%',
				width:'100%'
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
		<div class="col-3 col-sm-6" v-on:click="iGame.buy('oil_rain')" :disabled="game.rainTime">
		<div :style="rainCooldownStyle()"></div>
		{{ text.oil_rain }}	
		250$
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
