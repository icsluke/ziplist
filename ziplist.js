const arr1 = ['My', 'dog', 'NO'];
const arr2 = [1, 2, 4];

function zipList(array1, array2) {
  const finalList = [];
  for (let i = 0; i < array1.length; i++) {
    finalList.push(array1[i], array2[i]);
  }
  return finalList;
}

console.log(zipList(arr1, arr2));

function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
}

console.log(zipListTheSimpleWay(arr1, arr2));
