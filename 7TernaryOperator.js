//Ternary Operator OP
//Basic structure

condition ? ifTrueThis : elseThis

//Applications

//Let's say you want to set a variable based on a condition
//For example

let variable; //also i didn't go over this, but with LET and VAR (ONLY THESE TWO) you can declare, but not assign it to a value, it will just be undefined

if (someCondition) {
  variable = 3;
}
else {
variable = 6;
}

//but this is long, clunky, and no one wants to type that many lines.
//solution

const variable = someCondition ? 3 : 6;
//note I can use const here, because I am not reassigning (changing the value) it.
//basically, if the condition if truthy (true) it will return the value on the left, else it will return the value on the right

//you can also use this to execute functions (we haven't learned about those yet)

someCondition ? thisFunctionRunsIfTrue() : ElseThisOneRuns();
