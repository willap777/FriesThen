import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default  {
    data: function (){
      return{
	  	iGame : Game,
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
			<b>{{text.selectedMenu}}</b>
		</div>

		<div :class=commandClass  v-on:click="iGame.buy('patator')">
			{{ text.patator }}
			50$
		</div>

		<div :class=commandClass v-on:click="iGame.buy('sniper')">
			{{ text.sniper }}	
			125$		
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class=commandClass  v-on:click="iGame.buy('potato_field')">
			{{ text.potato_field }}
			150$
		</div>

		<div :class=commandClass v-if="!isHorizontal">
				
		</div>

		<life-tile></life-tile>
	</div>
	
    `
}
