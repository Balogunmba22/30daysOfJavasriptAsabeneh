const wrapperEl = document.querySelector(".wrapper");
const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");
const spanEl = document.querySelector("span");
const dateEl = document.querySelector("#dateBox");
const listEl = document.querySelectorAll("li");

//wrapper styles
wrapperEl.style.width = "60%";
wrapperEl.style.margin = "2rem auto";

//h1 styles
h1El.style.textAlign = "center";

//h2 styles
h2El.style.textAlign = "center";
h2El.style.textDecoration = "underline";
h2El.style.fontWeight = "400";
h2El.style.color = "rgba(0,0,0,0.7)";

//span styles
spanEl.style.color = "red";

// dateEl styles
dateEl.style.background = "yellow";
dateEl.style.width = "fit-content";
dateEl.style.padding = ".3rem 1rem";
dateEl.style.margin = "auto";

//list styles
for (let i = 0; i <= listEl.length - 1; i++) {
  listEl[i].style.listStyle = "none";
  listEl[i].style.padding = "1rem .5rem";
  listEl[i].style.marginBottom = ".75rem";
  
  if (i == 0) {
    listEl[i].style.background = "green";
  } else if (i == 1) {
    listEl[i].style.background = "yellow";
  } else {
    listEl[i].style.background = "orange";
  }
}

//to generate random color
function generateColor() {
  let color = "#";
  const hex = "0123456789abcdef";

  for (let i = 0; i <= 5; i++) {
    const n = Math.floor(Math.random() * hex.length);
    color = color + hex.charAt(n);
  }
  return color;
}

//change span color
function changeSpanColor() {
  spanEl.style.color = generateColor();
}
setInterval(changeSpanColor, 1000);

//change dateEl background color
function changeDateBackground() {
  dateEl.style.background = generateColor();
}
setInterval(changeDateBackground, 1000);

//get date
const getAllDAte = () => {
  const d = new Date();
  const date = d.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  dateEl.textContent = `${date} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};
setInterval(getAllDAte, 1000);

