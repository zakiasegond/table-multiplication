

var tab = [' ',1,2,3,4,5,6,7,8,9];
var tab1 = [1,2,3,4,5,6,7,8,9];
var div = $("#tableau");



$("#tableau").append("<table border='2px'>");

	$("#tableau").append("<tr>");

	for(var i = 0; i < tab.length; i++) {
		$("#tableau").append("<td>"+tab[i]+"</td>");
	}
	for (var i = 0; i < tab1.length; i++) {
		$("#tableau").append("<tr>");
		$("#tableau").append("<td>"+tab1[i]+"</td> </tr>");

	}

	$("#tableau").append("</tr>");
$("#tableau").append("</table>");


















