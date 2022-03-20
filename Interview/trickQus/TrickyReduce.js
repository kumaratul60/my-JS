const user = [
  { firstName: "Atul", lastName: "Kumar", class: "24" },
  { firstName: "Areol", lastName: "Kantr", class: "24" },
  { firstName: "Atal", lastName: "Kandi", class: "25" },
];
const output1 = user.reduce(function (acc, curr) {
  if (acc[curr.class]) {
    acc[curr.class] = ++acc[curr.class];
  } else {
    acc[curr.class] = 1;
  }

  return acc;
}, {});
console.log(output1);

const output2 = user.reduce((acc, curr) => {
  if (acc[curr.class]) acc[curr.class] = ++acc[curr.class];
  else acc[curr.class] = 1;

  return acc;
}, {});
console.log(output2);
