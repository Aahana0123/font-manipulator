difference = 0;
leftWristx=0;
rightWristx=0;

function preload(){

}

function setup(){
canvas=createCanvas(750 , 420);
canvas.position(580 , 130);
video=createCapture(VIDEO);
video.size(500 , 500);
posenet=ml5.poseNet(video , modelLoaded);
posenet.on("pose",gotPoses );
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}

function modelLoaded(){
    console.log("Model Is Loaded!");
}

function draw(){
    background("rgb(160, 231, 160)");
fill("green");
stroke("black");
textSize(difference);
text("Science Exhibition On 5th April" , 60 , 100);
}
