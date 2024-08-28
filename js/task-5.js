// Funkcja zwracająca losowy kolor w formacie heksadecymalnym
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Funkcja zmieniająca kolor tła i aktualizująca wartość w span
function changeBackgroundColor() {
  const newColor = getRandomHexColor(); // Pobierz nowy losowy kolor
  document.body.style.backgroundColor = newColor; // Ustaw kolor tła elementu <body>
  document.querySelector('.color').textContent = newColor; // Zaktualizuj kolor w span
}

// Dodanie event listenera do przycisku
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.change-color');
  button.addEventListener('click', changeBackgroundColor);
});