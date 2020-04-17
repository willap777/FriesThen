import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default  {
    data: function (){
      return{
		iGame : Game,
		game:Game.state,
		text : Game.locale.text,
		isHorizontal:window.screen.width/window.screen.height>1,
		commandClass:this.getCommandClass(window.screen.width/window.screen.height>1),
		commandsHeaderClass:this.getCommandsHeaderClass(window.screen.width/window.screen.height>1)
      }
	},
	created(){
		window.addEventListener("resize", this.handleChange);
	},
	destroyed(){
		window.removeEventListener("resize", this.handleChange);
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
		},
		handleChange(){
			let isHorizontal=window.screen.width/window.screen.height>1;
			this.isHorizontal=isHorizontal;
			this.commandClass=this.getCommandClass(isHorizontal);
			this.commandsHeaderClass=this.getCommandsHeaderClass(isHorizontal);
		},
		getCommandClass:function(isHorizontal){
			let cls=""
			if(isHorizontal)
				cls += "col-6 h-25";
			else
				cls +=  "col-3 h-50";
				
			cls += ' d-flex justify-content-center align-items-center bg-light rounded border border primary';
			return cls;
		},
		getCommandsHeaderClass:function(isHorizontal){
			let cls=""
			if(isHorizontal)
				cls += "col-12 h-25";
			else
				cls +=  "col-3 h-50";
				
			cls += ' d-flex justify-content-center align-items-center bg-dark text-white';
			return cls;
		}
	},
	
    components:{
	lifeTile: commandLifeTile
    },
    template: `
	<div>
		<div :class=commandsHeaderClass>
			<b>{{text.pathMenu}}</b>
		</div>
		<div :class=commandClass v-on:click="iGame.buy('broken_glass')">
		{{ text.broken_glass }}
		10$
		</div>
		<div :class=commandClass v-on:click="iGame.buy('oil_rain')" :disabled="game.rainTime">
		<div :style="rainCooldownStyle()"></div>
		{{ text.oil_rain }}	
		250$
		</div>
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass v-if="!isHorizontal">
				
		</div>
		<life-tile></life-tile>
	</div>
	
    `
}
