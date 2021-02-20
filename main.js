var object = {};

function preload() { }

function setup() {
    canvas = createCanvas(700, 450);
    canvas.parent('canvas_holder');
    video = createCapture(VIDEO);
    video.hide();
    detector = ml5.objectDetector('cocossd', modelLoaded)
}

function draw() {
    if (object != {}) {
        image(video, 0, 0, 700, 450)
        fill('coral');
        var txt = object.label;
        text(txt, object.x + 10, object.y + 10);
        noFill();
        stroke('coral')
        rect(object.x, object.y, object.width, object.height)
        strokeWeight(2)
        rect(object.x + 10, object.y + 18, 100, 20, 20)
        var accuracy = floor(object.confidence * 100);
        rect(object.x + 10, object.y + 18, 100, 20, 20)
        fill('coral')
        rect(object.x + 10, object.y + 18, accuracy, 20, 20, 0, 0, 20)
        fill('#fff')
        text(String(accuracy) + '%', object.x + 20, object.y + 28)
    }
}

function search() {
    detector.detect(video, gotResults);
}

function modelLoaded() {
    console.log('Modal initialized.')
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        for (let j = 0; j < results.length; j++) {
            if (results[j] == document.getElementById('search_box').value) {

                if (j = results.length - 1) {
                    object = results[j];
                    break;
                } else {
                    if(results[j] == document.getElementById('search_box').value) {
                        object = results[j];
                    break;
                    } else {
                        document.getElementById('status').innerHTML = 'Object not Found.'
                    }
                }
            }
        }
    }
}