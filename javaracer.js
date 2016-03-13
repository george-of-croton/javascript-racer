var track = document.getElementsByClassName("racer_table1");
var lane1 = document.getElementById("row1");
var lane2 = document.getElementById("row2");

var nopositions = document.get

console.log(track.length);

var player1  = 0; 

var player2 = 0;



document.onkeyup =function(e)
 {
 	
	switch (e.which){
		case 65:
		var positions = lane1.getElementsByTagName("td");
		for( i = 0; i < positions.length; i++ ) {
			if	(i === player1){
				
				positions[i].className = "";
				positions[i + 1].className = "active";
				player1 += 1;
				break;
			}
			else if (player1 == (positions.length-1 || positions.length+1)){
				alert("player 1 wins!");
				location.reload();
				break;
			
			}
		}
		
			
				break;
		
		case 76:
		var positions2 = lane2.getElementsByTagName("td");
		for( i = 0; i < positions2.length; i++ ) {
			if (i === player2){
				positions2[i].className = "";
				positions2[i + 1].className = "active";
				player2 += 1;
				break;
				}
			else if (player2 === positions2.length-1){
					alert("player2 wins!");
					location.reload()
					break;
				
			}

		
}
}
}
			


		



		

					
				
				
			
		
	



