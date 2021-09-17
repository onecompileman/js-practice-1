(function() {
    // Challenge 1
    
    const askAgeBtn = document.getElementById('askAgeBtn');
    const resetAgeBtn = document.getElementById('resetAgeBtn');

    const ageInDaysText = document.getElementById('ageInDaysText');

    askAgeBtn.addEventListener('click', () => {
       let birthYear = prompt('What year you were born?');
       let currentYear = new Date().getFullYear();

       let numberOfDaysInYear = 365;

       let ageInDays = (currentYear - birthYear) * numberOfDaysInYear;

       ageInDaysText.innerText = `You are ${ageInDays} days old`;
    });

    resetAgeBtn.addEventListener('click', () => ageInDaysText.innerText = '');



    // Challenge 2
    const generateCatBtn = document.getElementById('generateCatBtn');
    const catImageContainer = document.getElementById('catImageContainer');


    generateCatBtn.addEventListener('click', () => {
        const catImageUrl = 'http://placekitten.com/200/300';
        
        catImageContainer.innerHTML += `<img src="${catImageUrl}">`;
    });

    // Challenge 3
    const rpsContainer = document.getElementById('rpsContainer');
    const resultContainer = document.getElementById('resultContainer');
    
    const rockImg = document.getElementById('rockImg');
    const paperImg = document.getElementById('paperImg');
    const scissorsImg = document.getElementById('scissorsImg');

    const playerMoveImg = document.getElementById('playerMoveImg');
    const resultTxt = document.getElementById('resultTxt');
    const enemyMoveImg = document.getElementById('enemyMoveImg');

    rockImg.addEventListener('click', () => generateEnemyMove('rock'));
    paperImg.addEventListener('click', () => generateEnemyMove('paper'));
    scissorsImg.addEventListener('click', () => generateEnemyMove('scissors'));

    function generateEnemyMove(playerMove) {
        const possibleMoves = ['rock', 'paper', 'scissors'];

        const enemyRandomMove = possibleMoves[Math.floor(Math.random() *possibleMoves.length)]
        
        let result = '';

        if (enemyRandomMove === playerMove) {
            result = 'You tied';
        } else if (enemyRandomMove === 'rock' && playerMove === 'paper') {
            result = 'You win';
        } else if (enemyRandomMove === 'rock' && playerMove === 'scissors') {
            result = 'You lose';
        } else if (enemyRandomMove === 'paper' && playerMove === 'scissors') {
            result = 'You win';
        } else if (enemyRandomMove === 'paper' && playerMove === 'rock') {
            result = 'You lose';
        } else if (enemyRandomMove === 'scissors' && playerMove === 'rock') {
            result = 'You win';
        } else if (enemyRandomMove === 'scissors' && playerMove === 'paper') {
            result = 'You lose';
        }

        playerMoveImg.src = `assets/images/${playerMove}.png`;
        enemyMoveImg.src = `assets/images/${enemyRandomMove}.png`;
        resultTxt.innerHTML = result;

        rpsContainer.classList.add('d-none');
        resultContainer.classList.remove('d-none');

    }
})();