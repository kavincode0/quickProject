const btn = document.querySelector(".togglebtn");
const links = document.querySelector(".links");

btn.addEventListener("click", ()=>{
    if(links.classList.contains("active")){
        links.classList.remove("active");
    }
    else{
        links.classList.add("active");
    }
})