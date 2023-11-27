const leftIds: string[] = ['lbtn1','lbtn2','lbtn3']
const rightIds: string[] = ['rbtn1','rbtn2','rbtn3']

let isClicked:boolean = false;

const leftBtns: HTMLElement[] = leftIds.map(id => {
	let element = document.getElementById(id);
	if (element) {
		return element as HTMLElement;
	} else {
		throw new Error('Not found');
	}
});

const rightBtns: HTMLElement[] = rightIds.map(id => {
	let element = document.getElementById(id);
	if(element) {
		return element as HTMLElement;
	} else {
		throw new Error('Not found');
	}
});

leftBtns.forEach(button => {
	button.addEventListener('click', () => {
	if (!isClicked){
		button.classList.remove('button');
		button.classList.add('clickedStyles');
		button.removeAttribute('id');
	} else {
		button.classList.remove('clickedStyles');
		button.classList.add('button');
		button.setAttribute('id',leftIds[leftBtns.indexOf(button)]);
	}
	isClicked = !isClicked;

	});
});


console.log(leftBtns);
console.log(rightBtns);
