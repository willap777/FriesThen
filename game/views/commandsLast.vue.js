import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default  {
    data: function (){
      return{
   	  text : Game.locale.text,
		game : Game.state,
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

		loseLife: function(){
			this.game.frites--;
			if(this.game.frites <= 0){
					Wave.start(Game.state);
					Game.state.screen='game-over';
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
			<b>{{text.lastMenu}}</b>
		</div>
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass v-on:click="loseLife()">
			{{text.eat}}
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
