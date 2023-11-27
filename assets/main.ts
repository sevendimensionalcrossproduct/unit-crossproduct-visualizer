const leftIds: string[] = ['lbtn1','lbtn2','lbtn3']
const rightIds: string[] = ['rbtn1','rbtn2','rbtn3']

const leftBtns: HTMLElement[] = leftIds.map(id => {
	let element = document.getElementById(id);
	if(element) {
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

console.log(leftBtns);
console.log(rightBtns);
