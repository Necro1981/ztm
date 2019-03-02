const input = document.getElementById("userinput");
const button = document.getElementById("enter");
const list = document.getElementById("mylist");
const item = document.getElementsByTagName("li");
const btn = document.getElementsByClassName("delete");
const header = document.querySelector("h1");
//cycles through btn array and adds an event listener to each existing item
//event listener triggers removeParent function
for(let i=0; i < btn.length; i++){
	btn[i].addEventListener("click",removeParent);
}

//function to add strikethrough style when a list item is clicked
function strikeThrough(event) {
	if(event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}
function fireBrick(event) {
	if(event.target.tagName === "H1") {
		event.target.classList.toggle("coolTitle");
	}
}

//checks input length
function checkLength() {
	return input.value.length;
}
//creates the additional list elements - appends a button child element with Delete label and instructs
//button onclick to invoke removePrent function
function createListElement() {
		const but = document.createElement("button");
		but.appendChild(document.createTextNode("Delete"));
		but.onclick = removeParent;

		const li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		list.appendChild(li);
		li.appendChild(but);
		input.value ="";
}
//removeParent function - removes parent from Nodelist along with eventlistener
function removeParent(event) {
	event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();
}
//invokes createlist element 
function addAfterClick() {
	if(checkLength() > 0){
		createListElement();
	}
}
//adds items by invoking createlistelement function
function addOnEnter(event) {
	if(checkLength() > 0 && event.which === 13) {
		createListElement();
	}
}
//changes header styling
header.addEventListener("click", fireBrick);
//event listener to invoke strikethrough style
list.addEventListener("click", strikeThrough);
//event listener for adding items via clicking enter
button.addEventListener("click", addAfterClick);
//event listener for adding items via enter button on keyboard
input.addEventListener("keypress", addOnEnter);