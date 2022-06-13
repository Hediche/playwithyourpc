
$(".title").on("mouseover",function gametext(){
    $(".title").text("Have fun with your computer!");
    $(".title").css("color","green");
    $(".title").css("font-size","3rem")
    setInterval.gametext()
})


    // $(".Paper").on("click",function computerPlay(playerSelection,computerSelection){
    // var comRandom = Math.floor(Math.random() * 3);
    // var computerSelection = gamer[comRandom]; 
    // $(".computerh2").text(computerSelection);   
    //   playerSelection = gamer[0];
  const game = function(){
    let yourScore = 0;
    let computerScore = 0;
    let moves = 0;
    
// create an event listener:
    const playGame = function(){
       const gamer = ["paper","scissors","rock"];
       const paperBtn = $(".paper");
       const scissorsBtn = $(".scissors");
       const rockBtn = $(".rock");
       const playerOptions = [paperBtn,scissorsBtn,rockBtn];

       playerOptions.forEach(select => {
        select.on("click", function(){
            moves++;
            const movesleft = $(".movesleft").innerHTML;
            alert(movesleft);
            $(".movesleft").innerText= 'Your moves left: + ${5- moves}';

            playerSelection = this.innerText.trim();
            const compRandom = Math.floor(Math.random()*3);
            const computerSelection = gamer[compRandom];
            $('.imageDiv').innerHTML = '<img width="80px" height="auto" src="${computerSelection} + .png">';
          
            winner(playerSelection,computerSelection);

            if(moves==5){
                gameOver(playerSelection,movesleft);
            }
        
        })
       
       });
      
        
    }
    const winner = function(playerSelection,computerSelection){ 
        if( playerSelection === "paper"){
          if(computerSelection === "scissors"){
              var outcome = "Scissors beat Paper!";
              var computerScore = computerScore +1;
              $(".computerselect").css("background-color","green");
              $(".paper").css("background-color","blue");
               $(".goutcome").text(outcome);
             
            
          } else if(computerSelection === "Rock"){
            var outcome = "Paper beats Rock!";
            var yourScore = yourScore + 1;
            $(".paper").css("background-color","green");
            $(".computerselect").css("background-color","red");
             $(".goutcome").text(outcome).fadeIn();
            document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="rock.png">';
           
         
          } else if (computerSelection === "paper"){
            var outcome = "Come again!";
            $(".computerselect").css("background-color","yellow");
            $(".paper").css("background-color","yellow");
            $(".goutcome").text(outcome).fadeIn();
            document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="paper.png">';
           } 
        }
      // });
  
      // $(".Scissors").on("click", function computerPlay(playerSelection,computerSelection){
      //     var comRandom = Math.floor(Math.random() * 3);
      //     var computerSelection = gamer[comRandom]; 
      //     $(".computerh2").text(computerSelection);
      //     // $(".Scissors").css("background-color","red");
      //     playerSelection = gamer[1];
          if (playerSelection === "scissors"){
              if(computerSelection === "rock"){
                  var outcome = "Rock beats Scissors" ;
                  var computerScore = computerScore + 1;
                  $(".computerselect").css("background-color","green");
                  $(".scissors").css("background-color","blue");
                  $(".goutcome").text(outcome).fadeIn();
  
                  document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="rock.png">';
                 
            
              }else if (computerSelection === "paper"){
                  var outcome ="Scissors beat Paper!";
                  var yourScore = yourScore + 1;
                  $(".scissors").css("background-color","green");
                  $(".computerselect").css("background-color","red");
                  $(".goutcome").text(outcome).fadeIn();
                  document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="paper.png">';
                 
                
              }else if (computerSelection === "scissors"){
                  var outcome = "Come again!"
                  $(".computerselect").css("background-color","yellow");
                  $(".scissors").css("background-color","yellow");
                  $(".goutcome").text(outcome).fadeIn();
                  document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="scissors.png">';
                 
              } 
          } 
      
      // });
  
      // $(".Rock").on("click",function computerPlay(playerSelection,computerSelection){
      //     var comRandom = Math.floor(Math.random() * 3);
      //     var computerSelection = gamer[comRandom]; 
      //     $(".computerh2").text(computerSelection);
      //     // $(".Rock").css("background-color","red");
      //     playerSelection = gamer[2];
          if (playerSelection==="rock"){
              if(computerSelection === "paper"){
                  var outcome = "Paper beats Rock!";
                  var computerScore = computerScore + 1;
                  $(".computerselect").css("background-color","green");
                  $(".rock").css("background-color","blue");
                   $(".goutcome").text(outcome);
                  document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="paper.png">';
                 
                  
              } else if (computerSelection === "scissors"){
                  var outcome = "Rock beats Scissors!";
                  var yourScore = yourScore + 1;
                  $(".rock").css("background-color","green");
                  $(".computerselect").css("background-color","red");
                   $(".goutcome").text(outcome);
                  document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="scissors.png">';
                 
                 
              } else if (computerSelection === "rock"){
                  var outcome = "Come again!";
                  $(".computerselect").css("background-color","yellow");
                  $(".rock").css("background-color","yellow");
                  $(".goutcome").text(outcome);
                  document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="rock.png">';
  
                } 
          }
      // })
  
  }

  const gameOver = function(playerSelection,movesleft){

	playerOptions.forEach(select => {
        select.style.display = 'none';
    })

    if(yourScore > computerScore){
        $(".gameResult").innerText = "You won!";
        $(".gameResult").css("color","green");
        $(".gameResult").css("fontSize","3rem");
        document.getElementById('rulesimg').innerHTML = '<img width="350px" height="auto" src="win.jpg">';
    }
    else if(computerScore >  yourScore){
        $(".gameResult").innerText = "You lost!"
        $(".gameResult").css("color","red");
        $(".gameResult").css("fontSize","3rem");
        document.getElementById('rulesimg').innerHTML = '<img width="350px" height="auto" src="loss.jpg">';
    } else{
        $(".gameResult").innerText = "It is a Tie!";
        $(".gameResult").css("color","red");
        $(".gameResult").css("fontSize","3rem");
    }
}
playGame();
}
game();
