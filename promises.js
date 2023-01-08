const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random == value) {
    resolve("correct!");
  } else {
    reject("wrong");
  }
});

console.log(promise);

promise.then((data) => console.log(data)).catch((err) => console.log("error!"));
