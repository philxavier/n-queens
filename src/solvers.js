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


window.findNRooksSolution = function(n) {
  var obj = {};
  obj.n = n;
  var board = new Board(obj);
  var boardRows = board.rows();

  var solution = undefined;
    
  var recursiveRooks = function(board, row) {
    if (row === n) {
      solution = board.rows();
      return;
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
  
        if (!board.hasAnyRooksConflicts()) {
          recursiveRooks(board, row + 1)
          
        } 
        if (!solution && row < n) {
          board.togglePiece(i, j)
        } 
      }   
    }
  }
  recursiveRooks(board, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

//console.log('n = 1: ' + window.findNRooksSolution(1))
console.log('n = 2: ' + window.findNRooksSolution(2));
//console.log('n = 3: ' + window.findNRooksSolution(3));
//console.log('n = 4: ' + window.findNRooksSolution(4));


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
