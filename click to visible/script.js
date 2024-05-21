const k = document.getElementById("k"); 
const A = document.getElementById("A"); 
const v = document.getElementById("v"); 
const y = document.getElementById("y"); 
const a = document.getElementById("a"); 
const complete = document.getElementById("complete");

k.addEventListener("click", ()=>{
    k.style.display = "none";
    A.style.display = "block";
})

A.addEventListener("click", ()=>{
    A.style.display = "none";
    v.style.display = "block";
})

v.addEventListener("click", ()=>{
    v.style.display = "none";
    y.style.display = "block";
})

y.addEventListener("click", ()=>{
    y.style.display = "none";
    a.style.display = "block";
})

a.addEventListener("click", ()=>{
    a.style.display = "none";
    complete.style.display = "block";
})
