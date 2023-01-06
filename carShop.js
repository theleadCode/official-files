// for navbar
const menu = document.querySelector("#mobile-menu");
const menuLink = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-links");
var html = document.documentElement;
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLink.classList.toggle("active");
});
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuLink.classList.remove("active");
  });
});

// Add active class to the current control button(tab in right panel) (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
var tabSelection = "all";
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// for model list to highlight the current control
var listContainer = document.getElementById("list-container");
var list = listContainer.getElementsByClassName("model");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activemodel");
    current[0].className = current[0].className.replace(" activemodel", "");
    this.className += " activemodel";
  });
}

var model = null;
var numberOfModels = document.querySelectorAll(".model").length;

// for initially showing all the models
filterSelection(tabSelection);

// for checking if any model has been selected
for (var i = 0; i < numberOfModels; i++) {
  document.querySelectorAll(".model")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    // for removing spaces between the model name as in the right panel we have to add the model name as the class name(i.e. without spaces)
    model = buttonInnerHTML.split(" ").join("");
    if (model == "All") {
      model = "filterDiv";
    }
    filterSelection(tabSelection);
  });
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (model) {
    // we hide all the previously selected parts here, because in the starting we had done filterSelection("all") and now we have selected model so we have to remove the previously selected parts
    for (i = 0; i < x.length; i++) {
      hideNonSelectedElems(x[i], "show");
    }
  }
  if (model !== null) {
    x = document.getElementsByClassName(model);
  }
  //
  tabSelection = c;
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    hideNonSelectedElems(x[i], "show");
    if (x[i].className.indexOf(c) > -1) showFilteredElems(x[i], "show");
  }
}

// Show filtered elements
function showFilteredElems(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function hideNonSelectedElems(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// for cart
function closeCart() {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  // so that if checkout model it is automatically closed if cart is closed
  payment.style.display = "none";
  document.querySelector("body").classList.toggle("stopScrolling");
}

const openShopCart = document.querySelector(".shoppingCartButton");
openShopCart.addEventListener("click", () => {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
});

const closeShopCart = document.querySelector("#closeButton");
const overlay = document.querySelector(".overlay");
closeShopCart.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

// for payment
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// for chat message
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
