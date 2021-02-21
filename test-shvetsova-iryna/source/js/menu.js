;(function() {
	'use strict';

	let tabsmenu = document.querySelectorAll('.opening__links');
	if (!tabsmenu) return;

	[].forEach.call(tabsmenu, function(menu) {
		menu.addEventListener('click', function(e) {
			if (e.target.tagName != 'A') return;
			let currIndex = switchTab(menu, e.target);
			switchBlock(menu, currIndex);
		})
	});

	function switchTab(menu, tab) {
		let items = menu.querySelectorAll('a'),
			currIndex;

		[].forEach.call(items, function(item, index) {
			item.classList.remove('active');
			if (item === tab) {
				item.classList.add('active');
				currIndex = index;
			}
		});
		return currIndex;
	}

	function switchBlock(menu, currIndex) {
		let content	= menu.nextElementSibling,
			blocks = content.querySelectorAll('.container');

		[].forEach.call(blocks, function(block, index) {
			block.removeAttribute('style');
			if (index == currIndex) block.style.display = 'block';
		});
	}
})();
