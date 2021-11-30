const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];


let gameboard;
let turn = 'O';
let win;
let audio;



const cells = Array.from(document.querySelectorAll('#gameboard div'));


document.getElementById('gameboard').addEventListener('click', handleTurn);
document.getElementById('gameboard').addEventListener('click', playsound);
const messages = document.querySelector('h4');
document.getElementById('newgame').addEventListener('click', init);




function getWinner() {
    let winner = null;
    winningCombos.forEach((combo, index) => {
            if (gameboard[combo[0]] && gameboard[combo[0]] === gameboard[combo[1]] && gameboard[combo[0]] === gameboard[combo[2]])
                winner = gameboard[combo[0]];
        });
        return winner ? winner : gameboard.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = cells.findIndex(function(cell) {
        return cell === event.target;
    });
    gameboard[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function playsound(){
    audio = new Audio("event.wav");
        audio.play();
}

function init() {
    gameboard = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
}; 

function render() {
    gameboard.forEach(function(mark, index) {
    cells[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `We have a tie` : win ? `Player ${win} wins the game!` : `Its Player ${turn}'s turn!`;
    };

init();

