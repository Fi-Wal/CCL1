# CCL1
## Day 1 – 13th of January
Today I got feedback for my game idea. Lucas liked the concept but told me to first implement basic functions and then worry about more complex functions like the inventory system. I finished the layout of the game are and the walkthrough of the game and also created a github account and familiarised myself with github.

I'm feeling pretty optimistic, but there's many functionalities that I'll have to learn using tutorials because we haven't talked about them in class, like canvas elements reaction to being clicked.

## Day 2 – 14th of January
Today I started by creating a start screen, and making the start button functional so that the canvas for the game appears as soon as it's clicked (which took me embarassingly long). After that I spent a lot of time googling and looking for tutorials on YouTube. I found out how to print text on the canvas, which I need for the dialogue (although I still have to figure out how to make it disappear again). I'm also in the process of making a rectangle on the canvas react to being click, as well as using JavaScript to change background images.

Wow. This is going to be a lot of work.

## Day 3 – 15th of January
The first thing I managed to do today is figuring out how to set a Timer that makes the text printed onto the canvas disappear after a set amount of time. It finally worked! Yay! There might be a more elegant way to do it, but I'll leave it for now. After that I figured out how to implement the functionality to change the background into a my class "Room". (I also use this with a timer).

My head hurts, but I'm also proud of my accomplishments.

## Day 4 – 16th of January
Today, I finally thought that it would be a good idea to create a Kanban board to keep track of my tasks (I've worked with a simple task list on Obsisidan until now and it's already pretty chaotic so...). Also, I managed to detect clicks on images on the canvas! I then worked over my code and moved some code to other files, finally creating a gameLoop in my main.js! Then I started creating instances of my room class, but then realised an issue with importing all of there objects... my next step is to figure that out.

I've got no additional commentary today. Sorry!

## Day 5 – 17th of January
Today I did a lot of restructuring of my code so that slowly, I move all of the important properties and methods inside the classes they actually belong to. This took me a long time and I had to fix a lot of errors and problems that came with it. But It works again! (for now). I also am now able to draw pngs on the canvas (instead of colorful rectangles) when a room is loaded. The pngs are actually instances of my clickables class AND – get a load of this – the click detection still works. Slay!
I also (for now) made the plant react to a click by changing rooms – the background changing works, but I'm trying to figure out a way to include first setting all items to inactive inside the room function before setting the ones of the room to active again...

I got a lot of work done today but there's still *so* much to dooooooo

## Day 6 – 18th of January (gotta keep going even if it's saturday)
Hi. It's me from sunday. Yesterday, I only created this headline and then ignored the diary. I didn't really do much, except asking my brother for help, because I don't know how to set all the items' states to inactive. As in, I don't know how to access them programatically, because they're keys of objects which are, in turn, keys in an object. He couldn't help me but he gave me some insights and he made me feel like an idiot because he's been programming for years now and is obviously way better. Thanks I guess!

Can't remember how I felt yesterday, the day went by in a blur!

## Day 7 – 19th of January
Today I finally caved and wrote a rather long and detailed prompt to ask ChatGPT how to loop through every room in my allRooms object and change the items' active state to false because I just COULDN'T figure it out. Needed to do some more googling and asking for further explanations but the function is pretty clear to me now and it works. So now, I can load and clear any room and the items within it! While I was at it, I also quickly created an end screen in HTML.

I finally got the base functions! Tomorrow I'll start by rewriting (and simplyfying) the walkthrough and sketching my backgrounds.

## Day 8 – 20th of January
Today, I mainly spent my time on starting to draw the backgrounds and clickable objects in my game. I have three backgrounds and a looooooot of objects to draw (I'm not sure yet how many exactly) so I'm a little stressed already. But it's going to be fine. Also, I almost completely rewrote the game walkthrough/story. I already realised this when I wrote the first version last monday, but I had to delete almost half of it, and take away a lot of what was supposed to be the games "story".

There's not enough time for everything I want to do :(

## Day 9 – 21st of January
Today, I mainly continued to draw, draw, draw... but loading all of the images into the game was almost the same amount of work. From the background image not fitting into the window like I envisioned it at all to painfully adjusting every object's size and position over and over again until it fit to the screen size perfectly... I feel like there's a way better and more dynamic way to do this, but I can't figure it out right now. For now, my priority is that it looks good on my laptop for the showcase on friday – after that I will take on this issue again.

I'm tired...

## Day 10 – 22nd of January
Today I felt like trash – how convenient! I really didn't get a lot of work done sadly, but I worked on little adjustments like (once again) making design changes on the main screen, as well as changing the "intro quote" (before the first room is loaded) and the end screen. I also continued drawing (wow, there is a lot to draw. I don't think I'll touch procreate for a while after this), which, thankfully, was easy to do from my bed. I also had to adjust all the dialogues and the reaction to a click of every object (including all the states). I added them to the code in a pretty messy way before and decided to porperly arrange them again so that I'll have it easier later on (which means, tomorrow. Tommorow's the last day. * sweats*).

## Day 11 – 23rd of January
I wrecked my brain of how to implement the required animations into my game, since I don't have any characters or enemies (or even objects that would make sense if they looped through a spritesheet the whole time). In the end, I decided to just use very very simple animations in the background to further enhance the feeling and looks of my game. So what I did is make four "sprites" each for two animations: Some bugs flying and crawling around in the main room, and fireflies/dust particles/whatever one wants to call them in the study. The drawing part wasn't hard but I had to do a lot of trying around until the animation loop was working.

When I was finished with the animation and fixing some last issues it was already super late, but I decided to still add in sounds for when the player clicks certain objects. It only took about 45 minutes and I'm glad I did it, because I feel like it improved the immersion of the game quite a lot.

## Day 12 – 24th of January
It's presentation day! I did it! Yay! * eyebags because I only got 3 hours of sleep last night and overslept*
I'm very proud of my game, even though I realised while letting other students test play it that there's a few minor issues I have to fix before the final submission. But the game works!
