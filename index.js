
$(".title").on("mouseover",function(){
    $(".title").text("Have fun with your computer!");
    $(".title").css("color","green");
    $(".title").css("font-size","7rem")
})
var gamer = ["Paper","Scissors","Rock",];
    $(".Paper").on("click",function computerPlay(playerSelection,computerSelection){
    var wat = Math.floor(Math.random() * 3);
    var computerSelection = gamer[wat]; 
    $(".computerh2").text(computerSelection);   
      playerSelection = gamer[0];
      if( playerSelection === "Paper"){
        if(computerSelection === "Scissors"){
            var outcome = "Computer wins, Scissors beat Paper!";
            $(".computerselect").css("background-color","green");
            $(".Paper").css("background-color","blue");
            $(".goutcome").text(outcome).fadeIn();;
          
        } else if(computerSelection === "Rock"){
          var outcome = "You win! Paper beats Rock!";
          $(".Paper").css("background-color","green");
          $(".computerselect").css("background-color","red");
          $(".goutcome").text(outcome).fadeIn();;
       
        } else if (computerSelection === "Paper"){
          var outcome = "Come again!";
          $(".computerselect").css("background-color","yellow");
          $(".Paper").css("background-color","yellow");
          $(".goutcome").text(outcome).fadeIn();
         } 
      }
    });

    $(".Scissors").on("click", function computerPlay(playerSelection,computerSelection){
        var wat = Math.floor(Math.random() * 3);
        var computerSelection = gamer[wat]; 
        $(".computerh2").text(computerSelection);
        // $(".Scissors").css("background-color","red");
        playerSelection = gamer[1];
        if (playerSelection === "Scissors"){
            if(computerSelection === "Rock"){
                var outcome = "Computer Wins ! Rock beats Scissors" ;
                $(".computerselect").css("background-color","green");
                $(".Scissors").css("background-color","blue");
                $(".goutcome").text(outcome).fadeIn();
               
          
            }else if (computerSelection === "Paper"){
                var outcome ="You Win ! Scissors beat Paper!";
                $(".Scissors").css("background-color","green");
                $(".computerselect").css("background-color","red");
                $(".goutcome").text(outcome).fadeIn();
              
            }else if (computerSelection === "Scissors"){
                var outcome = "Come again!"
                $(".computerselect").css("background-color","yellow");
                $(".Scissors").css("background-color","yellow");
                $(".goutcome").text(outcome).fadeIn();
               
               } 
        } 
    
    });

    $(".Rock").on("click",function computerPlay(playerSelection,computerSelection){
        var wat = Math.floor(Math.random() * 3);
        var computerSelection = gamer[wat]; 
        $(".computerh2").text(computerSelection);
        // $(".Rock").css("background-color","red");
        playerSelection = gamer[2];
        if (playerSelection==="Rock"){
            if(computerSelection === "Paper"){
                var outcome = "Computer Wins! Paper beats Rock!";
                $(".computerselect").css("background-color","green");
                $(".Rock").css("background-color","blue");
                $(".goutcome").text(outcome);
                
            } else if (computerSelection === "Scissors"){
                var outcome = "You win ! Rock beats Scissors!";
                $(".Rock").css("background-color","green");
                $(".computerselect").css("background-color","red");
                $(".goutcome").text(outcome);
               
            } else if (computerSelection === "Rock"){
                var outcome = "Come again!";
                $(".computerselect").css("background-color","yellow");
                $(".Rock").css("background-color","yellow");
                $(".goutcome").text(outcome);

              } 
        }

     
    });



  


