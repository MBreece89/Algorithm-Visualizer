import { algorithms } from './algorithms/algorithms.js';
import { practiceProblems } from './problems/array_practice.js';

// DOM elements
const algoSelect = document.getElementById("algorithm-select");
const runAlgoBtn = document.getElementById("run-algo");
const algoAnimation = document.getElementById("animation");
const algoExplanation = document.getElementById("explanation");

const problemSelect = document.getElementById("problem-select");
const userCodeTextarea = document.getElementById("user-code");

// Populate algorithms dropdown
Object.keys(algorithms).forEach(name => {
  const opt = document.createElement("option");
  opt.value = name;
  opt.textContent = name;
  algoSelect.appendChild(opt);
});

// === Algorithm Animation ===
let algoSteps = [];
let algoStep = 0;
let algoInterval;

function emitAlgoStep(arrayState, highlightIndices=[], explanation="") {
  algoSteps.push({ 
    array: [...arrayState], 
    highlight: [...highlightIndices], 
    explanation 
  });
}

function runAlgorithm() {
  if (!algoSelect.value) {
    alert("Please select an algorithm first!");
    return;
  }
  
  algoSteps = [];
  algoStep = 0;
  const algoName = algoSelect.value;
  algorithms[algoName]([2,1,3,4,2], emitAlgoStep);
  animateAlgo();
}

function animateAlgo() {
  clearInterval(algoInterval);
  algoStep = 0;
  
  algoInterval = setInterval(() => {
    if(algoStep >= algoSteps.length){
      clearInterval(algoInterval);
      algoExplanation.textContent += " ✅ Animation complete!";
      return;
    }
    
    const step = algoSteps[algoStep];
    algoAnimation.innerHTML = step.array.map((v,i) =>
      `<div class="box ${step.highlight.includes(i)?'highlight':''}">${v}</div>`
    ).join("");
    algoExplanation.textContent = step.explanation;
    algoStep++;
  }, 1000);
}

runAlgoBtn.addEventListener("click", runAlgorithm);

// === Practice Problems ===
function loadPracticeProblem() {
  const problem = practiceProblems[problemSelect.value]();
  userCodeTextarea.value = problem.starterCode;
  document.getElementById("practice-animation").innerHTML = '';
  document.getElementById("practice-explanation").textContent = problem.description;
}

problemSelect.addEventListener("change", loadPracticeProblem);
loadPracticeProblem(); // Load initial problem

// Practice Animation Variables
let practiceSteps = [];
let currentPracticeStep = 0;
let practiceInterval;

function emitStep(arrayState, highlightIndices=[], explanation="") {
  practiceSteps.push({ 
    array: [...arrayState], 
    highlight: [...highlightIndices], 
    explanation 
  });
}

function runUserCode() {
  practiceSteps = [];
  currentPracticeStep = 0;
  const code = userCodeTextarea.value;
  
  try {
    // Create a safe execution context
    const func = new Function("emitStep", `
      ${code}
      
      // Call the function based on the problem type
      const problemType = "${problemSelect.value}";
      if (problemType.includes("Sliding Window")) {
        return maxSlidingWindow([2,1,3,4,2], 3, emitStep);
      } else if (problemType.includes("Two Pointers")) {
        return pairSumExists([1,3,4,5,7], 9, emitStep);
      } else if (problemType.includes("Next Greater")) {
        return nextGreater([2,1,3,4,2], emitStep);
      } else if (problemType.includes("Reverse Linked")) {
        return reverseLinkedList({val:1, next:{val:2, next:{val:3, next:null}}}, emitStep);
      } else if (problemType.includes("Fibonacci")) {
        callStack = [];
        return fib(5, emitStep);
      }
    `);
    
    const result = func(emitStep);
    console.log("Function result:", result);
    animatePractice();
    
  } catch(err) {
    alert("Error in your code: " + err.message);
    console.error("Code execution error:", err);
  }
}

function animatePractice() {
  clearInterval(practiceInterval);
  currentPracticeStep = 0;
  const container = document.getElementById("practice-animation");
  const explanation = document.getElementById("practice-explanation");

  practiceInterval = setInterval(() => {
    if(currentPracticeStep >= practiceSteps.length){
      clearInterval(practiceInterval);
      explanation.textContent += " ✅ Your code animation complete!";
      return;
    }
    
    const step = practiceSteps[currentPracticeStep];
    container.innerHTML = step.array.map((v,i) =>
      `<div class="box ${step.highlight.includes(i)?'highlight':''}">${v}</div>`
    ).join("");
    explanation.textContent = step.explanation;
    currentPracticeStep++;
  }, 1200);
}

document.getElementById("run-user-code").addEventListener("click", runUserCode);