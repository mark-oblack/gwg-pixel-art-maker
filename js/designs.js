//UX Details
//Set a max value for grid size and enforce it
//With clear grid, can we remove reset button?
//Hide grid size behind a settings menu

let height;
let width;
let color;
let bgColor;
let lineColor;
let isClicked;
let canvas = $("#pixelCanvas");

$(".settings-menu").hide(); //hide settings menu on page load

function makeGrid() {
	//clears current grid each time user hits submit
	canvas.html('');
	//sets height and width based on user input
	height = document.getElementById("inputHeight").value;
	width = document.getElementById("inputWidth").value;
	//check to see if values entered is greater than 50
	if(height > 40 || width > 40) {
		document.getElementById("output").innerHTML = "One or more of the sizes you have entered exceeds the limit of 40 pixels. Please enter a new value.";
	} else {
		//adds number of rows equal to given height
		for(let i = 0; i < height; i++) {
			canvas.append("<tr class='table-row'></tr>");
		}
		//adds table data element to each row based on given width
		for(let j = 0; j < width; j++) {
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

//When these functions are run, td:hover no longer works. Need to investigate or remove this feature.
function backgroundColor() {
	bgColor = document.getElementById("bgColorPicker").value;
	$("td").css("background-color", bgColor);
}

function gridLineColor() {
	lineColor = document.getElementById("gridLineColor").value;
	$("table, tr, td").css("border-color", lineColor);
}

//run when a user releases the mouse
$(document).on('mouseup', function(){
	isClicked = false;
});

$("input[type='submit']").click(function(e) {
	e.preventDefault(); //Required to avoid submit and page reload
	makeGrid();
	backgroundColor();
	gridLineColor();
	$(".settings-menu").hide();
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

$("#grid-settings").click(function() {
	$(".settings-menu").toggle();
});

$("#hide").click(function() {
	$(".settings-menu").hide();
});

makeGrid(); //load a 10x10 grid on page load
paint(); //paint function runs on page load so user does not have to click Paint button initially






