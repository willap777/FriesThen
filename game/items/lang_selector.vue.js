import {Game} from '../lib/game.js';

export default
Vue.component('btnSelectLang' , {
    data: function (){
      return{
	lang: Game.locale.currentLang,
	locale : Game.locale
      }
    },
    template : `<div>
        <select v-model="lang" v-on:change="locale.changeLang(lang)">
   		 <option value="fr">FR</option>
    		 <option value="en">EN</option>
    	</select>
    </div>`
  })

