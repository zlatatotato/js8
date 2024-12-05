"use strict";

document.getElementById("clickButton").addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
    setTimeout(() => (this.style.backgroundColor = ""), 500);
});

document.getElementById("hoverButton").addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightblue";
});
document.getElementById("hoverButton").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
});

document.getElementById("dblClickButton").addEventListener("dblclick", function () {
    this.style.backgroundColor = "lightgreen";
    setTimeout(() => (this.style.backgroundColor = ""), 500);
});

const colorArea = document.getElementById("colorArea");

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    if (key === "r") {
        colorArea.style.backgroundColor = "red";
    } else if (key === "g") {
        colorArea.style.backgroundColor = "green";
    } else if (key === "b") {
        colorArea.style.backgroundColor = "blue";
    }
});

document.addEventListener("keyup", function () {
    colorArea.style.backgroundColor = "white";
});