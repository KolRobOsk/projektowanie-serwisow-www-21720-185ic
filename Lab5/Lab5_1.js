
$.getJSON( "Array.JSON", function( Tabletop, callback ) 
{		
	let maxBoardGameTime = Tabletop.Tabletop.Play_Time_in_minutes.Board;
	let maxCardGameTime = Tabletop.Tabletop.Play_Time_in_minutes.Card.Max;
	let timeStamp = document.createElement('timeStamp');
	timeStamp.onload = () => callback(timeStamp);
	let timeResult = maxBoardGameTime - maxCardGameTime;
	let stringVarCard = Tabletop.Tabletop_Games.Card;
	let stringVarBoard = Tabletop.Tabletop_Games.Board.Random;
	let stringResult = stringVarBoard + "jest lepsze niż " + stringVarCard;
	console.log(JSON.stringify(stringResult));
});
	