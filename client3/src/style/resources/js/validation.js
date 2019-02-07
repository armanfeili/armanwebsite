// var x = document.getElementById("#myAge").value;
// var text;

// function validation1(inp) {
//   if (isNaN(inp) || inp < 1 || inp > 10) {
//     text = "Not valid age";
//   } else {
//     text = "valid age";
//   }
//   console.log(text);
// }
// validation1(x);

// console.log(text);

function validation() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("myAge").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 100) {
    text = "Input not valid";
  } else {
    text = "Valid Age";
  }
  console.log(text);
  document.querySelector('.Age-info').textContent = text;
  //   document.getElementById("demo").innerHTML = text;
}

var el = document.getElementById("ewdee");

if (el) {
  el.addEventListener("click", validation, false);
}