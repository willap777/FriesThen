export default {
    data: function (){
      return{
	game : game.state,
	text: game.locale.text
      }
    },
    components:{
	tile : tile,
	opponent : opponent
    },
    template : `<div id="play-box" class="col-sm-9 text-center">
    	       	     <div class="row" v-for="x in 8">
		       <tile v-for="y in 6"
		       	     class="col-2"
 		       	     v-bind:x="x"
			     v-bind:y="y">
		       </tile>
		     </div>
                     <opponent v-for="(opp, id) in game.opponents" v-bind:self="opp" :key="id"></opponent>
		</div>`
}
