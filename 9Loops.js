//Gonna take you for a loop!
//Loops

//There are two main types of loops: for and while, lets start with the latter.

//While

while (condition) {
 //code
}

//WHILE the condition is true, execute the code

//an example of the usage of a while loop

let i = 0;

while (i < 3) {
      alert(i); //prints out 0, 1, 2
      i++;
}

//there is also do while loops

let i = 0;

do {
   alert(i)
    i++;
} while (1<3) //also prints out 0,1,2

//The main difference is that while the first loop check the condition THEN runs the code
//The do...while loop runs the code, then checks the condition
//The do while loop would run at least ONCE regardless of the condition, because it runs first, then checks

//For loops
//similar to while loops, but a bit more condensed

for (let i = 0; i < 3; i++) {
   alert(i);
   i++; //does exactly the same this as the while loops above
}

//basic structure
for (/* variable declaration */; /* condition */; /* increment */) {
//code
}

//break and continue

for (let i = 0; i < 8; i++) {
      alert(i)
      if (i == 1) break;
      //prints 0, 1
}

//break exits the loop (completely leaves it)
//this works for both while and for loops

//now for continue

for (let i = 0; i < 8; i++) {
    if (i == 3) continue;
    alert(i);
    //prints 0, 1, 2, 4, 5, 6, 7
}

//the continue statement "skips" the current iteration of the loop, and moves on
//can be used in do...while loops and for loops
//loops and code blocks can also be labeled

//useful like in nested loops (loop inside of a loop)

firstLoop:
for (let i = 0; i < 3; i++ {
      secondLoop:
      for (let i = 0; i < 3; i++) alert(i) //also if your code is a one liner, you don't need {}
}

//if i wanted to break out of the first loop
break firstLoop;
//or continue
continue firstLoop;
//by default however, break breaks out of the current loop, same for continue
