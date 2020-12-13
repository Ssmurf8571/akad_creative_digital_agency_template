var shoose_btn = document.getElementById('shoose');
var category_nav = document.getElementById('category_list');

shoose_btn.addEventListener('click', function() {
	shoose_btn.classList.toggle('active-button');
	category_nav.classList.toggle('active');
});