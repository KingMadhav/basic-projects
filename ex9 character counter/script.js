let num= document.querySelector("#number");
let textarea=document.querySelector("#textarea");
let text;

textarea.addEventListener("input",function(){
    text=textarea.value.length;
    num.textContent=text;
})
