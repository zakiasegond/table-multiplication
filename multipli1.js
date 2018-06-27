console.log("coucou")
var tableau = [' ',1,2,3,4,5,6,7,8,9];
var tab = $('#tab');
var color

tab.append('<table></table>'); //créer le tableau


for(i=0; i<tableau.length; i++){ // créer ligne de tete (th)
	var row1 = tab.append('<th>'+ tableau[i] + '</th>')
}

for(i=1; i<tableau.length; i++){ // créer les autre ligne (tr)
	var row = tab.append('<tr>'+ tableau[i] + '</tr>')
	
	for (j=1; j<=1; j++){ // la premiere cellule de chaque ligne (th ou td)
		var cell = row.append('<th>' + tableau[i] + '</th>')
	}
	for(j=1; j<tableau.length; j++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
		var cellvide = row.append('<td></td>')
		
	}

	
}


function mult() {
	tab.empty();
	for(i=0; i<tableau.length; i++){ // créer ligne de tete (th)
	var row1 = tab.append('<th>'+ tableau[i] + '</th>')
}

for(i=1; i<tableau.length; i++){ // créer les autre ligne (tr)
	var row = tab.append('<tr>'+ tableau[i] + '</tr>')
	
	for (j=1; j<=1; j++){ // la premiere cellule de chaque ligne (th ou td)
		var cell = row.append('<th>' + tableau[i] + '</th>')
	}
	for(j=1; j<tableau.length; j++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
		var result = tableau[i]*tableau[j];
		
		

		if (result >= 10 && result<50) {
			var cellvide = row.append('<td class = "pink">' + result + '</td>');	
			
		}
		else if(result>50) {
			var cellvide = row.append('<td class = "red">' + result + '</td>');
			
			
		}
		else {
			var cellvide = row.append('<td>' + result + '</td>');
			
		}


	}

	
}
	
}

function div() {
	tab.empty();
	for(i=0; i<tableau.length; i++){ // créer ligne de tete (th)
	var row1 = tab.append('<th>'+ tableau[i] + '</th>')
}

for(i=1; i<tableau.length; i++){ // créer les autre ligne (tr)
	var row = tab.append('<tr>'+ tableau[i] + '</tr>')
	
	for (j=1; j<=1; j++){ // la premiere cellule de chaque ligne (th ou td)
		var cell = row.append('<th>' + tableau[i] + '</th>')
	}
	for(j=1; j<tableau.length; j++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
		var result = (tableau[j]/tableau[i]).toFixed(2); // .tofixed permet de mettre que 2 decimale 
		
		

		if (result >= 10 && result<50) { // permet de colorer les cellule sup ou egal a 10 et Inferieur a 50 en rose
			var cellvide = row.append('<td class = "pink">' + result + '</td>');	
			
		}
		else if(result>50) { // colore les cellules sup a 50
			var cellvide = row.append('<td class = "red">' + result + '</td>');
			
			
		}
		else { // laisse les autres blanches.
			var cellvide = row.append('<td>' + result + '</td>');
			
		}


	}

	
}
	
}

function more() { //fonction de multiplication au click du button.....idem pour le / + et -
	tab.empty();
	for(i=0; i<tableau.length; i++){ // créer ligne de tete (th)
	var row1 = tab.append('<th>'+ tableau[i] + '</th>')
}

for(i=1; i<tableau.length; i++){ // créer les autre ligne (tr)
	var row = tab.append('<tr>'+ tableau[i] + '</tr>')
	
	for (j=1; j<=1; j++){ // la premiere cellule de chaque ligne (th ou td)
		var cell = row.append('<th>' + tableau[i] + '</th>')
	}
	for(j=1; j<tableau.length; j++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
		var result = tableau[j]+tableau[i];
		
		

		if (result >= 10 && result<50) {
			var cellvide = row.append('<td class = "pink">' + result + '</td>');	
			
		}
		else if(result>50) {
			var cellvide = row.append('<td class = "red">' + result + '</td>');
			
			
		}
		else {
			var cellvide = row.append('<td>' + result + '</td>');
			
		}


	}

	
}
	
}

function less() {
	tab.empty();
	for(i=0; i<tableau.length; i++){ // créer ligne de tete (th)
	var row1 = tab.append('<th>'+ tableau[i] + '</th>')
}

for(i=1; i<tableau.length; i++){ // créer les autre ligne (tr)
	var row = tab.append('<tr>'+ tableau[i] + '</tr>')
	
	for (j=1; j<=1; j++){ // la premiere cellule de chaque ligne (th ou td)
		var cell = row.append('<th>' + tableau[i] + '</th>')
	}
	for(j=1; j<tableau.length; j++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
		var result = tableau[j]-tableau[i];
		
		

		if (result >= 10 && result<50) {
			var cellvide = row.append('<td class = "pink">' + result + '</td>');	
			
		}
		else if(result>50) {
			var cellvide = row.append('<td class = "red">' + result + '</td>');
			
			
		}
		else {
			var cellvide = row.append('<td>' + result + '</td>');
			
		}


	}

	
}
	
}

$('#mult').click(function(){

	mult()
});
$('#div').click(function(){

	div()
});
$('#more').click(function(){

	more()
});
$('#less').click(function(){

	less()
});
