import { Room } from './room.js';
import { allItems } from './itemInfo.js';
import { allAnimObjects } from './animInfo.js';

// this objects contains the three rooms, all states are initially set to false

const allRooms = {
    mainRoom: new Room({
        name: 'mainRoom',
        bg: 'Calathea_Main_Room.png',
        items: [
            allItems.Calathea,
            allItems.arrowToBack,
            allItems.wateringCan,
            allItems.valve,
            allItems.window,
            allItems.sink,
            allItems.ivy,
            allItems.butterflies,
        ],
        animated: [
            allAnimObjects.bugs,
        ],
        states: {
            plant1Clicked: false,
            arrowClickedFirst: false,
            wateringCanCollected: false,
            waterFilled: false,
            valveTurned: false,
            windowOpened: false,
            windowCollected: false,
            ivyCut: false,
            calatheaFertilized: false,
            calatheaTrimmed: false,
            butterfliesFreed: false,
        },
    }),

    mainRoomBack: new Room({
        name: 'Main Room Back',
        bg: 'Calathea_Main_Room_Back.png',
        items: [
            allItems.driedGrass,
            allItems.key1,
            allItems.Monstera,
            allItems.arrowToFront,
            allItems.fertilizer,
            allItems.Cabinet,
            allItems.Door,
        ],
        states: {
            doorFree: false,
            key1Collected: false,
            driedGrassCollected: false,
            fertilizerCollected: false,
            cabinetCollected: false,
            cabinetOpened: false,
            fertilizerCollected: false,
            calatheaWithFood: false,
        },
    }),

    Study: new Room({
        name: 'Study',
        bg: 'Calathea_Study.png',
        items: [
            allItems.key2,
            allItems.books,
            allItems.shears,
            allItems.butterflyFood,
            allItems.book,
            allItems.door2,
        ],
        animated: [
            allAnimObjects.lights,
        ],
        states: {
            shearsCollected: false,
            booksAway: false,
            bookRead: false,
            foodCollected: false,
            key2Collected: false,
            booksCollected: false,
            bookCollected: false,
        },
    })
};

export { allRooms }