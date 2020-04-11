import {Game} from '../lib/game.js';

import playView from '../views/playview.vue.js';
import commandsView from '../views/commandsView.vue.js';

export default
function(resolve){
<<<<<<< HEAD
    $.getJSON( '/game/maps/1.json', function( json ) {
    	Game.state.map = json;
=======
>>>>>>> upstream/dev

    resolve({
    data: function (){
      return{
          game : Game.state,
          tick : Game.tick,
      }
    },
      mounted: function (){
        
      },
      components: {
          playView : playView,
          commandsView : commandsView
      },
      template : `
          <div class="row m-auto">
      		  <play-view></play-view>
		  <commands-view></commands-view>
          </div>`
   });
}
