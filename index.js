//Exercise 7 Write a function to change the h1 text to something else

function changeHeading() {
  // const someHeading = document.getElementsByTagName("h1");
  let someHeading = document.getElementById("heading");
  someHeading.innerHTML = "I've changed the heading";
}

//Exercise 8 Write a function to change the page background color

function changeBackgroundColor() {
  document.body.style.backgroundColor = "#c0d7ff";
}

//Exercise 9 Write a function to change the footer address with a fake one

function changeFooter() {
  let footerAddress = document.querySelector("footer > div:nth-child(2)");
  footerAddress.innerHTML = "Some place in Romania";
}

//Exercise 10 Write a function to add a CSS class to every Amazon link

function addNewClass() {
  let allA = document.querySelectorAll("a");
  for (let el of allA) {
    el.classList.add("newClass");
  }
}

//Exercise 11 Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function changeVisibility() {
  let allImg = document.querySelectorAll("img");
  for (let i = 0; i < allImg.length; i++) {
    allImg[i].classList.toggle("visibilityClass");
  }
}

//Exercise 12 Write a function to color the price of the products in a different one every time it’s invoked

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
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
