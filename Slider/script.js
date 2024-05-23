const body = document.body;
const range = document.getElementById("_range");
const rangeVal = document.getElementById("rangeVal")

function updateStyle(){
    const value = Number(rangeVal.innerText);
    if(value>=90){
        applyStyle("black", "red")
    }
    else if(value>=70){
        applyStyle("black", "orange")
    }
    else if(value>=50){
        applyStyle("black", "yellow")
    }
    else if(value>=30){
        applyStyle("red", "green")
    }
    else if(value>=10){
        applyStyle("red", "blue")
    }
    else if(value>=1){
        applyStyle("red", "purple")
    }
    else if(value === 0){
        applyStyle("red", "black")
    }
}

function applyStyle(color, bgcolor){
    rangeVal.style.color = color;
    body.style.backgroundColor = bgcolor;
}


range.addEventListener("input", function(){

    const sliderVal = Math.min(this.value, 100);
    rangeVal.innerText = sliderVal;

    updateStyle();

});