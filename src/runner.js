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


var board2 ='020080370\n' +
						'000900004\n' +
						'406002000\n' +
						'269800100\n' +
						'153409786\n' +
						'007006529\n' +
						'000700902\n' +
						'600005000\n' +
						'098040030';

console.log('INITIAL BOARD: \n' + board + '\n');
console.log('SOLUTION:');
solver.solveSudoku(board);

