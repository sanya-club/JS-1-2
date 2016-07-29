function pow(number, power) {
  var number = prompt('введите число');
  var power = prompt('введите степень');
  if (power == 0) {
    var result = 1;
  } else if (power < 0) {
    result = number;
    power = power * (-1);
    for (i = 0; i < power - 1; i++) {
      result = result * number;
    }
    result = 1 / result
  } else {
    result = number;
    for (i = 0; i < power - 1; i++) {
      result = result * number;
    }
  }
  return console.log('Ваш результат =', result);
}
pow();
