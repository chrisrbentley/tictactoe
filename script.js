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
    const body = document.querySelector('#body');


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

                function checkWinner() {
                    if (Gameboard.board[0] === 'X' && Gameboard.board[1] === 'X' && Gameboard.board[2] === 'X' || 
                        Gameboard.board[3] === 'X' && Gameboard.board[4] === 'X' && Gameboard.board[5] === 'X' || 
                        Gameboard.board[6] === 'X' && Gameboard.board[7] === 'X' && Gameboard.board[8] === 'X' ||
                        Gameboard.board[0] === 'X' && Gameboard.board[3] === 'X' && Gameboard.board[6] === 'X' ||
                        Gameboard.board[1] === 'X' && Gameboard.board[4] === 'X' && Gameboard.board[7] === 'X' || 
                        Gameboard.board[2] === 'X' && Gameboard.board[5] === 'X' && Gameboard.board[8] === 'X' || 
                        Gameboard.board[0] === 'X' && Gameboard.board[4] === 'X' && Gameboard.board[8] === 'X' ||
                        Gameboard.board[2] === 'X' && Gameboard.board[4] === 'X' && Gameboard.board[6] === 'X') {

                            console.log('Player One wins!');
                            const result = document.createElement('p');
                            body.appendChild(result);
                            result.textContent = 'Player One wins!';
                            const restartBtn = document.createElement('button');
                            body.appendChild(restartBtn);
                            restartBtn.textContent = 'Play again';

                            restartBtn.addEventListener('click', () => {
                                Gameboard.board.fill('');
                                console.log('111');
                                document.querySelectorAll('.cell').forEach(cell => {
                                    cell.textContent = Gameboard.board[i];
                                })
                                restartBtn.remove();
                                result.remove();
                                currentPlayer = playerOne;
                            });

                    } else if (Gameboard.board[0] === 'O' && Gameboard.board[1] === 'O' && Gameboard.board[2] === 'O' || 
                    Gameboard.board[3] === 'O' && Gameboard.board[4] === 'O' && Gameboard.board[5] === 'O' || 
                    Gameboard.board[6] === 'O' && Gameboard.board[7] === 'O' && Gameboard.board[8] === 'O' ||
                    Gameboard.board[0] === 'O' && Gameboard.board[3] === 'O' && Gameboard.board[6] === 'O' ||
                    Gameboard.board[1] === 'O' && Gameboard.board[4] === 'O' && Gameboard.board[7] === 'O' || 
                    Gameboard.board[2] === 'O' && Gameboard.board[5] === 'O' && Gameboard.board[8] === 'O' || 
                    Gameboard.board[0] === 'O' && Gameboard.board[4] === 'O' && Gameboard.board[8] === 'O' ||
                    Gameboard.board[2] === 'O' && Gameboard.board[4] === 'O' && Gameboard.board[6] === 'O') {

                        console.log('Player Two wins!');
                        const result = document.createElement('p');
                        const body = document.querySelector('#body');
                        body.appendChild(result);
                        result.textContent = 'Player Two wins!';
                        const restartBtn = document.createElement('button');
                        body.appendChild(restartBtn);
                        restartBtn.textContent = 'Play again';

                        restartBtn.addEventListener('click', () => {
                                Gameboard.board.fill('');
                                console.log('111');
                                document.querySelectorAll('.cell').forEach(cell => {
                                    cell.textContent = Gameboard.board[i];
                                })
                                restartBtn.remove();
                                result.remove();
                                currentPlayer = playerOne;
                            });

                    } else if (Gameboard.board[0] != '' && Gameboard.board[1] != '' && Gameboard.board[2] != '' 
                    && Gameboard.board[3] != '' && Gameboard.board[4] != '' && Gameboard.board[5] != '' 
                    && Gameboard.board[6] != '' && Gameboard.board[7] != '' && Gameboard.board[8] != '') {
                        console.log('It\'s a tie!');
                        const result = document.createElement('p');
                        body.appendChild(result);
                        result.textContent = 'It\'s a tie!';
                        const restartBtn = document.createElement('button');
                        body.appendChild(restartBtn);
                        restartBtn.textContent = 'Play again';
                        
                        restartBtn.addEventListener('click', () => {
                            Gameboard.board.fill('');
                            console.log('111');
                            document.querySelectorAll('.cell').forEach(cell => {
                                cell.textContent = Gameboard.board[i];
                            })
                            restartBtn.remove();
                            result.remove();
                            currentPlayer = playerOne;
                        });
                    }
                }
                checkWinner();
                
                if (currentPlayer === playerOne) {
                    currentPlayer = playerTwo;
                } else if (currentPlayer === playerTwo) {
                    currentPlayer = playerOne;
                }
                
                return { displayController }
            } else {
                alert('That spot has already been taken! Try another spot.');
            }

            return { chosenCell, checkWinner };
        })
    });


    return { playerOne, playerTwo, currentPlayer }
})();