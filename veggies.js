const judgeVegetable = function(vegetables, metric){
    let num = [];
    let winnerVal = 0
    let winnerwin = ""
    for (let i = 0; i < vegetables.length; i ++){
       num.push(vegetables[i][metric])
          
      }
      
      winnerVal = Math.max.apply(Math, num)
     
      for (let j = 0; j < vegetables.length; j ++){
        if( vegetables[j][metric] === winnerVal){
            winnerwin = vegetables[j].submitter
        }
           
       }
       return winnerwin
 };


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))
