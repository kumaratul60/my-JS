// Debouncing in javascript

let counter = 0;
const getData = () => {
  // call the api and get data
  console.log("fetching data..." + ++counter);
};

const debounce = function (func, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

// debounce function takes two argument: function, delay and does not let this function make unnecessary calls agin and again  and only will
// call if the difference time interval between two function calls is greater than this delay.
// debounce method is very useful, it optimize the performance of page.

// debounce method takes a method and return you  again a method which is better than method what is was .
// it also used in resizing of window
