const { markRaw } = require("vue");
const { solveSudoku, printSudoku } = require("./resolve");

let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function createSudoku() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let x = 3; x < 6; x++) {
    for (let y = 3; y < 6; y++) {
        let randomNumberIndex = getRandomIntInclusive(0, numbers.length - 1);
        let randomNumber = numbers[randomNumberIndex];
        numbers.splice(randomNumberIndex, 1); // Remove the chosen number from the array
        matrix[x][y] = randomNumber; // Assign the removed number to matrix[x][y]
    }
  }
  if (solveSudoku(matrix)) {
    console.log('solved');
    printSudoku(matrix);
prepareSudoku(matrix, 'easy')
console.log('empty');
    printSudoku(matrix);
    if(solveSudoku(matrix)){
        console.log('solved');
        printSudoku(matrix)
    }
  } else {
    console.log('No solution found.');
  }
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function prepareSudoku(sudokuMatrix, difficulty){
    let cellsDeleted={
        'easy':40, 'medium':45, 'hard':50, 'expert':56
    }
    let i = 0 ;
    chosenCells = cellsDeleted[difficulty]
    console.log('chosen cells ', chosenCells)
    while(i<cellsDeleted[difficulty]){
        let x = getRandomIntInclusive(0,8)
        let y = getRandomIntInclusive(0,8)
        if(sudokuMatrix[x][y]!==0){
            sudokuMatrix[x][y]=0;
            i++
        }
    }
  }

createSudoku();
