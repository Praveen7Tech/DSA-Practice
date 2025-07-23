const EventEmitter = require('events');

// Create a custom emitter object
const myEmitter = new EventEmitter();

// Listen for an event
myEmitter.on('greet', () => {
  console.log('Hello! Event received.');
});

// Emit (trigger) the event
myEmitter.emit('greet');




 // BINARY 2D SEARCH
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let rows = matrix.length;
  let cols = matrix[0].length;
  let low = 0;
  let high = rows * cols - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / cols);
    let col = mid % cols;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

let array = [[1, 2, 4], [5, 7, 9], [12, 34, 45]];
let target = 45;

console.log(searchMatrix(array, target)); 


