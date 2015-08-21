var popup = `
		<div class="misFrame">
			<div class="misSpinner">
				<div class="circle1"></div>
				<div class="circle2"></div>
				<div class="mis-logo"></div>
				<p class="loadingText">Loading</p>
				<a class="mis-faq" href="https://makeitsocial.com/faq/" target="_blank">Learn more</a>
			</div>
			<div class="misToggle misTogMax"></div>
		</div>
	  <iframe class="MiS_PopUp" src="" style="display:none"></iframe>
`
// <div class="misFrameBlock" style="position: absolute;  height: 450px; width:400px; z-index: 20004;display: none;"></div>

var buttons = document.getElementsByClassName("makeitsocial-button");

var misOpen = document.createElement('div');
misOpen.className = "misOpen";
document.body.appendChild(misOpen);

for (var i = 0; i < buttons.length; i++) {
	let element = buttons[i];
	let maximised = true;
	let misOpened = false;
	
	element.addEventListener('click', function() {
		
		// Open only one popup per button;
		if (misOpened) { return; }
		misOpened = true;
		
		// create the popup container, and append to the document.
		var container = document.createElement('div');
		container.className = "misCover";
		container.innerHTML = popup;
		document.body.appendChild(container);
		
		var loader = container.getElementsByClassName('misSpinner')[0];
		var iframe = container.getElementsByClassName('MiS_PopUp')[0];
		var toggle = container.getElementsByClassName('misToggle')[0];
		
		iframe.onload = function() {
			// Give 1s to let page render with product details
			setTimeout(function() {
				loader.style.display = "none";
				iframe.style.display = "block";
			}, 1000);
		};
		
		toggle.addEventListener('click', function() {
			
			if (maximised) {
				toggle.className = "misToggle misTogMin"; // Toggle button style
				container.className = "misCover misMin";  // Toggle container style
				misOpen.appendChild(container);						// Append to opend popups container
			} else {
				toggle.className = "misToggle misTogMax";
				container.className = "misCover";
				document.body.appendChild(container);     // Return popup to body
			}
			maximised = !maximised;
		});
		
		iframe.setAttribute('src', "https://popup-sandbox.herokuapp.com#/setup?pid=" + element.getAttribute('data-pid'));
				
	});
}


