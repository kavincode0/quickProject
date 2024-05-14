
const prev = document.getElementById("previous")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let page = 0;

function mainCode(){

    circles.forEach((circles, index)=>{
        if(index == page){
            circles.classList.add("active");
        }
        else{
            circles.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")
    
    if(page === 0){
        prev.disabled = true;
    }
    else if(page === circles.length-1){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}

next.addEventListener("click", ()=>{

    page++
    if(page > circles.length-1){
        page = circles.length-1;
    }
    mainCode();
})

prev.addEventListener("click", ()=>{

    page--
    if(page < 0){
        page = 0;
    }
    mainCode();
})

prev.disabled = true;