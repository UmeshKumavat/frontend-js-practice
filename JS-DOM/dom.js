//DOM

//When a web page loads, the browser creates a tree-like representation of the HTML document.

//accessing html elements

// const input = document.getElementById("title");// give single target element
// const btns = document.getElementsByClassName("btn") //gives HTML Collection
// console.log(btns);

//accessing using queryselector()
const titleInput = document.querySelector("#title"); // returns direct target element
const btnsList = document.querySelectorAll(".btn"); //returns NodeList
const passInput = document.querySelector(`[type="number"]`); //returns NodeList
const form = document.querySelector("form");

// console.log(btnsList);
console.log(passInput);
//changing content of html element
const h3 = document.querySelector("h3");
// console.dir(h3);
h3.innerText = "Hello React";
h3.innerHTML = `<span>I am span in side h3</span>`;

//changing style
h3.style.color = "red";
h3.style.backgroundColor = "skyblue";
h3.style.fontSize = "28px";

//creating Element
const p = document.createElement("p");
p.innerText = "New Paragraph added";
h3.append(p);

const paragraph = document.querySelector("p");
console.log(paragraph.innerHTML); //<b>This is a bold text</b>.. give text along with its tag
console.log(paragraph.innerText); //This is a bold text .. gives only text Retrieves only visible text, based on how it is rendered on the page.
console.log(paragraph.textContent); //This is a bold text Retrieves all text, including hidden spaces or text  and non-rendered text. It retrieves all the text, even if the text is hidden via CSS (e.g., display: none).

//deleting child
h3.removeChild(paragraph); //renoves paragraph element

//setAttribute() and getAttribute()

btnsList[0].setAttribute("id", "btn1");
console.log(btnsList[0]);

console.log(btnsList[0].getAttribute("id"));

//classList();

btnsList[1].classList.add("btn2");

//Event listener

//click event
btnsList[0].addEventListener("click", () => {
  alert("Button 1 Clicked");
});

btnsList[0].addEventListener("dblclick", () => {
  alert("Button 1 double Clicked");
});

//mouse event

btnsList[1].addEventListener("mouseenter", () => {
  console.log("Mouse entered on Button 2 ");
});

btnsList[1].addEventListener("mouseleave", () => {
  console.log("Mouse leave on Button 2 ");
});

titleInput.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log(e.code);
});

//form event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(titleInput.value === "" || passInput.value === ""){
    alert("Please fill all fields");
    return
  }
  console.log("Form Submitted");
});

passInput.addEventListener('focus', (e) => {
  console.log("passInput focused");
})

passInput.addEventListener('change', (e) => {
  console.log("passInput changed ", e.target.value);
})

//task-1 -> toggle to dark mode

const toggleBtn = document.querySelector("#toggleBtn");
toggleBtn.addEventListener("click", () => {
  console.log("cliked");
  document.body.classList.toggle("dark");
});

