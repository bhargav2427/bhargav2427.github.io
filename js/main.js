// function myFunction() {
//   var button = document.getElementById("more");
//   var moreproject = document.getElementById("more-projects");
//   console.log("Hello");
//   console.log(button.innerHTML);
//   if (button.innerHTML === "More") {
//     moreproject.style.display = "block";
//     button.innerHTML = "Less";
//   } else {
//     moreproject.style.display = "none";
//     button.innerHTML = "More";
//   }
// }
console.log(typeof window.screen.width);
if (window.screen.width < 768) {
  var x = document.querySelectorAll(".columns.mt-6");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("mt-6");
  }
}
