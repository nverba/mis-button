var popup = `
	<div id="misCover" style="cursor: move; position: fixed; left: 337px; top: 0px;">
		<div class="misFrame">
			<div class="misSpinner" style="margin: 200px auto 0px;">
				<div class="circle1"></div>
				<div class="circle2"></div>
				<div class="mis-logo"></div>
				<p class="loadingText">Loading</p>
				<a class="mis-faq" href="https://makeitsocial.com/faq/" target="_blank">Learn more</a>
			</div>
			<div class="misButton"></div>
			<div class="misButton" id="misMin" style="display: block;"></div>
		</div>
	  <iframe class="MiS_PopUp" src="" style="-webkit-transform: none; transform: none;"></iframe>
	</div>
`
// <div class="misFrameBlock" style="position: absolute;  height: 450px; width:400px; z-index: 20004;display: none;"></div>

var buttons = document.getElementsByClassName("makeitsocial-button");

for (var i = 0; i < buttons.length; i++) {
	var element = buttons[i];
	element.addEventListener('click', function() {
		var container = document.createElement('div');
		container.innerHTML = popup;
		document.body.appendChild(container);
		console.log('created container');
		
		var loader = container.getElementsByClassName('misSpinner')[0];
		var iframe = container.getElementsByClassName('MiS_PopUp')[0];
		
		iframe.onload = function() {
			loader.style.display = "none";
		};
		
		setTimeout(function() {
			iframe.src = "https://popup-sandbox.herokuapp.com#/setup?pid=" + element.dataset.pid;
		}, 3000);
		
		

		
	});
}


