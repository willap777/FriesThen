import Opponent from '../opponents/opponent.js';
import Bee from '../opponents/bee.js';
import Bear from '../opponents/bear.js';
import {Game} from './game.js'

export default class {
    constructor(state, waveNb){
		this.waveNb = waveNb;
		this.tickNb = 0;
		this.oppNb = 10;
		this.start(state);
		if(waveNb>5 && !(waveNb % 2) && waveNb % 10)
			this.oppNb = 15;
		if(!(waveNb % 10))
			this.oppNb = 1;
		else
			this.oppNb += waveNb;
	}
	
    
    tick(state, self){
	let start = Date.now();

	  //check game-over conditions
	if(state.frites <= 0){//gameover
	      state.screen = 'game-over';
	  }else if(state.waving == false && state.opponents.length <= 0){
	      //waveover
	      if(self.waveNb > 9){
		  state.screen = 'game-over';
	      } else {
		  state.paused = true;
		  state.cash += 100 + self.waveNb;
		  self.stop(state);
	      }
	  }else{
	      if(state.paused){
		  
	      }else{

			if(state.waving)
			{
				if(self.waveNb>5 && !(self.waveNb % 2) && self.waveNb % 10)
				{
					if(!(self.tickNb++ % 60))
					{
						if(!(--self.oppNb)){
							state.waving = false;
						}
						if(!((self.tickNb-1) % 120))						
							state.opponents.push(new Opponent(self.waveNb,2));
						else
							state.opponents.push(new Bee(self.waveNb));
					}
				}
				else if(!(self.tickNb++ % 60)&& self.oppNb>0)
				{
					if(!(--self.oppNb)){
					state.waving = false;
					}
					if(!(self.waveNb % 10)){
					state.opponents.push(new Bear(self.waveNb));
					} else {
					state.opponents.push(new Opponent(self.waveNb,2));
					}
				}
			}
			
			
		  $.each(state.opponents, function(i,o){
		      if(o) o.move();
		  });
		  $.each(state.defenses, function(i,d){
		      d.attack(state.opponents);
		  });

	      }
	  }
	      console.log('tick '+(Date.now() - start)+'ms');
	  
      }


    start(gameState){
	gameState.waving = true;
	this.intervalHandle = setInterval(this.tick , 33, gameState, this);
    }

    stop(state){
	clearInterval(this.intervalHandle);
	$.each(state.defenses, function(i,d){
	    d.waveEnd();
	});
	Game.state.oppId=0;
    }
}
