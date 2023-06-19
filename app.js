const menu = document.querySelector(".dropdown-menu");
const dropdownBtn = document.getElementById("dropdown-button");
dropdownBtn.addEventListener("mouseenter", () => {
  menu.style.height = "auto";
});
menu.addEventListener("mouseenter", () => {
  menu.style.height = "auto";
});

menu.addEventListener("mouseleave", () => {
  menu.style.height = "0";
});
dropdownBtn.addEventListener("mouseleave", () => {
  menu.style.height = "0";
});

// ================================

// Assignment #1
function all(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

// testcase

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven); // false

var allAreLessThanSeven = all([1, 2, 6], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven); // true

// assighnment 2

function contains(obj, value) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      if (contains(obj[key], value)) {
        return true;
      }
    } else if (obj[key] === value) {
      return true;
    }
  }
  return false;
}
