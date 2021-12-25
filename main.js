
 ( function init(){
    // Player name
    let  player1 = "Player 1";
    let  player2 = "Player 2";
    
   
  
    // Function to change the player name
    function editNames() {
        player1 = prompt("Change Player1 name");
        player2 = prompt("Change player2 name");
         player1=document.querySelector("p.Player1").innerHTML ;
         player2=document.querySelector("p.Player2").innerHTML ;  
       
    }
  
    // Function to roll the dice
    function rollTheDice() {
        setTimeout(function () {
            const rndNum1 = Math.floor(Math.random() * 6) + 1;
            const rndNum2 = Math.floor(Math.random() * 6) + 1;
  
            document.querySelector(".img1").setAttribute("src",
                "dice" + rndNum1 + ".png");
  
            document.querySelector(".img2").setAttribute("src",
                "dice" + rndNum2 + ".png");
  
            if (rndNum1 === rndNum2) {
                document.querySelector("h1").innerHTML = "Draw!";
            }
  
            else if (rndNum1 < rndNum2) {
                document.querySelector("h1").innerHTML
                                = (player2 + " WINS!");
            }
  
            else {
                document.querySelector("h1").innerHTML
                                = (player1 + " WINS!");
            }
        }, 2500);
    }
  }());