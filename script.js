const Gameboard = (() => {
    let board = ['X', 'O', 'X', 
                'O', 'X', 'O', 
                'X', 'O', 'X'];

    return { board }
})();

const Player = (name, marker) => {
    return { name, marker }
};



const gameFlow = (() => {
    let playerOne = Player('One', 'X');
    let playerTwo = Player('Two', 'O');

    return {playerOne, playerTwo}

})();

// create div container

const gameContainer = document.querySelector('#game-container');
let counter = 0
for (i = 0; i < 9; i++) {
    const gameSquare = document.createElement('div');
    gameSquare.className = 'square';
    gameContainer.appendChild(gameSquare);
    gameSquare.id = counter;
    counter++;
    gameSquare.textContent = Gameboard.board[i];
}
