function showAlert() {
	const ok = window.confirm('You have been hacked!\n\nClick "OK" to fix.');
	if (ok) {
		window.location.href = "https://www.example.com";
	}
}

showAlert();
