import {Game} from '../lib/game.js';

import commandGeneral from './commandsGeneral.vue.js';
import commandSelected from './commandsSelected.vue.js';
import commandPath from './commandsPath.vue.js';
import commandLast from './commandsLast.vue.js';
import commandItem from './commandsItem.vue.js';

export default{
    data: function (){
      return{
	game : Game.state
      }
    },
    components:{
	general: commandGeneral,
	selected: commandSelected,
	mapPath: commandPath,
	lastPathTile: commandLast,
	itemTile: commandItem
    },
    template : `
    <div id="commands-box" class="text-center col-12 col-sm-3">	
     	<component class="row" v-bind:is="game.commandView"></component>  
    </div>
    `
}
