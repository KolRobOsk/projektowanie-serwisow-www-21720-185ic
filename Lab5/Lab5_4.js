async function Zad_4() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    document.getElementById("pkt4").innerHTML = this.responseText;
    }
xhttp.onerror = function () {
  console.log("error");
};

$.getJSON( "Array.JSON", function( Tabletop ) 
{
let varFromPath = Tabletop.Tabletop_Games.Card;
let varFromPath2 = Tabletop.Tabletop_Games.RPG;

let var1 = await
	fetch(varFromPath)
  .then((varFromPath) => {
    console.log(varFromPath);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
});
  
 let var2 =await 
	 fetch(varFromPath2)
  .then((varFromPath) => {
    console.log(varFromPath);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
  });
	
	let var3_obj = new String(var1 + var2);
	
});
	
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}


async function Zad_4_1() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    document.getElementById("pkt4_1").innerHTML = this.responseText;
    }
xhttp.onerror = function () {
  console.log("error");
};

$.getJSON( "Array.JSON", function( Tabletop ) 
{
let varFromPath = Tabletop.Play_Time_in_minutes.Board;
let varFromPath2 = Tabletop.Play_Time_in_minutes.RPG;
let var1 = await
	fetch(varFromPath)
  .then((varFromPath) => {
    console.log(varFromPath);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
});
  
 let var2 =  await
	 fetch(varFromPath2)
  .then((varFromPath) => {
    console.log(varFromPath);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
  });
	
	let var3 = var1 + var2;
	
  });
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}