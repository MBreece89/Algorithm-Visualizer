// Export practice problems
export const practiceProblems = {

  "Sliding Window - Max Sum": function() {
    return {
      description: "Find the maximum sum of a subarray of size k using sliding window.",
      starterCode: `function maxSlidingWindow(arr=[2,1,3,4,2], k=3, emitStep){
  let maxSum = 0;
  for(let i=0; i<=arr.length-k; i++){
    const sum = arr.slice(i,i+k).reduce((a,b)=>a+b,0);
    emitStep(arr, [...Array(k).keys()].map(x=>x+i), \`Window starting at index \${i}, sum=\${sum}\`);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}`,
    };
  },

  "Two Pointers - Pair Sum": function() {
    return {
      description: "Find if a pair with a given sum exists in a sorted array using two pointers.",
      starterCode: `function pairSumExists(arr=[1,3,4,5,7], target=9, emitStep){
  let left = 0, right = arr.length-1;
  while(left < right){
    emitStep(arr, [left, right], \`Checking indices \${left} and \${right}\`);
    if(arr[left]+arr[right] === target) return true;
    else if(arr[left]+arr[right] < target) left++;
    else right--;
  }
  return false;
}`,
    };
  },

  "Next Greater Element - Stack": function() {
    return {
      description: "Find the next greater element for each element using a stack.",
      starterCode: `function nextGreater(arr=[2,1,3,4,2], emitStep){
  let stack = [], res = Array(arr.length).fill(-1);
  for(let i=0; i<arr.length; i++){
    emitStep(arr, [i], \`Processing index \${i}\`);
    while(stack.length && arr[i] > arr[stack[stack.length-1]]){
      const idx = stack.pop();
      res[idx] = arr[i];
      emitStep(arr, [idx, i], \`Element \${arr[i]} replaces index \${idx}\`);
    }
    stack.push(i);
  }
  return res;
}`,
    };
  },

  "Reverse Linked List": function() {
    return {
      description: "Reverse a linked list iteratively.",
      starterCode: `function reverseLinkedList(head={val:1, next:{val:2, next:{val:3, next:null}}}, emitStep){
  let prev = null, curr = head;
  while(curr){
    emitStep([prev?.val, curr.val, curr.next?.val].filter(v=>v!==undefined), [], \`Reversing node \${curr.val}\`);
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
    };
  },

  "Fibonacci - Recursion": function() {
    return {
      description: "Compute Fibonacci sequence recursively and animate calls.",
      starterCode: `function fib(n=5, emitStep){
  emitStep([n], [], \`Computing fib(\${n})\`);
  if(n <= 1) return n;
  return fib(n-1, emitStep) + fib(n-2, emitStep);
}`,
    };
  }
};
