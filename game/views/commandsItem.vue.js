import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default {
    data: function (){
      return{
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
    components:{
	lifeTile: commandLifeTile
	},
    methods:{
		defense : function(){ return Game.state.defenses[Game.state.selectedTile]; },
		
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
    template: `
	<div>
		<div :class=commandsHeaderClass>
			<b>{{text.itemMenu}}</b>
		</div>

		<div :class=commandClass>
			{{ text[defense().name] }}
		</div>

		<div :class=commandClass  v-on:click="defense().sell()">
			{{ text.sell }}
					{{ Math.round(defense().price / 2)}} $
		</div>

		<div :class=commandClass v-if="defense().name == 'potato_field'" v-on:click="defense().harvest()">
			{{ text.harvest }}
		</div>

		<div :class=commandClass v-if="defense().name == 'patator' || defense().name == 'sniper' && defense().currentUpgrade <  2"
		v-on:click="defense().upgrade()">
		{{ text.upgrade }}<br>{{ defense().upgradeCosts[defense().currentUpgrade]}} $
		</div>
		
		<div :class=commandClass v-on:click="defense().upgrade()">
			<div v-if="defense().name == 'potato_field' && defense().currentUpgrade <  2">
			{{ text.upgrade }}<br>{{ defense().upgradeCosts[defense().currentUpgrade]}} $
			</div>			
		</div>	
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass v-if="!isHorizontal">
				
		</div>
		<life-tile></life-tile>
	</div>
	
    `
}
