const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    // create div container
    const gameContainer = document.querySelector('#game-container');
    let counter = 0
    for (i = 0; i < 9; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        gameContainer.appendChild(cell);
        cell.id = counter;
        counter++;
    }
    
    return { board }
})();

const Player = (name, marker) => {
    return { name, marker }
};

const Game = (() => {
    let playerOne = Player('One', 'X');
    let playerTwo = Player('Two', 'O');
    let currentPlayer = playerOne;
    let cell = document.querySelectorAll('.cell');

    cell.forEach((cell) => {
        cell.addEventListener('click', () => {
            let chosenCell = cell.id;

            if (Gameboard.board[chosenCell] === '') {
                Gameboard.board.splice(chosenCell, 1, currentPlayer.marker);
                console.log(Gameboard.board);

                const displayController = (() => {
                    for (i = 0; i < 9; i++) {
                        cell.textContent = Gameboard.board[chosenCell];
                    }
                })();
                
                if (currentPlayer === playerOne) {
                    currentPlayer = playerTwo;
                } else if (currentPlayer === playerTwo) {
                    currentPlayer = playerOne;
                }
                
                return displayController
            } else {
                alert('That spot has already been taken! Try another spot.');
            }

            return { chosenCell };
        })
    });

    return { playerOne, playerTwo, currentPlayer }
})();