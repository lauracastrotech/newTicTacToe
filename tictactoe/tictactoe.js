// Programmers: Andrea and Laura
// Date: 11/1/2023
// Purpose: Tic Tact Toe

// Objectives
// perfecting the student's skills in using Python for solving complex problems;
// integrating programming techniques in one program consisting of many various parts.

// Scenario
// Your task is to write a simple program which pretends to play tic-tac-toe with the user. To make it all easier for you, we've decided to simplify the game. Here are our assumptions:

// the computer (i.e., your program) should play the game using 'X's;
// the user (e.g., you) should play the game using 'O's;
// the first move belongs to the computer − it always puts its first 'X' in the middle of the board;
// all the squares are numbered row by row starting with 1 (see the example session below for reference)
// the user inputs their move by entering the number of the square they choose − the number must be valid, i.e., it must be an integer, it must be greater than 0 and less than 10, and it cannot point to a field which is already occupied;
// the program checks if the game is over − there are four possible verdicts: the game should continue, the game ends with a tie, you win, or the computer wins;
// the computer responds with its move and the check is repeated;
// don't implement any form of artificial intelligence − a random field choice made by the computer is good enough for the game.

// Features:

// Create a board to place X's and O's
// Make it possible for a single player and double player
// Make squares clickable and once a square has been selected, the space is no longer free and cannot be clicked
// After each move check if there is a winner
// When the game is over print a message that states the winner/loser or print a tie


// 1. initiate game and printing board with x in the center
// 2. prompt the user for the number, check if free and place an O
// 3. random number get generated for the computer turn. 
// 4. check if that cell is free, and if so place an X
// 5. scan the board after each move to look for 3 in a row. (check for filter map to substitute if statements)
// 6. if computer wins: print You lose! if user wins: You win!
// 7. if someone ties print tie, i.e. board is full 
// main logic pseudocode
/* while(true){
function printBoard(board);
function promptUser(spaceNum);
  get the cell no. and reflec it on our board
function computerMove();
  generate a random n. from 0 to 9 until find an empty cell, update the board arr. 
function checkForWinner()
  checks for winner or tie and ends the game. 
}
*/ 

 
// function printBoard(board){
//   for (let i = 0; i < 9; i+=3){
//     console.log("+-------+-------+-------+");
//     console.log("|       |       |       |");
//     console.log(`|   ${board[i]}   |   ${board[i + 1]}   |   ${board[i + 2]}   |`);
//     console.log("|       |       |       |");
//   }
//   console.log("+-------+-------+-------+");
// }

// function promptUser(){
//   const readline = require('readline-sync');
//       let userInput = readline.question('Enter your move: '); 
//       if (typeof board[userInput - 1] === 'number'){
//         board[userInput - 1] = "O";
//       }
    
// }                       

// function computersMove(){
//   while(true){
//     let randNum = Math.floor(Math.random() * 9) + 1;
//     if (typeof board[randNum - 1] === 'number'){
//       board[randNum - 1] = "X";
//       break;
//     } 
//   }
// }

let board = [1,2,3,4,'X',6,7,8,9]
//          [div#0.grid,div#1.grid,div#2.grid,div#3.grid,div#4.grid,div#5.grid,div#6.grid,div#7.grid,div#8.grid]

function checkHorizontal(board){
  for(let i = 0; i < 9; i+=3){
     if(board[i] === board[i+1] && board[i] === board[i+2]){
      if(board[i] === 'O'){
        console.log("You win!");
        return true;
      } else{
        console.log("Computer wins!");
        return true;
      };
     }
  }
}

function checkVertical(board){
  for(let i = 0; i < 3; i++){
    if(board[i] === board[i+3] && board[i] === board[i+6]){
      if(board[i] === 'O'){
        console.log("You win!");
        return true;
      } else{
        console.log("Computer wins!");
        return true;
      };
     }
  }
}

function checkDiagonal(board){
  if(board[0] === board[4] && board[0] === board[8] || board[2] === board[4] && board[2] === board[6]){
    if(board[0] === 'O' || board [2] === 'O'){
      console.log("You win!");
      return true;
    } else{
      console.log("Computer wins!");
      return true;
    }
  }
}

function checkForWinner(board){
    if(checkHorizontal(board) || checkVertical(board) || checkDiagonal(board)){
      return true;
    };
  }
  
  while(true){
    printBoard(board);
    promptUser();
    if(checkForWinner(board) === true){
      printBoard(board);
      return true;
    }
    computersMove();
    if(checkForWinner(board) === true){
      printBoard(board);
      return true;
    }
  } 


      //Data validation for user input
      //   console.log(typeof userInput);
    //   userInput = board[userInput-1]; 
    //   console.log(userInput);
    //   console.log(typeof userInput);
      // we know that javascript can take our string and we can use that for our arr index
      // but now we want to put some restrictions for the user so that the user only types
      // numbers (data validation) and now our check is not working if we pass a string 
      // and we don't know why, javascript seems to implicitly convert a string like 3 into
      // a number when it is used with in square brackets and performs an operation as a number
      // which allows the program to access the element on the index number that is the result
      // of the operation
    //   if(userInput >= 1 && userInput <= 9){
    //     console.log(`${userInput} >> enter the if statement body`);
    //     return userInput
    //   }
    // }
    // catch(err){
    //   console.log("Invalid number. Please enter a number between 1 and 9.");
    // }
//   }