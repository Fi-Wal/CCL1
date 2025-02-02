import { global } from "./global.js";
import { allRooms } from "../gameObjects/roomInfo.js";

function gameLoop(totalRunningTime) {
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime;
    global.deltaTime /= 1000;
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height * 0.9);

    // both the clickables array and the animated are looped through, and only the active items are drawn
    global.clickables.forEach((clickable) => {
        if (clickable.active) {
            clickable.draw(global.ctx);
        }
    })

    global.animated.forEach((animated) => {
        if (animated.active) {
            animated.update(global.deltaTime);
            animated.draw(global.ctx);
        }
    });
    
    requestAnimationFrame(gameLoop);
}

// this function is needed to detect whether one of the clickable object was clicked
global.canvas.addEventListener('click', (event) => {
    const bound = canvas.getBoundingClientRect();
    const x = event.clientX - bound.left;
    const y = event.clientY - bound.top;

    global.clickables.forEach((clickable) => {
        if (clickable.clickDetection(x, y)) {
            clickable.ifClicked();
        }
    });
});

// I made the game's design responsive later on (although it doesn't work 100%, but it's almost perfect)
window.addEventListener('resize', resizeCanvas);

window.addEventListener('resize', () => {
    global.clickables.forEach((clickable) => clickable.updateSize());
});

function resizeCanvas() {
    global.canvas.width = window.innerWidth;
    global.canvas.height = window.innerHeight;

    if (global.currentRoom) {
        global.currentRoom.changeBackground(0);
    }
}

// this just makes sure the game starts with the start screen upon (re)loading
function setupGame() {
    document.querySelector('#startScreen').style.display = "block";
    document.querySelector('#gameContainer').style.display = "none";
}

// this is called after clicking the start button, and just loads the first room and dialogue
function startGame() {
        setTimeout(() => {
        global.loadRoom(allRooms.mainRoom, 0);
        global.printMessage('Oh my god, that poor plant. I should water it.', 3);
    }, 2000);
};

// when starting the game, the intro screen is shown for 5 seconds, after that the first room is loaded
document.querySelector('#startButton').onclick = function() {
    document.querySelector('#startScreen').style.display = "none";
    document.querySelector('#introScreen').style.display = "block";

    setTimeout(() => {
        document.querySelector('#introScreen').style.display = "none";
        document.querySelector('#gameContainer').style.display = "block";
        startGame();
    }, 5000);
};

resizeCanvas();
setupGame();
requestAnimationFrame(gameLoop);