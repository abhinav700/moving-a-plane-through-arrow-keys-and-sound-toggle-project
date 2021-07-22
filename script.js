let plane = document.querySelector(".plane");
let track = document.querySelector(".track");
plane.style.pos = "absolute";
plane.style.top = "30%";
track.style.pos = "relatiev";
track.style.top = "77%";
 track.style.left = "-50%";
 plane.style.left="0%";
btn=document.querySelector('.button');
let mute=document.querySelector('.mute')
var audio = document.createElement('audio');
audio.setAttribute('src','bgmusic.mp3');
mute.setAttribute('src','bgmusic.mp3');
btn.style.display="none";

let noaudio=true;
if(noaudio)
{
  mute.addEventListener("click",()=>{
   audio.loop=true;
      let promise=audio.play();
      if (promise !== undefined) {
        promise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
        
        audio.muted=false;
        btn.style.display="block";
        mute.style.display="none";
      }
  });
  noaudio=false;
}
//if i replace this by else instead of if,it does not get executed
if(noaudio==false){
  btn.addEventListener("click",()=>{
    
   
    
      btn.style.display="none";
      mute.style.display="block";
      audio.pause();
      
    });
    noaudio=true;
    
}

let moveby = 1.8;

  
  let check=1;
  document.addEventListener("keydown", (e) => {
    
  switch (e.key) {
   
   //arrow left and arrow right events are not working
    case 'ArrowLeft':
      if(plane.style.left>="0%")
      {
        plane.style.left=parseInt(plane.style.left)-moveby+"%";
      }
      track.style.left = parseInt(track.style.left) +moveby + "%";
      break;
      
      case 'ArrowRight':
        if(plane.style.left!="100%")
      {
        plane.style.left=parseInt(plane.style.left)+moveby+"%";
      }
      if(plane.style.left>=1){
        plane.style.left="-5%";
      }
        track.style.left = parseInt(track.style.left) - moveby + "%";
        break;
        
        case 'ArrowUp': 
        
       plane.style.top= parseInt(plane.style.top) - moveby + "%";
        break;
        
        case 'ArrowDown':
          plane.style.top = parseInt(plane.style.top) + moveby + "%";
          break;
  }
});
