var array = ["Doc", "Dopey", "Bashful", "Grumpy"]; 

function dwarfRollCall(array){
  var array2 = []
  
  for (let i=0; i <array.length; i++) {
  array2.push(`${i+1}. ${array[i]} `) 
  

    
  }return array2.join("")
  
}



// Summon Captain Planet

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls){
  var array = []
  for (let i=0; i<planeteerCalls.length; i++){
    array.push(`${planeteerCalls[i].toUpperCase()}!`)
  }return array;
}

function longPlaneteerCalls(words){
  for (let i=0; i<words.length; i++)
  
  if(words[i].length>4)
    
    return true
    
    else 
    
    return false;
}
// Find the Cheese

  function findTheCheese(foods){
    
    if(foods[i] === 'gouda') 
    if(foods[i] === 'cheddar')
    if(foods[i] === 'camembert')
    
     return foods[i]
     
     else
     
     return 'no cheese!';

}