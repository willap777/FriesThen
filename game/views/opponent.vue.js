import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';

export default {
    props:['self'],
    data:function(){
	return {
	       game : Game.state,
	    iGame : Game,
	    wave: Wave
	}
    },
    computed:{
	width: function() { return this.game.map.meta[this.game.map.path[0]].w / 2},
	height: function(){ return this.game.map.meta[this.game.map.path[0]].h / 2}
    },
    template:`
	<div class="opponent" v-bind:class="{'super':wave.waveNb == 10}" v-bind:style="{top:self.y+'px',left:self.x+'px', zIndex:'1000', width:width+'px', height:height+'px'}" v-on:click="iGame.selected(game.map.path[self.isOn])">
        <div class="lifeBar" v-bind:style="{width:self.life/self.startingLife*100+'%'}">
        </div>
        <img src="img/mouse.png" width="100%"/>
    </div>
    `
}
