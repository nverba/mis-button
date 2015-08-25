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
			<div class="draghandle">
				<div class="misIco misMin"></div>
			</div>
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
	
	for (var i = 0; i < buttons.length; i++) {
		
		let button = buttons[i];
		let active = false;
		let pid = button.getAttribute('data-pid');
		let coords = [(window.innerWidth / 2) - 200, 20];
		let offset = [0, 0];
		
		let maximise = document.createElement('button');
		maximise.className = "misBtn";
		maximise.innerHTML = sprite;
		minimised.appendChild(maximise);
		
		let container = document.createElement('div');
		container.setAttribute('draggable', 'true')
		container.className = "misCover";
		
		container.addEventListener("dragend", function( event ) {
			updatePos(coords);
  	}, false);
		
		container.addEventListener("dragstart", function( event ) {
			offset = [event.offsetX, event.offsetY];
  	}, false);
		
	  document.addEventListener("dragover", function( event ) {
			coords = [event.clientX - offset[0], event.clientY - offset[1]];
	  }, false);
		
		function updatePos(c) {
			container.style.left = c[0] + 'px';
			container.style.top = c[1] + 'px';
		}
		
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
			
			container.innerHTML = popup;
			document.body.appendChild(container);
			updatePos(coords);
			active = true;
			
			let loader = container.getElementsByClassName('misSpinner')[0];
			let iframe = container.getElementsByClassName('MiS_PopUp')[0];
			let minimi = container.getElementsByClassName('misMin')[0];
			let cachedPos;
			
			iframe.onload = function(e) {
				// Give 1s to let page render with product details
				setTimeout(function() {
					loader.style.display = "none";
					iframe.style.display = "block";
				}, 1000);
			};
			
			function minimisePopup() {
				cachedPos = [container.offsetLeft, container.offsetTop];
				container.className = "misCover misMoveMin misAnim";
				maximise.className  = "misBtn mimimised";
				updatePos([document.body.offsetWidth - 300, document.body.offsetHeight - 100]);
			}
			
			function maximisePopup() {
				container.className = "misCover misAnim";
				maximise.className  = "misBtn";
				updatePos(cachedPos);
				setTimeout(function() {
					container.className = "misCover";
				}, 500);
			}
			
			function receiveMessage(event) {
				// This check is essential to avoid xss
				if (event.origin !== "https://popup-sandbox.herokuapp.com" && event.origin !== "https://popup.makeitsocial.com/") { return; }
				var data = JSON.parse(event.data);
				if (data.pid === pid) {
					maximise.appendChild(document.createTextNode(data.name));
				}
			}
				
			window.addEventListener("message", receiveMessage, false);
			maximise.addEventListener('click', maximisePopup);
			minimi.addEventListener('click', minimisePopup);
			// used for local testing
			// iframe.setAttribute('src', "http://127.0.0.1:8080/#/setup?pid=" + pid);   
			iframe.setAttribute('src', "https://popup-sandbox.herokuapp.com#/setup?pid=" + pid);
		}
		
		button.addEventListener('click', launchPopup);
		
	}
})()