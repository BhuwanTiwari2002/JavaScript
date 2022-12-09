"use strict";
const youtubeLink = document.getElementById("YoutubeLink");
const submit = document.getElementById("submit");

submit.onclick = function()
{
    try{
        let iframe = document.createElement("iframe");
        iframe.src = "https://convert2mp3s.com/api/single/mp3?url=" + youtubeLink.value;
        console.log(youtubeLink.value);
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.allowtransparency="true";
        iframe.id = "buttonApi";
        document.getElementById("VideoPreview").appendChild(iframe);
    } catch {

    }


    
   
}; 

