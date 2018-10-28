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
  var solution = undefined; //fixme
  var obj = {};
  obj.n = n;
  var board = new Board(obj);
  var boardRows = board.rows();
  var counter = 0;
  debugger;
    
  var recursiveRooks = function(inputBoard) {
    
    for (var i = 0; i < boardRows.length; i++) {
      var row = boardRows[i];
  
      for (var j = 0; j < row.length; j++) {
        board.togglePiece(i, j);
  
        if (!board.hasAnyRooksConflicts()) {
          recursiveRooks(inputBoard)
        }
      }   
    }
  }
  recursiveRooks(board);

  // [1,0,0,0]
  // [0,0,0,0]
  // [0,0,0,0]
  // [0,0,0,0]
  
  //loop through board
      //togglePiece
      //check if there are any conflicts through findAnyRooks helper function
      //if there are conflicts, 
        //untoggle
      //if there aren't any conflicts && counter < n, keep looping through AND add 1 to a counter
      //if counter == n, return board

  // },

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

var test = findNRooksSolution(4);
console.log(test.rows());


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
