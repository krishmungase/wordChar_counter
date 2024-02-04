let textbox = document.getElementById("textbox");
let btn = document.querySelector("button");
let character = document.getElementById("char");
let word = document.getElementById("word");

textbox.addEventListener("input", (e) => {
  let text = e.target.value;
  let char = text.length;
  character.innerHTML = char;
  console.log(char);

  text = text.trim();
  let words = text.split(" ");
  let clearArr = words.filter((e) => {
    return e != "";
  });

  word.innerHTML = clearArr.length;
});

btn.addEventListener("click", () => {
  textbox.value = "";
  character.innerText = "0";
  word.innerText = "0";
});
