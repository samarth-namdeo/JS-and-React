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
