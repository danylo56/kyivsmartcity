function log(){
	var text = document.getElementById('text').value;
	var password = document.getElementById('password').value;
	var name = document.getElementById('name').value;

	localStorage.setItem(text + "_password", password);
	localStorage.setItem(text + "_name", name);
}

function enter(){
	var text = document.getElementById('text_2').value;
	var password = document.getElementById('password_2').value;

	if (localStorage.getItem(text + '_password') == password){
		alert('Привіт, ' + localStorage.getItem(text + '_name'));
	}else{
		alert("Ти хто? Вийди отсюда розбійник.");
	}
}

function show1(){
	//console.log('Function works')
	document.getElementById('logon').setAttribute('style', 'height : 50vh');
}
function show2(){
	//console.log('Function works')
	document.getElementById('login').setAttribute('style', 'height : 50vh');
}