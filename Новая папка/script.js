document.getElementById('moneyButton').addEventListener('click', function() {
    alert('100$');
});
let counter = 0;

document.getElementById('moneyButton').addEventListener('click', function() {
    counter += 100;
    document.getElementById('counter').textContent = 'Счёт: $' + counter;
});