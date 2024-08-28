// Pobieramy elementy HTML
const nameInput = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')

// Dodajemy nasłuchiwacz zdarzenia input do elementu input
nameInput.addEventListener('input', () => {
	// Pobieramy aktualną wartość z inputa
	const name = nameInput.value.trim()

	// Sprawdzamy, czy wartość jest pusta lub zawiera tylko spacje
	if (name.trim() === '') {
		// Jeśli tak, ustawiamy "Anonymous"
		nameOutput.textContent = 'Anonymous'
	} else {
		// Jeśli nie, ustawiamy wartość z inputa
		nameOutput.textContent = name
	}
})
