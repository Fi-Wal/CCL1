import { global } from "../modules/global.js";
import { animObject } from "./animObj.js";

// this object contains my two animations.

const allAnimObjects = {
    bugs: new animObject({
        x: 0.18,
        y: 0.04,
        width: 0.75,
        height: 0.83,
        sources: ['./images/bugs_1.png', './images/bugs_2.png', './images/bugs_3.png', './images/bugs_4.png'],
        frameRate: 1.5,
        active: false,
    }),

    lights: new animObject({
        x: 0.1,
        y: 0.06,
        width: 0.75,
        height: 0.8,
        sources: ['./images/lights_1.png', './images/lights_2.png', './images/lights_3.png', './images/lights_4.png'],
        frameRate: 2,
        active: false,
    }),
}

export { allAnimObjects }