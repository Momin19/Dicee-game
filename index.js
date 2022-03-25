let rundomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg = "dice" + rundomNumber1 + ".png";
let randomImgSourse = "images/" + randomDiceImg;

let img1 = document.querySelectorAll('img')[0];
img1.setAttribute('src', randomImgSourse);

let rundomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "dice" + rundomNumber2 + ".png";
let randomImgSourse2 = "images/" + randomDiceImg2;
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute('src', randomImgSourse2);
 
let h1 = document.querySelector('h1');

if (randomImgSourse > randomImgSourse2) {
    h1.textContent = "Player 1 wins!";
}else if(randomImgSourse==randomImgSourse2){
    h1.textContent = 'Draw!';
}else{
    h1.textContent = "Player 2 wins!";
}