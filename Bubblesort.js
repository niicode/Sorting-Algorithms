function swap (array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2]
  array[index2] = temp;
}

function bubbleSort (array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      if ( array[i] < array[j]) {
        swap(array, i, j)
      }
    }
  }
  return array;
}

console.log(bubbleSort([2,5,3,6,1,8,9]))