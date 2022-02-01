function myFunction() {
  const x = document.getElementById("topNav");
  if (x.className === "container") {
    x.className += "responsive";
  } else {
    x.className = "container";
  }
}
