const transpose = function (matrix) {
  // Sasha Young Driver for the following, Matt Morgan + Dinara Dvortsova navigators
  // Replace this code with your solution'
  // Create a new matrix that retrieves elements from the inputted matrix into a new one
  // Loop through a parameter matrix 
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    // Create a new row inside the array
    newMatrix[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === undefined) {
        break;
      }
      newMatrix[i].push(matrix[j][i])
    }
  }
  return newMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));