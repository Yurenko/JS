const li = document.querySelectorAll('ul#categories > li.item');
console.log(`В списке ${li.length} категории.`)
for (const item of li) {
    const h2 = item.querySelector('h2');
    const liItem = item.querySelector('ul');
    console.log('Категория:', h2.textContent)
    console.log('Количество элементов:', liItem.children.length)
}