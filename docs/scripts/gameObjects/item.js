import { global } from "../modules/global.js";
import { allSounds } from "./audios.js";

// this is the class for every object that is clickable

class Clickable {
    name = '';
    image = '';
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    color = '';
    active = false;
    xMouse = 0;
    yMouse = 0;

    // draw function (duh)
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    // this is part of the "responsive" design
    updateSize() {
        this.x = global.canvas.width * this.xPercent;
        this.y = global.canvas.height * this.yPercent;
        this.width = global.canvas.width * this.widthPercent;
        this.height = global.canvas.height * this.heightPercent;
    }

    // part of the click detection, involves a type of collision detection (with the cursor)
    clickDetection(xMouse, yMouse) {
        const left = this.x;
        const right = this.x + this.width;
        const top = this.y;
        const bottom = this.y + this.height;

        if (xMouse >= left && 
            xMouse <= right && 
            yMouse >= top &&
            yMouse <= bottom &&
            this.active
            ) {
            this.ifClicked();
        }

        allSounds.click.play();
    }

    ifClicked() {};

    // the constructor. I don't think there's much to explain. ...Percent is because of the responsive code and needed for updateSize()
    constructor ({name, source, x, y, width, height, ifClicked, active}) {
          this.name = name;
          this.image = new Image();
          this.image.src = `./images/${source}`;

          this.xPercent = x; 
          this.yPercent = y;  
          this.widthPercent = width;  
          this.heightPercent = height;  

          // I need this notation (I hope that's what it's called) so that I define a new ifClicked() for every instance I create
          this.ifClicked = ifClicked || function() {};
          this.active = active;

          this.updateSize();
          global.clickables.push(this);
    }

}

export { Clickable }
