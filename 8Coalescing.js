//Nullish coalescing operator (WTF?!?!?)
//kinda like the ternary operator

//demo

const e = user ?? "Anonymooose";


/* basically, it only returns the value on the right if the value on the left is ONLY */ null OR undefined
//in this case, in the example above e = "Anonymooose" because user was is undefined

undefined ?? 16
//returns 16, value on the left is undefined
null ?? "string"
//returns string, value is null

false ?? "value"
//returns false, because false is not undefined or null
