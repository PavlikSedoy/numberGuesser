// Property variables
let min = 1,
    max = 10,
    winningNum = 3,
    guessesLeft = 3

// UI variables
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessField = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message')

// Assign min, max value
minNum.textContent = min
maxNum.textContent = max

// Handle submit button click
guessBtn.addEventListener('click', () => {
    // Get guess number
    const guess = parseInt(guessField.value)

    // Validation
    if (isNaN(guess) || guess < min || guess > max) showMessage(`Please set number between ${min} and ${max}`, 'red')

    // Check if won
    if (guess === winningNum) {
        guessField.disabled = true
        guessField.style.borderColor = 'green'
        showMessage(`${guess} is correct. YOU WIN!`, 'green')
    }
})

/**
 * Show message
 * @param {String} msg Message to show
 * @param {String} color Message text color
 */
const showMessage = (msg, color) => {
    message.style.color = color
    message.textContent = msg
}