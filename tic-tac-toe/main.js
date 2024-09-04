

// Gameboard
const gameBoard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""]

    function getBoard() {
        return board
    }

    function move(position, marker) {
        if(board[position] === ""){
            board[position] = marker
            return true
        }
        return false

    }

    function resetboard() {
        board = ["", "", "", "", "", "", "", "", ""]
    }

    return {getBoard , move, resetboard}
})();


// Player

const playerName = function(name, marker) {
    return {name, marker}
}

// game control

const gameController = (function() {
    let playerList = []
    let currentPlayerIndex = 0
    let gameOver = false

    const startGame = function(player1Name, player2Name) {
        gameBoard.resetboard()
        playerList = [playerName(player1Name, "X"), playerName(player2Name, "O")]
        currentPlayerIndex = 0
        gameOver = false
        displayGame.showResult(`${playerList[currentPlayerIndex].name}'s turn (${playerList[currentPlayerIndex].marker})`)
    }


    const playRound = function(index) {
        if (gameOver || !gameBoard.move(index, playerList[currentPlayerIndex].marker)) {
            return
        }
        if (checkWinner()) {
            gameOver = true
            displayGame.showResult(`Winner: ${playerList[currentPlayerIndex].name}`)
        }
        if (isdraw()) {
            gameOver = true
            displayGame.showResult('Draw!')
        }
        else {
            currentPlayerIndex = (currentPlayerIndex === 0 ? 1 : 0)
            if (gameOver === false) {
                displayGame.showResult(`${playerList[currentPlayerIndex].name}'s turn (${playerList[currentPlayerIndex].marker})`)
                }
            }
    }


    const checkWinner = function() {
        const board = gameBoard.getBoard();
        const winningPattern = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (let pattern of winningPattern) {
            const [a, b, c] = pattern

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true
            }
        }
        return false
    }

    const isdraw = function() {
        
        return gameBoard.getBoard().every(cell => cell !== "")
    }

    return {startGame, playRound}

})();


// DOM


const displayGame = (function() {

    const box = document.querySelectorAll('.box')
    const startbtn = document.getElementById('start-btn')
    const dialogForm = document.getElementById('dialog-form');
    const gamebtn = document.getElementById('confirm-btn')
    const resetbtn = document.getElementById('reset-btn')
    const displayResult = document.getElementById('display')


    const hideStartBtn = function() {
        startbtn.style.visibility = 'hidden'
    }

    const showResetBtn = function() {
        resetbtn.style.visibility = 'visible'
    }

    startbtn.addEventListener("click", () => {
        dialogForm.showModal()
    })

    gamebtn.addEventListener("click", (e) => {

        const player1Name = document.getElementById('player1').value || "X"
        const player2Name = document.getElementById('player2').value || "O"
        gameController.startGame(player1Name, player2Name)

        box.forEach(cell => {
            cell.textContent = ""
        })

        dialogForm.close()
        hideStartBtn()
        showResetBtn()
        
    })

    box.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            gameController.playRound(index)
            const board = gameBoard.getBoard()
            cell.textContent = board[index]
        })
    })

    resetbtn.addEventListener('click', () => {

        dialogForm.showModal()

        box.forEach(cell => {
            cell.textContent = ""
        })
    })


    const renderGame = () => {
        const board = gameBoard.getBoard()
    }

    const showResult = (msg) => {
        displayResult.textContent = msg
    }

    return {
        renderGame, showResult
    }



})();

footerYear = document.querySelector(".footyear")
footerYear.textContent = new Date().getFullYear();

window.onload = function() {
    reset = document.getElementById('reset-btn')
    reset.style.visibility = 'hidden'
}
