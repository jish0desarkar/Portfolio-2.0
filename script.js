function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("nav").classList.add("nav-bar-sm");
    document.getElementById("dropdown").classList.remove("nav-bar-sm");
    document.getElementById("footer").classList.add("footer-sm");
  }
  else{
    document.getElementById("nav").classList.remove("nav-bar-sm");
    document.getElementById("dropdown").classList.add("nav-bar-sm");
    document.getElementById("footer").classList.remove("footer-sm");
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
