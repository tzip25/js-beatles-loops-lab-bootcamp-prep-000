// add solution here
function theBeatlesPlay(arr1, arr2) {
 var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
  var str = arr1[i] + ' plays ' + arr2[i];
  newArr.push(str);
  }
  return newArr;
}

<<<<<<< HEAD
function johnLennonFacts(factsArr){
  var newArr = [];
  var i = 0;
  while (i < factsArr.length)
  {
    var str = factsArr[i++] + '!!!';
    newArr.push(str);
  }
  return newArr;
}

function iLoveTheBeatles(x){
  var newArr = [];
  do {
    newArr.push('I love the Beatles!');
    x++;
    }
  while (x < 15);
    return newArr;
=======
function johnLennonFacts(arr1){
  var newArr = [];
  while (newArr < arr1.length)
  {
    var str = arr1[i++] + '!!!';
    newArr.push(str);
  }
  return newArr;
>>>>>>> b447b1ca9823a6b415436c8fe1184d338a007b79
}