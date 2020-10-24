function toggleExpand(){
  if(document.getElementById("announcements").getAttribute("aria-expanded") === "false"){
    document.getElementById("announcements").setAttribute("aria-expanded", "true");
    document.getElementById("more-less").innerHTML = "<img src='./pointer.svg' id='up'/>Less"
    document.querySelector("#up").style.transform = 'rotate(' + 180 + 'deg)';
    console.log("expanded");
    document.getElementById("announcements-hidden").setAttribute("aria-hidden", "false");
  } else {
    document.getElementById("announcements").setAttribute("aria-expanded", "false");
    document.getElementById("announcements-hidden").setAttribute("aria-hidden", "true");
    document.getElementById("more-less").innerHTML = "<img src='./pointer.svg'/> More"
    console.log("collapsed");
  }
}

function toggleMenu() {
  if(document.getElementById("mobile-menu-hidden").getAttribute("aria-expanded") === "false"){
    document.getElementById("mobile-menu-hidden").setAttribute("aria-expanded", "true");
    document.getElementById("mobile-menu-button").innerHTML = "Close <img src='./burger-menu.svg' alt='Hamburger menu in purple'/>"
    console.log("expanded");
    document.getElementById("mobile-menu-hidden").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  } else {
    document.getElementById("mobile-menu-hidden").setAttribute("aria-expanded", "false");
    document.getElementById("mobile-menu-hidden").setAttribute("aria-hidden", "true");
    document.getElementById("mobile-menu-button").innerHTML = "Menu <img src='./burger-menu.svg' alt='Hamburger menu in purple'/>"
    console.log("collapsed");
    document.body.style.overflow = "visible";
  }
}
