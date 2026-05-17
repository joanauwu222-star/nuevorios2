let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let scoreX = 0;
let scoreO = 0;
let scoreTie = 0;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const boardElement = document.getElementById('board');
const turnText = document.getElementById('turnText');
const winnerMessage = document.getElementById('winnerMessage');
const resetBtn = document.getElementById('resetBtn');
const scoreXElement = document.getElementById('scoreX');
const scoreOElement = document.getElementById('scoreO');
const scoreTieElement = document.getElementById('scoreTie');

function updateScoresDisplay() {
    scoreXElement.textContent = scoreX;
    scoreOElement.textContent = scoreO;
    scoreTieElement.textContent = scoreTie;
}

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function checkTie() {
    return board.every(cell => cell !== '');
}

function updateTurnDisplay() {
    turnText.textContent = currentPlayer;
}

function handleWin(winner) {
    gameActive = false;
    
    if (winner === 'X') {
        scoreX++;
        winnerMessage.textContent = 'Jugador X ha ganado';
    } else {
        scoreO++;
        winnerMessage.textContent = 'Jugador O ha ganado';
    }
    
    updateScoresDisplay();
}

function handleTie() {
    scoreTie++;
    winnerMessage.textContent = 'Empate. Nadie gana';
    updateScoresDisplay();
}

function makeMove(index) {
    if (!gameActive || board[index] !== '') {
        return;
    }

    board[index] = currentPlayer;
    updateBoardDisplay();

    const winner = checkWinner();
    
    if (winner) {
        handleWin(winner);
    } else if (checkTie()) {
        handleTie();
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateTurnDisplay();
    }
}

function updateBoardDisplay() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
        if (board[index] === 'X') {
            cell.classList.add('x');
            cell.classList.remove('o');
        } else if (board[index] === 'O') {
            cell.classList.add('o');
            cell.classList.remove('x');
        } else {
            cell.classList.remove('x', 'o');
        }
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    winnerMessage.textContent = '';
    updateBoardDisplay();
    updateTurnDisplay();
}

function resetFullGame() {
    resetGame();
    scoreX = 0;
    scoreO = 0;
    scoreTie = 0;
    updateScoresDisplay();
}

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');
    
    if (cell.classList.contains('cell')) {
        makeMove(parseInt(index));
    }
}

boardElement.addEventListener('click', handleCellClick);
resetBtn.addEventListener('click', resetFullGame);

updateBoardDisplay();
updateTurnDisplay();
updateScoresDisplay();