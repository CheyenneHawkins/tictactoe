
const boardMarks = ['','','','','','','','','',];

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.classList.add('open');
    box.addEventListener('click', function handleClick(e) {
        const active = e.target.id;
        let entry;
        if (box.textContent==''){
            box.textContent = playerChoice();
            boardMarks[active] = entry;
            box.classList.remove('open');
            checkWin();
        }
        }
    );
});

let myTurn = true;

function flip(){
    if (myTurn==true){
        myTurn = false;
    } else {
        myTurn = true;
    }
}

function playerChoice() {
        if (myTurn == true){
            flip();
            entry = 'X';
            return 'X';
        } else {
            entry = 'O';
            flip();
            return 'O'
        }
}

const clearbutton = document.getElementById('clearbutton');

clearbutton.addEventListener('click', () => {
    boxes.forEach(box => {
        box.textContent = '';
    })
});

function checkWin() {

    // console.table(entry)
    console.table(boardMarks)

}


// function clearBoard() {
//     console.log('yea');

// }

// const a1 = document.getElementById('a1');
// a1.textContent = 'X';