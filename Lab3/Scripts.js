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
	while (file[i] != "."){
		name += file[i];
		i += 1;		
		if (!(i==file.length)){
			break;
		}
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