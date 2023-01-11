const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();

	form.reset();
});

function checkInputs() {
	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const asuntoValue = asunto.value.trim();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar su nombre en blanco');
	} else {
		setSuccessFor(nombre);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email valido');
	} else {
		setSuccessFor(email);
	}
	
	if(asuntoValue === '') {
		setErrorFor(asunto, 'No puede dejar su asunto en blanco');
	} else {
		setSuccessFor(asunto);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}