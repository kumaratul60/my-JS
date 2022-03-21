const num = 123456.78952;
// Intl -> internationalization.NumberFormat(Locale,object)
const cur = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  //   minimumFractionDigits: 2,
}).format(num);
console.log(cur);

const curUs = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  //   minimumFractionDigits: 2,
}).format(num);
console.log(curUs);

const curIN = new Intl.NumberFormat("in-IN", {
  style: "currency",
  currency: "INR",
  //   minimumFractionDigits: 2,
}).format(num);
console.log(curIN);
