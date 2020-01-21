import {Game} from '../lib/game.js';

export default class{
    constructor(name, startingPrice = 0){
    	    this.name=name;
	    this.tile= Game.state.selectedTile;
	    this.rot = 0;
	    this.count= 1;
	    this.passedTick = 1;
	    this.price = startingPrice;
    }

    sell(){
	this.count = 0;
	if(this.count <= 0){
	    Game.state.cash+=this.price / 2;
	    Vue.delete(Game.state.defenses, this.tile);
	    Game.state.commandView = "selected";
	}
    }

    attack(l){
	return false;
    }
    waveEnd(){
	return false;
    }
    
}
