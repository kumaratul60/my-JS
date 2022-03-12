let a = 5;
let b = 6;
[a, b] = [b, a];
console.log("swap without third variable", a, b);

let x, y, z;
(x = 1), (y = 2), (z = 3);
console.log(x, y, z);

let [p, q, r] = [7, 8, 9];
console.log("array destructuring", p, q, r);
