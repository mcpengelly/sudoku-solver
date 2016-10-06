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
		var rowNumbers = [];
		for(var i = 0; i < pBoard.length; i++){
			if(pBoard[row][i] !== 0){
				rowNumbers.push(pBoard[row][i]);
			}
		}
		if(_.includes(rowNumbers, value)){
			return false;
		} else {
			return true;
		}
	},

	//checks all squares in the current column
	//takes a point on the grid and checks its column peers
	checkColumns: function(pBoard, column, value){
		var columnNumbers = [];
		pBoard.forEach(function(row, rIndex){
			if(row[column] !== 0){
				columnNumbers.push(row[column]);
			}
		});
		if(_.includes(columnNumbers, value)){
			return false;
		} else {
			return true;
		}
	},

	//checks all squares in the current grid/region
	check3x3Grid: function(index){

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

