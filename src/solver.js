// some sudoku solver thing
/* board of numbers "0"s count as empty spots*/

//given an incomplete sudoku board, how would you turn it into a complete one using a computer?

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
		var bRows = board.split('');
		console.log(bRows);
		// var res = bRows.split('');
		return bRows;
	},

	//checks for empty squares in the sudoku
	checkEmptySquares: function(){

	},

	//checks whether the value works for the containing square
	checkValue: function(){

	},

	//checks all squares in the current column
	checkColumns: function(){

	},

	//checks all squares in the current row
	checkRows: function(){

	},

	//checks all squares in the current grid/region
	checkGrid: function(){

	},

	//solves the grid/puzzle portion of the sudoku
	solvePuzzle: function(){

	},

	//does everything related to the sudoku puzzle
	solveSudoku: function(){

	}
}

