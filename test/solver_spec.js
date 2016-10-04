var chai = require('chai');
var expect = chai.expect;
var solver = require('../src/solver.js');

describe('sudoku solver', function(){

	var board = '090000006\n' +
							'000960485\n' +
							'000581000\n' +
							'004000000\n' +
							'517200900\n' +
							'602000370\n' +
							'100804020\n' +
							'706000810\n' +
							'300090000';
	var parsedBoard, expectedBoard, emptyPositions;

	describe('function parseBoard', function(){
		it('should parse a string of input numbers into an array', function(){
			expectedBoard = [
				[0, 9, 0, 0, 0, 0, 0, 0, 6],
				[0, 0, 0, 9, 6, 0, 4, 8, 5],
				[0, 0, 0, 5, 8, 1, 0, 0, 0],
				[0, 0, 4, 0, 0, 0, 0, 0, 0],
				[5, 1, 7, 2, 0, 0, 9, 0, 0],
				[6, 0, 2, 0, 0, 0, 3, 7, 0],
				[1, 0, 0, 8, 0, 4, 0, 2, 0],
				[7, 0, 6, 0, 0, 0, 8, 1, 0],
				[3, 0, 0, 0, 9, 0, 0, 0, 0]
			];

			parsedBoard = solver.parseBoard(board);
			expect(parsedBoard.length).to.equal(9); //grid should be 9 units long
			expect(parsedBoard[0].length).to.equal(9); //grid should be 9 units short
			expect(parsedBoard).to.eql(expectedBoard);
		});
	});

	describe('function checkEmptySquares', function(){
		it('should return all indicies of empty squares in a parsedBoard', function(){
			emptyPositions = solver.checkEmptySquares(parsedBoard);
			var expectedEmptySquares = [

			];
			expect(emptyPositions.length).to.equal(51); //there should be 51 empty spaces
			// expect(emptyPositions[0].length).to.equal(2);
			expect(emptyPositions).to.eql(expectedEmptySquares);
		});
	});

	describe('function checkColumns', function(){
		it('should checksquares in the column and return the remaining options', function(){
			var expectedColumnOptions = [];
			var options = solver.checkColumns(/*args*/);
			expect(options).to.eql(expectedColumnOptions);
		});
	});

	describe('function checkColumns', function(){
		it('should checksquares in the row and return the remaining options', function(){
			var expectedRowOptions = [];
			var options = solver.checkRows(/*args*/);
			expect(options).to.eql(expectedRowOptions);
		});
	});

});
