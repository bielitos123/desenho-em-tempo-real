noseX=0;

noseY=0;

diference=0;

pulsodireitoX=0;

pulsoesquerdoX=0;

function setup(){
    var video = createCapture(VIDEO);
    video.size(550, 500);
    var canvas = createCanvas(550, 500);
    canvas.position (560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("modelo foi inicializado");

}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("narizX=" + noseX +"narizY=" + noseY);
        pulsodireitoX=results[0].pose.rightWrist.x;
        pulsoesquerdoX=results[0].pose.leftWrist.x;

        diference= floor( pulsoesquerdoX-pulsodireitoX);
    
    }

}

function draw()
{
    background("#1c4966");
    document.getElementById("square").innerHTML=" largura e altura serão="+ diference + "px";
    fill("#ff4760");
    stroke("#235347");
    square(noseX,noseY,diference);
}


