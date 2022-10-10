//Exercise 7

function changeHeading() {
  // const someHeading = document.getElementsByTagName("h1");
  let someHeading = document.getElementById("heading");
  someHeading.innerHTML = "I've changed the heading";
}

//Exercise 8

function changeBackgroundColor() {
  document.body.style.backgroundColor = "#c0d7ff";
}

//Exercise 9

function changeFooter() {
  let footerAddress = document.querySelector("footer > div:nth-child(2)");
  footerAddress.innerHTML = "Some place in Romania";
}

//Exercise 10

function addNewClass() {
  let allA = document.querySelectorAll("a");
  for (let el of allA) {
    el.classList.add("newClass");
  }
}

//Exercise 11

function changeVisibility() {
  let allImg = document.querySelectorAll("img");
  for (let i = 0; i < allImg.length; i++) {
    allImg[i].classList.toggle("visibilityClass");
  }
}

//Exercise 12

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changePriceColor() {
  let allPrices = document.querySelectorAll(".price");
  for (let i = 0; i < allPrices.length; i++) {
    let randomColor = getRandomColor();
    allPrices[i].style.color = randomColor;
  }
}
