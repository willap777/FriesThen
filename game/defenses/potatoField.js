import Defense from './defense.js';
import {Game} from '../lib/game.js';

export default class extends Defense{
    constructor(){
	super('potato_field', 150, [100,250]);
	this.max = 4;
	this.count = 0;
    }
    stepOn(opp){
	if(this.count > 0){
   	    opp.loseLife(1);
	    this.count--;
	}
    }
    waveEnd(){
	if(this.count < this.max ) {
	    this.count++;
	}
	}
	
    harvest(){
	let harvestAmount = 0;
	let bonus=this.currentUpgrade*5;
	for(let c=this.count; c>0; c--){
		harvestAmount+=c*5+bonus;
		this.count--;
	}
	Game.state.cash += harvestAmount;
    }    
}
