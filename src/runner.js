var solver = require('./solver.js');

//sample board
var board = '090000006\n' +
						'000960485\n' +
						'000581000\n' +
						'004000000\n' +
						'517200900\n' +
						'602000370\n' +
						'100804020\n' +
						'706000810\n' +
						'300090000';

console.log('INITIAL BOARD: \n' + board + '\n');
console.log('SOLUTION:');
var solution = solver.solveSudoku(board);
