function main() {
    const sudokuMatrix = [
      [7, 5, 0, 0, 0, 9, 0, 4, 0],
      [0, 9, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0, 6],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 7, 0, 0, 0, 0, 0],
      [9, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  
    if (solveSudoku(sudokuMatrix)) {
      console.log('Solved:');
      printSudoku(sudokuMatrix);
    } else {
      console.log('No solution found.');
    }
  }
  
  function solveSudoku(sudokuMatrix) {
    for (let xAxis = 0; xAxis < 9; xAxis++) {
      for (let yAxis = 0; yAxis < 9; yAxis++) {
        if (sudokuMatrix[xAxis][yAxis] === 0) {
          const options = areaToAnalyze(xAxis, yAxis, sudokuMatrix);
          for (const number of options) {
            sudokuMatrix[xAxis][yAxis] = number;
            if (solveSudoku(sudokuMatrix)) {
              return true;
            }
            sudokuMatrix[xAxis][yAxis] = 0;
          }
          return false;
        }
      }
    }
    return true; 
  }
  
  function areaToAnalyze(xAxis, yAxis, sudokuMatrix) {
    const usedNumbers = new Set();
  
    // Check row
    for (let i = 0; i < 9; i++) {
      usedNumbers.add(sudokuMatrix[xAxis][i]);
    }
  
    // Check column
    for (let i = 0; i < 9; i++) {
      usedNumbers.add(sudokuMatrix[i][yAxis]);
    }
  
    // Check 3x3 square
    const startX = Math.floor(xAxis / 3) * 3;
    const startY = Math.floor(yAxis / 3) * 3;
    for (let i = startX; i < startX + 3; i++) {
      for (let j = startY; j < startY + 3; j++) {
        usedNumbers.add(sudokuMatrix[i][j]);
      }
    }
  
    const options = [];
    for (let num = 1; num <= 9; num++) {
      if (!usedNumbers.has(num)) {
        options.push(num);
      }
    }
  
    return options;
  }
  
  function printSudoku(sudokuMatrix) {
    for (const row of sudokuMatrix) {
      console.log(row.join(' '));
    }
  }
  
  main();
  