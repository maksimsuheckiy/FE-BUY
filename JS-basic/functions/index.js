// Task-01

function checkCharPosition(word, index, char) {
    return word.indexOf(char) === index;
}

checkCharPosition('home', 1, 'o');

// Task-02

function checkLength(str, expectedLength) {
    return str.length === expectedLength
}

checkLength('english', 6);

// Task-03

function randomWord() {
    const words = [
        'home',
        'watch'
    ]

    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

function wordGuessingGame() {
    const startGame = confirm('Чи хочете ви грати в гру відгадування слова?');

    if (!startGame) return false

    const hiddenWord = randomWord();
    let errorsCounter = 0;
    let guessIndex = 0;

    do {
        const userAnswer = prompt('Введіть букву відгадування (ввести можно лише одну букву)');
        const result = checkCharPosition(hiddenWord, guessIndex, userAnswer);

        if (!userAnswer) break

        if (!result) {
            errorsCounter += 1;
            alert('Ваша здогадка неправильна');
        } else {
            guessIndex += 1
            errorsCounter = 0;
        }

        if (checkLength(hiddenWord, guessIndex)) {
            alert('You win!');
            break
        }

        if (errorsCounter === 5) {
            alert('You lose!');
            break
        }
    } while (errorsCounter !== 5);
}

wordGuessingGame();
