let gameSeq =[];
let userSeq =[];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

let btns = ["pink" , "green" , "orange" , "blue"];

document.addEventListener("keypress" , function(){
    // console.log('game started');

    if(started == false){
        console.log("game started");
        started = true;
        levelup();

    }
   
})



function gameFlash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}



function userFlash(btn){
    btn.classList.add("userFlash");
    
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 500);

    ;

}

function levelup(){
    userSeq =[];
    level++;
    h3.innerText = `level ${level}`;


    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

    
}

let score=0;

function checkAns(){
    // console.log("current level " , level);

    let idx = userSeq.length-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelup , 1000);
        }
    }
    else{
        if(level==0){
            score=0;
        }else{
            score = level-1;
            };

        h3.innerHTML = `Game over! Your Score was <b>${score}</b> <br> Press any key to start the game`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        } , 200);
        reset();

        high();

        
    }
}






function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);


    let UserColor = btn.getAttribute("id");
    console.log(UserColor);
    userSeq.push(UserColor);
    console.log(userSeq);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

let highest = 0;

let highScore = document.querySelector(".highScore");
function high(){
    if(score > highest){
        highest = score;
        highScore.innerHTML = `Highet Score : ${score}`;
    }
}


function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}