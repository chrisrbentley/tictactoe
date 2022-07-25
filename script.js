const gameBoard = (() => {
    let board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

    return { board }
})();

const player = (name) => {
    return { name }
};

const gameFlow = () => {

};

const playerX = player('X');
const playerO = player('O');

// create div container

const gameContainer = document.querySelector('#game-container');

let counter = 1
for (i = 0; i < 9; i++) {
    const gameSquare = document.createElement('div');
    gameSquare.className = 'square';
    gameContainer.appendChild(gameSquare);
    gameSquare.id = counter;
    counter++;
}





