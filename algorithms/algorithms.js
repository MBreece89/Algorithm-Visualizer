export const algorithms = {
  "Traversal": function(arr, emitStep) {
    for (let i = 0; i < arr.length; i++) {
      emitStep(arr, [i], `Visiting element ${arr[i]} at index ${i}`);
    }
  },

  "Reverse Traversal": function(arr, emitStep) {
    for (let i = arr.length - 1; i >= 0; i--) {
      emitStep(arr, [i], `Visiting element ${arr[i]} at index ${i}`);
    }
  },

  "Two Pointers": function(arr, emitStep) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
      emitStep(arr, [left, right], `Comparing ${arr[left]} (left) and ${arr[right]} (right)`);
      left++;
      right--;
    }
  },

  "Sliding Window": function(arr, emitStep) {
    const k = 3;
    for (let i = 0; i <= arr.length - k; i++) {
      let window = arr.slice(i, i + k);
      let sum = window.reduce((a, b) => a + b, 0);
      emitStep(arr, [i, i+1, i+2], `Window [${window.join(', ')}] = ${sum}`);
    }
  },

  "Prefix Sum": function(arr, emitStep) {
    let prefix = [arr[0]];
    emitStep(prefix, [0], `Initialize: prefix[0] = ${arr[0]}`);
    for (let i = 1; i < arr.length; i++) {
      prefix[i] = prefix[i-1] + arr[i];
      emitStep(prefix, [i], `prefix[${i}] = ${prefix[i-1]} + ${arr[i]} = ${prefix[i]}`);
    }
  }
};