import { useState } from 'react'
import { useReactMediaRecorder} from 'react-media-recorder'
import React from 'react'
import './App.css'
import './popup.css'
function App() {
 // const [count, setCount] = useState(0)
 
 const { status, onStop, onStart, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

    const handlestart = async onStart => {
      let [tab] =   await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab.url?.startsWith("chrome://")) return undefined;
    
      chrome.scripting.executeScript ({
        target: { tabId: tab.id },
        func: () =>{
          startRecording
          alert('hello world');
          document.body.style.backgroundColor ='red';
      }
      });
     } 
     const options = {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization: 'hafsat'
      }
  };
  
React.useEffect(() =>
{fetch("https://mbakara-chrome-extension-backend.onrender.com/videos/", options)
.then(res => res.json())
.then(data => console.log(data))}, [])

  return (
    <>
      <div className='popup-container'>
        <div className='top-bar'>
        <h4>HelpMeOut</h4>
        <p>s</p>
        <button>x</button>
        </div>
        <p>This extension helps you record and share help videos with ease.</p>
     
        <div>
          <div className='choose-media'>
           <div  className='choose-icons'><div><p>Camera</p></div> <span>on</span></div>
           <div  className='choose-icons'><div><p>Audio</p></div><span>on</span></div>
          </div>
          <div>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          </div>
         
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
     
      </div>
     
       
    </>
  )
}

export default App
