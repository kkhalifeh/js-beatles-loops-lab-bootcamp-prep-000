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
    newArray.push(`${facts[i]}!!!`);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  var i=15;
  do emptyArray.push(`I love the Beatles!`), num++;
  while (num<i);
  return emptyArray
}