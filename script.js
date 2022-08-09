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
        cell.textContent = board[i];
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

            Gameboard.board.splice(chosenCell, 1, currentPlayer.marker);
            console.log(Gameboard.board);
            
            if (currentPlayer === playerOne) {
                currentPlayer = playerTwo;
            } else if (currentPlayer === playerTwo) {
                currentPlayer = playerOne;
            }

            return chosenCell;
        })
    });

    return { playerOne, playerTwo, currentPlayer }

})();
