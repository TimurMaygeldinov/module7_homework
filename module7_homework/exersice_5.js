// Переписать консольное приложение из предыдущего юнита на классы.
let arr = {}

class ElectricWheel{
  constructor(name, power){
    this.name = name
    this.power = power
  }
  getWork(power){
   if(power){
     if (arr[this.name]){
       console.log(this.name = 'уже включён прибор, нельзя включать повторно')
     }
     else{
       arr[this.name] = this
     }
   }
    else{
      delete arr[this.name]
      console.log(this.name + ' выключен')
    }
  }
  }
  
class Pot extends ElectricWheel{
  constructor(){
    super(name)
    super(power)
  }
  
}

class Comp extends ElectricWheel{
  constructor(){
    super(name)
    super(power)
  }
}
  
  
  
  const pot = new ElectricWheel('pot', 20)
  const comp = new ElectricWheel('comp', 40)
  
  pot.getWork(true)
  comp.getWork(true)
  
  
  function calcSum(){
    let sum = 0
    for(let i in arr){
      sum += arr[i].power
    }
    console.log(sum + ' - суммарная мощность')
  }
  calcSum()
  