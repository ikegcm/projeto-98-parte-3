var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    setTimeout (function()
    {

       imgId = "selfiel"
       takeSelfie();
       speakData = "Tirando sua selfie em 10 segundos";
       var utterThis = new SpeechSynthesisUtterance(speakData)
       synth.speak(utterThis);

    }, 5000);


    setTimeout (function()
    {

       imgId = "selfiel1"
       takeSelfie();
       speakData = "Tirando sua selfie em 10 segundos";
       var utterThis = new SpeechSynthesisUtterance(speakData)
       synth.speak(utterThis);

    }, 5000);

    setTimeout (function()
    {

       imgId = "selfie2"
       takeSelfie();
       speakData = "Tirando sua selfie em 10 segundos";
       var utterThis = new SpeechSynthesisUtterance(speakData)
       synth.speak(utterThis);

    }, 5000);

    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);


}

function takeSelfie()
{
    console.log(imgId);

    Webcam.snap(function(data_uri) {
        if(imgId=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id= "selfiel"  src="'+data_uri+'"/>';
        }
        if(imgId=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id= "selfie2"  src="'+data_uri+'"/>';
        }
        if(imgId=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id= "selfie3"  src="'+data_uri+'"/>';
        }
    

    });
    
}
