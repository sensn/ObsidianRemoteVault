---
share: true
---
THIS is my Index.!????!!!223355

https://suragch.medium.com/working-with-bytes-in-dart-6ece83455721

> [!AI]-  Artyfish
> Fishers art

- link
- [[Page1]]
- ![[Page2]]
- 
<iframe width="720" height="400" scrolling="no" src="https://sensn.github.io/DigitalGarden/lib/index.html"></iframe>


https://sensn.github.io/DigitalGarden/lib/


[lib](https://sensn.github.io/DigitalGarden/lib/)

<iframe  id="fullscreen" width="720" height="400" scrolling="no" src="https://sensn.github.io/#/" style="border: 1px solid #464646;" allowfullscreen=""  data-external="1"></iframe>

## 

<!-- partial:index.partial.html -->

<div id="fullscreen-trigger">Go Fullscreen</div>

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
