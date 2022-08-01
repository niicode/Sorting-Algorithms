function insertionSort(array) {
  let j;
  for (let i =0; i < array.length; i += 1) {
    let value = array[i];
    for (j = i-1; j > -1 && array[j] > value; j -= 1) {
      array[j+ 1] = array[j];
    }
    array[j + 1] = value
  }
  return array
}


console.log(insertionSort([12,2,7,4,9,5,3]))
