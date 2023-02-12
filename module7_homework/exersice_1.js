// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const objFirst = {
    one: 'one',
    two: 'two',
    three: 'three'
  }
  
  const obj = Object.create(objFirst);
  obj.one = 'first'
  
  function printOwnProp(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key, obj[key]);
      }
    }
  }
  printOwnProp(obj)
