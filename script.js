import { algorithms } from './algorithms/algorithms.js';
import { practiceProblems } from './problems/array_practice.js';

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
  algoSteps.push({ array: [...arrayState], highlight: [...highlightIndices], explanation });
}

function runAlgorithm() {
  algoSteps = [];
  algoStep = 0;
  const algoName = algoSelect.value;
  algorithms[algoName]([2,1,3,4,2], emitAlgoStep);
  animateAlgo();
}

function animateAlgo() {
  clearInterval(algoInterval);
  algoInterval = setInterval(() => {
    if(algoStep >= algoSteps.length){
      clearInterval(algoInterval);
      return;
    }
    const step = algoSteps[algoStep];
    algoAnimation.innerHTML = step.array.map((v,i)=>
      `<div class="box ${step.highlight.includes(i)?'highlight':''}">${v}</div>`
    ).join("");
    algoExplanation.textContent = step.explanation;
    algoStep++;
  }, 800);
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
loadPracticeProblem();

let practiceSteps = [];
let currentPracticeStep = 0;
let practiceInterval;

function emitStep(arrayState, highlightIndices=[], explanation="") {
  practiceSteps.push({ array: [...arrayState], highlight: [...highlightIndices], explanation });
}

function runUserCode() {
  practiceSteps = [];
  currentPracticeStep = 0;
  const code = userCodeTextarea.value;
  
  try {
    const func = new Function("emitStep", code);
    func(emitStep);
    animatePractice();
  } catch(err) {
    alert("Error in your code: " + err.message);
  }
}

function animatePractice() {
  clearInterval(practiceInterval);
  const container = document.getElementById("practice-animation");
  const explanation = document.getElementById("practice-explanation");

  practiceInterval = setInterval(() => {
    if(currentPracticeStep >= practiceSteps.length){
      clearInterval(practiceInterval);
      return;
    }
    const step = practiceSteps[currentPracticeStep];
    container.innerHTML = step.array.map((v,i)=>
      `<div class="box ${step.highlight.includes(i)?'highlight':''}">${v}</div>`
    ).join("");
    explanation.textContent = step.explanation;
    currentPracticeStep++;
  }, 800);
}

document.getElementById("run-user-code").addEventListener("click", runUserCode);
