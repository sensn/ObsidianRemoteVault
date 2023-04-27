---
share: true
---
THIS is my Index.!????!!!223355

 %% comment 
Line
%%

> [!NOTE]
> -

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

<div id="fullscreen1">

<button aria-label="Open full screen mode">
  <svg viewBox="10 10 16 16" aria-hidden="true">
    <path d="M10 16h2v-4h4v-2h-6v6z" />
    <path d="M20 10v2h4v4h2v-6h-6z" />
    <path d="M24 24h-4v2h6v-6h-2v4z" />
    <path d="M12 20h-2v6h6v-2h-4v-4z" />
  </svg>
</button>
</div>


<!-- partial:index.partial.html -->
> [!NOTE] <div id="fullscreen-trigger">Go Fullscreen</div>

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
