let counter = 0;
function saveInput() {
  console.log("save" + ++counter);
}
function debounce(func, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      saveInput.apply(context, arguments);
    }, delay);
  };
}
const changeFunc = debounce(saveInput, 300);
