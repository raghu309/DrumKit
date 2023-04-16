var btn_array = document.querySelectorAll(".drum");

var letter_to_sound = {
	"w": new Audio("sounds/tom-1.mp3"),
	"a": new Audio("sounds/tom-2.mp3"),
	"s": new Audio("sounds/tom-3.mp3"),
	"d": new Audio("sounds/tom-4.mp3"),
	"j": new Audio("sounds/snare.mp3"),
	"k": new Audio("sounds/kick-bass.mp3"),
	"l": new Audio("sounds/crash.mp3")
}

document.addEventListener("keydown", handleKeyStroke);

for(var i=0; i<btn_array.length; i++) {
	btn_array[i].addEventListener("click", handleClick);
}

function handleClick() {
	var letter = this.innerText;
	if(letter in letter_to_sound){
		letter_to_sound[letter].play();
		addAnimation(letter);
	}
	
}

function handleKeyStroke(event) {
	var letter = event.key;
	if(letter in letter_to_sound){
		letter_to_sound[letter].play();
		addAnimation(letter);
	}
	
}

function addAnimation(letter) {
	var cur_btn = document.querySelector("." + letter);
	cur_btn.classList.add("pressed");
	setTimeout(function() {
		cur_btn.classList.remove("pressed");
	}, 100);
}
