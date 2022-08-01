function swap (array, index1, index2) {
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

function SelectionSort(array) {
  let min;
  for (let i = 0; i < array.length; i++) {
    min = i;

    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(array, i, min)
    }
  }
  return array;
}

console.log(SelectionSort([7,2,4,1,5,6,3,9]))