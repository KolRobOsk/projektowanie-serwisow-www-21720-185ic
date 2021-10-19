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
