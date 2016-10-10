// some sudoku solver thing
/* board of numbers "0"s count as empty spots*/

//given an incomplete sudoku board, how would you turn it into a complete one using a computer?
var _ = require('lodash');
module.exports = {

	board: '090000006\n' +
				 '000960485\n' +
				 '000581000\n' +
				 '004000000\n' +
				 '517200900\n' +
				 '602000370\n' +
				 '100804020\n' +
				 '706000810\n' +
				 '300090000',

	/* reads a board and turns it into viable input */
	parseBoard: function(board){
		var rows = board.split('\n');
		var parsedBoard = rows.map(function(row){
			return row.split('').map(function(element){
				return +element;
			});
		});
		return parsedBoard;
	},

	//checks for empty squares in the sudoku
	checkEmptySquares: function(pBoard){
		var emptySquares = []; // array of 2 element arrays TODO:use objects instead?
		//iterate over matrix looking for empty squares
		pBoard.forEach(function(row, rIndex){
			row.forEach(function(elem, index){
				if(elem === 0){
					emptySquares.push([rIndex, index]);
				}
			});
		});

		return emptySquares;
	},

	//checks whether the value works for the containing square
	checkValue: function(pBoard, row, column, value){
		//calls the other check functions
		if(this.checkRows(pBoard, row, value) &&
		 this.checkColumns(pBoard, column, value) &&
		 this.check3x3Grid(pBoard, row, column, value)){
			return true;
		} else {
			return false;
		}
	},

	//checks all squares in the current row
	checkRows: function(pBoard, row, value){
		var canInsert = true;
		for(var i = 0; i < pBoard.length; i++){
			if(value === pBoard[row][i]){
				canInsert = false;
			}
		}
		return canInsert;
	},

	//checks all squares in the current column
	checkColumns: function(pBoard, column, value){
		var canInsert = true;
		for(var i = 0; i < pBoard[0].length; i++){
			if(value === pBoard[i][column]){
				canInsert = false;
			}
		}
		return canInsert;
	},

	//checks all squares in the current grid/region
	check3x3Grid: function(pBoard, row, column, value){
		var columnCorner = 0;
		var rowCorner = 0;
		var squareSize = 3;

		//setup the corners for checking 3x3 grid
		while(column >= columnCorner + squareSize){
			columnCorner += squareSize;
		}

		while(row >= rowCorner + squareSize){
			rowCorner += squareSize;
		}

		var canInsert = true;
		// Iterate through each row
		for(var i = rowCorner; i < rowCorner + squareSize; i++) {
			// Iterate through each column
			for(var j = columnCorner; j < columnCorner + squareSize; j++) {
				if(pBoard[i][j] === value){
					canInsert = false;
				}
			}
		}
		return canInsert;
	},

	//solves the grid/puzzle portion of the sudoku
	solvePuzzle: function(pBoard, emptyPositions){
		// Variables to track our position in the solver
		var limit = 9;
		var i, row, column, value, found;
		for(i = 0; i < emptyPositions.length;) {
			row = emptyPositions[i][0];
			column = emptyPositions[i][1];
			// Try the next value
			value = pBoard[row][column] + 1;
			// Was a valid number found?
			found = false;
			// Keep trying new values until either the limit
			// was reached or a valid value was found
			while(!found && value <= limit) {
				// If a valid value is found, mark found true,
				// set the position to the value, and move to the
				// next position
				if(this.checkValue(pBoard, column, row, value)) {
					found = true;
					pBoard[row][column] = value;
					i++;
				}
				// Otherwise, try the next value
				else {
					value++;
				}
			}
			// If no valid value was found and the limit was
			// reached, move back to the previous position
			if(!found) {
				pBoard[row][column] = 0;
				i--;
			}
		}

		// A solution was found! Log it
		pBoard.forEach(function(row) {
			console.log(row.join());
		});

		// return the solution
		return pBoard;
	},

	//does everything related to the sudoku puzzle
	solveSudoku: function(board){
		var parsedBoard = this.parseBoard(board);
		var emptySquares = this.checkEmptySquares(parsedBoard);

		return this.solvePuzzle(parsedBoard, emptySquares);
	}
}

