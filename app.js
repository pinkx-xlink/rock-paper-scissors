 
    //JAVASCRIPT//
    <script>
    const game = () => {
        let plaeyerScore = 0;
        let computerScore = 0;
        let moves = 0;

        const playGame = () +. {
            const rockBtn = document.querySelector('.rock')
            const paperBtn = document.querySelector('.paper')
            const scissorsBtn = document.querySelector('.scissors')
            const playerOptions = [rockBtn,paperBtn,scissorsBtn];
            const computerOptions = ['rock', 'paper', 'scissors']

            //to start playing game
            playerOptions.forEach(option => {
                Option.addEventListener('click',function(){

                    const movesLeft = document.querySelector('.movesleft');
                    moves++;
                    movesLeft.innerText = `Moves Left: ${10-moves}`;


                    const choiceNumber = Math.floor(Math.random()*3);
                    const computerChoice = computerOptions[choiceNumber];


                    //to check who wins
                    winnder(this.innerText,computerChoice)
                })
            })
        }


    }

        //PLAYER SELECT//
        //function getPlayerChoice()
        


        //COMPUTER SELECT//
        //function getComputerChoice()

//PLAY ROUND FUNCTION//
        //function playRound(playerSelection, computerSelection) {

       // }

        //const playerSelection = "rock";
        //const computerSelection = getComputerChoice();
        //console.log(playRound(playerSelection, computerSelection));


    </script>
