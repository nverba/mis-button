/* global MISbtn */

(function() { 'use strict';

	let popup = `
		<div class="misFrame">
			<div class="draghandle">
				<div class="misIco misMin"></div>
			</div>
		</div>
	  <iframe class="MiS_PopUp" src=""></iframe>
	`
	
	let sprite = `<div class="misBtnFill"><div class="misIco misMax"></div></div>`;
	let buttons = document.getElementsByClassName("makeitsocial-button");
	let isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
	
	// Create & append the container for opened, minimised popups.
	let minimised = document.createElement('div');
	minimised.className = "misMinimised";
	document.body.appendChild(minimised);
	
	// DragCanvas isolates the popups from any underlying iframes that can capture drop events, a drag event removes the { pointer-events: none } class property. 
	let dragcanvas = document.createElement('div');
	dragcanvas.className = "dragCanvas";
	document.body.appendChild(dragcanvas);
	
	window.MISbtn = {
		register: function() {
			
			let buttons = document.getElementsByClassName("makeitsocial-button");
			for (var i = 0; i < buttons.length; i++) {
				var button = buttons[i];
				if (button.getAttribute('MisBtnReg')) { return; }
				console.log('register listener', button);
				createButton(buttons[i]);
				button.setAttribute('MisBtnReg', true)
			}
		},
		url: 'https://popup.makeitsocial.com/'
	};
	
	function createButton(button) {
		
		let active = false;
		let pid = button.getAttribute('data-pid');
		let coords = [(window.innerWidth / 2) - 200, 20];
		let offset = [0, 0];
		
		let container = document.createElement('div');
		
		container.innerHTML = popup;
		container.setAttribute('draggable', 'true');
		container.setAttribute('ondragstart', "event.dataTransfer.setData('text/plain', 'This text may be dragged')"); // firefox data workaround
		container.className = "misCover";
		
		let loader = container.getElementsByClassName('misSpinner')[0];
		let iframe = container.getElementsByClassName('MiS_PopUp')[0];
		let minimi = container.getElementsByClassName('misMin')[0];
		let cachedPos;
		let isMinimised;
		
		let maximise = document.createElement('button');
		maximise.className = "misBtn";
		maximise.innerHTML = sprite;
		minimised.appendChild(maximise);
		
		container.addEventListener("dragend", function( event ) {
			dragcanvas.className = "dragCanvas";
			updatePos(coords);
  	}, false);
		
		container.addEventListener("dragstart", function( event ) {
			dragcanvas.className = "dragCanvas activeDrag";
			offset = [event.offsetX, event.offsetY];
  	}, false);
		
	  dragcanvas.addEventListener("dragover", function( event ) {
			event.preventDefault();
			coords = [event.clientX - offset[0], event.clientY - offset[1]];
	  }, false);
		
	  dragcanvas.addEventListener("drop", function( event ) {
			event.preventDefault();
	  }, false);
		
		function updatePos(c) {
			container.style.left = c[0] + 'px';
			container.style.top = c[1] + 'px';
		}
		
		function launchPopup(e) {
			
			if (isMobile) {
				window.location.href = `${ MISbtn.url }#/setup?pid=${ pid }`;  
				return;
			}
			
			// Open only one popup per button;
			if (active) {
				if (isMinimised) { maximisePopup(); }
				return;
			}
			
			dragcanvas.appendChild(container);
			updatePos([(window.innerWidth / 2) - 200, 20]);
			active = true;
			
			// iframe.onload = function(e) {
			// 	// Give 1s to let page render with product details
			// 	setTimeout(function() {
			// 		loader.style.display = "none";
			// 		iframe.style.display = "block";
			// 	}, 1000);
			// };
			
			function minimisePopup() {
				cachedPos = [container.offsetLeft, container.offsetTop];
				container.className = "misCover misMoveMin misAnim";
				maximise.className  = "misBtn mimimised";
				updatePos([document.body.offsetWidth - 300, window.innerHeight - 100]);
				isMinimised = true;
			}
			
			function maximisePopup() {
				container.className = "misCover misAnim";
				maximise.className  = "misBtn";
				updatePos(cachedPos);
				isMinimised = false;
				setTimeout(function() {
					container.className = "misCover";
				}, 500);
			}
			
			function receiveMessage(event) {
				// This check is essential to avoid xss, this feature populates the maximise button text
				if (event.origin !== "https://popup-sandbox.herokuapp.com" && event.origin !== "https://popup.makeitsocial.com") { return; }
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
			iframe.setAttribute('src', `${ MISbtn.url }#/setup?pid=${ pid }`);
		}
		
		button.addEventListener('click', launchPopup);
	}
	
})()