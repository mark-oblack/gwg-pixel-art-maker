// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//UX Details
//Set a max value for grid size and enforce it
//Add eraser function

function makeGrid() {
	//clears current grid each time user hits submit
	$("#pixelCanvas").html('');
	//sets height and width based on user input
	var height = document.getElementById("inputHeight").value;
	var width = document.getElementById("inputWidth").value;
	//adds number of rows equal to given height
	for(var i = 0; i < height; i++) {
		$("#pixelCanvas").append("<tr class='table-row'></tr>");
	}
	//adds table data element to each row based on given width
	for(var j = 0; j < width; j++) {
		$(".table-row").append("<td></td>");
	}
}

$("input[type='submit']").click(function(e) {
	e.preventDefault(); //Required to avoid submit and page reload
	makeGrid();
});

$("input[type='reset']").click(function(e) {
	e.preventDefault(); //Required to avoid submit and page reload
	$("#pixelCanvas").html('');
});

// $("table").on("mouseover", "td", function() { //debating about making this mouseover or click
// 	var color = document.getElementById("colorPicker").value;
// 	$(this).css("background-color", color);
// });

$("#paint").click(function() {
	$("table").on("click", "td", function() { //debating about making this mouseover or click
		var color = document.getElementById("colorPicker").value;
		$(this).css("background-color", color);
	});

});

$("#erase").click(function() {
	$("table").on("click", "td", function() { //debating about making this mouseover or click
		$(this).css("background-color", "white");
	});
});






