// Select the <ol> element where the list items will be added
const list = document.getElementById("infi-list");

// Function to add a specified number of list items to the list
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    // Create a new <li> element
    const listItem = document.createElement("li");
    // Set the text content of the list item to be 'Item X' where X is the next number
    listItem.textContent = `Item ${list.children.length + 1}`;
    // Append the new list item to the <ol> element
    list.appendChild(listItem);
  }
}

// Initially add 10 list items to the list when the page loads
addListItems(10);

// Add an event listener to the <main> element
// This will trigger when the user scrolls within this container
list.addEventListener("scroll", function () {
  // Check if the user has scrolled to the bottom of the list
  // scrollTop is the vertical scroll position, clientHeight is the height of the visible part, and scrollHeight is the total height of the scrollable content
  if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
    // If the user has scrolled to the bottom, add 2 more list items to the list
    addListItems(2);
  }
});
