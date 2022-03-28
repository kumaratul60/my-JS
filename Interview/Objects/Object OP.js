// Guess Output 1

var a = { name: "ak" };
var b = { name: "ak" };
console.log(a === b);
console.log(a == b);

// bcoz When comparing two objects, JavaScript compares internal references which are equal only when both operands refer to the same object in memory, keys, and values are not checked, so the content of the object doesn’t matter

// Guess Output 2

var a = 1;
var b = "1";
console.log(a === b);
console.log(a == b);

// bcoz In “===” it with compare datatype also, of LHS & RHS and whereas “==” only compare values of LHS and RHS
