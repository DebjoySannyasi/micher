noseX=0;
noseY=0


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log('poseNet Is Intitialized');
}

function gotPoses(results)
{
    if(resul.length > 0)
    {
        console.log(result);
        noseX = results[0].poseNet.nose.x-15;
        noseY = results[0].poseNet.nose.y-15;
        
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}



function take_snapshot(){
    save('myFilterImage.png');
}


