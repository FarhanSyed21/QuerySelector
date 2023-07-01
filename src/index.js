// const thirdElement = document
//   .getElementById("myList")
//   .getElementsByTagName("li")[2];

// thirdElement.style.backgroundColor = "green";

// const listElements = document
//   .getElementById("myList")
//   .getElementsByTagName("li");

// for (let i = 0; i < listElements.length; i++) {
//   listElements[i].style.fontWeight = "bold";
//   listElements[i].style.color = "black";
// }

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.style.color = "green";

const thirdItem = document.querySelector("li:nth-child(3)");
thirdItem.style.display = "none";
