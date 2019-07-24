const cardsColor = ["red","red", "chocolate","chocolate", "cyan", "cyan",
 "purple", "purple", "darkgreen", "darkgreen", "gold", "gold", "skyblue", 
 "skyblue", "lightgreen", "lightgreen", "mediumslateblue", "mediumslateblue"]

 let cards = document.querySelectorAll("div");
 cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards=[];

const gamePairs = cards.length/2;
let gameResult =0;

 const clickCard = function()
 {

    activeCard = this; // this - w tym przypadku to co zostalo klikniete, bo w addEvent listenere jest nazwa tej funkcji - clickCard

    if(activeCard == activeCards[0]) return;

    activeCard.classList.remove("hidden");
    
    if(activeCards.length===0)
    {
        activeCards[0]=activeCard;
        return;
    }

    else
    {
        cards.forEach(card => card.removeEventListener("click", clickCard))
        activeCards[1]=activeCard;
        setTimeout(function()
        {
            if (activeCards[0].className === activeCards[1].className)
            {
            activeCards.forEach(card => card.classList.add("off"))
            gameResult++;
            cards = cards.filter(card => !card.classList.contains("off"))
            if (gameResult == gamePairs)
            {
                const endTime = new Date().getTime();
                const gameTime = (endTime - startTime)/1000;
                alert(`Gra zakończona! Twój wynik to ${gameTime} sekund`);
                location.reload();
            }
            }
            else
            {
            activeCards.forEach(card => card.classList.add("hidden"))
            }
            activeCard="";
            activeCards.length = 0;
            
            cards.forEach(card => card.addEventListener("click", clickCard));
        }, 500)
        
    }
 }

const init = function(){
    cards.forEach(card =>{
        const position = Math.floor(Math.random()*
        cardsColor.length); // return from 0 to 17.99 ==> floor cut to 0,1,2,3 - 17
        card.classList.add(cardsColor[position]); 
        cardsColor.splice(position, 1);
    })

    setTimeout(function(){
        cards.forEach(card =>{
            card.classList.add("hidden")
            card.addEventListener("click", clickCard);
        })
    }, 2000)
}

init();