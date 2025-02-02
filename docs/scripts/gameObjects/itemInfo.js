import { Clickable } from "./item.js";
import { allRooms } from "./roomInfo.js";
import { global } from "../modules/global.js";
import { allSounds } from "./audios.js";
import { allDialogues } from "./textInfo.js";

// this object contains allllll clickable items and their position, size, and most importantly, their reaction to being clicked.

let allItems = {

    // items of main room

        Calathea: new Clickable({
                name: 'Calathea',
                source: 'calatheaDry.png',
                x: 0.33,
                y: 0.075,
                width: 0.34,
                height: 0.75,
                ifClicked: function() {
                    // all of the items contain if...else statements, to check if certain actions have been completed yet / if items have been "picked up"
                    if (allRooms.mainRoom.states.windowOpened) {
                        allSounds.fertilizer.play();
                        allRooms.mainRoom.states.calatheaWithFood = true;
                        global.printMessage(allDialogues[26], 3);
                    } else if (allRooms.Study.states.shearsCollected) {
                        allSounds.cut.play();
                        global.printMessage(allDialogues[21], 5);
                        allRooms.mainRoom.states.calatheaTrimmed = true;
                        // this is used in just two clickables, and changes the source image used to draw it on the canvas
                        this.image.src = `./images/calatheaTrimmed.png`;
                    } else if (allRooms.mainRoomBack.states.fertilizerCollected) {
                        global.printMessage(allDialogues[15], 5);
                        allSounds.fertilizer.play();
                        allRooms.mainRoom.states.calatheaFertilized = true;
                        this.image.src = `./images/calatheaFertilized.png`;
                    } else if (allRooms.mainRoom.states.waterFilled) {
                        allSounds.pour.play();
                        this.image.src = `./images/calatheaWatered.png`;
                        global.printMessage(allDialogues[5], 3);
                        allRooms.mainRoom.states.plant1Clicked = true;
                    } else {
                        global.printMessage(allDialogues[0], 3);
                    };
                },
            }),

        wateringCan: new Clickable({
            name: 'wateringCan',
            source: 'wateringCan.png',
            x: 0.77,
            y: 0.665,
            width: 0.12,
            height: 0.16,
            ifClicked: function() {
                allSounds.canPlonk.play();
                global.ctx.clearRect(this.x, this.y, this.width, this.height);
                this.active = false;
                allRooms.mainRoom.items = allRooms.mainRoom.items.filter((item) => item !== this);
                allRooms.mainRoom.states.wateringCanCollected = true;
                global.printMessage(allDialogues[1], 3);
            },
        }),

        valve: new Clickable({
            name: 'valve',
            source: 'valve.png',
            x: 0.098,
            y: 0.738,
            width: 0.031,
            height: 0.06,
            ifClicked: function() {
                if (allRooms.mainRoom.states.wateringCanCollected) {
                    allSounds.squeak.play();
                    allRooms.mainRoom.states.valveTurned = true;
                    global.printMessage(allDialogues[3], 3);
                };
            }
        }),

        butterflies: new Clickable({
            name: 'butterflies',
            source: 'butterflies_1.png',
            x: 0,
            y: 0,
            width: 1,
            height: 1,
            ifClicked: function() {
                // this is a very lazy "animation" (not really) at the very end of the game
                if (allRooms.mainRoom.states.windowCollected && allRooms.mainRoom.states.calatheaWithFood) {
                    allRooms.mainRoom.states.butterfliesFreed = true;
                    setTimeout(() => {
                        this.image.src = `./images/butterflies_2.png`;
                    }, 2000);
                    setTimeout(() => {
                        this.image.src = `./images/butterflies_3.png`;
                    }, 4000);
                    setTimeout(() => {
                        global.printMessage(allDialogues[27], 5);
                        allItems.Calathea.image.src = `./images/calatheaLoved.png`;
                    }, 7000);
                    setTimeout(() => {
                        document.querySelector('#gameContainer').style.display = "none";
                        document.querySelector('#endScreen').style.display = "block";
                    }, 12000);
                } else if (allRooms.mainRoom.states.windowCollected) {
                    global.printMessage(allDialogues[25], 3);
                };
            }
        }),

        window: new Clickable({
            name: 'window',
            source: 'window.png',
            x: 0,
            y: 0.06,
            width: 0.13,
            height: 0.44,
            ifClicked: function() {
                if(allRooms.mainRoom.states.ivyCut && allRooms.Study.states.key2Collected) {
                    allSounds.windowSqueak.play();
                    global.printMessage(allDialogues[24], 3);
                    allRooms.mainRoom.states.windowCollected = true;
                    allRooms.mainRoom.states.windowOpened = true;
                    global.ctx.clearRect(this.x, this.y, this.width, this.height);
                    this.active = false;
                    allRooms.mainRoom.items = allRooms.mainRoom.items.filter((item) => item !== this);
                };
            }
        }),

        sink: new Clickable({
            name: 'sink',
            source: 'sinkEmpty.png',
            x: 0.179,
            y: 0.376,
            width: 0.106,
            height: 0.346,
            ifClicked: function() {
                if (allRooms.mainRoom.states.valveTurned) {
                    allSounds.water.play();
                    this.state = true;
                    allRooms.mainRoom.states.waterFilled = true;
                    this.image.src = `./images/sink.png`;
                    console.log(allRooms.mainRoom.states.waterFilled);
                    global.printMessage(allDialogues[4], 3);
                } else {
                    global.printMessage(allDialogues[2], 3);
                };
            }
        }),

        ivy: new Clickable({
            name: 'ivy',
            source: 'ivy.png',
            x: 0,
            y: 0.035,
            width: 0.14,
            height: 0.24,
            ifClicked: function() {
                if (allRooms.Study.states.shearsCollected && allRooms.mainRoom.states.calatheaTrimmed) {
                    allSounds.cut.play();
                    setTimeout(() => {
                        allRooms.mainRoom.states.ivyCut = true;
                    }, 100);
                    global.ctx.clearRect(this.x, this.y, this.width, this.height);
                    this.active = false;
                    allRooms.mainRoom.items = allRooms.mainRoom.items.filter((item) => item !== this);
                    allRooms.mainRoom.states.ivyCollected = true;
                } else if (allRooms.Study.states.shearsCollected) {
                    global.printMessage(allDialogues[28], 3);
                };
            }
        }),

        arrowToBack: new Clickable({
            name: 'arrow to mainBack',
            source: 'arrowRight.png',
            x: 0.9,
            y: 0.48,
            width: 0.08,
            height: 0.07,
            ifClicked: () => {
                console.log(global.clickables);
                if(allRooms.mainRoom.states.plant1Clicked) {
                    global.loadRoom(allRooms.mainRoomBack, 0);
                    setTimeout(() => {
                                    global.printMessage('This is the back of the main Room', 3);
                            }, 100);
                    } else {
                    global.printMessage('I should water the plant first', 3);
                }
                // allRooms.mainRoom.states.arrowClickedFirst = true;
            }
        }),


    //items of back of main room

        Door: new Clickable({
            name: 'Door',
            source: 'door.png',
            x: 0.563,
            y: 0.106,
            width: 0.265,
            height: 0.8,
            ifClicked: () => {
                if(allRooms.mainRoomBack.states.doorFree && allRooms.mainRoom.states.calatheaFertilized) {
                        allSounds.door.play();
                        global.loadRoom(allRooms.Study, 0);
                        global.printMessage(allDialogues[16],3);
                    } else if (allRooms.mainRoomBack.states.doorFree) {
                        global.printMessage(allDialogues[14], 5)
                    } else {
                        global.printMessage(allDialogues[12]);
                };
            },
        }),

        key1: new Clickable({
            name: 'key1',
            source: 'key.png',
            x: 0.35,
            y: 0.62,
            width: 0.045,
            height: 0.035,
            ifClicked: function() {
                if (allRooms.mainRoomBack.states.driedGrassCollected) {
                    allSounds.key.play();
                    global.ctx.clearRect(this.x, this.y, this.width, this.height);
                    this.active = false;
                    allRooms.mainRoomBack.items = allRooms.mainRoomBack.items.filter((item) => item !== this);
                    allRooms.mainRoomBack.states.key1Collected = true;
                };
            },
        }),

        driedGrass: new Clickable({
            name: 'driedGrass',
            source: 'driedGrass.png',
            x: 0.265,
            y: 0.3,
            width: 0.17,
            height: 0.41,
            ifClicked: function() {
                allSounds.pour.play();
                allRooms.mainRoomBack.states.driedGrassCollected = true;
                global.ctx.clearRect(this.x, this.y, this.width, this.height);
                this.active = false;
                allRooms.mainRoomBack.items = allRooms.mainRoomBack.items.filter((item) => item !== this);
                allRooms.mainRoomBack.states.driedGrassCollected = true;

                global.printMessage(allDialogues[9], 5);
            },
        }),

        Monstera: new Clickable({
            name: 'Monstera',
            source: 'MonsteraDry.png',
            x: 0.4,
            y: 0.12,
            width: 0.37,
            height: 0.81,
            ifClicked: function() {
                if (allRooms.mainRoomBack.states.fertilizerCollected) {
                    allSounds.fertilizer.play();
                    allRooms.mainRoomBack.states.doorFree = true;
                    this.image.src = `./images/Monstera.png`;

                    global.printMessage(allDialogues[13], 6);
                } else {
                    global.printMessage(allDialogues[7]);
                };
            }
        }),

        fertilizer: new Clickable({
            name: 'fertilizer',
            source: 'fertilizer.png',
            x: 0.13,
            y: 0.575,
            width: 0.08,
            height: 0.3,
            ifClicked: function() {
                if(allRooms.mainRoomBack.states.cabinetOpened) {
                    allSounds.fertilizerBag.play();
                    allRooms.mainRoomBack.states.fertilizerCollected = true;

                    global.ctx.clearRect(this.x, this.y, this.width, this.height);
                    this.active = false;
                    allRooms.mainRoomBack.items = allRooms.mainRoomBack.items.filter((item) => item !== this);
                    allRooms.mainRoomBack.states.fertilizerCollected = true;

                    global.printMessage(allDialogues[11], 5);
                };
            },
        }),

        Cabinet: new Clickable({
            name: 'Cabinet',
            source: 'cabinet.png',
            x: 0.034,
            y: 0.356,
            width: 0.226,
            height: 0.63,
            ifClicked: function() {
                if(allRooms.mainRoomBack.states.key1Collected) {
                    allSounds.cabinet.play();
                    allRooms.mainRoomBack.states.cabinetOpened = true;
                    global.ctx.clearRect(this.x, this.y, this.width, this.height);
                    this.active = false;
                    allRooms.mainRoomBack.items = allRooms.mainRoomBack.items.filter((item) => item !== this);
                    allRooms.mainRoomBack.states.cabinetCollected = true;

                    global.printMessage(allDialogues[10], 3);
                } else {
                    global.printMessage(allDialogues[8], 3);
                };
            },
        }),

        arrowToFront: new Clickable({
            name: 'arrow to mainBack',
            source: 'arrowLeft.png',
            x: 0.02,
            y: 0.48,
            width: 0.08,
            height: 0.07,
            ifClicked: () => {
                global.loadRoom(allRooms.mainRoom, 0);
            }
        }),



    // items of study

    key2: new Clickable({
        name: 'key2',
        source: 'key2.png',
        x: 0.295,
        y: 0.403,
        width: 0.045,
        height: 0.05,
        ifClicked: function() {
            if (allRooms.Study.states.booksAway) {
                allSounds.key.play();
                allRooms.Study.states.key2Collected = true;
                global.printMessage(allDialogues[20]);

                global.ctx.clearRect(this.x, this.y, this.width, this.height);
                this.active = false;
                allRooms.Study.items = allRooms.Study.items.filter((item) => item !== this);
                allRooms.Study.states.key2Collected = true;
            };
        }
    }),

    books: new Clickable({
        name: 'books',
        source: 'books.png',
        x: 0.273,
        y: 0.288,
        width: 0.08,
        height: 0.157,
        ifClicked: function() {
                allSounds.books.play();
                allRooms.Study.states.booksAway = true;

                global.ctx.clearRect(this.x, this.y, this.width, this.height);
                this.active = false;
                allRooms.Study.items = allRooms.Study.items.filter((item) => item !== this);
                allRooms.Study.states.booksCollected = true;
        }
    }),

    shears: new Clickable({
        name: 'shears',
        source: 'shears.png',
        x: 0.15,
        y: 0.27,
        width: 0.045,
        height: 0.175,
        ifClicked: function() {
                allSounds.key.play();
                allRooms.Study.states.shearsCollected = true;
                global.printMessage(allDialogues[19], 3);

                global.ctx.clearRect(this.x, this.y, this.width, this.height);
                global.clickables = global.clickables.filter(function(e) { return e !== 'shears' });
                this.active = false;
        }
    }),

    butterflyFood: new Clickable({
        name: 'butterflyFood',
        source: 'butterflyFood.png',
        x: 0.25,
        y: 0.555,
        width: 0.04,
        height: 0.06,
        ifClicked: function() {
            if(allRooms.Study.states.bookRead) {
                allSounds.fertilizerBag.play();
                allRooms.Study.states.foodCollected = true;
                global.printMessage(allDialogues[18], 3);
                
                global.ctx.clearRect(this.x, this.y, this.width, this.height);
                this.active = false;
                allRooms.Study.items = allRooms.Study.items.filter((item) => item !== this);
            };
        }
    }),

    book: new Clickable({
        name: 'book',
        source: 'book.png',
        x: 0.2,
        y: 0.554,
        width: 0.12,
        height: 0.09,
        ifClicked: function() {
            setTimeout(() => {
                allRooms.Study.states.bookRead = true;
            }, 100);
            global.printMessage(allDialogues[17], 8);
            allSounds.book.play();
            
            global.ctx.clearRect(this.x, this.y, this.width, this.height);
            this.active = false;
            allRooms.Study.items = allRooms.Study.items.filter((item) => item !== this);
            allRooms.Study.states.bookCollected = true;
        }
    }),

    door2: new Clickable({
        name: 'door2',
        source: 'sinkEmpty.png',
        x: 0.64,
        y: 0.165,
        width: 0.580,
        height: 0.85,
        ifClicked: function() {
            allSounds.door.play();
            global.loadRoom(allRooms.mainRoomBack, 0);
        }
    }),


    }

export { allItems };