import Opponent from '../opponents/opponent.js';
import Bee from '../opponents/bee.js';
import Bear from '../opponents/bear.js';
import Raccoon from '../opponents/raccoon.js';
import {Game} from './game.js'

export default class {
    constructor(state, waveNb){
		this.waveNb = waveNb;
		this.tickNb = 0;
		this.oppNb = 10;
		this.start(state);
		if(self.waveNb>5 && !(self.waveNb % 2) && self.waveNb != 10 && self.waveNb < 15)
			this.oppNb = 20;
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
	      if(self.waveNb > 19){
		  state.screen = 'game-over';
	      } else {
		  state.paused = true;
		  state.cash += 100 + self.waveNb;
		  self.stop(state);
	      }
	  }else{
	      if(state.paused){
		  
	      }else{

			if(Game.state.rainTime>0)
			{
				if(!(Game.state.rainTime % 100)){
					$.each(state.opponents, function(i,o){
						o.loseLife(1);
					})
				}				
				Game.state.rainTime--;
			}
			

			if(state.waving)
			{
				if(self.waveNb>5 && !(self.waveNb % 2) && self.waveNb != 10 && self.waveNb <15)
				{
					if(!(self.tickNb++ % 45))
					{
						if(!(--self.oppNb)){
							state.waving = false;
						}
						if(!((self.tickNb-1) % 90))						
							state.opponents.push(new Opponent(self.waveNb,3));
						else
							state.opponents.push(new Bee(self.waveNb));
					}
				}
				else if(self.waveNb<10){
					if(!(self.tickNb++ % 60)&& self.oppNb>0)
					{
						if(!(--self.oppNb)){
						state.waving = false;
						}
						state.opponents.push(new Opponent(self.waveNb,3));						
					}
				}
				else if(self.waveNb>15 && self.waveNb<20 && !(self.waveNb%2)){
					if(!(self.tickNb++ % 120))
					{
						if(!(--self.oppNb)){
							state.waving = false;
						}
						if(!((self.tickNb-1) % 240))						
							state.opponents.push(new Raccoon(self.waveNb));
						else
							state.opponents.push(new Bee(self.waveNb));
					}
				}
				else if(self.waveNb>10 && self.waveNb<20){
					if(!(self.tickNb++ % 120))
					{
						if(!(--self.oppNb)){
							state.waving = false;
						}
						if(!((self.tickNb-1) % 240))						
							state.opponents.push(new Raccoon(self.waveNb));
						else
							state.opponents.push(new Opponent(self.waveNb,3));
					}
				}
				else if(!(self.tickNb++))
				{
					state.opponents.push(new Bear(self.waveNb));
					state.waving = false;
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
