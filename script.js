const Gameboard = (() => {
    let board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

    // create div container
    const gameContainer = document.querySelector('#game-container');
    let counter = 0
    for (i = 0; i < 9; i++) {
        const cell = document.createElement('div');
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

    



    return {playerOne, playerTwo, currentPlayer}

})();



