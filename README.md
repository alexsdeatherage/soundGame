# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alex Deatherage**

Time spent: **#** hours spent in total

Link to project: https://glitch.com/edit/#!/uncovered-smoggy-venus

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

![Sound Game](https://s4.gifyu.com/images/soundGame.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

* MDN Web Docs
* W3Schools
* Stack Overflow

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?

  After the base project was completed, I went ahead to complete some of the optional features. The initial optional features were easy to implement, but I did have some issues with the randomized pattern.
  I knew that the current state of the project has a set number of turns for the game, and that an array should be initialized with random positive integers that are between 1 through 6. 
  I initialized an array that is local to a function, but then I realized that all of the variables so far should be continued to be treated as global variables, so then I initialized an empty array outside the function,
  and I used the empty array as an argument inside startGame(). I used a for loop to create the random integers, but I ended up with inconsistent array lengths since I used a conditional that would not allow 0s to
  be pushed to the array. I was able to solve this by using a while loop that continued as long as the array was below a predetermined length.
  
  I did try to implement timer that would allow players around 10 seconds to make their move after the sequence had played out using JS's SetTimeout and ClearTimeout methods, but unfortunately I was not able
  have it function properly with the game's programming, so I opted to remove the feature for the time being.  
  
3. What questions about web development do you have after completing your submission? 

I would like to hear more about the commenting style that would be ideal for HTML and CSS. It is important to write comments for a project so that other developers can understand the code you have written, but 
I am at a loss as to what would be appropriate for languages like HTML and CSS. For programming languages, you can document what classes and functions should accept and return, and use comments to describe what certain
lines or blocks of code perform when executed, but for HTML and CSS I can only think of using comments for clarifying if a line is expected to trigger a function in JavaScript.

From my bootcamp instructor for web development, I have heard of separation of concerns for HTML, CSS, and JS having their own files to code in. I have also read documentation for React, which used JSX to implement HTML
of a JS file. Is separation of concerns is primarily for pure HTML, CSS, and JS projects, or is React considered as an outlier for this practice?

Generally, I would like to hear more about what is considered best practices for Web Developers and how that affects the readability and functionality of the final product.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.

Given more time, I would have liked to restrict the use of global variables within the program, 
since that would affect the modularity of the code base further down the line if I wanted to add more features.
I would have also updated some of the syntax of the project to be more inline with the standards of ES6, such as arrow functions.
The strikes against the player are implemented, but the strike number and the number of strikes allowed should be visible to the user when
they are playing the game. 

Outside of functionality, I would like to implement a game mode that would continue the game forever. 
The game would keep track of the current score of the player, and then list that score on a leaderboard of other players alias and scores.
A database would be used for track of the alias and the scores, which should not be too difficult to implement if someone had sufficient backend knowledge.




## License

    Copyright Alex Deatherage

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
