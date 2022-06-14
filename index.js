
$(".title").on("mouseover",function gametext(){
    $(".title").text("Have fun with your computer!");
    $(".title").css("color","green");
    $(".title").css("font-size","3rem")
    setInterval.gametext()
})

  const game = function(){
    let yourScore = 0;
    let computerScore = 0;
    let moves = 0;
    
// create an event listener:
    const playGame = function(){
       const computerOptions = ["paper","scissors","rock"];
       const paperBtn = $(".paper");
       const scissorsBtn = $(".scissors");
       const rockBtn = $(".rock");
       const playerOptions = [paperBtn,scissorsBtn,rockBtn];

       playerOptions.forEach(option => {
        option.on("click", function(){
            moves++;
    
    
            document.querySelector('.movesleft').innerHTML = `Moves Left: ${5-moves}`;

            playerSelection = this.innerText.trim();
            const compRandom = Math.floor(Math.random()*3);
            const computerSelection = computerOptions[compRandom];
            $('.imageDiv').innerHTML = '<img width="80px" height="auto" src="${computerSelection} + .png">';
          
            winner(playerSelection,computerSelection);
            movesleft = 5 - moves;
            if(moves == 5){
                gameOver(playerOptions,movesleft);           
            }
        
        })
       
       })
      
        
    }
    const winner = function(playerSelection,computerSelection){ 
        if( playerSelection === "paper"){
          if(computerSelection === "scissors"){
              var outcome = "Scissors beat Paper!";
              computerScore++;
              $(".computerselect").css("background-color","green");
              $(".paper").css("background-color","blue");
               $(".goutcome").text(outcome);
               document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="scissors.png">';
            
          } else if(computerSelection === "rock"){
            var outcome = "Paper beats Rock!";
            yourScore++;;
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

          if (playerSelection === "scissors"){
              if(computerSelection === "rock"){
                  var outcome = "Rock beats Scissors" ;
                  computerScore++;
                  $(".computerselect").css("background-color","green");
                  $(".scissors").css("background-color","blue");
                  $(".goutcome").text(outcome).fadeIn();
  
                  document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="rock.png">';
                 
            
              }else if (computerSelection === "paper"){
                  var outcome ="Scissors beat Paper!";
                  yourScore++;;
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
      
          if (playerSelection==="rock"){
              if(computerSelection === "paper"){
                  var outcome = "Paper beats Rock!";
                  computerScore++;
                  $(".computerselect").css("background-color","green");
                  $(".rock").css("background-color","blue");
                   $(".goutcome").text(outcome);
                  document.getElementById('imageDiv').innerHTML = '<img width="80px" height="auto" src="paper.png">';
                 
                  
              } else if (computerSelection === "scissors"){
                  var outcome = "Rock beats Scissors!";
                 yourScore++;
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
  
  }

function gameOver(playerOptions,movesleft){
const reloadBtn = document.querySelector(".reload");
const resultMy = document.querySelector(".goutcome");
const movesLeft = document.querySelector(".movesleft");  
const lastmove = document.querySelector('.none');
const chooseFrom = document.querySelectorAll(".select");
const gameResult = document.querySelector(".computerselected");
   
    movesLeft.innerHTML = "Game Over!";
    movesLeft.style.color = "red";
    movesLeft.style.fontSize = "5rem";
    lastmove.innerText = `Your score is: ${yourScore} \n Computer score is: ${computerScore} ` ;
    lastmove.style.color ="purple";
    lastmove.style.fontSize="4rem";
    resultMy.style.display ='none';

	chooseFrom.forEach(option => {
        option.style.display ='none';
    });
   
     if (yourScore > computerScore){
      gameResult.innerText = "You Won!";
      gameResult.style.color = "green";
      gameResult.style.fontSize = "6rem";
        
     }
     else if (computerScore > yourScore){
        gameResult.innerText = "You Lost!";
      gameResult.style.color = "blue";
      gameResult.style.fontSize = "6rem";
     }else{
        gameResult.innerText = "It is a Tie";
      gameResult.style.color = "black";
      gameResult.style.fontSize = "6rem";
      gameResult.style.marginTop = "0";
      gameResult.style.paddingTop = "0";
     }

      reloadBtn.innerText = 'restart';
      reloadBtn.style.display = 'flex';
      reloadBtn.addEventListener('click',function(){
       window.location.reload();
      })
    
}

playGame();

}

game();
