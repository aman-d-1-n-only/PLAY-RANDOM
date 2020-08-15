var newCircle = new Path.Circle({
    center: view.center,
    radius: 70,
    fillColor: 'red'
});

function onFrame(event) {
    console.log(newCircle);
    newCircle.fillColor.hue += 1;
}