//Local-Storage -> it stores data in client browser side and stores data in string formate not in object. Data remains as it is in event if tab or browser is closed.

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const submitBtn = document.querySelector(".submit_btn");

nameInput.addEventListener("input", (e) => {
  localStorage.setItem("username", e.target.value);
});

ageInput.addEventListener("input", (e) => {
  localStorage.setItem("age", e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    `Name: ${localStorage.getItem("username")}, age: ${localStorage.getItem("age")}`,
  );
});

localStorage.removeItem("username"); //removes the item based on key from the local-storage

localStorage.clear(); //remove all field from the localstorage

//-----------***************------------


//Session-Storage -> data remains as it is untill client closes the tab

sessionStorage.setItem("name", "umesh");
sessionStorage.setItem("age", 21);
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("age"));

// sessionStorage.removeItem("name");

// sessionStorage.clear();

//example:- when page loads theme should be dark

localStorage.setItem("theme", "dark");

let savedTheme = localStorage.getItem('theme')

if(savedTheme === 'dark'){
  document.body.classList.add('dark')
}
