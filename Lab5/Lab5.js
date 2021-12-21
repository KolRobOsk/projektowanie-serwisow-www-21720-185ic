document.domain = "localhost";
$.getJSON( "./Array", function( Tabletop, callback ) 
{		
	let maxBoardGameTime = Tabletop.Play_Time_in_minutes.Board;
	let maxCardGameTime = Tabletop.Play_Time_in_minutes.Card.Max;
	console.log
	let timeStamp = document.createElement('timeStamp');
	timeStamp.src = src;
	timeStamp.onload = () => callback(timeStamp);
	document.head.append(timeStamp);
});