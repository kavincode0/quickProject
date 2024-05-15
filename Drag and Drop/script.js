function drag(){

    let dragging = false;
    let mouseX, mouseY;
    let eleX, eleY;

    const boxes = document.querySelectorAll("[draggable]")

    boxes.forEach(box=>{
        box.addEventListener('mousedown', mouseDown)
        box.style.top = 0;
        box.style.left = 0;
    })

    function mouseDown(e){
        e.preventDefault();

        dragging = this;

        mouseX = e.pageX;
        mouseY = e.pageY;

        elex = Number.parseInt(dragging.style.left);
        eleY = Number.parseInt(dragging.style.top);

        document.addEventListener("mousemove", mouseMove)
        document.addEventListener("mouseup", mouseUp)
    }

    function mouseMove(e){
        if(dragging){
            const amouseX = e.pageX - mouseX
            const amouseY = e.pageY - mouseY

            dragging.style.left = amouseX + eleX + 'px'
            dragging.style.top = amouseY + eleY + 'px'

        }
    }

    function mouseUp(e){
        dragging = false;
    }

}

drag();