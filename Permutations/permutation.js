// generating all permutations of a given set using a recursive algorithm

function generatePermutations(elements) {
  
  if (elements.length === 0) {
    return [[]];
  } else {
    const firstElement = elements[0];
    const remainingElements = elements.slice(1);
    const permutationsWithoutFirst = generatePermutations(remainingElements);
    const permutationsWithFirst = [];
    permutationsWithoutFirst.forEach((permutation) => {
      for (let i = 0; i <= permutation.length; i++) {
        const newPermutation = [...permutation.slice(0, i), firstElement, ...permutation.slice(i)];
        permutationsWithFirst.push(newPermutation);
      }
    });
    return permutationsWithFirst;
  }
}

// example usage
const permutations = generatePermutations([1, 2, 3]);
console.log(...permutations);


