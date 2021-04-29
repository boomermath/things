//Operators! We love operators!
//quick list
//<, >, ===, ==, !=, !==, !, &&, ||

//One by one

//But first...

//Remember booleans? Those true and false values? Well, they can be used to do operations, as we will see later on.
//if statements

if (true) {
      //here you can execute code!
}

//the condition, which goes in the () will be treated as a boolean (true/false)
//ONLY IF THE CONDITION IS TRUE will the code in the if statement run, otherwise it won'

//Truthy and Falsy Values
//These values aren't explicitly TRUE or FALSE, but the act like them

//For example

if (1) { console.log("Yay!") } //this code will execute, because any number > 0 is considered truthy, however, any number <= 0 is considered falsy.

//Falsy values
any number <= 0
null, undefined, NaN
//and...
"" //because its an empty string (there's nothing in it!)

//Truthy values
any number > 0, 
"strings that have things in it"

//It's very intuitive
//However
//To sum up: 
//if you were to convert those values to boolean
//that's what they would be converted to

Note that things like "0" and " " will return true, because the strings have things in them.

also RQ

if (condition1) {
//first
}
else if (condition2) {
  //if the previous condition (condition1) wasn't met, it will check for condition in this else if.
  //if this condition is satisfied, it will ignore all subssequent "else if" statements (and the else statement)
}
else {
 //this code will be executed ONLY if the previous two if statements condtions weren't met
}
