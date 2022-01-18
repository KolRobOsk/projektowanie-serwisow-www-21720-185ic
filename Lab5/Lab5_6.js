
function Zad_6(){

$.getJSON( "Array.JSON", function( Tabletop ) 
{
let varFromPath = Tabletop.Tabletop_Games.Card;
let varFromPath2 = Tabletop.Tabletop_Games.RPG;


axios.get(varFromPath)
  .then(function (response) {
    // handle success
    let var1 = response;
  })
  .catch(function (error) {
    // handle error
    console.log("error");
  })
  .then(function () {
    console.log('Experiment completed');
  });
  
axios.get(varFromPath2)
  .then(function (response) {
    // handle success
    let var2 = response;
  })
  .catch(function (error) {
    // handle error
    console.log("error");
  })
  .then(function () {
    console.log('Experiment completed');
  });
 
})}


function Zad_6_1(){

$.getJSON( "Array.JSON", function( Tabletop ) 
{
let varFromPath = Tabletop.Play_Time_in_minutes.Board;
let varFromPath2 = Tabletop.Play_Time_in_minutes.RPG;



axios.get(varFromPath)
  .then(function (response) {
    // handle success
    let var1 = response;
  })
  .catch(function (error) {
    // handle error
    console.log("error");
  })
  .then(function () {
    console.log('Experiment completed');
  });
  
  
axios.get(varFromPath2)
  .then(function (response) {
    // handle success
    let var2 = response;
  })
  .catch(function (error) {
    // handle error
    console.log("error");
  })
  .then(function () {
    console.log('Experiment completed');
  });
  
	
	let var3 = var1 + var2;
	
  });
}
