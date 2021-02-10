class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player()
      var playercountref= await database.ref('playerCount').once("value")
      if(playercountref.exists()){
        playerCount= playercountref.val()
        player.getCount

      }
      form = new Form()
      form.display()
    }
  }

  play() {
    form.hide();
    textSize(20)
    text("GameStart", 120, 100)
    Player.getplayerinfo();

    if(Allplayers!== undefined){
      var displayposition= 130
      for(var i in Allplayers){
        if(i === 'player'+ player.index){
          fill("red")
        }
        else{
          fill("black")
        }
        displayposition= displayposition+20
        text(Allplayers[i].name+":"+Allplayers[i].distance,120, displayposition)
      }
    }
if(keyIsDown(UP_ARROW) && player.index!==null){
  player.distance= player.distance+50
  player.update()

}

  }
}
