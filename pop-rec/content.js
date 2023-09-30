console.log("Hi, I have been injected whoopie!!!")

var recorder = null
function onAccessApproved(stream){
    recorder = new MediaRecorder(stream);

    recorder.start();

    recorder.onstop = function(){
        stream.getTracks().forEach(function(track){
            if(track.readyState === "live"){
                track.stop()
            }
        })
    }

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'hafsat'
          
      },
      body:{
        "video_title": "A title",
    "video_file" :  "<the video file to be uploaded>",
    "deferred": "false"
    }
    };
    

    recorder.ondataavailable = function(event){
        let recordedBlob  = event.data;
        let url = URL.createObjectURL(recordedBlob);

        let a = document.createElement("a");

        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm"

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
        //fetch(`https://chrome-extension-iq7f.onrender.com/upload/`, options)
        fetch(`https://codebee.pythonanywhere.com/api/video/${url}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }
}


chrome.runtime.onMessage.addListener( (message, sender, sendResponse)=>{

    if(message.action === "request_recording"){
        console.log("requesting recording")

        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({
            audio:true,
            video: {
                width:9999999999,
                height: 9999999999
            }
        }).then((stream)=>{
            onAccessApproved(stream)
        })  
    }

    if(message.action === "stopvideo"){
        console.log("stopping video");
        sendResponse(`processed: ${message.action}`);
        if(!recorder) return console.log("no recorder")

        recorder.stop();


    }

})