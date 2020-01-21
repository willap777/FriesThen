import {Game} from '../lib/game.js';

export default
Vue.component('btnReturnHome' , {
    data: function (){
	return{
          game : Game,
  	  text : Game.locale.text
        }
    },
    template : `<div><button v-on:click="game.reset();" class="btn btn-secondary btn-lg">{{ text.return_home }}</button></div>`
})
