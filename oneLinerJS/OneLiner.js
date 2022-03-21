// Convert RGB to Hex

const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

const op = rgbToHex(0, 51, 255);

console.log(op);

// Check if Date is Valid

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

const checkDate = isDateValid("December 17, 1995 03:24:00");
console.log(checkDate);

// Find the day of year

const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

const checkDay = dayOfYear(new Date());
console.log(checkDay);

// Capitalize a String

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const caps = capitalize("follow for more");
console.log(caps);

// Find the number of days between two days

const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

const findDays = dayDif(new Date("2022-1-1"), new Date());
console.log(findDays);

// Generate Random Hex

const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

console.log(randomHex());

// Remove Duplicated from Array

const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));

// Log Time from Date

const timeFromDate = (date) => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));

// Check if a number is even or odd

const isEven = (num) => num % 2 === 0;

console.log(isEven(2));

// Find Average of Numbers

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

const res = average(1, 2, 3, 4);
console.log(res);

// Reverse a string

const reverse = (str) => str.split("").reverse().join("");

const resStr = reverse("hello world");
console.log(resStr);

// Check if array is empty
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;

const isNum = isNotEmpty([1, 2, 3]);
console.log(isNum);

// Shuffle an Array

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4]));

// Check if the date is Weekend

const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;

console.log(isWeekend(new Date(2022, 3, 4)));

// Check if a variable is an array

const isArray = (arr) => Array.isArray(arr);

console.log(isArray([1, 2, 3]));
// true
console.log(isArray({ name: "Ovi" }));
// false
console.log(isArray("Hello World"));

// Generate a random number between two numbers

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(random(1, 50));

// Generate a random string (unique id?)

const randomString = () => Math.random().toString(36).slice(2);

console.log(randomString());

// Toggle boolean

// bool is stored somewhere in the sniperscope
// const toggleBool = () => (bool = !bool);
const toggleBool = (b) => !b;
console.log(toggleBool);

// Different ways of merging multiple arrays

// Merge but don't remove the duplications
const a = [1, 2, 3];
const b = [4, 5, 6];
const merge1 = (a, b) => a.concat(b);
// Or
const merge2 = (a, b) => [...a, ...b];

// Merge and remove the duplications
const merge3 = [...new Set(a.concat(b))];
// Or
const merge4 = [...new Set([...a, ...b])];
console.log(merge1);
console.log(merge2);
console.log(merge3);
console.log(merge4);

// Get the actual type of javascript primitives

const trueTypeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

console.log(trueTypeOf(""));
// string
console.log(trueTypeOf(0));
// number
console.log(trueTypeOf());
// undefined
console.log(trueTypeOf(null));
// null
console.log(trueTypeOf({}));
// object
console.log(trueTypeOf([]));
// array
console.log(trueTypeOf(0));
// number
console.log(trueTypeOf(() => {}));

//   Truncate string at the end

const truncateString = (string, length) => {
  return string.length < length ? string : `${string.slice(0, length - 3)}...`;
};

console.log(
  truncateString("Hi, I should be truncated because I am too loooong!", 36)
);

//   Truncate string from the middle

const truncateStringMiddle = (string, length, start, end) => {
  return `${string.slice(0, start)}...${string.slice(string.length - end)}`;
};

console.log(
  truncateStringMiddle(
    "A long story goes here but then eventually ends!", // string
    25, // total size needed
    13, // chars to keep from start
    17 // chars to keep from end
  )
);

// Check if the user is on an Apple device

const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);

console.log(isAppleDevice);




let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

//   Check if the current tab is in view/focus
/**

const isTabInView = () => !document.hidden;  // Not hidden

isTabInView();
*/
// Get Query Params from URL

/**

const getParameters = (URL) => {
    URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
    return JSON.stringify(URL);
  };
  
  getParameters(window.location)

*/

// Clear All Cookies
// const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

// Get Value of a browser Cookie

/**
const cookie = (name) =>
  `; ${document.cookie}`.split(`; ${name}=`).pop().split(";").shift();

cookie("_ga");
 */

// Copy to Clipboard

/**

const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("Hello World");
 */

//  Scroll to Top

/**

const goToTop = () => window.scrollTo(0, 0);

goToTop();
*/

// Get Selected Text

/*
const getSelectedText = () => window.getSelection().toString();

getSelectedText();

*/

// Detect Dark Mode

/**

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

console.log(isDarkMode)

*/
