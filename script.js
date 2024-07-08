for (let i = 0; i < 10; i++) {
  console.log("hello coders!");
}
const color = ["blue", "green", "red", "yellow"];
let button = document.querySelector("button");
let heading = document.querySelector("h1");
let indx = 0;
button.addEventListener("click", () => {
  heading.style.color = color[indx];
  if (indx === color.length - 1) indx = 0;
  else indx++;
});
