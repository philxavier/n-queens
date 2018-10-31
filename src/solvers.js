/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting
// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

//takes in "n" meaning it'll be an n x n chessboard with n rooks
window.findNRooksSolution = function(n) {
  //set an empty object to feed the board, since the board needs to take in an obj
  var obj = {};
  //set a property on the object for n, since this the format it said to pass to the new board
  obj.n = n;
  //pass the object to the new board
  board = new Board(obj);
  //then access the rows of the board
  var boardRows = board.rows();

  //this was given here; since we're returning a solution, set it to be undefined
  var solution = undefined;

  //set a recursive function that takes in a board and a specific row
  var recursiveRooks = function(board, row) {
    //if that row is the nth row
    if (row === n) {
      //set the solution equal to the stringified board rows
      solution = JSON.stringify(board.rows());
    }
    //otherwise, loop through the rows of the board, starting at the current row
    for (var i = row; i < boardRows.length; i++) {
      //set the current row equal to a variable called internal row
      var internalRow = boardRows[i];
      //if the solution IS defined already, break
      if (solution) {
        break;
      }
      //otherwise, loop through the rows again so you can access a corresponding column
      for (var j = 0; j < internalRow.length; j++) {
        //toggle the piece with the current row and current column
        board.togglePiece(i, j);
        //and break out of this if there's a solution
        if (solution) {
          break;
        }
        //if the board has any rooks conflicts
        if (!board.hasAnyRooksConflicts()) {
          //go through this function again on the next row
          recursiveRooks(board, row + 1);
        }
        //if there isn't a solution and the row is still less than the max rows
        if (!solution && row < n) {
          //toggle the piece back
          board.togglePiece(i, j);
        }
      }
    }
  };
  //start the function at the first row and the board
  recursiveRooks(board, 0);
  //pasrse the solution since it was stringified 
  solution = JSON.parse(solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //return it
  return solution;
};



// // return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   //set an empty object to feed the board, since the board needs to take in an obj
//   var obj = {};
//   //set a property on the object for n, since this the format it said to pass to the new board
//   obj.n = n;
//   //pass the object to the new board
//   board = new Board(obj);
//   //then access the rows of the board
//   var boardRows = board.rows();
//   //this was given here; since we're returning a solution, set it to be undefined
//   var solutionCount = 0;

//   //set a recursive function that takes in a board and a specific row
//   var recursiveRooks = function(board, row) {
//   //if that row is the nth row
//   if (row === n) {
//     //set the solution equal to the stringified board rows
//     solutionCount += 1;
//     return solutionCount;
//   }
//   //otherwise, loop through the rows of the board, starting at the current row
//   for (var i = row; i < boardRows.length; i++) {
//     //set the current row equal to a variable called internal row
//     var internalRow = boardRows[i];
//     //loop through the rows again so you can access a corresponding column
//     for (var j = 0; j < internalRow.length; j++) {
//       //toggle the piece with the current row and current column
//       board.togglePiece(i, j);
//       //if the board has any rooks conflicts
//         if (!board.hasAnyRooksConflicts()) {
//          //go through this function again on the next row
//           recursiveRooks(board, row + 1)
//         }      
//       //if there isn't a solution and the row is still less than the max rows
//         //toggle the piece back
//         board.togglePiece(i, j)
    
//       if (j === internalRow.length - 1) {
//         return;
//       }
//     }
//   }
// }
//   //start the function at the first row and the board
//   recursiveRooks(board, 0);
//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };
//

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var obj = {};
  obj.n = n;
  var board = new Board(obj);
  var boardRows = board.rows();
  var solutionCount = 0;

  var recursiveRooks = function(board, row, prevCol) {

    var previousColumn = [].concat(prevCol);

    if (row === n ) {
      solutionCount++;
      return;
    }
    
    for (var i = row; i < boardRows.length; i++) {
      var internalRow = boardRows[i];
     
      for (var j = 0; j < internalRow.length; j++) {
        
        board.togglePiece(i, j);

        if (!previousColumn.includes(j)) {
          if (!board.hasAnyRooksConflicts()) {
            var nexColumns = previousColumn.concat(j);
            recursiveRooks(board, row + 1, nexColumns);
          }
        }

        board.togglePiece(i, j);

        if (j === board.rows().length - 1) {
          return;
        }
      }
    }
  };
  recursiveRooks(board, 0, []);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


window.findNQueensSolution = function(n) {
  var obj = {};
  obj.n = n;
  board = new Board(obj);
  var boardRows = board.rows(); 
  var solution = undefined;

  var recursiveQueens = function(board, row) {

    if (row === n) {
      solution = JSON.stringify(board.rows());
    }

    for (var i = row; i < boardRows.length; i++) {

      var internalRow = boardRows[i];
      if (solution) {
        break;
      }
      for (var j = 0; j < internalRow.length; j++) {
        board.togglePiece(i, j);
        if (solution) {
          break;
        }
        if (!board.hasAnyQueensConflicts()) {
          recursiveQueens(board, row + 1);
        }
        board.togglePiece(i, j);
        if (j === internalRow.length - 1) {
          return;
        }
      }
    }
  };
  recursiveQueens(board, 0);
  if (solution === undefined) {
    solution = boardRows;
  } else {
    solution = JSON.parse(solution);
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

window.countNQueensSolutions = function(n) {
  var obj = {};
  obj.n = n;
  board = new Board(obj);
  var boardRows = board.rows();
  var solutionCount = 0;

  var recursiveQueens = function(board, row) {
    if (row === n) {
      solutionCount += 1;
      return solutionCount;
    }
    for (var i = row; i < boardRows.length; i++) {
      var internalRow = boardRows[i];
      for (var j = 0; j < internalRow.length; j++) {
        board.togglePiece(i, j);

        if (!board.hasAnyQueensConflicts()) {
          recursiveQueens(board, row + 1);
        }
        board.togglePiece(i, j);

        if (j === internalRow.length - 1) {
          return;
        }
      }
    }
  };
  //start the function at the first row and the board
  recursiveQueens(board, 0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
