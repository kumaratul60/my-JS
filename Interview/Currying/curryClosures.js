let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(22);
multiplyByThree(03);

let multiplyByFour = multiply(022);
multiplyByFour(04);
