Object.prototype.surname = 'Ertuğrul';

Function.prototype.myBind = function() {
	console.log('Deneme');
};

Array.prototype.myType = 'Ben Arrayim';

function myFunction() {
	Console.log('Fun');
}

function Human() {}
Human.prototype = {
	walk() {
		return 'walking';
	},
	...Function.prototype
};

function ButterFly() {}
ButterFly.prototype = {
	fly() {
		return 'flying';
	},
	...Function.prototype
};

function Angel() {}

Angel.prototype = {
	...ButterFly.prototype,
	...Human.prototype
};

const castiel = new Angel();
const kelebek = new ButterFly();
const insan = new Human();

let obj = {
	country: 'istanbul'
};

let arr = [ 'Seda', 'Eda', 'Ela' ];
