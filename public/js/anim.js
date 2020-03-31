
spawnedShapes = [];

function onKeyDown(event) {
    canvasSize = {
        x: paper.view.size._width,
        y: paper.view.size._height
    };    
    randomPoint = new Point(canvasSize.x * Math.random(), canvasSize.y * Math.random());
    circle = new Path.Circle(randomPoint, 500);
    circle.fillColor = "blue";
    spawnedShapes.push(circle);
}

function onFrame(event) {
	for (var i = 0; i < spawnedShapes.length; i++) {
        spawnAnimation(spawnedShapes[i]);
    }
}

function spawnAnimation(circle) {
    circle.fillColor.hue += 1;
    circle.scale(0.99);
}