//your JS code here. If required.
const playSound = (event) => {
  const targetFile = event.target.innerText;
  const soundElement = document.getElementById("soundSource");
  soundElement.setAttribute("src", `./sounds/${targetFile}.mp3`);
  soundElement.load();
  soundElement.play();
};

const stopSound=()=>{
   const soundElement = document.getElementById("soundSource");
  soundElement.pause();
}
