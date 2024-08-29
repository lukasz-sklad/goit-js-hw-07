// Funkcja do generowania losowego koloru
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Funkcja do tworzenia kolekcji elementów
function createBoxes(amount) {
  // Sprawdź, czy wartość jest w zakresie 1-100
  if (amount < 1 || amount > 100) {
    return;
  }

  // Usuń wszystkie istniejące elementy
    document.getElementById('boxes').innerHTML = '';

  // Twórz nowe elementy
  for (let i = 0; i < amount; i++) {
		let box = document.createElement('div')
		box.style.width = `${30 + i * 10}px`
		box.style.height = `${30 + i * 10}px`
		box.style.backgroundColor = getRandomHexColor()
		document.getElementById('boxes').appendChild(box);
	}

  // Czyść wartość w input
  document.querySelector('input[type="number"]').value = '';
}

// Funkcja do usuwania kolekcji elementów
function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}

// Dodaj obsługę zdarzeń dla przycisków
document.querySelector('[data-create]').addEventListener('click', function() {
  createBoxes(parseInt(document.querySelector('input[type="number"]').value));
});

document.querySelector('[data-destroy]').addEventListener('click', function() {
  destroyBoxes();
});
