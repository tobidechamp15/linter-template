const array = [1, 2, 3];

function doSomeStuff(myArray) {
  for (let number of myArray) {
    return number;
  }
}

doSomeStuff(array);
