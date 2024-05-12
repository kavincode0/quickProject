const text = document.getElementById("text");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

const alphaSpan = document.querySelectorAll("span");

alphaSpan.forEach(span=>{
    span.addEventListener("mouseenter", ()=>{
        span.classList.add("active");
        setTimeout(()=>{
            span.classList.remove("active");
        }, 1000)
    });
})