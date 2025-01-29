# 🌾 **Calathea** 

**Find your way through different rooms of a greenhouse and use items to help plants in need, with the objective to safe the calathea in the centre of the greenhouse.**

---

## 🌱 **Play Calathea Here**
[Click here to play the game!](link)

---

## 📸 **Screenshots**


### Menu and UI:
<div style="text-align: center;">
  <img src="startScreen.png" alt="Menu UI Screenshot" width="600">
  <p>*Figure 1: Start screen of the game.*</p>
</div>

---

### Main Gameplay:
<div style="text-align: center;">
  <img src="firstRoom.png" alt="Gameplay Screenshot" width="600">
  <p>*Figure 2: Player's view when they start the game.*</p>
</div>

---

## 🎨 **Art – Objects and Animations**
Every clickable object in the game is printed onto the canvas seperately, and thus exists as png.
Although there's no classic player character or enemies, background animations were included in two rooms.

### Plants and Items:
<div style="display: flex; flex-direction: flex-wrap;">
  <img src="calatheaDry.png" alt="Dry state of calathea" width="180">
  <img src="calatheaWatered.png" alt="Watered state of calathea" width="180">
  <img src="calatheaFertilized.png" alt="Fertilized state of calathea" width="180">
  <img src="calatheaTrimmed.png" alt="Trimmed state of calathea" width="180">
  <img src="calatheaLoved.png" alt="End state of calathea" width="180">
  <p>*Figures 3-7: Different appearances of the calathea throughout the gameplay.*</p>
</div>

<div style="display: flex;">
  <img src="wateringCan.png" alt="watering can png" width="100">
  <img src="book.png" alt="book png" width="80">
  <img src="valve.png" alt="valve png" width="40">
  <img src="shears.png" alt="shears png" width="40">
  <p>*Figure 8-11: An assortment of clickable items in the game.*</p>
</div>


---

## 🥀 **Reflection**

### What went well:

- **Puzzling Together my Code:** Since I could use only very little of the template we were provided, I had to find out how to implement a lot of functionalities by myself. Despite having to do a lot of googleing (and repeatedly asking ChatGPT for help), I usually figured out quickly how to adapt new code snippets to work with the rest of my code.
- **Design and Vibes:** From the beginning, I wanted to put a strong emphasis on the art style and the calm, fresh vibe of the game. I'm proud of how the art turned out, especially the third room (study).

### Challenges:

- **Canvas Issues:** I struggled a lot with the canvas. Since there's a lot of objects that have to be drawn onto the canvas, it was hard fitting the background image properly as well as aligning the items perfectly.
- **The Rooms Object:** I had to do a lot of testing and trial and error until I had a structure for the rooms, so that every room can be loaded when it's reentered while only showing items that haven't been picked up yet and showing objects with multiple sprites in their correct state.


### Lessons Learned:
- **Changes in Plans:** Be ambitious, but open to changing aspects of your game. While working on it, you might discover that there's ideas you can't implement.
- **Trust in the Game Loop:** I don't know why, but when I started, I thought I wouldn't need a game loop. As soon as I wanted to update objects to not be drawn onto the canvas anymore, I realised I *do* need one. And I needed it for other things too, later on. So, now I know: trust in the game loop. You'll (probably) need it.
