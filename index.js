
$(".title").on("mouseover",function gametext(){
    $(".title").text("Have fun with your computer!");
    $(".title").css("color","green");
    $(".title").css("font-size","3rem")
    setInterval.gametext()
})
// create an event listener:



var yourScore = 0;
var computerScore = 0;
var gamer = ["Paper","Scissors","Rock"];
    $(".Paper").on("click",function computerPlay(playerSelection,computerSelection){
    var comRandom = Math.floor(Math.random() * 3);
    var computerSelection = gamer[comRandom]; 
    $(".computerh2").text(computerSelection);   
      playerSelection = gamer[0];
      if( playerSelection === "Paper"){
        if(computerSelection === "Scissors"){
            var outcome = "Computer wins, Scissors beat Paper!";
            var computerScore = computerScore +1;
            $(".computerselect").css("background-color","green");
            $(".Paper").css("background-color","blue");
             $(".goutcome").text(outcome);
            document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="scissors.png">';
            document.getElementById('rulesimg').innerHTML = '<img width="350px" height="auto" src="loss.jpg">';
        } else if(computerSelection === "Rock"){
          var outcome = "You win! Paper beats Rock!";
          var yourScore = yourScore + 1;
          $(".Paper").css("background-color","green");
          $(".computerselect").css("background-color","red");
           $(".goutcome").text(outcome).fadeIn();
          document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="rock.png">';
          document.getElementById('rulesimg').innerHTML = '<img width="350px" height="auto" src="win.jpg">';
       
        } else if (computerSelection === "Paper"){
          var outcome = "Come again!";
          $(".computerselect").css("background-color","yellow");
          $(".Paper").css("background-color","yellow");
          $(".goutcome").text(outcome).fadeIn();
          document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="paper.png">';
         } 
      }
    });

    $(".Scissors").on("click", function computerPlay(playerSelection,computerSelection){
        var comRandom = Math.floor(Math.random() * 3);
        var computerSelection = gamer[comRandom]; 
        $(".computerh2").text(computerSelection);
        // $(".Scissors").css("background-color","red");
        playerSelection = gamer[1];
        if (playerSelection === "Scissors"){
            if(computerSelection === "Rock"){
                var outcome = "Computer Wins ! Rock beats Scissors" ;
                var computerScore = computerScore + 1;
                $(".computerselect").css("background-color","green");
                $(".Scissors").css("background-color","blue");
                $(".goutcome").text(outcome).fadeIn();

                document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="rock.png">';
                document.getElementById('rulesimg').innerHTML = '<img width="350px" height="auto" src="loss.jpg">';
          
            }else if (computerSelection === "Paper"){
                var outcome ="You Win ! Scissors beat Paper!";
                var yourScore = yourScore + 1;
                $(".Scissors").css("background-color","green");
                $(".computerselect").css("background-color","red");
                $(".goutcome").text(outcome).fadeIn();
                document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="paper.png">';
                document.getElementById('rulesimg').innerHTML = '<img width="350px" height="auto" src="win.jpg">';
              
            }else if (computerSelection === "Scissors"){
                var outcome = "Come again!"
                $(".computerselect").css("background-color","yellow");
                $(".Scissors").css("background-color","yellow");
                $(".goutcome").text(outcome).fadeIn();
                document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="scissors.png">';
               
            } 
        } 
    
    });

    $(".Rock").on("click",function computerPlay(playerSelection,computerSelection){
        var comRandom = Math.floor(Math.random() * 3);
        var computerSelection = gamer[comRandom]; 
        $(".computerh2").text(computerSelection);
        // $(".Rock").css("background-color","red");
        playerSelection = gamer[2];
        if (playerSelection==="Rock"){
            if(computerSelection === "Paper"){
                var outcome = "Computer Wins! Paper beats Rock!";
                var computerScore = computerScore + 1;
                $(".computerselect").css("background-color","green");
                $(".Rock").css("background-color","blue");
                 $(".goutcome").text(outcome);
                document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="paper.png">';
                document.getElementById('rulesimg').innerHTML = '<img width="350px" height="auto" src="loss.jpg">';
                
            } else if (computerSelection === "Scissors"){
                var outcome = "You win ! Rock beats Scissors!";
                var yourScore = yourScore + 1;
                $(".Rock").css("background-color","green");
                $(".computerselect").css("background-color","red");
                 $(".goutcome").text(outcome);
                document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="scissors.png">';
                document.getElementById('rulesimg').innerHTML = '<img width="350px" height="auto" src="win.jpg">';
               
            } else if (computerSelection === "Rock"){
                var outcome = "Come again!";
                $(".computerselect").css("background-color","yellow");
                $(".Rock").css("background-color","yellow");
                $(".goutcome").text(outcome);
                document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="rock.png">';

              } 
        }
    })
// alert(document.querySelectorAll(".select").length-1);


