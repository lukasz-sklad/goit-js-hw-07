// Nasłuchiwanie zdarzenia submit
document.querySelector('.login-form').addEventListener('submit', function (e) {
	// Zapobieganie przeładowaniu strony
	e.preventDefault()

	// Pobieranie elementów formularza
	const formElements = this.elements

	// Walidacja formularza
	if (!validateForm(formElements)) {
		return
	}

	// Zbieranie danych do obiektu
	const formData = collectFormData(formElements)

	// Wypisywanie danych w konsoli
	console.log(formData)

	// Resetowanie formularza
	this.reset()
})

function validateForm(elements) {
	for (const element of elements) {
		if (element.nodeName.toLowerCase() !== 'button' && element.value.trim() === '') {
			alert('All form fields must be filled in')
			return false
		}
	}
	return true
}

function collectFormData(elements) {
	const data = {}
	for (const element of elements) {
		if (element.nodeName.toLowerCase() !== 'button') {
			data[element.name] = element.value.trim()
		}
	}
	return data
}
