// js

const character = document.querySelector('.character');
const coin = document.querySelector('.coin');
const result = document.querySelector('h1');


let score = 0;
const moveStep = 15;
let x = 0;
let y = 0;
let isGrabbed = false;
const min = 50;
const max = 300;
let coinLeft = 0;
let coinTop = 0;
let slicedCoinLeft = 0;
let slicedCoinTop = 0;
let isFirstFuncCompleted = false;
let isNAN = false;

document.addEventListener('keydown', event => {
    // alert(1);
    if (event.key.startsWith('Arrow')) {
        if (event.key == 'ArrowDown') {
            y += moveStep;
            console.log(y);
        }
        else if (event.key == 'ArrowLeft') {
            x -= moveStep;
            console.log(x);
        }
        else if (event.key == 'ArrowUp') {
            y -= moveStep;
            console.log(y);
        }
        else if (event.key == 'ArrowRight') {
            x += moveStep;
            console.log(x);
        }
        // left: 400px;
        // top: 390px;

        if (isNaN(slicedCoinLeft) || isNaN(slicedCoinTop)) {
            coinLeft = coin.style.left = Math.floor(Math.random() * (max - min + 1)) + min + 'px';
            coinTop = coin.style.top =  Math.floor(Math.random() * (max - min + 1)) + min + 'px';
            slicedCoinLeft = Number(coinLeft.slice(0, 3));
            slicedCoinTop = Number(coinTop.slice(0, 3));
            isNAN = true;
        }
        
        if (!isNAN && !isFirstFuncCompleted && x >= 335 && y >= 320 && x <= 470 && y <= 460 && isGrabbed === false) {
            score++;
            result.textContent = `Score: ${score}`;
            alert('You win');
            y = 0;
            x = 0;
            coinLeft = coin.style.left = Math.floor(Math.random() * (max - min + 1)) + min + 'px';
            coinTop = coin.style.top =  Math.floor(Math.random() * (max - min + 1)) + min + 'px';
            slicedCoinLeft = Number(coinLeft.slice(0, 3));
            slicedCoinTop = Number(coinTop.slice(0, 3));
            // console.log(slicedCoinTop);
            // console.log(slicedCoinLeft);
            isGrabbed = true;
            isFirstFuncCompleted = true
        }

        if (isFirstFuncCompleted && y > Number(slicedCoinTop) - 60 && x > Number(slicedCoinLeft) - 20
            && y < Number(slicedCoinTop) && x < Number(slicedCoinLeft)
    ) {
            score++;
            result.textContent = `Score: ${score}`;
            alert('You Won');
            y = 0;
            x = 0;
            console.log(coinLeft);
            console.log(coinTop);
            coinLeft = coin.style.left = Math.floor(Math.random() * (max - min + 1)) + min + 'px';
            coinTop = coin.style.top =  Math.floor(Math.random() * (max - min + 1)) + min + 'px';
            slicedCoinLeft = Number(coinLeft.slice(0, 3));
            slicedCoinTop = Number(coinTop.slice(0, 3));
        }

        character.style.paddingTop = `${y}px`;
        character.style.paddingLeft = `${x}px`;
        console.log(Number(slicedCoinLeft));
        console.log(Number(slicedCoinTop));
    }
})

