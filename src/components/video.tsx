import { Component, onMount } from "solid-js";

const Video: Component = () => {
    let output: HTMLVideoElement;
  
    onMount(async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
  
      output.srcObject = stream;
    });
  
    return (
      <div class="bg-black min-h-screen">
        <video class="h-screen w-screen object-cover" ref={output} autoplay></video>
      </div>
    );
  };
  
  export default Video;