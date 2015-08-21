var popup = `
		<div class="misFrame">
			<div class="misSpinner">
				<div class="circle1"></div>
				<div class="circle2"></div>
				<div class="mis-logo"></div>
				<p class="loadingText">Loading</p>
				<a class="mis-faq" href="https://makeitsocial.com/faq/" target="_blank">Learn more</a>
			</div>
			<div class="misToggle" id="misMin"></div>
		</div>
	  <iframe class="MiS_PopUp" src="" style="display:none"></iframe>
`
// <div class="misFrameBlock" style="position: absolute;  height: 450px; width:400px; z-index: 20004;display: none;"></div>

var buttons = document.getElementsByClassName("makeitsocial-button");

for (var i = 0; i < buttons.length; i++) {
	var element = buttons[i];
	element.addEventListener('click', function() {
		
		var container = document.createElement('div');
		container.className = "misCover";
		container.innerHTML = popup;
		document.body.appendChild(container);
		console.log('created container');
		
		var loader = container.getElementsByClassName('misSpinner')[0];
		var iframe = container.getElementsByClassName('MiS_PopUp')[0];
		
		iframe.onload = function() {
			// Give 1s to let page render with product details
			setTimeout(function() {
				loader.style.display = "none";
				iframe.style.display = "block";
			}, 1000);
		};
		
		iframe.setAttribute('src', "https://popup-sandbox.herokuapp.com#/setup?pid=" + element.getAttribute('data-pid'));
				
	});
}


