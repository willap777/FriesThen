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
		    Patrick G. Leblanc
                  </div>
                  <div>
                  <b>{{ text.helpers }}</b><br />
                  </div>
        Willap777<br />
        Xavier_Begin (À modifier)
                  <div>
                    <b>{{ text.graphics }}</b><br />
		    Willap777
                  </div>
                  <div>
		    <b>{{ text.thanks }}</b> <br />
		    Discord  Anime-Ultime
                  </div>
		  <btn-return-home class="mt-5 mt-sm-2"></btn-return-home>
            </div>
          </div>`
  }

