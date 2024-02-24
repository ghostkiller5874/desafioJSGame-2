//ctrl + shift + alt + (seta down ou up)
const emoji = [
    "😒",
    "😒",
    "😎",
    "😎",
    "✌️",
    "✌️",
    "🫡",
    "🫡",
    "👽",
    "👽",
    "😱",
    "😱",
    "🥸",
    "🥸",
    "🤖",
    "🤖",
];
let openCards = [];
let shuffleEmojis = emoji.sort(()=>(Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emoji.length;i++){
    //esta criando dinamicamente os elementos na tela
    let box = document.createElement("div");//criando um elemento com a tag div, uma caixa
    box.className = "item";//associa a classe "item" na div q foi passada aqui
    box.innerHTML = shuffleEmojis[i];//guarda a posicao dos elementos

    box.onclick = handleClick;

    document.querySelector(".game").appendChild(box);//esta pendurando dinamicamente na classe "game" a div/o filho q acabou de ser criado
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length === 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];
    if(document.querySelectorAll(".boxMatch").length === emoji.length){
        alert("Você venceu!!")
    }
}