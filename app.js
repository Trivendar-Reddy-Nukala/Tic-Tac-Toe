let boxes= document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newgame_btn = document.querySelector(".newgame");
let msg = document.querySelector(".msg");
let winnermsg = document.querySelector(".winnermsg");

let turnO = true;

const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }
        else{
            box.innerText = 'X'
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

let btn_disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

let show_winner = (name) =>{
    btn_disable();
    msg.innerText = `Congratulation , the winner is ${name}`
    winnermsg.classList.remove("hide")

}

const checkwinner = () => {
    for(let pattern of patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1==pos2 && pos2==pos3){
            show_winner(pos1);
            }
        }
    }
}

const resetgame = ()=>{
    turnO = true;
    btn_enable();
    winnermsg.classList.add("hide");
}

let btn_enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
reset_btn.addEventListener("click", resetgame);
newgame_btn.addEventListener("click", resetgame)