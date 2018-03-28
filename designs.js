// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
	$("tr, td").hover(function() {
		$(this).css("background-color", "black");
	});
});

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
