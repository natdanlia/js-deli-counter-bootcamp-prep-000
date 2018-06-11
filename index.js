var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(line){
  if(line.length > 0){
    let removedPerson = line.shift();
    return `Currently serving ${removedPerson}.`;
  } else{
    return `There is nobody waiting to be served!`;
  }
} 


function currentLine(line){
  if(line.length > 0){
    let nameAndLine = []
    for(let i = 0; i < line.length; i++){
      nameAndLine.push( ` ${i + 1}. ${line[i]}` )
    }
    return `The line is currently:${nameAndLine}`
  }
    return `The line is currently empty.`
}

