// Написать функцию, которая создает пустой объект, но без прототипа.
const obj = Object.create(null)
function emptyObj(){
  console.log(obj)
}