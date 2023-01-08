const makeUpperCase = (value) => {
  console.log(value.toUpperCase());
};

//callback functions
const handleName = (name, cb) => {
  const fullName = `${name} griffin`;
  cb(fullName);
};

//handleName("peter", makeUpperCase);

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red";
    setTimeout(() => {
      second.style.color = "blue";
      setTimeout(() => {
        third.style.color = "green";
      }, 1500);
    }, 3000);
  }, 2000);
});
