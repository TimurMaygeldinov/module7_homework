// Определите иерархию электроприборов. Включите некоторые в розетку. 
// Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

function ElectricWheel(name, power){
    this.name = name
    this.power = power
  }
  
  let arr = {}
  
  ElectricWheel.prototype.getWork = function(power){
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
  