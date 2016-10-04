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
					emptySquares.push([rIndex, index]); //
				}
			});
		});

		return emptySquares;
	},

	//checks whether the value works for the containing square
	checkValue: function(){

	},

	//checks all squares in the current column
	//takes an index of the grid and checks its column peers
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

