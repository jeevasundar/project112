Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:100
})

camera=document.getElementById("camera");
Webcam.attach("#camera");

//function atke snapshot//

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/o5iZITRdC/",modelLoaded);
