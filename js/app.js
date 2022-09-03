/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner
let turnCOunt = 1
let isWinner = false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(board.class)
const messageEl = document.getElementById(id.message)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
  board = ['null', 'null','null','null','null','null','null','null','null',]
  turn = 1
  
}
