let board = Array.from(document.getElementsByClassName("grid"));
let currentPlayer = 'X';
let spaces = Array(9).fill(null);
let bool = true;
let results = document.getElementById('results');

// Function that keeps the game going! Not the best design. We're unable to end it. 
function startGame(){
   board.forEach(space => space.addEventListener('click', addMove));
} 

function clearGame(){
  
}

function addMove(e) {
   let id = e.target.id;
   let s = document.getElementById(id);
   s.innerText = currentPlayer;
   board[id] = currentPlayer;
   currentPlayer = board[id] === 'X' ? 'O': 'X';
   checkHorizontal(board);
 }

function checkHorizontal(board){
   for(let i = 0; i < 9; i+=3){
      if(board[i] === board[i+1] && board[i] === board[i+2]){
       if(board[i] === 'O'){
         results.innerText = "Laura wins!";
         return true;
       } else{
         results.innerText = "Andrea wins!";
         return true;
       };
      }
   }
 }

function checkVertical(board){
   for(let i = 0; i < 3; i++){
     if(board[i] === board[i+3] && board[i] === board[i+6]){
       if(board[i] === 'O'){
         results.innerText = "Laura wins!";
         return true;
       } else{
         results.innerText = "Andrea wins!";
         return true;
       };
      }
   }
}
 
 function checkDiagonal(board){
   if(board[0] === board[4] && board[0] === board[8] || board[2] === board[4] && board[2] === board[6]){
     if(board[0] === 'O' || board [2] === 'O'){
      results.innerText = "Laura wins!";
       return true;
     } else{
      results.innerText = "Andrea wins!";
       return true;
     }
   }
 }
 
 function checkForWinner(board){
     if(checkHorizontal(board) || checkVertical(board) || checkDiagonal(board)){
       return true;
     };
}
// check for winner function
// clear game
// while something is true, call startGame function
// call add move to add currentPlayer letter to a space
// update the space with the letter
// if there is no winner change the current player

// event listener: 1. check boolean to see if its an X or O save that inside arr. 

startGame();


// console.log(board);
// console.log(spaces);

