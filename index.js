let player1, player2, box, c, d;
let startG = false;
let click = true;
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
    
    if (startG) {
    if (click) {
            a.target.innerText = player1;
            click = false;
    }else{
        a.target.innerText = player2;
        click = true;
     }
     }
    else {
        alert('enter your name, please.')
    }
} 
