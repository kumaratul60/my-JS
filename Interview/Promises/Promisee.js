let promise = new Promise(function (resolve, reject) {
  throw new Error("calculation error"); // throw will reject promise
  reject("Reject!");
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
