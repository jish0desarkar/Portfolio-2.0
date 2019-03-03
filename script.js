function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("nav").classList.add("nav-bar-sm");
    document.getElementById("dropdown").classList.remove("nav-bar-sm");
    console.log("adssdf");
  }
  else{
    document.getElementById("nav").classList.remove("nav-bar-sm");
    document.getElementById("dropdown").classList.add("nav-bar-sm");
    console.log("gfgfgfg0");
  }
}

var x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
