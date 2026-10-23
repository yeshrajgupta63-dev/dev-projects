let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");

const resetGame = () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText=0;
  compScorePara.innerText=0;
  msg.innerText="Play your move";
  msg.style.backgroundColor="#081b31";
};

resetBtn.addEventListener("click",resetGame);

const genCompChoice  = () => {
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  msg.innerText = " Game Draw!";
  
};

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
  }else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats Your ${userChoice} `;
    msg.style.backgroundColor = "#cd2525";
  }
}

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("compChoice =", compChoice);

  if (userChoice === compChoice){
    drawGame();
  }else {
    let userWin = true;
    if(userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper"){
      userWin = compChoice === "scissors" ? false: true;
    }else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice)=> {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});