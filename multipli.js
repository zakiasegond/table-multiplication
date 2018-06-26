

var tab = [' ',1,2,3,4,5,6,7,8,9];
var tab1 = [1,2,3,4,5,6,7,8,9];
var div = $("#tableau");



$("#tableau").append("<table>");


	for(var i = 0; i < tab.length; i++) {
		$("#tableau").append("<tr>");
		$("#tableau").append("<td>"+tab[i]+"</td>");
	

	for (var f = 0; f < tab1.length; f++) {
		$("#tableau").append("<tr>");
		$("#tableau").append("<td>"+tab1[f]+"</td> </tr>");

		$("#tableau").append("<td>" + i*f + "</td>");
	}
	}


	$("#tableau").append("</tr>");
$("#tableau").append("</table>");


















