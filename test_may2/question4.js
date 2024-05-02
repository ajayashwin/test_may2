// 4. Intersection of two arrays
// [1, 2,3,4]
// [3,4,5,6]

// Ans:
// [3,4]

function intersection(arr1, arr2) {
  var result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}
arr1 = [1,2,3,4];
arr2 = [3,4,5,6];
console.log(intersection(arr1, arr2));
