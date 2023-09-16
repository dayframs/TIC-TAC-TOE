let player1, player2, c, d;
let startG = false;
let click = true;
let box1 = b1.innerText;
let box2 = b2.innerText;
let box3 = b3.innerText;
let box4 = b4.innerText;
let box5 = b5.innerText;
let box6 = b6.innerText;
let box7 = b7.innerText;
let box8 = b8.innerText;
let box9 = b9.innerText;

function startGame(){
    c = inp1.value;
    d = inp2.value;
    startG = false;
    if (c && d) {
        startG = true;
    }
    else {
        console.log('kindly enter your name');
    }  
}

function display(a) {
    player1 = 'X';
    player2 = 'O'; 
    let e = a.target.innerText;
    e = false;
    
    if (startG) {
        if (e==false) {
            if (click) {
                a.target.innerText = player1;
                click = false;
                winner();
            }else{
                a.target.innerText = player2;
                click = true;
                winner();
            }
        } 
    }
    else {
        alert('enter your name, please.')
    }
} 
let sa = scoreA.innerText;
let sb = scoreB.innerText;
function winner() {
    if (b1.innerText=='X' && b2.innerText=='X'&& b3.innerText=='X'||b4.innerText=='X' && b5.innerText=='X'&& b6.innerText=='X'||b7.innerText=='X' && b8.innerText=='X'&& b9.innerText=='X'|| b1.innerText=='X' && b4.innerText=='X'&& b7.innerText=='X'||b2.innerText=='X' && b5.innerText=='X'&& b8.innerText=='X'||b3.innerText=='X' && b6.innerText=='X'&& b9.innerText=='X' || b1.innerText=='X' && b5.innerText=='X'&& b9.innerText=='X'||b3.innerText=='X' && b5.innerText=='X'&& b7.innerText=='X') {
        winningMessage.innerText = ('Congratulations! ' + c + ' won.');
        scoreA.innerText = eval(sa + 1);
    } else if (b1.innerText=='O' && b2.innerText=='O'&& b3.innerText=='O'||b4.innerText=='O' && b5.innerText=='O'&& b6.innerText=='O'||b7.innerText=='O' && b8.innerText=='O'&& b9.innerText=='O'|| b1.innerText=='O' && b4.innerText=='O'&& b7.innerText=='O'||b2.innerText=='O' && b5.innerText=='O'&& b8.innerText=='O'||b3.innerText=='O' && b6.innerText=='O'&& b9.innerText=='O' | b1.innerText=='O' && b5.innerText=='O'&& b9.innerText=='O'||b3.innerText=='O' && b5.innerText=='O'&& b7.innerText=='O') {
        winningMessage.innerText = ('Congratulations! ' + d + ' won.');
        scoreB.innerText = eval(sb + 1);
    }
}
function restart() {
    b1.innerText == b2.innerText == b3.innerText == b4.innerText == b5.innerText == b6.innerText == b7.innerText == b8.innerText == b9.innerText == '';
}

    
    
