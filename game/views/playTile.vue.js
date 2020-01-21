import {Game} from '../lib/game.js';

export default{
    props:['x', 'y'],
    data: function (){
      return{
	game : Game.state,
	text : Game.locale.text,  
	iGame: Game
      }
    },
    computed: {
    	      isSelected:function(){
		return  this.game.selectedTile == this.x+'-'+this.y;
	      },
	      isPath:function(){
	       return this.game.map.path.includes(this.x+'-'+this.y);
	       //&& !this.isSelected; //to prevent overpassing selection
	      },
	      isFirst:function(){
	       return this.game.map.path[0] == (this.x+'-'+this.y)
	       ;//&& !this.isSelected; //to prevent overpassing selection
	      },
	      isLast:function(){
	       return this.game.map.path[this.game.map.path.length-1] == (this.x+'-'+this.y)
	       ;//&& !this.isSelected; //to prevent overpassing selection
	      },
	      id:function(){
	        return this.x+'-'+this.y;
	      },
    },
    methods:{
          hasItem:function(){
	        if(!(this.game.defenses[this.id] === undefined)){
		       return this.game.defenses[this.id];
		}else{
			return false;
		}
		;//&& !this.isSelected;
	}
    },
    mounted:function(){
	if(this.isPath){
		Game.state.map.meta[this.id] = {
		    x : this.$refs[this.id].offsetLeft - ( this.$refs[this.id].offsetWidth / 4 ),
		    y : this.$refs[this.id].offsetTop - ( this.$refs[this.id].offsetHeight / 4 ),
		    w : this.$refs[this.id].offsetWidth,
		    h : this.$refs[this.id].offsetHeight,
		    xx: this.$refs[this.id].offsetLeft + ( this.$refs[this.id].offsetWidth / 4 * 3 ),
		    yy: this.$refs[this.id].offsetTop + ( this.$refs[this.id].offsetHeight /4 * 3 )
		}
	}
	
    },
    template:`
    <div class="p-0" v-bind:id="id" v-bind:ref="id"  v-on:click.stop="iGame.selected(x, y)" v-bind:class="{'pathTile' : isPath && !isSelected, 'bg-secondary' : isSelected, 'firstPathTile' : isFirst && !isSelected && !hasItem(), 'lastPathTile' : isLast && !isSelected, 'defense': hasItem()}">
        <div class="row col m-auto p-0" v-if="hasItem()" v-bind:class="hasItem().name" v-bind:style="{transform:'rotate('+hasItem().rot+'deg)'}">
	<div v-if="hasItem().name == 'potato_field'">
	{{ hasItem().count }}
	</div>
	<span v-else>&nbsp;</span>
        </div>
	
	<div class="range" v-if="hasItem() && !isPath && isSelected" >&nbsp;</div>
        <div class="bg-secondary" v-if="hasItem() && !isPath" style="width:50%;margin:auto;">
	    <div class="firingBar" v-bind:style="{width:hasItem().passedTick/90*100+'%'}">
       	    </div>
	</div>
    	<span v-else-if="isLast">{{ game.frites }}F</span>
	<div v-else-if="!hasItem()">&nbsp;</div>
    </div>
    `
}
