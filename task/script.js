document.querySelector('.burger').addEventListener('click' , () => {
	document.querySelector('.menu').classList.add('open');
});

document.querySelector('.close').addEventListener('click' , () => {
	document.querySelector('.menu').classList.remove('open');
});