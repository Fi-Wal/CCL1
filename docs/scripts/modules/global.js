const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.collectedItems = [];
global.clickables = [];
global.animated = [];
global.rooms = [];
global.currentRoom = null;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
canvas.width = windowWidth;
canvas.height = windowHeight;

global.getCanvasBounds = function () {
    let bounds =  {
        "left": 0,
        "right": this.canvas.width,
        "top": 0, 
        "bottom": this.canvas.height
    }

    return bounds;
}

//function that helps clear the old room before loading a new one
global.deactivateAllItems = function(rooms) {
    for (let roomKey in rooms) {
        if (rooms.hasOwnProperty(roomKey)) {
            rooms[roomKey].items.forEach((item) => {
                item.active = false;
            })
        }
    };
    
    for (let roomKey in rooms) {
        if (rooms.hasOwnProperty(roomKey)) {
            rooms[roomKey].animated.forEach((animated) => {
                animated.active = false;
            })
        }
    };
};

// function that loads a new room (calls function inside the room object)
global.loadRoom = function(room, readTime = 0) {;
    global.currentRoom = room;
    
    room.changeBackground(readTime);
};

// function for the "dialogue windows" shown at the bottom of the screen + clearing them after a certain amount of time
global.printMessage = function (dialogue, readTime = 5) {

    setTimeout (() => {
        this.ctx.fillStyle = '#000000';
        this.ctx.globalAlpha = 0.9;
        this.ctx.fillRect(0, this.canvas.height * 0.9, this.canvas.width, this.canvas.height * 0.1);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.globalAlpha = 1.0;
        this.ctx.font = "bold 25px sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(dialogue, this.canvas.width / 2, this.canvas.height * 0.95);;
    }, 100);

    setTimeout(() => {
        this.ctx.clearRect(0, this.canvas.height * 0.9, this.canvas.width, this.canvas.height * 0.1);
      }, readTime * 1000);
}


export { global }