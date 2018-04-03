//UX Details
//Set a max value for grid size and enforce it
//With clear grid, can we remove reset button?
//Hide grid size behind a settings menu

var height;
var width;
var color;
var isClicked;
var canvas = $("#pixelCanvas");

function makeGrid() {
	//clears current grid each time user hits submit
	canvas.html('');
	//sets height and width based on user input
	height = document.getElementById("inputHeight").value;
	width = document.getElementById("inputWidth").value;
	//check to see if values entered is greater than 50
	if(height > 50 || width > 50) {
		document.getElementById("output").innerHTML = "One or more of the sizes you have entered exceeds the limit of 50 pixels. Please enter a new value.";
	} else {
		//adds number of rows equal to given height
		for(var i = 0; i < height; i++) {
			canvas.append("<tr class='table-row'></tr>");
		}
		//adds table data element to each row based on given width
		for(var j = 0; j < width; j++) {
			$(".table-row").append("<td></td>");
		}
	}
}

function paint() {
	canvas.on("click", "td", function() { //when a single pixel is clicked
		isClicked = false;
		color = document.getElementById("colorPicker").value;
		$(this).css("background-color", color);
	});

	canvas.on("mousedown", function(e){ //mouse button clicked and held down
		e.preventDefault();
		isClicked = true;
	});

	canvas.on("mouseover", "td", function(e){ 
	  //check to see if mouse button is held down
		if(isClicked === true) {
			color = document.getElementById("colorPicker").value;
			$(this).css("background-color", color);
		}
	});
}

function erase() {
	canvas.on("click", "td", function() {
		isClicked = false;
		$(this).css("background-color", "#fff");
	});

	canvas.on("mousedown", function(e){ //mouse button clicked and held down
		e.preventDefault();
		isClicked = true;
	});

	canvas.on("mouseover", "td", function(e){ 
	  //check to see if mouse button is held down
		if(isClicked === true) {
			$(this).css("background-color", "#fff");
		}
	});
}

$("input[type='submit']").click(function(e) {
	e.preventDefault(); //Required to avoid submit and page reload
	makeGrid();
});

$("#paint").click(function() {
	paint();
});

$("#erase").click(function() {
	erase();
});

$("#clear").click(function() {
	canvas.find("td").css("background-color", "#fff");
});

//run when a user releases the mouse
$(document).on('mouseup', function(){
	isClicked = false;
});

makeGrid(); //load a 15x15 grid on page load
paint(); //paint function runs on page load so user does not have to click Paint button initially






