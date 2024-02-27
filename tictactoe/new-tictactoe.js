let spaces = Array.from(document.getElementsByClassName("grid"));
let currentPlayer = 'X';
let board = [0,1,2,3,4,5,6,7,8];
let bool = true;
let results = document.getElementById('results');

function startGame(){
  // console.log(spaces);
  spaces.forEach((space) => space.addEventListener('click', addMove));
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

   s.removeEventListener('click', addMove);
  //  console.log("board after move: ", board);
   checkForWinner(board);

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
   return false;
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
   return false;
}
 
 function checkDiagonal(board){
   if(board[0] === board[4] && board[0] === board[8] || board[2] === board[4] && board[2] === board[6]){
     if(board[0] === 'O' || board [2] === 'O'){
      results.innerText = "Laura wins!";
      return true;
    } else {
      results.innerText = "Andrea wins!";
      return true;
    }
  }
  return false;
 }
 
 function checkForWinner(board){
    if(checkHorizontal(board) || checkVertical(board) || checkDiagonal(board)){
      console.log("awu");
      spaces.forEach((space) => space.removeEventListener('click', addMove)); 
      return true;
    }
    return false;
  }



// function removeEvents(board){
//   for (let i = 0; i < board.lenght; i++){
//     if (typeof board[i] !== 'string'){
//       console.log("in");
//       let space = document.getElementById(i);
//       space.removeEventListener('click', addMove);
//     }
//   }
//   return;
// }
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

