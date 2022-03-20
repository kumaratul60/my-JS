const sum = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};
console.log(sum(1)(2)(4)(5)(6)());
