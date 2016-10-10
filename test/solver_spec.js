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
		it('should parse a sudoku board into a 2D array', function(){
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
        [0,0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,0],[1,1],
        [1,2],[1,5],[2,0],[2,1],[2,2],[2,6],[2,7],[2,8],[3,0],
        [3,1],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[4,4],[4,5],
        [4,7],[4,8],[5,1],[5,3],[5,4],[5,5],[5,8],[6,1],[6,2],
        [6,4],[6,6],[6,8],[7,1],[7,3],[7,4],[7,5],[7,8],[8,1],
        [8,2],[8,3],[8,5],[8,6],[8,7],[8,8]
			];
			expect(emptyPositions.length).to.equal(51); //there should be 51 empty spaces
			expect(emptyPositions[0].length).to.equal(2);
			expect(emptyPositions).to.eql(expectedEmptySquares);
		});
	});

	describe('function checkColumns', function(){
		it('should check if the value can be input in the column', function(){
			expect(solver.checkColumns(parsedBoard, 0, 2)).to.be.ok;
			expect(solver.checkColumns(parsedBoard, 2, 7)).to.be.not.ok;
		});
	});

	describe('function checkRows', function(){
		it('should check if the value can be input in the row', function(){
			expect(solver.checkRows(parsedBoard, 0, 3)).to.be.ok;
			expect(solver.checkRows(parsedBoard, 0, 6)).to.be.not.ok;
		});
	});

	describe('function check3x3Grid', function(){
		it('should check if the value can be input in the 3x3 grid/region', function(){
			expect(solver.check3x3Grid(parsedBoard, 0, 0, 1)).to.be.ok;
			expect(solver.check3x3Grid(parsedBoard, 0, 0, 9)).to.not.be.ok;
			expect(solver.check3x3Grid(parsedBoard, 6, 6, 5)).to.be.ok;
			expect(solver.check3x3Grid(parsedBoard, 6, 6, 1)).to.not.be.ok;
		});
	});

});
