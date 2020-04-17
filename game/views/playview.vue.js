import {Game} from '../lib/game.js';

import tile from './playTile.vue.js';
import opponent from './opponent.vue.js';

export default {
    data: function (){
      return{
		game : Game.state,
		text: Game.locale.text,
		iGame : Game,
		playBoxClass: this.getPlayBoxClass(window.screen.width/window.screen.height>1)
      }
	},
	created(){
		window.addEventListener("resize", this.handleChange);
	},
	destroyed(){
		window.removeEventListener("resize", this.handleChange);
	},
	methods:{
		handleChange(){
			let isHorizontal=window.screen.width/window.screen.height>1;
        	this.playBoxClass=this.getPlayBoxClass(isHorizontal);
		},
		getPlayBoxClass:function(isHorizontal){
			if(isHorizontal)
				return "col-9 text-center h-100";
			else
				return "text-center w-100 h-75"
		}

	},
    components:{
	tile : tile,
	opponent : opponent
    },
	template : `
	<div id="play-box" :class=playBoxClass v-on:click="iGame.selected(0,0)">
					
		<div class="row" v-for="x in 8">
		<div v-if="game.rainTime && x == 1" id="oil_rain"></div>
		<tile v-for="y in 6"
				class="col-2"
				v-bind:x="x"
			v-bind:y="y">
		</tile>
		</div>
		
		<opponent v-for="(opp, id) in game.opponents" v-bind:self="opp" :key="id"></opponent>
	</div>`
}
