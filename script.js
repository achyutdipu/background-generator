const modified = document.createElement("p");
const background = document.getElementById("background");
const buttons = Array.prototype.slice.call(document.getElementsByClassName("button"));
const screenHeight = screen.availHeight;
const screenWidth = screen.availWidth;
modified.innerHTML = "This page was last modified on: " + document.lastModified;
background.style.backgroundcolor = "red";
console.log(typeof buttons, buttons.length, buttons[0], buttons);
buttons.forEach(element => {
    console.log([screenWidth - element.offsetWidth, screenHeight - element.offsetHeight]);
    element.style.marginLeft = String(screenWidth - element.offsetWidth);
    element.style.marginTop = String(screenHeight - element.offsetHeight);
});