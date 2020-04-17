import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';

import Opponent from '../opponents/opponent.js';
import commandLifeTile from './commandLifeTile.vue.js';

export default {
    data: function (){
	return{
	    iGame: Game,
	    wave: Wave,
            game : Game.state,
		text: Game.locale.text,
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
		},
		
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
		<div :class=commandsHeaderClass>
			<b>{{text.generalMenu}}</b>
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class="commandClass" v-on:click="play();">			
			<span v-if="game.paused" class="fas fa-play"></span>&nbsp
			<b>{{ text.wave }}: {{ wave.waveNb }}</b>
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
