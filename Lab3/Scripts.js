function dzial2zad2(imie) {
	if (imie == ""){
		console.log("Nic nie wpisano");
	}else{
		console.log("Imię "+imie+" zaczyna się od litery "+imie[0]);
	}
}
function dzial2zad3(file){
	var i = 0;
	var name = "";
	var ext = "";
	while ((i+1<file.length) && (file[i] != ".")){
		name += file[i];
		i += 1;		
	}
	i+=1;
	while (i < file.length){
		ext += file[i];
		i += 1;
	}

	if (name.length > 0 && ext.length > 0){
		return {name: name, extension: ext};
	} else{
		
		return false;
	}
}
function dzial2zad6(name, season){
	season = season.toLowerCase();
	var answer;
	switch (season) {
		case "grudzień":
		case "styczeń":
		case "luty":
			answer = name + " jeździ na sankach";
			console.log(answer);
			break;
		case "marzec":
		case "kwiecień":
		case "maj":
			answer = name + " chodzi po kałużach";
			console.log(answer);
			break;
		case "czerwiec":
		case "lipiec": 
		case "sierpień":
			answer = name + " się opala";
			console.log(answer);
			break;
		case "wrzesień":
		case "październik": 
		case "listopad":
			answer = name + " zbiera liście";
			console.log(answer);
			break;
		default:
			answer = name + " uczy się JS";
			console.log(answer);
			break;
	}
	}
function generateRandom(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}	
function checkElement(elem, moreThanTen){
	
	return moreThanTen;
	}
function dzial2zad7(){
	var table = [];
	var moreThanTen = 0;
	for (var i = 0; i < 20; i++){table.push(generateRandom(1, 20))};
	table.forEach(function (e) {if (e > 10){moreThanTen += 1;};});
	if (moreThanTen > 10){
		console.log('Udało się!');
	}else{
		console.log('Niestety nie...');
	}
}	

function printElement(element, index, array) {
    console.log( element , ":" , element.length);
}
function dzial3zad1(){
	animals = ["cat", "dog", "snake", "elephant", "hyena", "fox"];
	console.log("pętla 'for'");
	var len = 0;
for (i=0; i<animals.length; i++){
	console.log(animals[i],":", animals[i].length);
	len = len + animals[i].length;
}
	console.log("Pętla 'foreach'");
	animals.forEach(printElement);
	console.log("Pętla 'for of'")
for (object of animals){
	console.log(object,":",object.length)
}
	console.log("Ilość wszystkich liter:", len);
}
	
function dzial3zad3pkt1(users){
	var i = 0;
	imiona = [];
	emaile = [];
	users.forEach(function (e) {emaile[i] = e.email; imiona[i] = e.name; i += 1;})
	for (i = 0; i<emaile.length; i++){
		console.log(imiona[i], " => ", emaile[i])
	}
}

function dzial3zad3pkt2(users){
	var i = 0;
	uzytkownicy = [];
	users.forEach(function (e) {if (e.age >= 18){uzytkownicy[i] = e; i+=1;}})
	console.log("Wszyscy pełnoletni: ");
	for (i = 0; i<uzytkownicy.length; i++){
		console.log("index:", uzytkownicy[i].index, "czy aktywny:", uzytkownicy[i].isActive, "nazwisko:", uzytkownicy[i].name)
	}
}

function dzial3zad3pkt3(users){
	var i = 0;
	uzytkownicy = [];
	users.forEach(function (e) {if (e.gender == "female"){uzytkownicy[i] = e; i+=1;}})
	console.log("Wszystkie kobiety: ");
	for (i = 0; i<uzytkownicy.length; i++){
		console.log("index:", uzytkownicy[i].index, "czy aktywna:", uzytkownicy[i].isActive, "nazwisko:", uzytkownicy[i].name)
	}
}

function dzial3zad3pkt8(users){
	var ile_kobiet = 0;
	var ile_mezczyzn = 0;
	users.forEach(function (e) {if (e.gender == "female"){ile_kobiet += 1;} else{if (e.gender == "male"){ile_mezczyzn += 1;}}})
	console.log("Ilość kobiet: ", ile_kobiet);
	console.log("Ilość mężczyzn: ", ile_mezczyzn);	
	if (ile_kobiet == ile_mezczyzn){
		console.log("Tyle samo kobiet co mężczyzn");
	}
	else{
		if (ile_kobiet > ile_mezczyzn){
			console.log("Kobiet więcej");
		}
		else{
			console.log("Mężczyzn więcej");
		}
	}
}
