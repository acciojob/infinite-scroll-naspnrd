const list = document.getElementById("infi-list");

function addListItems(count) {
	for(let i = 0; i < count; i++){
		const listItem = document.createElement("li");
		listItem.textContent = `Item ${list.children.length + 1}`;
		list.appendChild(listItem);
	}
}
addListItems(10);
// addListItems(2);
// addListItems(2);
// addListItems(2);
// addListItems(2);
list.addEventListener("scroll", function() {
	// this.scrollTop -> vertical scroll position
	// this.clientHeight -> height of visible part
	// this.scrollHeight -> total height of scrolllable content
	if(this.scrollTop + this.clientHeight >= this.scrollHeight){
		addListItems(2);
	}
})


