var a = 1;
var num = {
  a: 2,
};
function test(b, c) {
  return this.a + b + c;
}
console.log(test());
console.log(test.call(num, 1, 2));
console.log(test.apply(num, [1, 2]));
console.log(test.bind(num, 2, 2));

let test1 = test.bind(num);
console.log(test1(4, 5));
