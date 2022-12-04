const inputEl = document.querySelectorAll("input");
const inputBtnEl = document.querySelector(".input-btn");
const playerDetailsEl = document.querySelector(".player-details");
const playerEl = document.querySelectorAll(".player");
const delBtnEl = document.querySelectorAll(".del-btn");

//CREATING NEW PLAYERS WITH JS
const createPlayer = () => {
  if (inputEl[0].value.length > 0) {
    let newPlayerEl = document.createElement("div");
    newPlayerEl.innerHTML = `<div class="player">
            <span>${inputEl[0].value}</span>
            <span>${inputEl[1].value}</span>
            <span>${inputEl[2].value}</span>
            <span>${inputEl[3].value}</span>
            <div class="circles">
                <span>
                    <button class="del-btn">Delete</button>
                </span>
                <span class="plus">+5</span>
                <span class="minus">-5</span>
            </div>
        </div>`;
    playerDetailsEl.appendChild(newPlayerEl);

    for (const input of inputEl) {
      input.value = "";
    }
  }
};
inputBtnEl.addEventListener("click", createPlayer);

//CREATING DELETE FUNCTION TO EACH PLAYER (TO BE DONE LATER)

//using rest operator in funtion example
// function numbers(...args) {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// }
// console.log(numbers(2, 5, 8));
//output 15
