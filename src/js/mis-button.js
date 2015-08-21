var popup = `
	<div id="misCover" style="cursor: move; z-index: 20003; position: fixed; left: 337px; top: 0px;">
	  <iframe class="MiS_PopUp" src="https://popup-sandbox.herokuapp.com#/setup?pid=demoproduct_1" style="-webkit-transform: none; transform: none;"></iframe>
		<div class="misFrame">
			<div class="misSpinner" style="margin: 200px auto 0px; display: none;">
				<div class="circle1"></div>
				<div class="circle2"></div>
				<div class="mis-logo"></div>
				<p class="loadingText">Loading</p>
				<a class="mis-faq" href="https://makeitsocial.com/faq/" target="_blank">Learn more</a>
			</div>
			<div class="misButton"></div>
			<div class="misButton" id="misMin" style="display: block;"></div>
			<div class="misFrameBlock" style="position: absolute;  height: 450px; width:400px; z-index: 20004;display: none;"></div>
		</div>
	</div>
`

var buttons = document.getElementsByClassName("makeitsocial-button");

for (var i = 0; i < buttons.length; i++) {
	var element = buttons[i];
	element.addEventListener('click', function() {
		var container = document.createElement('div');
		container.innerHTML = popup;
		document.body.appendChild(container);
		console.log('created container');
		
		container.getElementsByClassName
		
	});
}


