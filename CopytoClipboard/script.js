const heading = document.getElementById("copytext");
const btn = document.getElementById("copy")
var para = document.getElementById("message")

function copytoClipboard(element){

    navigator.clipboard.writeText(element.textContent).then(()=>{
        para.textContent = "Copied"
        para.classList.add("afterclick")
    })
}

btn.addEventListener("click", ()=>copytoClipboard(heading))