let date = ''
let age = ''
document.getElementById("submit").addEventListener('click', number)
function number() {
date = document.getElementById('date').value
age = document.getElementById('age').value
if ((date === 'Monday' || date === 'Tuesday' || date === 'Wednesday' || date === 'Thursday' || date === 'Friday')&&(age > 2 && age < 21)){
  alert('Time for school!');
}
else if ((date === 'Saturday' || date === 'Sunday')){
  alert('No work today!')
}
else {
  alert('Time for work!')
}
}