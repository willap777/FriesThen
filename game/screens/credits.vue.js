import {Game} from '../lib/game.js';
import '../items/return_home.vue.js';

export default {
    data: function (){
      return{
	text : Game.locale.text
      }
    },
    template : `
          <div class="d-flex justify-content-center align-items-center">
            <div id="start-screen" class="text-center">
                  <div>
                    <b>{{ text.createdBy }}</b><br />
		    Skarn
                  </div>
                  <div>
                    <b>{{ text.graphics }}</b><br />
		    <span v-html="text.looking"> </span>
                  </div>
                  <div>
		    <b>{{ text.thanks }}</b> <br />
		    Discord  Anime-Ultime
                  </div>
		  <btn-return-home class="mt-5 mt-sm-2"></btn-return-home>
            </div>
          </div>`
  }

