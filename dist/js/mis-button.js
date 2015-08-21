(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var popup = "\n\t\t<div class=\"misFrame\">\n\t\t\t<div class=\"misSpinner\">\n\t\t\t\t<div class=\"circle1\"></div>\n\t\t\t\t<div class=\"circle2\"></div>\n\t\t\t\t<div class=\"mis-logo\"></div>\n\t\t\t\t<p class=\"loadingText\">Loading</p>\n\t\t\t\t<a class=\"mis-faq\" href=\"https://makeitsocial.com/faq/\" target=\"_blank\">Learn more</a>\n\t\t\t</div>\n\t\t\t<div class=\"misToggle misTogMax\"></div>\n\t\t</div>\n\t  <iframe class=\"MiS_PopUp\" src=\"\" style=\"display:none\"></iframe>\n";
// <div class="misFrameBlock" style="position: absolute;  height: 450px; width:400px; z-index: 20004;display: none;"></div>

var buttons = document.getElementsByClassName("makeitsocial-button");

var misOpen = document.createElement('div');
misOpen.className = "misOpen";
document.body.appendChild(misOpen);

var _loop = function () {
	var element = buttons[i];
	var maximised = true;
	var misOpened = false;

	element.addEventListener('click', function () {

		// Open only one popup per button;
		if (misOpened) {
			return;
		}
		misOpened = true;

		// create the popup container, and append to the document.
		var container = document.createElement('div');
		container.className = "misCover";
		container.innerHTML = popup;
		document.body.appendChild(container);

		var loader = container.getElementsByClassName('misSpinner')[0];
		var iframe = container.getElementsByClassName('MiS_PopUp')[0];
		var toggle = container.getElementsByClassName('misToggle')[0];

		iframe.onload = function () {
			// Give 1s to let page render with product details
			setTimeout(function () {
				loader.style.display = "none";
				iframe.style.display = "block";
			}, 1000);
		};

		toggle.addEventListener('click', function () {

			if (maximised) {
				toggle.className = "misToggle misTogMin"; // Toggle button style
				container.className = "misCover misMin"; // Toggle container style
				misOpen.appendChild(container); // Append to opend popups container
			} else {
					toggle.className = "misToggle misTogMax";
					container.className = "misCover";
					document.body.appendChild(container); // Return popup to body
				}
			maximised = !maximised;
		});

		iframe.setAttribute('src', "https://popup-sandbox.herokuapp.com#/setup?pid=" + element.getAttribute('data-pid'));
	});
};

for (var i = 0; i < buttons.length; i++) {
	_loop();
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9taWtlL0NvZGUvbWlzLWJ1dHRvbi9zcmMvanMvbWlzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLHVlQVlSLENBQUE7OztBQUdELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztBQUVyRSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7QUFHbEMsS0FBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLEtBQUksU0FBUyxHQUFHLElBQUksQ0FBQztBQUNyQixLQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7O0FBRXRCLFFBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVzs7O0FBRzVDLE1BQUksU0FBUyxFQUFFO0FBQUUsVUFBTztHQUFFO0FBQzFCLFdBQVMsR0FBRyxJQUFJLENBQUM7OztBQUdqQixNQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlDLFdBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQ2pDLFdBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFVBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUVyQyxNQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsTUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELE1BQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFOUQsUUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFXOztBQUUxQixhQUFVLENBQUMsWUFBVztBQUNyQixVQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDOUIsVUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQy9CLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDVCxDQUFDOztBQUVGLFFBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVzs7QUFFM0MsT0FBSSxTQUFTLEVBQUU7QUFDZCxVQUFNLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO0FBQ3pDLGFBQVMsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7QUFDeEMsV0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixNQUFNO0FBQ04sV0FBTSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztBQUN6QyxjQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztBQUNqQyxhQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNyQztBQUNELFlBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztHQUN2QixDQUFDLENBQUM7O0FBRUgsUUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsaURBQWlELEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBRWpILENBQUMsQ0FBQzs7O0FBN0NKLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztDQThDeEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHBvcHVwID0gYFxuXHRcdDxkaXYgY2xhc3M9XCJtaXNGcmFtZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1pc1NwaW5uZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZTFcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNpcmNsZTJcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1pcy1sb2dvXCI+PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzPVwibG9hZGluZ1RleHRcIj5Mb2FkaW5nPC9wPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1pcy1mYXFcIiBocmVmPVwiaHR0cHM6Ly9tYWtlaXRzb2NpYWwuY29tL2ZhcS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBtb3JlPC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWlzVG9nZ2xlIG1pc1RvZ01heFwiPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHQgIDxpZnJhbWUgY2xhc3M9XCJNaVNfUG9wVXBcIiBzcmM9XCJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPjwvaWZyYW1lPlxuYFxuLy8gPGRpdiBjbGFzcz1cIm1pc0ZyYW1lQmxvY2tcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgIGhlaWdodDogNDUwcHg7IHdpZHRoOjQwMHB4OyB6LWluZGV4OiAyMDAwNDtkaXNwbGF5OiBub25lO1wiPjwvZGl2PlxuXG52YXIgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWtlaXRzb2NpYWwtYnV0dG9uXCIpO1xuXG52YXIgbWlzT3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWlzT3Blbi5jbGFzc05hbWUgPSBcIm1pc09wZW5cIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWlzT3Blbik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRsZXQgZWxlbWVudCA9IGJ1dHRvbnNbaV07XG5cdGxldCBtYXhpbWlzZWQgPSB0cnVlO1xuXHRsZXQgbWlzT3BlbmVkID0gZmFsc2U7XG5cdFxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XG5cdFx0Ly8gT3BlbiBvbmx5IG9uZSBwb3B1cCBwZXIgYnV0dG9uO1xuXHRcdGlmIChtaXNPcGVuZWQpIHsgcmV0dXJuOyB9XG5cdFx0bWlzT3BlbmVkID0gdHJ1ZTtcblx0XHRcblx0XHQvLyBjcmVhdGUgdGhlIHBvcHVwIGNvbnRhaW5lciwgYW5kIGFwcGVuZCB0byB0aGUgZG9jdW1lbnQuXG5cdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1pc0NvdmVyXCI7XG5cdFx0Y29udGFpbmVyLmlubmVySFRNTCA9IHBvcHVwO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblx0XHRcblx0XHR2YXIgbG9hZGVyID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21pc1NwaW5uZXInKVswXTtcblx0XHR2YXIgaWZyYW1lID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ01pU19Qb3BVcCcpWzBdO1xuXHRcdHZhciB0b2dnbGUgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWlzVG9nZ2xlJylbMF07XG5cdFx0XG5cdFx0aWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gR2l2ZSAxcyB0byBsZXQgcGFnZSByZW5kZXIgd2l0aCBwcm9kdWN0IGRldGFpbHNcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0fSwgMTAwMCk7XG5cdFx0fTtcblx0XHRcblx0XHR0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFxuXHRcdFx0aWYgKG1heGltaXNlZCkge1xuXHRcdFx0XHR0b2dnbGUuY2xhc3NOYW1lID0gXCJtaXNUb2dnbGUgbWlzVG9nTWluXCI7IC8vIFRvZ2dsZSBidXR0b24gc3R5bGVcblx0XHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWlzQ292ZXIgbWlzTWluXCI7ICAvLyBUb2dnbGUgY29udGFpbmVyIHN0eWxlXG5cdFx0XHRcdG1pc09wZW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcdFx0XHRcdFx0XHQvLyBBcHBlbmQgdG8gb3BlbmQgcG9wdXBzIGNvbnRhaW5lclxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9nZ2xlLmNsYXNzTmFtZSA9IFwibWlzVG9nZ2xlIG1pc1RvZ01heFwiO1xuXHRcdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gXCJtaXNDb3ZlclwiO1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7ICAgICAvLyBSZXR1cm4gcG9wdXAgdG8gYm9keVxuXHRcdFx0fVxuXHRcdFx0bWF4aW1pc2VkID0gIW1heGltaXNlZDtcblx0XHR9KTtcblx0XHRcblx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBcImh0dHBzOi8vcG9wdXAtc2FuZGJveC5oZXJva3VhcHAuY29tIy9zZXR1cD9waWQ9XCIgKyBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1waWQnKSk7XG5cdFx0XHRcdFxuXHR9KTtcbn1cblxuXG4iXX0=
