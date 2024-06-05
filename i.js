// script.js
document.getElementById('hitButton').addEventListener('click', function() {
    const ball = document.querySelector('.ball');
    const bat = document.querySelector('.bat');
    
    // Add animation class to ball
    ball.style.animation = 'hitAnimation 2s forwards';
    bat.style.animation = 'batSwing 1s forwards';

    // Remove animation class after animation ends to allow replay
    setTimeout(() => {
        ball.style.animation = '';
        bat.style.animation = '';
    }, 2000);
});
