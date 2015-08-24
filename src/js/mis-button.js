(function() { 'use strict';
	
	let popup = `
		<div class="misFrame">
			<div class="misSpinner">
				<div class="circle1"></div>
				<div class="circle2"></div>
				<div class="mis-logo"></div>
				<p class="loadingText">Loading</p>
				<a class="mis-faq" href="https://makeitsocial.com/faq/" target="_blank">Learn more</a>
			</div>
			<div class="misIco misMin"></div>
		</div>
	  <iframe class="MiS_PopUp" src="" style="display:none"></iframe>
	`
	
	let sprite = `<div class="misBtnFill"><div class="misIco misMax"></div></div>`
	
	let buttons = document.getElementsByClassName("makeitsocial-button");
	let isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
	
	// Create & append the container for opened, minimised popups.
	let minimised = document.createElement('div');
	minimised.className = "misMinimised";
	document.body.appendChild(minimised); 
	
	for (let i = 0; i < buttons.length; i++) {
		
		let button = buttons[i];
		let active = false;
		let pid = button.getAttribute('data-pid');
		
		let maximise = document.createElement('button');
		maximise.className = "misBtn";
		maximise.innerHTML = sprite;
		maximise.appendChild(document.createTextNode('This is my long product description'));
		minimised.appendChild(maximise);
		
		let container = document.createElement('div');
		container.className = "misCover";
		
		function launchPopup(e) {
			
			if (isMobile) {
				window.location.href = "https://popup-sandbox.herokuapp.com#/setup?pid=" + pid;
				return;
			}
			
			// Open only one popup per button;
			if (active) { 
				maximisePopup();
				return;
			}
			
			active = true;
			container.innerHTML = popup;
			document.body.appendChild(container);
			
			let loader = container.getElementsByClassName('misSpinner')[0];
			let iframe = container.getElementsByClassName('MiS_PopUp')[0];
			let minimi = container.getElementsByClassName('misMin')[0];
			
			iframe.onload = function(e) {
				// Give 1s to let page render with product details
				setTimeout(function() {
					loader.style.display = "none";
					iframe.style.display = "block";
				}, 1000);
			};
			
			function minimisePopup() {
				container.className = "misCover misMoveMin";
				maximise.className  = "misBtn mimimised";
			}
			
			function maximisePopup() {
				container.className = "misCover";
				maximise.className  = "misBtn";
			}
			maximise.addEventListener('click', maximisePopup);
			minimi.addEventListener('click', minimisePopup);
			iframe.setAttribute('src', "https://popup-sandbox.herokuapp.com#/setup?pid=" + pid);
		}
		
		button.addEventListener('click', launchPopup);
		
	}
})()