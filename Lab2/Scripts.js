document.body.style.backgroundColor = "blue";

function myFunction() {
  var x = document.createElement("SELECT");
  x.setAttribute("id", "mySelect");
  document.body.appendChild(x);

  var z = document.createElement("option");
  z.setAttribute("value", "banana");
  var t = document.createTextNode("banana");
  z.appendChild(t);
  document.getElementById("mySelect").appendChild(z);
}

var h = document.createElement("H1");
var t = document.createTextNode("Howdy World!");
h.appendChild(t); 
h.style.color = "white";
h.style.fontSize = "20px";
h.style.margin = "50px 10px 20px 30px";
h.style.textShadow = "5px 5px 1px black";

function myFunction2() {
  var x = document.createElement("TITLE");
  var t = document.createTextNode("21720 Lab 2");
  x.appendChild(t);
  document.head.appendChild(x);
  document.getElementById("demo").innerHTML = "21720 Kolke";
}

function myFunction3() {
  var x = document.getElementById("myDialog");
  x.open = true;
}

function myFunction4() {
  var x = document.createElement("FIGURE");
  x.setAttribute("id", "myFigure");
  document.body.appendChild(x);

  var y = document.createElement("IMG");
  y.setAttribute("src", "mem.jpg");
  y.setAttribute("width", "304");
  y.setAttribute("width", "228");
  y.setAttribute("alt", "mem");

  x.appendChild(y);
  }
 
function myFunction5(){
  var x = document.createElement("U");
  var t = document.createTextNode("Underlined text");
  x.appendChild(t);
  x.style.color = "white";
  document.body.appendChild(x);
}

function myFunction6() {
  var x = document.createElement("THEAD");
  var y = document.createElement("TR");
  var z = document.createElement("TD");
  z.innerHTML = "Header"
  y.appendChild(z);
  x.appendChild(y);
  x.style.color = "white";

  document.getElementById("myTable").appendChild(x);
}

function myFunction7() {
  var x = document.createElement("TBODY");
  var y = document.createElement("TR");
  var z = document.createElement("TD");
  z.innerHTML = "A cell with text"
  y.appendChild(z);
  x.appendChild(y);
  document.getElementById("myTable2").appendChild(x);
}

function myFunction8() {
  var x = document.getElementById("myProgress").value;
  document.getElementById("progress").innerHTML = x + "%";
}

function myFunction9(){
  var x = document.createElement("SMALL");
  var t = document.createTextNode("Small sized text");
  x.style.color = "white";
  x.appendChild(t);
  document.body.appendChild(x);
}

function myFunction10() {
  var x = document.getElementById("myURL").value;
  document.getElementById("URL").innerHTML = x;
}

function myFunction11() {
  document.getElementById("bold").style.fontWeight = "900";
document.getElementById("bold").style.fontSize = "x-large";
}

function myFunction12() {
  document.getElementById("kursor").style.cursor = "pointer";
}

function myFunction13() {
  var x = document.getElementById("myTime").value;
  document.getElementById("czas").innerHTML = x;
}