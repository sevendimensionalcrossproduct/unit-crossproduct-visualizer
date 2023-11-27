const leftIds: string[] = ['lbtn1','lbtn2','lbtn3']
const rightIds: string[] = ['rbtn1','rbtn2','rbtn3']

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
	console.log(leftBtns.indexOf(button));
	
	leftBtns.forEach(otherButton => {
		if(otherButton !== button){
			otherButton.classList.remove('clickedStyles');
			otherButton.classList.add('button');
			otherButton.setAttribute('id',leftIds[leftBtns.indexOf(otherButton)]);
		}
	});
	button.classList.remove('button');
	button.classList.add('clickedStyles');
	button.removeAttribute('id');
	});
});

rightBtns.forEach(button => {
	button.addEventListener('click', () => {
	console.log(rightBtns.indexOf(button));
	
	rightBtns.forEach(otherButton => {
		if(otherButton !== button){
			otherButton.classList.remove('clickedStyles');
			otherButton.classList.add('button');
			otherButton.setAttribute('id',rightIds[rightBtns.indexOf(otherButton)]);
		}
	});
	button.classList.remove('button');
	button.classList.add('clickedStyles');
	button.removeAttribute('id');
	});
});


console.log(leftBtns);
console.log(rightBtns);
