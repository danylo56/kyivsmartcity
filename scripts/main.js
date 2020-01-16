function log(){
	var text = document.getElementById('text').value;
	var password = document.getElementById('password').value;
	var name = document.getElementById('name').value;

	localStorage.setItem(text + "_password", password);
	localStorage.setItem(text + "_name", name);
}

function enter(e){
	e.preventDefault(); // Stop for auto-submit

	const login = document.getElementById('text_2').value;
	const password = document.getElementById('password_2').value;

	console.log(login);

	const savedUserString = localStorage.getItem(login);
	if(savedUserString) {
		const savedUser = JSON.parse(savedUserString);
		console.log(savedUser);

		if(savedUser && savedUser.password == password) {
			alert('Привіт, ' + savedUser.fullName);
			return;
		}
	}

	alert("Ти хто? Вийди отсюда розбійник.");
}

function show1(){
	//console.log('Function works')
	document.getElementById('registrationForm').style.display = 'flex';
	document.getElementById('loginForm').style.display = 'none';
}
function show2(){
	//console.log('Function works')
	document.getElementById('registrationForm').style.display = 'none';
	document.getElementById('loginForm').style.display = 'flex';
}

function getUserFromRegistrationFields() {
	return {
		login: document.getElementById('login').value,
		fullName: document.getElementById('fullName').value,
		password: document.getElementById('password').value
	};
}

function register(e) {
	e.preventDefault(); // Stop for auto-submit
	const user = getUserFromRegistrationFields();
	localStorage.setItem(user.login, JSON.stringify(user));

	console.log('User registered:', user);
}
