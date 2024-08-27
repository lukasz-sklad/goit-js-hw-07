document.addEventListener("DOMContentLoaded", () => {
    // Znajdź element ul#categories
    const categories = document.getElementById("categories");
    // Znajdź wszystkie elementy li.item wew. ul #categories
    const items = categories.querySelectorAll("li.item");
    // Liczba kategorii
    console.log(`Number of categories: ${items.length}`);

    // Iteracja po każdym elemencie li.item
    items.forEach((item) => {
        // Znajdź element h2 w li.item i wypisz jego text
        const header = item.querySelector("h2")
        console.log(`Category: ${header.textContent}`)
        // Znajdź wszystkie elementy li wewnętrznego ul i policz je
        const subItem = item.querySelectorAll("ul li")
        console.log(`Elements: ${subItem.length}`)
    });

});