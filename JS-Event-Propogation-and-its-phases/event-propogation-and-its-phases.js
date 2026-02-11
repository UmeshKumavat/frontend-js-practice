//Event Propogation -> When we click on any element and if it triggers an event then event travel through the Whole DOM Tree

const grandParent = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//Phase 1:- Event Bubbling Phase -> event travel from child to parent
grandParent.addEventListener("click", (e) => {
  console.log("Grand Parent clicked");
});
parent.addEventListener("click", (e) => {
  console.log("Parent clicked");
});
// child.addEventListener("click", (e) => {
//   console.log("Child clicked");
// })

//Output :- Child Clicked -> Parent clicked -> Grand Parent clicked

//Phase 2:- Event Capturing Phase -> event travel from Parent to Child
// grandParent.addEventListener("click", (e) => {
//   console.log("Grand Parent clicked");
// },true)
// parent.addEventListener("click", (e) => {
//   console.log("Parent clicked");
// }, true)
// child.addEventListener("click", (e) => {
//   console.log("Child clicked");
// })

//Output :-  Grand Parent clicked -> Parent clicked -> Child Clicked

//to stop propogation

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});

//Event Delegation -> instead of adding multiple event listener on multiple child element add single event listener on single parent element

const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.tagName === "LI") {
    e.target.innerText = "Clicked";
  }
});
