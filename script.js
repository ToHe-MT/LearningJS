var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li")
var items = document.getElementsByClassName("item")
var deletes = document.getElementsByClassName("delete")
var p = document.getElementsByClassName("item")

function inputLength() {
	if (input.value.length !==""){
		return true; 
	} else {
		return false;
	}
}
function createListElement() {
	var li = document.createElement("li");
	var p = document.createElement("p")
	p.appendChild(document.createTextNode(input.value));
	p.className="item";
	input.value = "";
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	button.classList.add("delete")
	li.appendChild(p)
	li.appendChild(button);
	ul.appendChild(li);
}
function addListAfterClick() {
	if (inputLength()) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() && event.keyCode === 13) {
		createListElement();
	}
}
function addEventListenerli(element){
	element.addEventListener("click", ()=>element.classList.toggle("done"))
}

function addEventListenerDelete(parent,element,index){
	element[index].addEventListener("click", ()=>parent[index].remove())
}

function toggleAndRemoveUl(element){
	if (element.target.className==="item"){
		console.log(element.target.className)
		element.target.classList.toggle("done")
	}
	if (element.target.className==="delete"){
		console.log(element.target)
		element.target.parentElement.remove();
	} 
}
ul.addEventListener("click",(element)=>{
	toggleAndRemoveUl(element)
})

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);