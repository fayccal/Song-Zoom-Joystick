let page=document.body;
let file="cheer.mp3";
let typage="audio/mpeg";
let audio = document.createElement("audio");
audio.setAttribute("controls","yes");
audio.setAttribute("id","music");
let source =document.createElement("source");
audio.appendChild(source);
source.setAttribute("src",file);
source.setAttribute("type",typage);

let MyMusic=document.getElementById("music");
const play=() =>{MyMusic.play();}
const pause=() =>{MyMusic.pause();}
let bouton=document.createElement("button");
bouton.setAttribute("onclick","play()");
bouton.setAttribute("type","button");

let bouton2=document.createElement("button");
bouton2.setAttribute("onclick","pause()");
bouton2.setAttribute("type","button");

bouton.innerHTML="play";
bouton2.innerHTML="pause";
page.appendChild(audio);
page.appendChild(bouton);
page.appendChild(bouton2);

