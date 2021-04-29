//Ok now actually operators

//Our favorites

0 > 1 //false
1 > 0 //true


//Now, for the difference between == and ===
//What's with the extra equal sign?
//Demo:

0 == "0" //true
0 === "0" //false

/*
As you can see, === checks to make sure it is the same type, if it's not the same type, forget about it! It will return false
==, however, is much more lenient. It will do the type conversion and THEN compare.
To sum up, === checks for type, but == doesn't care.
*/

// The "!" operator
// This is just the not operator
// It means NOT

//Demo:

!true === false //true
!0 === true //true, remember truthy and falsy values, 0 is a falsy value, so NOT false is true
!200 === false //true, 200 is a truthy value, so NOT true is false

//On that note
//The != and !==
//These operators mean NOT equal too
//However, like the == and === operators, there is a difference

//Demo:

0 != "0" //false, like the == operator, it does the type conversion first (0 != 0) and 0 IS equal to 0, so this return false
0 !== "0" //true, because it is strict, it doesn't do the type conversion, and hence, it returns true, because string 0 isn't the same as the number 0

// && ||
//&&
//&& stands for AND
//|| stands for OR

//Demo: 

0 === 0 && true //true, because both conditions (which go on the left and right of the && operator) evaluate to true
0 === "0" && true //false, because the condition on the left is false. Both conditions have to be true for the and operator to return true

0 === 0 || false //true, because the condition on the left is true
0 == "0" || 8 > 1 //true because at least one condition is true. If at least one condition is true, it will return true.

// >= <=
greater than or equal to
and less than or equal to
