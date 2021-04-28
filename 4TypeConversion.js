//Now time for crazy stuff

//what happens?

var e = "string" + 3;
//answer: "string3", 3 gets converted into a string
//even if you were to have

"string" + 3 + true + null + "anotherstring" //it would convert all into a string
//so
"string3truenullanotherstring"

//try doing nonsense like 
"string" * 3 //and you will get NaN (stands for Not a Number)

//how about

"6" / "2" or "6" / 2
//here there are 2 different types, but JS is smart, it converts the types into numbers
//so both would output 3


let e = 7;

e += "string"

//what would e output as?
//Ans: 7string


BONUS
//from previous example
e -= "g";
//what would this output?
//Answer: NaN (not a number)

//JS can't do string subtraction, it can only concatenate (mush together) strings (and other values), nothing else 
