try {
  function Game() 
  {
      for (let i = 0; i < 5; i++) {
        let choice = Math.floor(Math.random() * 3) + 1;
    
        function getComputerChoice() {
          if (choice === 1) return 'ROCK';
          if (choice === 2) return 'PAPER';
          return 'SCISSORS';
        }
    
        function playRound(playerSelection, computerSelection) {
          
          if (computerSelection == "ROCK" && playerSelection == "PAPER") return 'You Win! Paper beats Rock';
          if (computerSelection == "ROCK" && playerSelection == "SCISSORS") return 'You Lose! Rock beats SCISSORS';
          if (computerSelection == "PAPER" && playerSelection == "SCISSORS") return 'You Win! SCISSORS beats PAPER';
          if (computerSelection == "PAPER" && playerSelection == "ROCK") return 'You Lose! PAPER beats ROCK';
          if (computerSelection == "SCISSORS" && playerSelection == "ROCK") return 'You WIN! ROCK beats SCISSORS';
          if (computerSelection == "SCISSORS" && playerSelection == "PAPER") return 'You Lose! SCISSORS beats PAPER';
          if (computerSelection === playerSelection) return 'Tie!';
          if (playerSelection !== "ROCK" || playerSelection !== "SCISSORS" || playerSelection !== "PAPER" ) return 'Wrong Input!';
          
        }
    
        let player = prompt('pick', '');
        const playerSelection = player.toUpperCase();
  
        const computerSelection = getComputerChoice();
        playRoundResult = playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    
        console.log(`Player pick: ${playerSelection}`);
        console.log(`Computer pick: ${computerSelection}`);
      }
    }
    Game();
  }
  catch(err) {
      console.log(`wrong input`);
    }
    
  