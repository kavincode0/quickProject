function convertTemperature(){
    const cel = document.getElementById("celsius")
    const fah = document.getElementById("fahrenheit")

    if(!isNaN(cel.value)){
        const cels = parseFloat(cel.value);
        const fahs = (cels * 9/5) + 32;

        fah.value = fahs.toFixed(2);
    }
    else if(!isNaN(fah.value)){
        const fahs = fah.value;
        const cels = (fahs - 32) * 5/9;

        cel.value = cels.toFixed(2);
    }

    else{
        alert("enter a valid number")
    }

}