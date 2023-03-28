function mergeSortInPlace(array) {
  // Base case: if the array has only one element, return it
  if (array.length <= 1) {
    return array;
  }

  // Find the middle point of the array
  const mid = Math.floor(array.length / 2);

  // Recursively call mergeSortInPlace on each half
  mergeSortInPlace(array.slice(0, mid));
  mergeSortInPlace(array.slice(mid));

  // Merge the sorted halves back together in place
  let leftIndex = 0;
  let rightIndex = mid;
  while (leftIndex < mid && rightIndex < array.length) {
    if (array[leftIndex] <= array[rightIndex]) {
      leftIndex++;
    } else {
      const temp = array[rightIndex];
      for (let i = rightIndex - 1; i >= leftIndex; i--) {
        array[i + 1] = array[i];
      }
      array[leftIndex] = temp;
      leftIndex++;
      rightIndex++;
      mid++;
    }
  }

  return array;
}
const unsortedArray = [5, 2, 7, 1, 9, 6];
mergeSortInPlace(unsortedArray);
console.log(unsortedArray); // Output: [1, 2, 5, 6, 7, 9]
