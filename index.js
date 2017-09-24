
var takeANumber = function(katzDeliLine,personName){
  katzDeliLine.push(personName);
  for(var i = 0; i < katzDeliLine.length;i++){
    var positionOnLine = "Welcome, " + katzDeliLine[i] + ". You are number " + parseInt(i + 1) + " in line.";
  }
  return positionOnLine
}

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length <= 0){
    return "There is nobody waiting to be served!"
  }
  else{
    for(var i = 0; i <katzDeliLine.length; i++){
      var newStatement = "Currently serving " + katzDeliLine[i] + ".";
      katzDeliLine.shift();
      return newStatement;
    }
  }
}

var currentLine = function(katzDeliLine){
  if (katzDeliLine.length <= 0) {
    return "The line is currently empty."
  }
  else{
    for(var i = 0; i < katzDeliLine.length; i++){
      var newLine = []
      newLine.push(`This line is currently: `+[i+1]+`. `  + katzDeliLine[i])
    }
    return newLine;
  }
}
