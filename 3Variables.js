//Variables are values that are, well, variable.

the main words are var, let, and const

var x = 3; //x is now 3!
let z = 3; //z is also 3!

const t = 4; //t is 4!

x = "string" //x is now string
z = "thing" //z is now thing
//two variables can have the same value as long as they have different names

t = 5 //throws an error: error: assignment to constant variable. Once a variable is assigned with const, it cannot change.

//var and let are pretty much the same, except for techincal differences, which we will cover later

//Math with variables!

var e = 5; //note you CANNOT do any of the below with const, because once you set a variable constant, you can't change it.

e = e + 1 //e is equal to 6
e += 7 //exact same as the above, just a better way to write it, e is now 7
e -= 5 //e = 2
e *= 5 // 2 * 5 = 10, e is 10
e /= 5 // 10 / 5 = 2, e is 2 again
e **= 3 // 2 ^ 3 = 8, e is 8

//basically, you place the math operator on the left-hand side of the =, and then the number you want to add/subtract/etc on the right
