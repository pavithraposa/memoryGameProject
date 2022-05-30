let counter=0;
let firstSelection="";
let secondSelection="";
const displayScore1 = document.querySelector('#score1');
const displayScore2 = document.querySelector('#score2');

let dispalyName=document.querySelector('#playername');
let startBtn=document.querySelector('#start');

let resetButton=document.querySelector('.resetbtn');
 
let playerTurn=true;
let score1=0;
let score2=0;

/* startBtn.aaddEventListener('click',()=>{
    getInputValue();
    
}) */


const cards=document.querySelectorAll(".images");

cards.forEach(card=>{
    card.addEventListener("click",()=>{
        //when ever you click on the card a class name 'clicked' will be added to that card in the html
       card.classList.add("clicked");


       if(counter === 0){
           firstSelection=card.getAttribute("character");
           counter++;
           
       }else{
          secondSelection=card.getAttribute("character");
          counter=0;
        
          if(firstSelection === secondSelection){
                const correctCards = document.querySelectorAll(".images[character='" + firstSelection + "']");
                
                    correctCards[0].classList.add("checked"); 
                    correctCards[0].classList.remove("clicked")
                    correctCards[1].classList.add("checked");
                    correctCards[1].classList.remove("clicked");
                   
                    setTimeout(()=>{
                          
                        correctCards[0].classList.remove("checked"); 
                        correctCards[1].classList.remove("checked"); 
                        
                        correctCards[0].classList.add("remove");
                        correctCards[1].classList.add("remove");
                      
                    },800);

                    if(playerTurn) {
                        score1+=2;
                        displayScore1.textContent=score1.toString();
                    }else{
                        score2+=2;
                        displayScore2.textContent=score2.toString();
                    }

                    
                    resetButton.addEventListener('click',event=>{
                        
                        correctCards[0].classList.remove("remove");
                        correctCards[1].classList.remove("remove");
                        score1=0;
                        score2=0;
                        displayScore1.textContent=score1.toString();
                        displayScore2.textContent=score1.toString();
                        
                        shuffleCards();

                    });
                    
                    /* score1++;
                    console.log(score1); */
                 
                
                   /*  correctCards[0].style.backgroundImage = "none";
                    correctCards[1].style.backgroundImage = "none";
                    correctCards[0].style.backgroundColor = "transparent";
                    correctCards[1].style.backgroundColor = "transparent"; */
                        
                
                
            }else{
                const incorrectCards = document.querySelectorAll(".images.clicked");
            
                incorrectCards[0].classList.add("change");
                incorrectCards[1].classList.add("change");

              setTimeout(() => {
                    incorrectCards[0].classList.remove("change");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("change");
                    incorrectCards[1].classList.remove("clicked");
                }, 800);

                if(playerTurn){
                    playerTurn=false;
                }
                else if(!playerTurn){
                    playerTurn=true;
                }
            }
 
        } 
    });
});



function shuffleCards(){
    cards.forEach(card=>{
        let randomIndex=Math.floor(Math.random()*54);
        card.style.order=randomIndex;
    });
}


function getInputValue(){
    let inputVal=document.getElementById("player1").value;
    dispalyName.textContent=`${inputVal}`;
    
}