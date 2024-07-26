const array = [5, 2, 9, 1, 5, 6];
function insertionSort(arr) {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        // Initialize the variable to keep track of the position to insert the current element
        let j = i - 1;
        
        // Move elements of arr[0..i-1] that are greater than current
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage
console.log("Original array:", array);

const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);