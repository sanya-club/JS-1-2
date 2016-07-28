var arr = [];
for (var i = 0; i <= 4; i++) {
  arr[i] = prompt('введите имя');
};
console.log(arr);
var userName = prompt('введите имя пользователя');
for (var i = 0; i <= arr.length; i++) {
  if (userName === arr[i]) {
    alert(arr[i] + ' ' + ', вы успешно вошли');
    break;
  };
};
console.log('your name is', userName);
if (userName != arr[i]) {
  alert('ERROR');
};
