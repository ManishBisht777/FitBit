// const data = new Promise((resolve, reject) => {});

function isOdd(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject("not corerct type");
      return;
    }

    setTimeout(() => {
      if (number % 2 === 0) resolve(false);
      else resolve(true);
    }, 3000);
  });
}

isOdd("manish")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

const isEven = (callback, num) => {
  setTimeout(() => {
    if (num % 2) {
      callback(new Error("Number is Odd"), null);
      return;
    }

    callback(null, true);
  }, 3000);
};

function isEvenAsync(num) {
  return new Promise((res, rej) => {
    isEven((err, status) => {
      if (err) rej(err);
      res(status);
    }, num);
  });
}
