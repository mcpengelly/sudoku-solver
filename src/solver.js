// board of numbers, "0"s count as empty squares

// Given an incomplete sudoku board, how would you turn it into a complete one using a computer?
var _ = require('lodash');
module.exports = {

	//sample board
	board: '090000006\n' +
				 '000960485\n' +
				 '000581000\n' +
				 '004000000\n' +
				 '517200900\n' +
				 '602000370\n' +
				 '100804020\n' +
				 '706000810\n' +
				 '300090000',

	/**
	 * parseBoard: reads a board and turns it into viable input
	 * @param  {String} board string representation of a sudoku board, rows delimited by newlines
	 * @return {2D Array}       2D Array representation of the input sudoku string
	 */
	parseBoard: function(board){
		var rows = board.split('\n');
		var parsedBoard = rows.map(function(row){
			return row.split('').map(function(element){
				return +element;
			});
		});
		return parsedBoard;
	},

	/**
	 * checkEmptySquares: checks for empty squares in the sudoku board returns a list them all
	 * @param  {2D Array} pBoard [description]
	 * @return {2D Array}        [2D array representing all the empty spaces
	 * ie: [[row, column], [row, column]]
	 */
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

	/**
	 * checkValue: checks whether the value fits into the desired square
	 * @param  {2D Array} pBoard [the 2D Array board]
	 * @param  {integer} row    [which row to check if value can fit in]
	 * @param  {integer} column [which column to check if value can fit in]
	 * @param  {integer} value  [value to to be input the row, column square]
	 * @return {boolean}        [true if the value can be input in the square, otherwise false]
	 */
	checkValue: function(pBoard, row, column, value){
		// calls the other check functions
		if(this.checkRows(pBoard, row, value) &&
		 this.checkColumns(pBoard, column, value) &&
		 this.check3x3Grid(pBoard, row, column, value)){
			return true;
		} else {
			return false;
		}
	},


	/**
	 * checkRows: checks all squares in the current row
	 * @param  {2D Array} pBoard [the sudoku board being solved]
	 * @param  {integer} row    [row to check]
	 * @param  {integer} value  [value to try and fit into row]
	 * @return {boolean}       [true if the value can fit, otherwise false]
	 */
	checkRows: function(pBoard, row, value){
		var canInsert = true;
		for(var i = 0; i < pBoard.length; i++){
			if(value === pBoard[row][i]){
				canInsert = false;
			}
		}
		return canInsert;
	},

	/**
	 * checkRows: checks all squares in the current column
	 * @param  {2D Array} pBoard [the sudoku board being solved]
	 * @param  {integer} column    [row to check]
	 * @param  {integer} value  [value to try and fit into column]
	 * @return {boolean}       [true if the value can fit, otherwise false]
	 */
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

	/**
	 * solvePuzzle: solves the grid/puzzle portion of the sudoku
	 * @param  {2D Array} pBoard         [the sudoku for solving]
	 * @param  {2D Array} emptyPositions [2D array of the empty squares in the puzzle]
	 * @return {2D Array}                [the solved sudoku board]
	 */
	solvePuzzle: function(pBoard, emptyPositions){
		// variables to track our position in the solver
		var limit = 9;
		var i, row, column, value, found;
		for(i = 0; i < emptyPositions.length;) {
			row = emptyPositions[i][0];
			column = emptyPositions[i][1];
			// try the next value
			value = pBoard[row][column] + 1;
			// was a valid number found?
			found = false;
			// keep trying new values until either the limit
			// was reached or a valid value was found
			while(!found && value <= limit) {
				// if a valid value is found, mark found true,
				// set the position to the value, and move to the
				// next position
				if(this.checkValue(pBoard, row, column, value)) {
					found = true;
					pBoard[row][column] = value;
					i++;
				}
				// otherwise, try the next value
				else {
					value++;
				}
			}
			// if no valid value was found and the limit was
			// reached, move back to the previous position
			if(!found) {
				pBoard[row][column] = 0;
				i--;
			}
		}

		// show solution
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

