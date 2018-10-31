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

        if (!board.hasAnyRooksConflicts()) {
          recursiveRooks(board, row + 1);

        }
        if (!solution && row < n) {
          board.togglePiece(i, j);
        }
      }
    }
  };
  recursiveRooks(board, 0);
  solution = JSON.parse(solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

//return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
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

  //OLD SLOW FUNCTION 
  //
  // var obj = {};
  // obj.n = n;
  // var board = new Board(obj);
  // var boardRows = board.rows();

  // var solutionCount = 0;
  // var recursiveRooks = function(board, row) {
  //   if (row === n ) {
  //     solutionCount++;
  //     return;
  //   }
  //   for (var i = row; i < boardRows.length; i++) {
  //     var internalRow = boardRows[i];
     
  //     for (var j = 0; j < internalRow.length; j++) {
  //       board.togglePiece(i, j);

  //       if (!board.hasAnyRooksConflicts()) {
  //         recursiveRooks(board, row + 1);
  //       }

  //       board.togglePiece(i, j);

  //       if (j === board.rows().length - 1) {
  //         return;
  //       }
  //     }
  //   }
  // };
  // recursiveRooks(board, 0);
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
};

window.countNRooksSolutions(8);
debugger;

//return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var obj = {};
  obj.n = n;
  var board = new Board(obj);
  var solution;  

  if (n === 2 || n === 3) {
    return board.rows();
  }

  var recursiveQueen = function(inputBoard, row) {
    debugger;
    if (row === n || solution) {
      if (row === n) {
        solution = JSON.stringify(inputBoard.rows());
      }
      return;
    }
    
    for (let i = row; i < board.rows().length; i++) {
      if (solution) {
        break;
      }
      for (let j = 0; j < board.rows()[i].length; j++) {
        if (solution) {
          break;
        }
        inputBoard.togglePiece(i, j);

        if (!inputBoard.hasAnyQueensConflicts()) {
          recursiveQueen(board, row + 1);
        } 

        inputBoard.togglePiece(i, j);

        if (j === board.rows().length - 1) {
          return;
        }
      }
    }
  };
  recursiveQueen(board, 0);
  solution = JSON.parse(solution);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  // var obj = {};
  // obj.n = n;
  // var board = new Board(obj);
  // var boardRows = board.rows();
  // var solutionCount = 0;

  // var recursiveQueen = function(board, row, prevCol) {
  //   var previousColumn = [].concat(prevCol);
  //   if (row === n ) {
  //     solutionCount++;
  //     return;
  //   }
  //   for (var i = row; i < boardRows.length; i++) {
  //     var internalRow = boardRows[i];
     
  //     for (var j = 0; j < internalRow.length; j++) {
        
  //       board.togglePiece(i, j);

  //       if (!previousColumn.includes(j)) {
  //         if (!board.hasAnyQueensConflicts()) {
  //           var nexColumns = previousColumn.concat(j);
  //           recursiveQueen(board, row + 1, nexColumns);
  //         }
      
  //       }

  //       board.togglePiece(i, j);

  //       if (j === board.rows().length - 1) {
  //         return;
  //       }
  //     }
  //   }
  // };
  // recursiveQueen(board, 0, []);
  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  // return solutionCount;

  var obj = {};
  obj.n = n;
  var board = new Board(obj);
  var boardRows = board.rows();
  var solutionCount = 0;
  var recursiveQueens = function(board, row) {
    if (row === n ) {
      solutionCount++;
      return;
    }
    for (var i = row; i < boardRows.length; i++) {
      var internalRow = boardRows[i];
     
      for (var j = 0; j < internalRow.length; j++) {
        board.togglePiece(i, j);

        if (!board.hasAnyQueensConflicts()) {
          recursiveQueens(board, row + 1);
        }

        board.togglePiece(i, j);
        if (j === board.rows().length - 1) {
          return;
        }
      }
    }
  };
  recursiveQueens(board, 0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
