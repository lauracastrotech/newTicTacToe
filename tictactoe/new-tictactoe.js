let board = Array.from(document.getElementsByClassName("grid")); // This creates an array of 9 elements with the class name grid
let currentPlayer = 'X'; // This initializes the first player to be X
let spaces = Array(9).fill(null); // This creates an array of 9 elements that will store either X or O and each element position corrosponds with a position in the grid
let isGameOver = false; //boolean to break out of a loop until there is a winner, loser, or tie
let results = document.getElementById('results'); // This stores the text based on the result of the game

function startGame(){
   board.forEach(space => space.addEventListener('click', addMove));
} 

function clearGame(){
  board[0] = null;
  console.log('board arr', board);
  console.log('spaces arr',spaces);
  console.log('entered clearGame function');
}

function addMove(e) {
   let id = e.target.id;
   let s = document.getElementById(id);
   s.innerText = currentPlayer;
   board[id] = currentPlayer;
   currentPlayer = board[id] === 'X' ? 'O': 'X';
 }

function checkHorizontal(board){
   for(let i = 0; i < 9; i+=3){
      if(board[i] === board[i+1] && board[i] === board[i+2]){
       if(board[i] === 'O'){
         results.innerText = "Laura wins!";
         clearGame()
         return true;
       } else{
         results.innerText = "Andrea wins!";
         clearGame()
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
// while(!isGameOver){
//   startGame(); return
// }

startGame(); 



// console.log(board);
// console.log(spaces);

