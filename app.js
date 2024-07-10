let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
  //rock, papaer,scissors
  const options = ["rock", "paper", "scissors"]
  let randIndex = Math.floor(Math.random() * 3)
  return options[randIndex]
}

const drawGame = () => {
  //console.log("The game was Draw")
  msg.innerText = "Game was Draw! Play again."
  msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++
    userScorePara.innerText = userScore
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
  } else {
    compScore++
    compScorePara.innerText = compScore
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red"
  }
}

const playGame = (userChoice) => {
  //console.log("User choice was", userChoice)

  //Generate Computer Choice -> modular
  const compChoice = genCompChoice()
  //console.log("Computer choice was", compChoice)

  if (userChoice === compChoice) {
    //Draw Game
    drawGame()
  } else {
    let userWin = true
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true
    } else if (userChoice == "paper") {
      userWin = compChoice === "scissors" ? false : true
    } else if ((userChoice = "scissors")) {
      userWin = compChoice === "rock" ? false : true
    }
    showWinner(userWin, userChoice, compChoice)
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
    playGame(userChoice)
  })
})
