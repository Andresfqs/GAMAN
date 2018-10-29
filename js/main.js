window.onload = init;
function init (){

	// Nav 
	document.getElementById("loadp").style.display = "block";

	var time = document.getElementById("time");
	setTimeout(()=>{document.getElementById("loadp").style.display = "none"; document.getElementById("menup").style.display = "block";},1000);

	var jugarButton = document.getElementById("jugar1Button");
	jugarButton.addEventListener('click', navigate('menup', 'level1p'));

	var instruccionesButton = document.getElementById("jugar2Button");
	instruccionesButton.addEventListener('click', navigate('menup', 'game2p'));

	var creditosButton = document.getElementById("creditosButton");
	creditosButton.addEventListener('click', navigate('menup', 'creditp'));

	var lvl1Button = document.getElementById("lvl1Button");
	lvl1Button.addEventListener('click', navigate('level1p', 'game1p'));
	
	var levelpBackButton = document.getElementById("levelpBackButton");
	levelpBackButton.addEventListener('click', navigate('level1p', 'menup'));

		var levelpBackButton = document.getElementById("levelpHomeButton");
	levelpBackButton.addEventListener('click', navigate('level1p', 'menup'));

	var levelpBackButton = document.getElementById("levelpBackButtonlvl");
	levelpBackButton.addEventListener('click', navigate('game1p', 'level1p'));

	var levelpBackButton = document.getElementById("levelpHomeButtonlvl");
	levelpBackButton.addEventListener('click', navigate('game1p', 'menup'));

	var levelpBackButton = document.getElementById("levelpBackButtonGame2");
	levelpBackButton.addEventListener('click', navigate('game2p', 'menup'));

	var creditpBackButton = document.getElementById("creditpBackButton");
	creditpBackButton.addEventListener('click', navigate('creditp', 'menup'));

}

function showH(key){
	document.getElementById("hint").innerHTML = hints[key]['hint'];
	if (!hints[key]['checked']) {	
		document.getElementById(key).style.border = "inset blue 3px";
	}
}

function notShowH(key){	
	
	check(key);
}

function show (id) {
	document.getElementById(id).style.display = "block";
}

function hide (id) {
	document.getElementById(id).style.display = "none";
}

var navigate = function(actual, next) {
	return function () {
		hide(actual);
		show(next);
	}
}