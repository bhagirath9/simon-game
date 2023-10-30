let gameSeq = [];
let userSeq = [];

let btns = ["rad","yellow","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game start");
        started = true;
        levelUp()
    }
});

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
   userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    console.log(randIdx);
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText = `Game over! Your score ${level} press any key to start `;
        let h3 = document.querySelector("h3");
        h3.innerText= `Target ${level}`;
        reset();
    }
}


function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}