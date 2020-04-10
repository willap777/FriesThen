import {Game} from '../lib/game.js';

import playView from '../views/playview.vue.js';
import commandsView from '../views/commandsView.vue.js';

export default
function(resolve){

    $.getJSON( `./game/maps/maps.json`, function( json ) {
      
    let map_ind=Game.state.currentMap;
    alert(map_ind+" "+Game.state.currentMap);
  
      if(!map_ind)
      {
        let mapCount=Game.state.mapCount; //librairie 'fs' ou php pour le déterminer
        map_ind = 1 + Math.floor(mapCount*Math.random());
      }  
    Game.state.map = json[map_ind-1];

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
  });	

}
