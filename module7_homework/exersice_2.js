// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
const car = {
    price: 1000
  }
  const str = 'price'
  function checkProp(str, car){
    if(str in car){
      console.log('true')
    }
    else
      console.log('false')
  }
  checkProp(str, car)