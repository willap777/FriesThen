import Opponent from './opponent.js';
import {Game} from '../lib/game.js';

export default class extends Opponent{
    constructor(waveNb){
	super(waveNb*10);
	this.speed = 1 * Game.state.map.meta[Game.state.map.path[0]].h / 100;
    }
}
