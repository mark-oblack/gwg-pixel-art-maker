// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	var height = document.getElementById("inputHeight").value;
	var width = document.getElementById("inputWidth").value;
	for(var i = 0; i < height; i++) {
		$("#pixelCanvas").append("<tr class='table-row'></tr>");
	}
	for(var j = 0; j < width; j++) {
		$(".table-row").append("<td></td>");
	}
}
