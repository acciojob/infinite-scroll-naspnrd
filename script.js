const list = document.getElementById("infi-list");

function addListItems(count){
	for(let i = 0; i < count; i++){
		const listItem = document.createElement("li");
		listItem.textContent = `Item ${list.children.length + 1}`
		list.appendChild(listItem);
	}
}
addListItems(10);
// list.addEventListener("scroll", () => {
// 	// if(list.scrollTop + list.clientHeight >= list.scrollHeight){
// 		addListItems(2);
// 	}
// })

list.addEventListener("scroll", function () {
	if(this.scrollTop + this.clientHeight >= this.scrollHeight){
		addListItems(2);
	}
})