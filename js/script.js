function pow() {
  var number = prompt('введите число');
  var power = prompt('введите степень');
  var result = Math.pow(number, power);
  return console.log('Ваш результат =', result);
}

pow();