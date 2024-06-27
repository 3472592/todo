window.onload = init;

function init() { // reads all existing sti's from locsto and add them to ul
var button = document.getElementById("add_button");
button.onclick = createSticky;

var clear = document.getElementById("clear_button");
clear.onclick = deleteAll;

    for (var i = 0; i < localStorage.length; i++) { // iterate over all items in store
        var key = localStorage.key(i); // grab each key
        //check if item key is sticky
        if (key.substring(0, 6) == "sticky") {
            var value = localStorage.getItem(key);
            addStiToDOM(value); // if sti, grab value and add to the dom
        }
    }
}

// passed txt of sticky, now need to create a list item for unordered list and insert it
function addStiToDOM(value) { 
    var stickies = document.getElementById("stickies"); //getting from dom, it is main
    var sticky = document.createElement("li"); // creating li for sticky
    var span = document.createElement("span"); // creating span for li
    span.setAttribute("class", "sticky"); //setting class sticky to span elm
    span.innerHTML = value; // span holds txt of sticky note
    sticky.appendChild(span); // span is inside li elm
    stickies.appendChild(sticky); // li elm is holded by ul with id of stickies
}

function createSticky() {
    var value = document.getElementById("note_text").value; // value is = to input value
    if (value == "") {
        alert("Add something...")
    } else {
        var key = "sticky_" + localStorage.length; // creating unique key for sticky 
        localStorage.setItem(key, value); // using key add new sti to local storage
    
        addStiToDOM(value); // adding the text to the dom to represent sticky
    }

}

function deleteAll() {
    localStorage.clear();

    var stickyList = document.getElementById("stickies");
	var stickies = stickyList.childNodes;
	for (var i = stickies.length - 1; i >= 0; i--) {
		stickyList.removeChild(stickies[i]);
	}
}