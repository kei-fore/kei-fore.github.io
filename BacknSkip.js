var addscript = document.createElement("script");
addscript.setAttribute("src", "https://kit.fontawesome.com/8d8a2a657a.js");
addscript.setAttribute("crossorigin", "anonymous");
document.getElementsByTagName("head")[0].appendChild(addscript);

let target = document.getElementById("video_player");

var goback = function(){var target=document.querySelectorAll('video');for (var video of target){video.currentTime -= 15;}};
var goforward = function(){var target=document.querySelectorAll('video');for (var video of target){video.currentTime += 15;}};
var speedup = function(){var target=document.querySelectorAll('video');for (var video of target){video.playbackRate += 0.1;}};
var speedown = function(){var target=document.querySelectorAll('video');for (var video of target){video.playbackRate -= 0.1;}};
var resetspeed = function(){var target=document.querySelectorAll('video');for (var video of target){video.playbackRate = 1.0;}};

target.insertAdjacentHTML("afterend","<link rel='stylesheet' type='text/css' href='BacknSkipCSS.css'><input type='button' value='&#xf048; 15' id='goback' onclick='goback();'/><input type='button' value='&#xf051; 15' id='goforward' onclick='goforward();'/><input type='button' value='&#xf04a; 0.1' id='speedup' onclick='speedown();'/><input type='button' value='&#xf04e; 0.1' id='speedup' onclick='speedup();'/><input type='button' value='&#xf0e2; Reset' id='resetspeed' onclick='resetspeed();'/>");
