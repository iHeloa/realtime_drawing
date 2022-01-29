noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Intialized!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.x;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(rightWristX-leftWristX);
    }
}

function draw(){
    background("#40e0d0");
    fill('#ff0000');
    stroke('#ffb6c1');
    square(noseX,noseY,difference);
}