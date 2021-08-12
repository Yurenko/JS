const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');

for (const item of ingredients) {
  let li = document.createElement('li');

  li.textContent = item
  ul.append(li)

}