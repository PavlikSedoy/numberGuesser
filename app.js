
/**
 * Generate random number for guess
 * @param {Number} min Minimal number value
 * @param {Number} max Maximal number value
 */
 const generateRandomNum = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

// Property variables
let min = 1,
    max = 10,
    winningNum = generateRandomNum(min, max),
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
    if (isNaN(guess) || guess < min || guess > max) {
        showMessage(`Please set number between ${min} and ${max}`, 'red')
        return false
    }

    // Check if won
    if (guess === winningNum) gameOver(true, `${guess} is correct. YOU WIN!`)
    else {
        guessesLeft -= 1

        showMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red')

        // Clear guess input
        guessField.value = ''

        // Check if all guesses left
        if (guessesLeft === 0) {
            gameOver(false, 'Game over')
        }
    }

})

// Handle click on "Play again" button
game.addEventListener('mousedown', e => {
    if (e.target.className === 'play-again') window.location.reload()
})

/**
 * Game over or won funtion
 * @param {Boolean} won Won or no
 * @param {String} msg Message to show
 */
const gameOver = (won, msg) => {
    // Set color (red|green)
    const color = won ? 'green' : 'red'

    guessField.disabled = !won
    guessField.style.borderColor = color
    showMessage(msg, color)

    // Change "Submit" button to "Play again" button
    guessBtn.value = 'Play again'
    guessBtn.className = 'play-again'
}

/**
 * Show message
 * @param {String} msg Message to show
 * @param {String} color Message text color
 */
const showMessage = (msg, color) => {
    message.style.color = color
    message.textContent = msg
}