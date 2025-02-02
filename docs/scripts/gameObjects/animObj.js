import { global } from "../modules/global.js"

// this is the class for my two animations. It's similar to the Clickables class, but can use sprites

class animObject {

    // looping through sprites, we used a similar (if not the same) function in 2DBGC
    update(deltaTime) {
        this.lastFrameTime += deltaTime;

        if (this.lastFrameTime >= 1 / this.frameRate) {
            this.currentFrame = (this.currentFrame + 1) % this.sources.length;
            this.image.src = this.sources[this.currentFrame];
            this.lastFrameTime = 0;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    updateSize() {
        this.x = global.canvas.width * this.xPercent;
        this.y = global.canvas.height * this.yPercent;
        this.width = global.canvas.width * this.widthPercent;
        this.height = global.canvas.height * this.heightPercent;
    }

    constructor({ x, y, width, height, sources, frameRate, active = false}) {
        this.xPercent = x; 
        this.yPercent = y;  
        this.widthPercent = width;  
        this.heightPercent = height;  

        this.sources = sources; 
        this.frameRate = frameRate || 1; 
        this.currentFrame = 0; 
        this.image = new Image(); 
        this.image.src = this.sources[this.currentFrame];
        this.lastFrameTime = 0;
        this.active = active;

        this.updateSize();
        global.animated.push(this);
    }

}

export { animObject }