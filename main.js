function preload() {}

function setup() {
    canvas = createCanvas(700, 450);
    canvas.parent('canvas_holder');
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0,0,700,450)
    fill('coral');
            // var txt = objects[i].label;
            // text(txt, objects[i].x + 10, objects[i].y +10);
            // noFill();
            // stroke('coral')
            // rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            // strokeWeight(2)
            // rect(objects[i].x+10, objects[i].y+18, 100, 20, 20)
            // var accuracy = floor(objects[i].confidence * 100);
            // rect(objects[i].x+10, objects[i].y+18, 100, 20, 20)
            // fill('coral')
            // rect(objects[i].x+10, objects[i].y+18, accuracy, 20, 20, 0, 0, 20)
            // fill('#fff')
            // text(String(accuracy)+'%', objects[i].x+20, objects[i].y+28)
}

function search() {
    detector.detect(video, gotResults);
}

function modelLoaded() {
    console.log('Modal initialized.')
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
    }
}