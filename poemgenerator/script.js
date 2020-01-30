// https://github.com/bevacqua/dragula

let drake = dragula([document.querySelector('.words'), document.querySelector('.poem')]);

drake.on("dragend", function() {
	let myParagraphs = document.querySelector(".poem").querySelectorAll("p");
	let myString = "";
	let i = 0;
	while (i < myParagraphs.length) {
		if (myParagraphs[i].className === "input") {
			myString += " " + myParagraphs[i].querySelector("select").value + " ";
		} else {
			myString += myParagraphs[i].innerHTML + " ";
		}
		i++;
	}
	document.querySelector("h2").innerHTML = myString;
});
