# Algorithm Visualizer & Practice Problems 🚀

An interactive **algorithm visualizer + coding playground**.  
Visualize built-in algorithms OR write your own code and see it animate step by step.

---

## ✨ Features
- **Algorithm Visualizer** – Pick an algorithm and watch it animate with explanations.
- **Practice Problems** – Select a coding challenge, edit the starter code, and see your logic visualized.
- **Supported Categories** (more coming soon):
  - Arrays & Strings
  - Linked Lists
  - Stacks & Queues
  - Recursion
  - Dynamic Programming

---

## 🖥️ Run Locally
```bash
git clone https://github.com/your-username/algorithm-visualizer.git
cd algorithm-visualizer
# Open index.html in your browser
# Note: Due to ES6 modules, you may need to serve via HTTP
python -m http.server 8000
# or
npx http-server
```

**Important:** This project uses ES6 modules, so you need to serve it via HTTP (not just open the file directly) for the imports to work properly.

---

## 📂 Project Structure

```
algorithm-visualizer/
│
├── index.html                 # Main HTML file
├── style.css                  # Styling
├── script.js                  # Main JavaScript logic
│
├── algorithms/
│   └── algorithms.js          # Algorithm implementations
│
├── problems/
│   └── array_practice.js      # Practice problem definitions
│
└── README.md                  # This file
```

---

## 🧑‍💻 Example Problems

* **Sliding Window** - Find maximum sum subarray
* **Two Pointers** - Find pair with target sum
* **Stack** - Next Greater Element problem
* **Linked Lists** - Reverse a linked list
* **Recursion** - Fibonacci sequence visualization

---

## 🎯 How to Use

1. **Algorithm Visualizer:**
   - Select an algorithm from the dropdown
   - Click "Run Algorithm" to see step-by-step animation
   - Watch as elements are highlighted and explained

2. **Practice Problems:**
   - Choose a problem from the dropdown
   - Edit the starter code in the textarea
   - Click "Run My Code" to see your solution animate
   - Debug and improve your algorithms visually

---

## 🚀 Roadmap

* Add Linked List, Tree, Graph visualizations
* Expand problem set with DP, Greedy, and Graph problems
* Add user progress tracking & difficulty levels
* Include more complex data structure visualizations
* Add step-by-step debugging features

---

## 🛠️ Technologies Used

- **Vanilla JavaScript** with ES6 modules
- **CSS3** with animations and transitions
- **HTML5** semantic structure
- No external dependencies - runs entirely in the browser

---

## 📝 Contributing

Feel free to contribute by:
- Adding new algorithms to `algorithms/algorithms.js`
- Creating new practice problems in `problems/`
- Improving the UI/UX
- Adding new visualization types

---

## 📄 License

MIT License - feel free to use this project for learning and teaching!