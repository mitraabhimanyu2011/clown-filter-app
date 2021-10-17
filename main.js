noseX = 0;
noseY = 0;
leftEarX = 0;
leftEarY = 0;
rightEarX = 0;
rightEarY = 0;

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/26033n0h/nose.png");
    clown_hair = loadImage("https://i.postimg.cc/xdC1hXfd/hair.png");
}

function setup()
{
    canvas = createCanvas(300, 300, 1000, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX - 25, noseY - 25, 50, 50);
    image(clown_hair, noseX - 50, noseY - 112.5, 100, 100);
}

function take_snapshot()
{
    save("myFilterImage.png");
}

function modelLoaded()
{
    console.log("PoseNet has been successfully initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("The X coordinate of the nose is: " + noseX);
        console.log("The Y coordinate of the nose is: " + noseY);
        leftEarX = results[0].pose.leftEar.x;
        leftEarY = results[0].pose.leftEar.y - 20;
        console.log("The X coordinate of the left ear is: " + leftEarX);
        console.log("The Y coordinate of the left ear is: " + leftEarY);
        rightEarX = results[0].pose.leftEar.x;
        rightEarY = results[0].pose.leftEar.y - 20;
        console.log("The X coordinate of the right ear is: " + rightEarX);
        console.log("The Y coordinate of the right ear is: " + rightEarY);
    }
}