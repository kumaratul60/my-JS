const user = [
  { firstName: "Atul", lastName: "Kumar", class: "24" },
  { firstName: "Areol", lastName: "Kantr", class: "24" },
  { firstName: "Atal", lastName: "Kandi", class: "50" },
];
const output1 = user.filter((x) => {
  return x.class < 30;
});
console.log(output1);
const output2 = user.filter((x) => x.class < 30).map((x) => x.firstName);

console.log(output2);
