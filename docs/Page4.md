text1

<iframe  id="fullscreen" width="720" height="400" scrolling="no" src="https://sensn.github.io/DigitalGarden/webmidi/" style="border: 1px solid #464646;" allowfullscreen=""  data-external="1"></iframe>

<div id="fullscreen1">

<svg xmlns="http://www.w3.org/2000/svg" id="fullscreen-trigger" width="16" height="16" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16">
  <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
</svg>

<!-- partial:index.partial.html -->
<div id="fullscreen-trigger1">Go Fullscreen</div>

<div id="fullscreen1"></div>

<!-- partial -->
<script>
// DEMO FOR:
// http://stackoverflow.com/questions/8358196/onfullscreenchange-dom-event

var target = document.getElementById("fullscreen");
var trigger = document.getElementById("fullscreen-trigger");

trigger.addEventListener("click", function () {
	if (target.requestFullscreen) target.requestFullscreen();
  else if (target.msRequestFullscreen) target.msRequestFullscreen();
  else if (target.mozRequestFullScreen) target.mozRequestFullScreen();
  else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
});

function onFullScreenChange () {
	var fullScreenElement =
		document.fullscreenElement ||
		document.msFullscreenElement ||
		document.mozFullScreenElement ||
		document.webkitFullscreenElement;
	console.log("Is fullscreen:", !!fullScreenElement);
};

if (document.onfullscreenchange === null)
	document.onfullscreenchange = onFullScreenChange;
else if (document.onmsfullscreenchange === null)
	document.onmsfullscreenchange = onFullScreenChange;
else if (document.onmozfullscreenchange === null)
	document.onmozfullscreenchange = onFullScreenChange;
else if (document.onwebkitfullscreenchange === null)
	document.onwebkitfullscreenchange = onFullScreenChange;
 </script>


