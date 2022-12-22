let a = 11;
console.log(a);

arr = ["app", "web", "CP"];

r = arr.map((track) => track + "s");

console.log(r);

const name = "Sammy";
const greetings = (name = "Sam") => {
  console.log("Hello " + name);
};

greetings();

const person = {
  name: "joe",
  age: 18,
};

const person2 = { ...person, true_age: 20 };
console.log(person2);

const bev = [3, 6, 9, 5];

bev.map((bevi) => {
  bevi += 2;
  console.log(bevi);
});

bev.forEach(() => console.log("num"));
