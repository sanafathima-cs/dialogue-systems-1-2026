# Lab 1

Read through the entire lab before you start. You can do the exercises in different order depending on how you think you learn better; the important thing is that you are able to hand in the following files when you are done:
- `notes.txt` (or any other type of human-readable format) containing your answers the questions in Part 2 (feel free to add any other thoughts you had while solving the assignment).
- `exercises.ts`
- `counter.ts`, with your comments 

If you choose to go for the VG point in part 4, hand in all relevant files (i.e. everything you changed or added). This could, for example, include:
- `main.ts`
- `index.html`
- `style.css`

## Part 1. JavaScript: exercises to get started

These exercises can be done in your browser. 
You can also try: https://www.typescriptlang.org/ (TS Config > Lang > JavaScript).
Alternatively, you can start with Part 2 and get tooling to work and then
return to Part 1 to solve exercises in your text editor.

Here are some useful resources for the basic concepts in JavaScript:
- https://javascript.info/variables
- https://javascript.info/operators
- https://javascript.info/logical-operators
- https://javascript.info/function-basics
- https://javascript.info/object

If you are familiar with Python programming from before, this is a 
good resource that ties its explanations of JavaScript to what you already 
know about Pyhton:
- https://runestone.academy/ns/books/published/JS4Python/

You can also look at the lecture slides, you can find them at `lectures/intro_to_js_ts.pdf`.

*Most exercises were taken from this source, feel free to practice
with more of these if you feel like it:
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php*


### Exercise 1: randomize and input/prompt

Write a program that takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The
program displays (`console.log()` or `alert()`) a message `"Good Work"` if the input matches the guess
number otherwise `"Not matched"`.

Resources: 
- `prompt()` and `alert()` https://javascript.info/alert-prompt-confirm
- random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Solution in the source:
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-8.php
    
### Exercise 2: operations and functions

Write a function to check a pair of numbers and return true if one of
the numbers is 50 or if their sum is 50.

What happens if one or both of the numbers are provided as string? What
is a possible solution to this?

### Exercise 3: finding string
Make an array of names `const names = ["Anna", "Johannes", "Paula",
"Daisy"]`. Write code to:
1. find the index for the name "Paula"
2. check if the name "Paula" is in the list
3. check if the name exists in the list if you could only search it
as: "PAULA" or "paula"

Check these: 
- https://javascript.info/string
- https://javascript.info/array

### Exercise 4: strings and length

Write a JavaScript function to create a new string from a given
string. This is done by taking the last 3 characters and adding them
at both the front and back. The string length must be 3 or more.  

For example: 
- `addThree(umbrella) // -> llaumbrellalla`
- `addThree(cap) // -> capcapcap`

Check: 
https://javascript.info/ifelse
One solution:
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-26.php


### Exercise 5: looping
Write a program that returns an array of strings (const) consisting of
every name in `names` (from Exercise 3) and their respective length
multiplied by two: `["Anna 8", "Johannes 16" ...]`

Check: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

### Exercise 6: objects
Create the following object: 

    let zooAnimals = {
      "giraffe": { "weight": 910, "origin": "Tanzania" },
      "lion": { "weight": 200, "origin": "Tanzania" },
      "elephant": { "weight": 5000, "origin": "India" },
      "penguin": { "weight": 30, "origin": "Argentina" },
      "koala": { "weight": 10, "origin": "Australia" },
    };

- Write code to check if the animal "penguin" exists in the object. Do the same for "snake".
- Write code to check for animals with a specific weight or a
  specific origin in the object: Are there animals from Australia? Animals from Sweden? Animals with a weight above 1000 kg? Below 5 kg?
- Add a new animal to the object.
- Create an object method named "about" which generates
  text about specified animal, e.g. `zooAnimals.about("giraffe") // ->
  "giraffe weights 910 kg and comes from Tanzania"`. If the animal is
  not in the zoo, return "we don't have this animal".

Tips: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

## Part 2. Getting started with TypeScript tooling + TypeScript exercise

1.  [Download and install NodeJS](https://nodejs.org/en/download/) (LTS version).
2.  [Install Yarn](https://yarnpkg.com/getting-started/install) dependency manager (you might have to use &rsquo;sudo&rsquo; for
    this to work). Run this in your Terminal:
    
        corepack enable

3.  Create a [Vite](https://vitejs.dev/) starter project:
    
    -   run `yarn create vite` in the directory where you want to work with this project
    -   specify the name "Code"
    -   select Vanilla framework
    -   select TypeScript variant
    -   follow the further instructions
4.  Vite will now start a development server. You will see the link to the development instance,
    i.e. <http://localhost:5173/>. Open it. You should see the &ldquo;Hello
    Vite!&rdquo; webpage. 

5. To close the server, press `q + enter`. To open it again, run `npx vite`in the directory of your project.

### Exercise 7: how everything fits together

Study the `.ts`, `.css` and `.html` files generated by Vite (they will be in your project directory).
Try to understand what&rsquo;s going on there. Some questions to
help you understand the files:
    - How are the files connected together? 
    - What method is used in the script files to retrieve and alter the
      HTML element?

Write your brief responses to these questions in a file called `notes.txt` (it doesn't have to be specifically a text file, just a format that we teachers can easily open and read). 

      
### Exercise 8: creating types

Take a look at the following links:

This one explains why types are useful in JavaScript: https://www.typescriptlang.org/docs/handbook/2/basic-types.html

And this one some basics on the syntax: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

For this exercise, add types for each of the 6 exercises of Part 1 you have completed. 
Your file needs to be a TypeScript (.ts) one, instead of a JavaScript one (.js). Submit a TypeScript file named "exercises.ts" after following Part 2.



## Part 3. Your first XState program
Add XState to your project:
    
      `yarn add xstate` 

Look at the resources below to understand what xstate does. 
     
2. Move the program logic in `counter.ts` to a state chart:
   - Information about the counter is stored in the **context** of
     your state chart.
   - **Event** `INC` updates the counter. Clicking on the button should
     emit this event.
   - Log the counter following the example:
     https://stately.ai/docs/xstate#create-a-simple-machine
   - Then, adjust you code so that the page contents are updated
     according to the state. The variable `counter` should be removed
     from the `setupCounter(element)` function.

     An example solution of this problm can be found in `examples/counter.ts`. It is
     ok to use parts or all of the example solution in your own code. However, regardless of whether or not you use the example code, **your solution should contain comments explaining (to the best of your ability) each part of the code and what it does**. Try to make your comments as comprehensive as possible. (If you feel like you are completely lost, try to locate exactly which parts you are confused about. This will make it easier for you to search the docs for the answers to your questions yourself, and also easier for us to help you if you get stuck.) 
     
Resources:
1. https://stately.ai/docs/xstate
2. https://stately.ai/docs/actors#actor-snapshots
3. `examples/counter.ts`


## Part 4. HTML exercises (VG point, optional)

Create an interface in HTML for Exercise 1. Replace `alert()` (or
`console.log()`) and `prompt()` with appropriate HTML elements. You
should have an input box,  a button to submit the input in the
box.

Edit the HTML so that your page looks better: write a title, write a
short message that tells the user how to use your mini program, choose
a background color and put your objects in the center of the page.
Try checking how CSS can help you with this.

Check:
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics



# Done!

Upload the relevant files under the assignment "Lab 1" on the Canvas page. 





