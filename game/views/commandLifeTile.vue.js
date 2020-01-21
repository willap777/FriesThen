import {Game} from '../lib/game.js';

export default {
    data : function () {
    	return {
	    iGame : Game,
	   game : Game.state
	}
    },
    template: `
    	<div class="col-3 col-sm-6 text-right" v-on:click="iGame.selected(0,0)">
	    {{ game.cash }}$ <br />
	    <span v-if="game.commandView == 'general'">{{ game.frites }}F</span>
	    <span v-else> X </span>
	</div>

    `
}
