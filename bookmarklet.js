var word_elements = document.getElementsByClassName("word");
var words = [];
for(var i=0; i<word_elements.length; i++){
	var word = word_elements[i].innerHTML;
	words.push(word);
}

console.log(words.join(" ") + " ");
