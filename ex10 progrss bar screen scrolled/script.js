let nav  = document.querySelector(".nav");
let progress = document.querySelector(".progress");
let body =  document.querySelector("body");

// Gets the full height of the document, including the part that's not visible due to scrolling.
let scrollHeight = document.documentElement.scrollHeight;
// viewportHeight: The height of the visible part of the window (the viewport).
let viewportHeight = window.innerHeight;

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollPercentage = (scrollTop / (scrollHeight - viewportHeight)) * 100;
    progress.style.width = scrollPercentage + "%";
})