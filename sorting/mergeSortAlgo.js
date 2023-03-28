function mergeSort(array) {
  // Base case: if the array has only one element, return it
  if (array.length <= 1) {
    return array;
  }

  // Find the middle point of the array
  const mid = Math.floor(array.length / 2);

  // Divide the array into two halves
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid);

  // Recursively call mergeSort on each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves back together
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // Add any remaining elements from the left or right arrays
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}
const unsortedArray = [5, 2, 7, 1, 9, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 6, 7, 9]
