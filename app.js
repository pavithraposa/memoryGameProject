
let cardContainer = document.querySelector('.imagesboard');
let resetButton=document.querySelector('.resetbtn');
let resultDisplay=document.querySelector('.scoreboard');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];



const imagePaths = [
    'alvin-image1.png',
    'alvin-image2.png',
    'alvin-image3.jpg',
    'alvin-image1.png',
    'alvin-image2.png',
    'alvin-image3.jpg',
    'alvin-image4.jpg',
    'alvin-image5.jpg',
    'alvin-image6.png',
    'alvin-image7.jpg',
    'alvin-image8.jpg',
    'alvin-image9.webp',
    'alvin-image10.webp',
    'alvin-image11.webp',
    'alvin-image12.jpg',
    'alvin-image4.jpg',
    'alvin-image5.jpg',
    'alvin-image6.png',
    'alvin-image7.jpg',
    'alvin-image8.jpg',
    'alvin-image9.webp',
    'alvin-image10.webp',
    'alvin-image11.webp',
    'alvin-image12.jpg'
]


function getImageSource(path){
    return `url("images/${path}")`;
}

function createCard(imagePath){
    let card=document.createElement('div');
    let cardFront=document.createElement('div');

    card.className = 'card';
    cardFront.className='card-front';

    cardFront.style.backgroundImage = getImageSource(imagePath);

    card.append(cardFront);
    return card;
    
}

/* let card = createCard(path);
imagePaths.forEach(card => card.addEventListener('click', flipCard)); */

//shuffleCards();


flipCard();

    
imagePaths.sort(()=> 0.5-Math.random())
console.log(imagePaths);

function shuffleCards(){ 
    
    imagePaths.forEach(card => {
        let randomIndex = Math.floor(Math.random()*54);
        card.style.order = randomIndex;
    });

}

 /* resetButton.addEventListener('click',event=>{

    shuffleCards();
});   */



function flipCard(){
   
    imagePaths.forEach(path => {
        let card = createCard(path);
        let cardFlipped = false;
    
        card.addEventListener('click', event => {
            if(cardFlipped) {
                card.style.animation = 'flipOut 2s forwards 1';
    
            } else {
                card.style.animation = 'flipIn 2s forwards 1';
            }
            cardFlipped = !cardFlipped;
        });
        cardContainer.append(card);
    });    

   checkForMatch();
        
}


 function checkForMatch(){
    const cards=createCard(path);
    //const cards=document.querySelectorAll('imagePaths')
    console.log(cards);
   
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];

    if(optionOneId == optionTwoId){
        alert('you have clicked the same  image');
        cards[optionOneId].setAttribute('src', 'images/Alvin_and_the_chipmunks1958.jpg')
        cards[optionTwoId].setAttribute('src', 'images/Alvin_and_the_chipmunks1958.jpg')
    } else if (cardsChosen[0]===cardsChosen[1]){
        alert('you have found a match')
        cards[optionOneId].setAttribute('src', 'images/alvin-image2.png')
        cards[optionTwoId].setAttribute('src', 'images/alvin-image2.png')
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src','images/Alvin_and_the_chipmunks1958.jpg')
        cards[optionTwoId].setAttribute('src','images/Alvin_and_the_chipmunks1958.jpg')
        alert('Sorry ,try again')
    }
    cardsChosen = []
    cardsChosenId =[]
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length === imagePaths.length/2){
        resultDisplay.textContent = 'Congratulations'
    }



} 



    
