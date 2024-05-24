const testimonials = [
    {
        name: "Jim",
        position: "Texan Pvt. Ltd",
        image: "https://media.istockphoto.com/id/1273457744/vector/graduate-line-outline-icon-or-graduation-sign.jpg?s=1024x1024&w=is&k=20&c=igsh6aRSqZEuMxoojqc6he3WLC_VX4BdnisjoX-KWto=",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur delectus enim itaque quos. Nobis, eius, architecto, veniam quo iusto expedita in reprehenderit natus suscipit laboriosam autem minus dicta pariatur?`
    },
    {
        name: "Dennis",
        position: "Hexagon corp.",
        image: "https://media.istockphoto.com/id/1273457744/vector/graduate-line-outline-icon-or-graduation-sign.jpg?s=1024x1024&w=is&k=20&c=igsh6aRSqZEuMxoojqc6he3WLC_VX4BdnisjoX-KWto=",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur delectus enim itaque quos. Nobis, eius, architecto, veniam quo iusto expedita in reprehenderit natus suscipit laboriosam autem minus dicta pariatur?`
    },
    {
        name: "Henry",
        position: "Sturdy app",
        image: "https://media.istockphoto.com/id/1273457744/vector/graduate-line-outline-icon-or-graduation-sign.jpg?s=1024x1024&w=is&k=20&c=igsh6aRSqZEuMxoojqc6he3WLC_VX4BdnisjoX-KWto=",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur delectus enim itaque quos. Nobis, eius, architecto, veniam quo iusto expedita in reprehenderit natus suscipit laboriosam autem minus dicta pariatur?`
    },
    {
        name: "Min-Min",
        position: "XingXang Pvt. Ltd",
        image: "https://media.istockphoto.com/id/1273457744/vector/graduate-line-outline-icon-or-graduation-sign.jpg?s=1024x1024&w=is&k=20&c=igsh6aRSqZEuMxoojqc6he3WLC_VX4BdnisjoX-KWto=",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur delectus enim itaque quos. Nobis, eius, architecto, veniam quo iusto expedita in reprehenderit natus suscipit laboriosam autem minus dicta pariatur?`
    },

]

const tcont = document.getElementById("_container");
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let currentIndex = 0;

function showT(){
    const testimonial = testimonials[currentIndex];
    tcont.innerHTML = `
    <img src = "${testimonial.image}" />
    <h3>${testimonial.name}</h3>
    <h6>${testimonial.position}</h6>
    <p>${testimonial.description}</p>
    `
}

function changeT(direction){
    currentIndex += direction;
    if(currentIndex<0){
        currentIndex = testimonials.length - 1;
    }
    else if(currentIndex >= testimonials.length){
        currentIndex = 0;
    }

    showT();
}

prev.addEventListener("click", ()=>changeT(-1));
next.addEventListener("click", ()=>changeT(1));

showT();
