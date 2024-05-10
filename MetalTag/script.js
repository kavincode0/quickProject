let wrapper = document.querySelector(".wrapper");
let template = document.querySelector("template");

let names = ["Gold", "Silver", "Lead"];
let colors = [
    "#FFD700",
    "#C0C0C0",
    "#CD7F32",
    "#B87333",
    "#B5A642",
    "#DAA520",
    "#E5AA70",
    "#85754E",
    "#848482",
    "#A8A8A8"
];

let sticker = function (name){
    let div = template.content.querySelector("div");
    let nameofStick = div.querySelector(".name");
    
    nameofStick.innerHTML = name;
    
    div.style.background = colors[Math.floor(Math.random()*colors.length)]
    div.style.transform = "rotate(" + (Math.random()*40-20) + "deg)"

    let node = document.importNode(div, true);
    wrapper.appendChild(node)
}

setTimeout(refreshPage, 1000);
function refreshPage(){
    location.reload();
}
names.forEach(sticker);
