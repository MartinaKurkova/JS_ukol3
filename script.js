const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

//Vypište do stránky všechna čísla.
document.body.innerHTML += `<p>${numbers.join(', ')}</p>`;

//Vypište do stránky druhé mocniny všech čísel.
document.body.innerHTML += `<p>${numbers.map(number => number * number).join(', ')}</p>`;

//Vypište do stránky pouze záporná čísla.
numbers.forEach(number => number < 0 && (document.body.innerHTML += `${number}, `));

//Vypište do stránky absolutní hodnotu všech čísel.
const absolut = []; 
numbers.forEach((number) => {
  if (number < 0) {
    absolut.push(-number);
  } else {
    absolut.push(number); 
  }
});
document.body.innerHTML += `<p>${absolut.join(', ')}</p>`;

//Vypište do stránky pouze sudá čísla.
numbers.forEach(number => number % 2 === 0 && (document.body.innerHTML += `${number}, `));

//Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
document.body.innerHTML += `<p>${absolut.filter(number => number % 3 === 0).join(', ')}</p>`;

//Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
numbers.forEach(number => {
  let distance = number - 5;
  if (distance < 0) {
    distance = -distance; 
  }
  document.body.innerHTML += `<p>Číslo ${number} je vzdálené ${distance} od čísla 5.</p>`;
});
