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
	checkValue: function(){
		//calls the other check functions
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
		//how to check if the squares are within a specific region?
		//then checks if it can be input into that region by iterating through it
		var region = 0;
		if(row <= 2 && column <= 2) {
			//belongs to the first 3x3 grid
			region = 1;
		}

		if(region === 1){
			for(var i = 0; i <= 2; i++){
				// console.log(pBoard[row][i]);
				console.log(pBoard[i][column]);
			}
		}
	},

	//solves the grid/puzzle portion of the sudoku
	solvePuzzle: function(){
		// var empties = checkEmptySquares(this.board);
		// empties.forEach(function(emptySquare){
		// 	checkValue();
		// });
	},

	//does everything related to the sudoku puzzle
	solveSudoku: function(){

	}
}

