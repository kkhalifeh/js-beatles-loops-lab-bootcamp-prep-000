function theBeatlesPlay(musicians, instruments) {
  var x =[];
  for (var i=0;i<musicians.length;i++) {
    var label = `${musicians[i]} plays ${instruments[i]}`;
    x.push(label);
  }
  return x;
}

function johnLennonFacts(facts) {
  var i=0;
  var newArray = [];
  while (i<facts.length) {
    newArray.push(`${facts.unshift(i)} !!!`);
    i++;
  }
  return newArray;
}