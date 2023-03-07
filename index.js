document.querySelector("#search_input").addEventListener('input', filterList);
document.querySelector("#category").addEventListener('change', filterList);

function filterList() {
    const seachInput = document.querySelector("#search_input");
    const category = document.querySelector("#category");
    const filter = seachInput.value.toLowerCase();
    const listItems = document.querySelectorAll('li');
    listItems.forEach((shop) => {
        console.log(shop.dataset.tag);
        console.log(category.value);

        let text = shop.textContent;
        if ((text.toLowerCase().includes(filter.toLowerCase()) && !category.value) || (text.toLowerCase().includes(filter.toLowerCase()) && shop.dataset.tag.includes(category.value)) || (!filter && shop.dataset.tag.includes(category.value))) {
            shop.style.display = "";
        } else {
            shop.style.display = "none";
        }
    })
}