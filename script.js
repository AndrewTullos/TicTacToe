// Get the box elements
let boxes = document.getElementsByClassName('box');

// Initialize the click count and symbols
let clickCount = 0;
let symbols = ['&#88;', '&#216;'];

// Add a click event listener to each box
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    // Check if the box is empty
    if (!boxes[i].innerHTML) {
      // Get the current symbol based on click count
      let symbol = symbols[clickCount % 2];

      // Update the box with the symbol
      boxes[i].innerHTML = symbol;

      // Increment the click count
      clickCount++;

      // Check for a winner after each move
      checkForWinner();
    }
  });
}

// Reset button functionality
let resetButton = document.querySelector('.reset button');
resetButton.addEventListener('click', function() {
  // Clear the symbols and click count
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
  }
  clickCount = 0;
});

// Function to check for a winner
function checkForWinner() {
  // Set winning combinations
  let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  // Check each winning combination
  for (let i = 0; i < winningCombinations.length; i++) {
    let [a, b, c] = winningCombinations[i];

    if (
      boxes[a].innerHTML && boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML
    ) {
      // Display the winner
      window.alert(`${boxes[a].innerHTML} wins!`);

      // Reset the game
      resetGame();
      return;
    }
  }

  // Check for a cat's game
  if (clickCount === 9) {
    window.alert("Cat's game!");

    // Reset the game
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  // Clear the symbols and click count
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
  }
  clickCount = 0;
}
