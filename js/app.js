(function() {
    
    document.getElementById("copyright-year").textContent = (new Date()).getFullYear();
    
    let canvas = document.getElementsByTagName("canvas")[0];
    let context = canvas.getContext("2d");
    
    context.fillStyle = "red";
    context.fillRect((canvas.width / 2), (canvas.height / 2) - 20, 20, 20);
    
    // Similar to mouseover
    canvas.addEventListener("mouseenter", function(event) {
        console.log("mouse entered.");
    });
    
    // Similar to mouseleave
    canvas.addEventListener("mouseout", function(event) {
        console.log("mouse exited.");
    });
    
    canvas.addEventListener("mousedown", function(event) {
        console.log("mouse pressed.");
        context.fillStyle = "blue";
        requestAnimationFrame(function() {
            moveBox(event);
        });
        
        context.fillRect(position.x, position.y, 20, 20);
    });
    
    canvas.addEventListener("mouseup", function(event) {
        console.log("mouse released.");
        context.fillStyle = "red";
        requestAnimationFrame(function() {
            moveBox(event);
        });
    });
    
    // On mousedown followed by mouseup
    canvas.addEventListener("click", function(event) {
        console.log("mouse clicked.");
    });
    
    canvas.addEventListener("mousemove", function(event) {
        let position = mousePosition(canvas, event);
        console.log("mouse moved: " + position.x + ", " + position.y);
        
        let display = document.getElementById("position-coordinates");
        
        display.textContent = position.x + ", " + position.y;
        requestAnimationFrame(function() {
            moveBox(event);
        });
    });
    
    function mousePosition(canvas, event) {
        let box = canvas.getBoundingClientRect();
        return {
            x: event.clientX - box.left,
            y: event.clientY - box.top
        };
    }
    
    function moveBox(event) {
        let position = mousePosition(canvas, event);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(position.x, position.y, 20, 20);
    }
}());