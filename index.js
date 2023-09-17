let player1, player2, c, d;
let startG = false;
let click = true;
let box1;
let box2;
let box3;
let box4;
let box5;
let box6;
let box7;
let box8;
let box9;
let win = false;
function startGame(){
    c = inp1.value;
    d = inp2.value;
    startG = false;
    if (c && d) {
        startG = true;
        alert('Enjoy your game!');
    }
    else {
        alert('kindly enter your name');
    }  
}
let e;
function display(a) {
    player1 = 'X';
    player2 = 'O'; 
    e = a.target.innerText;
    if (!win) {
        if (startG) {
            if (e == false) {
                if (click) {
                    a.target.innerText = player1;
                    click = false;
                    winner();
                } else {
                    a.target.innerText = player2;
                    click = true;
                    winner();
                }
            }
        }
        else {
            alert('enter your name, please.')
        }
        }else {
            console.log('GameOver!');
    }
} 
let sa;
let sb;

function winner() {
    sa = scoreA.innerText;
    sb = scoreB.innerText;
    if (b1.innerText=='X' && b2.innerText=='X'&& b3.innerText=='X'||b4.innerText=='X' && b5.innerText=='X'&& b6.innerText=='X'||b7.innerText=='X' && b8.innerText=='X'&& b9.innerText=='X'|| b1.innerText=='X' && b4.innerText=='X'&& b7.innerText=='X'||b2.innerText=='X' && b5.innerText=='X'&& b8.innerText=='X'||b3.innerText=='X' && b6.innerText=='X'&& b9.innerText=='X' || b1.innerText=='X' && b5.innerText=='X'&& b9.innerText=='X'||b3.innerText=='X' && b5.innerText=='X'&& b7.innerText=='X') {
        winningMessage.innerText = ('Congratulations! ' + c + ' won.');
        scoreA.innerText = Number(sa) + 1;
        win = true;
    } else if (b1.innerText=='O' && b2.innerText=='O'&& b3.innerText=='O'||b4.innerText=='O' && b5.innerText=='O'&& b6.innerText=='O'||b7.innerText=='O' && b8.innerText=='O'&& b9.innerText=='O'|| b1.innerText=='O' && b4.innerText=='O'&& b7.innerText=='O'||b2.innerText=='O' && b5.innerText=='O'&& b8.innerText=='O'||b3.innerText=='O' && b6.innerText=='O'&& b9.innerText=='O' || b1.innerText=='O' && b5.innerText=='O'&& b9.innerText=='O'||b3.innerText=='O' && b5.innerText=='O'&& b7.innerText=='O') {
        winningMessage.innerText = ('Congratulations! ' + d + ' won.');
        scoreB.innerText = Number(sb) + 1;
        win = true;
    } else if(b1.innerText && b2.innerText && b3.innerText && b4.innerText && b5.innerText && b6.innerText && b7.innerText && b8.innerText && b9.innerText) {
        winningMessage.innerText = ('DRAW');
        win = true;
    }
}
function reset() {
    b1.innerText = '';
    b2.innerText = '';
    b3.innerText = '';
    b4.innerText = '';
    b5.innerText = '';
    b6.innerText = '';
    b7.innerText = '';
    b8.innerText = '';
    b9.innerText = '';
    winningMessage.innerText = ('');
    win = false;
}
function endGame() {
    b1.innerText = '';
    b2.innerText = '';
    b3.innerText = '';
    b4.innerText = '';
    b5.innerText = '';
    b6.innerText = '';
    b7.innerText = '';
    b8.innerText = '';
    b9.innerText = '';
    winningMessage.innerText = ('');
    inp1.value = '';
    inp2.value = '';
    scoreA.innerText = '0';
    scoreB.innerText = '0';
    win = false;
}
// HOW TO DISABLE THE EMPTY SPACE AS SOON AS THERE IS A WINNER.

    
    
