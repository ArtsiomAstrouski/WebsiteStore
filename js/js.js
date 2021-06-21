let offset = -400; // смещение от левого края 
const commentBlock = document.querySelector(".comment__users");
document.querySelector(".left").addEventListener("mousemove",function () {
	offset = offset + 30;
	commentBlock.style.left = offset + "px";
	if (offset > 0) {
		offset = 0;
	}
	console.log(offset);
});
document.querySelector(".right").addEventListener("mousemove",function () {
	offset = offset - 30;
	commentBlock.style.left = offset + "px";
	if (offset < -1730) {
		offset = -1730;
	}
	console.log(offset);
});
let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
document.querySelector(".circle1").addEventListener("mousedown",function () {
	circle1.style.backgroundColor = "#F53838";
	offset = offset +200;
	commentBlock.style.left = offset + "px"
	if (offset > -100) {
		offset = -100;
	}
});
document.querySelector(".circle2").addEventListener("mousedown",function () {
	circle2.style.backgroundColor = "#F53838";
	offset = offset +100;
	commentBlock.style.left = offset + "px";
	if (offset > -100) {
		offset = -100;
	}
});
document.querySelector(".circle3").addEventListener("mousedown",function () {
	circle3.style.backgroundColor = "blue";
	offset = offset -100;
	commentBlock.style.left = offset + "px";
	if (offset < -1830) {
		offset = -1830;
	}
});
document.querySelector(".circle4").addEventListener("mousedown",function () {
	circle4.style.backgroundColor = "blue";
	offset = offset -200;
	commentBlock.style.left = offset + "px";
	if (offset < -1730) {
		offset = -1731;
	}
});
document.querySelector(".circle1").addEventListener("mouseup",function () {
	circle1.style.backgroundColor = "#DDE0E4";
});
document.querySelector(".circle2").addEventListener("mouseup",function () {
	circle2.style.backgroundColor = "#DDE0E4";
});
document.querySelector(".circle3").addEventListener("mouseup",function () {
	circle3.style.backgroundColor = "#DDE0E4";
});
document.querySelector(".circle4").addEventListener("mouseup",function () {
	circle4.style.backgroundColor = "#DDE0E4";
});

let menuX = document.querySelector(".header__x");
let header__menu2 = document.querySelector(".header__menu2");
document.querySelector(".header__burger").addEventListener("mousedown",function () {
	menuX.style.left = 0 + "%";
	header__menu2.style.left = 0 + "%";
});
document.querySelector(".header__x").addEventListener("mousedown",function () {
	menuX.style.left = -100 + "%";
	header__menu2.style.left = -100 + "%";
});

