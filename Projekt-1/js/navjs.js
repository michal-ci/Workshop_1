// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
	
		const button = document.querySelector(".page-nav-burger");
	    const menu = document.querySelector(".page-nav");
	
	    button.addEventListener("click", function(e) {
			e.preventDefault();
			menu.classList.toggle("show");
		
	});
});