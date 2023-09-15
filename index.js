let player1, player2, box, c, d;
let checkClick = false;
let startG = false;
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
    checkClick = true;
    player1 = 'X';
    player2 = 'O';
    let currentPlayer = player1;
    
    if (startG) {
    // //     if (checkClick) {
    // //         a.target.innerText = player1;
    // //         checkClick = false;
    // //     } else {
    // //         a.target.innerText = player2;
    // //         checkClick = true;
    // //     }
    //     // }

            a.target.innerText = currentPlayer;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
     }
    else {
        alert('enter your name, please.')
    }
} 
