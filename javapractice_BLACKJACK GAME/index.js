// let count = 0
//
//
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
//
// function increment(){
//     count++
//     countEl.textContent = count
//
// }
//
//
//
// function save()
// {
//     let savedNum = " " + count + " - "
//     saveEl.textContent += savedNum
//     count = 0
//     countEl.textContent = count
//
// }
//
// <!-- ABOVE PASSENGER COUNTER------------------------------------------- -->


// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
//
// let sumEl = document.getElementById("sum-el")
//
// function add()
// {
//   let result = num1 + num2
//   sumEl.textContent = "Sum: " + result
// }
//
// function subtract()
// {
//   let result = num1 - num2
//   sumEl.textContent = "Sum: " + result
// }
//
// function divide()
// {
//   let result = num1 / num2
//   sumEl.textContent = "Sum: " + result
// }
//
// function multiply()
// {
//   let result = num1 * num2
//   sumEl.textContent = "Sum: " + result
// }

// <!-- ABOVE CALCULATOR------------------------------------------- -->

// let errorEl = document.getElementById("errorel") // creating variable to access id in html file to amend in javascript file
//
// function errorMessage()
// {
//   errorEl.textContent = "Something went wrong, please try again"
//
// }

// <!-- ABOVE outputs message when button is clicked------------------------------------------- -->



let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = Math.floor((Math.random() * 10) + 2);
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let drawEl = document.getElementById("draw-el")

let player = {
  name: "Per",
  chips: 145
}


let playerNameEl = document.getElementById("playerName-el")
playerNameEl.textContent = player.name + ": $" + player.chips

function getRandomCard()
{
  let drawCard = Math.floor((Math.random() * 10) + 2);
  if(drawCard > 100)
  {
    return 10
  }
  else if(drawCard === 1)
  {
    return 11
  }

  else{
    return drawCard
  }

}

function startGame()
{
  renderGame()
}

function renderGame()
{

  cardEl.textContent = "Cards: "
  for(let i = 0; i < cards.length; i++)
  {
    cardEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum

  if(sum <= 20)
  {
    message = "Do u want another card? "
  }

  else if (sum === 21) {
    message = "You got BlackJack, U WIN!"
    hasBlackJack = true
  }

  else if (sum > 21) {
    message = "You're out of the game..."
    isAlive = false
  }

  messageEl.textContent = message


}

function newCard(){
  // let thirdCard = Math.floor((Math.random() * 10) + 2);
  // cards.push(thirdCard)
  // cardEl.textContent = "Cards: " + cards[0] + ", " + cards[1] + ", " + cards[2]
  // let newSum = sumEl.textContent = "Sum: " + (cards[0]  + cards[1] + cards[2])
  //
  //
  // if(newSum <= 20)
  // {
  //   message = "Do u want another card? "
  // }
  //
  // else if (newSum === 21) {
  //   message = "You got BlackJack, U WIN!"
  //   hasBlackJack = true
  // }
  //
  // else if (newSum > 21) {
  //   message = "You're out of the game..."
  //   isAlive = false
  // }
  //
  // messageEl.textContent = message


  if(isAlive == true && hasBlackJack === false)
  {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }

}
