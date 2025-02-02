import { global } from "../modules/global.js";
import { allRooms } from "./roomInfo.js";

// this is the room class.

class Room {
    name = '';
    bg = '';

    // this array contains all the items inside the room (wihich should be loaded and drawn when the room is loaded)
    items = [];

    // same here with the two animations
    animated = [];

    // this contains all states, which I use inside itemInfo.js for reacting to what actions have and haven't been done yet
    states = {};

    // this function is used to clear the last room and then load the new room and all its items
    changeBackground(time) {
        global.deactivateAllItems(allRooms);

        setTimeout(() => {
            global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
            document.querySelector('#background').style.backgroundImage = `url(./images/${this.bg})`;

        // this is used to make sure that items that have been "collected" don't get drawn again if you reload the room
        this.items = this.items.filter((item) => {
            const stateKey = `${item.name}Collected`;
            if (this.states[stateKey]) {
                return false;
            } else {
                return true 
                }; 
            });

            // setting the items and animated (belonging to this room) active states to true
            this.items.forEach((item) => item.active = true);
            this.animated.forEach((animated) => animated.active = true);
          }, time * 1000);
        }

    constructor({name, bg, items = [], animated = [], dialogues = []}) {
        this.name = name;
        this.bg = bg;
        this.items = items;
        this.animated = animated;
        this.dialogues = dialogues;

        global.rooms.push(this);
    }
}

export { Room }