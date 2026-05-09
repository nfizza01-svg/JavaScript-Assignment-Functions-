// ============================================
// Assignment #35-38 — JavaScript Functions
// Results check karo: node assignment35-38.js
// ============================================

// ── Q1: Current Date & Time ──────────────────
function q1() {
  console.log("Q1 - Current Date & Time:");
  console.log(new Date().toLocaleString());
}

// ── Q2: Greet Full Name ──────────────────────
function q2(firstName, lastName) {
  console.log("Q2 - Greet User:");
  if (!firstName || !lastName) {
    console.log("Error: Enter both names");
    return;
  }
  console.log(`Hello, ${firstName} ${lastName}! Welcome 👋`);
}

// ── Q3: Add Two Numbers ──────────────────────
function q3(a, b) {
  console.log("Q3 - Add Two Numbers:");
  if (isNaN(a) || isNaN(b)) {
    console.log("Error: Enter valid numbers");
    return;
  }
  console.log(`Sum = ${a} + ${b} = ${a + b}`);
}

// ── Q4: Calculator ───────────────────────────
function q4(num1, num2, operator) {
  console.log("Q4 - Calculator:");
  let result;
  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
    case '%': result = num1 % num2; break;
    default: result = "Invalid operator";
  }
  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

// ── Q5: Square ───────────────────────────────
function q5(n) {
  console.log("Q5 - Square:");
  if (isNaN(n)) { console.log("Error: Enter a valid number"); return; }
  console.log(`${n}² = ${n * n}`);
}

// ── Q6: Factorial ────────────────────────────
function q6(n) {
  console.log("Q6 - Factorial:");
  if (isNaN(n) || n < 0) { console.log("Error: Enter valid number"); return; }
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  console.log(`${n}! = ${fact}`);
}

// ── Q7: Counting ─────────────────────────────
function q7(start, end) {
  console.log("Q7 - Counting:");
  if (isNaN(start) || isNaN(end)) { console.log("Error: Enter valid numbers"); return; }
  let result = [];
  for (let i = start; i <= end; i++) result.push(i);
  console.log(result.join(", "));
}

// ── Q8: Hypotenuse (Nested Function) ─────────
function q8(base, perpendicular) {
  console.log("Q8 - Hypotenuse (Nested Function):");
  if (isNaN(base) || isNaN(perpendicular)) { console.log("Error: Enter valid values"); return; }

  function calculateHypotenuse(b, p) {
    function calculateSquare(n) {
      return n * n;
    }
    return Math.sqrt(calculateSquare(b) + calculateSquare(p));
  }

  console.log(`Hypotenuse = √(${base}² + ${perpendicular}²) = ${calculateHypotenuse(base, perpendicular).toFixed(4)}`);
}

// ── Q9: Rectangle Area ───────────────────────
function q9(width, height) {
  console.log("Q9 - Rectangle Area:");
  if (isNaN(width) || isNaN(height)) { console.log("Error: Enter valid values"); return; }

  // i. Arguments as values
  function rectArea(w, h) { return w * h; }
  console.log(`Area (by value)    = ${rectArea(width, height)}`);

  // ii. Arguments as variables
  let w = width, h = height;
  console.log(`Area (by variable) = ${rectArea(w, h)}`);
}

// ── Q10: Palindrome ──────────────────────────
function q10(str) {
  console.log("Q10 - Palindrome Checker:");
  if (!str) { console.log("Error: Enter text"); return; }
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const isPal = clean === clean.split('').reverse().join('');
  console.log(isPal ? `✅ "${str}" IS a palindrome` : `❌ "${str}" is NOT a palindrome`);
}

// ── Q11: Title Case ──────────────────────────
function q11(str) {
  console.log("Q11 - Title Case:");
  if (!str) { console.log("Error: Enter text"); return; }
  const result = str.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  console.log(`Input:  "${str}"`);
  console.log(`Output: "${result}"`);
}

// ── Q12: Longest Word ────────────────────────
function q12(str) {
  console.log("Q12 - Longest Word:");
  if (!str) { console.log("Error: Enter text"); return; }
  const longest = str.trim().split(' ').reduce((a, b) => a.length > b.length ? a : b);
  console.log(`Longest word in "${str}" → "${longest}"`);
}

// ── Q13: Count Letter ────────────────────────
function q13(str, letter) {
  console.log("Q13 - Count Letter Occurrences:");
  if (!str || !letter) { console.log("Error: Enter string and letter"); return; }
  const count = (str.match(new RegExp(letter, 'g')) || []).length;
  console.log(`"${letter}" appears ${count} time(s) in "${str}"`);
}

// ── Q14: Geometrizer ─────────────────────────
function calcCircumference(r) { return (2 * Math.PI * r).toFixed(2); }
function calcArea(r)           { return (Math.PI * r * r).toFixed(2); }

function q14(radius) {
  console.log("Q14 - The Geometrizer (Circle):");
  if (isNaN(radius) || radius <= 0) { console.log("Error: Enter valid radius"); return; }
  console.log(`Radius         = ${radius}`);
  console.log(`Circumference  = 2πr = ${calcCircumference(radius)}`);
  console.log(`Area           = πr² = ${calcArea(radius)}`);
}


// ============================================
//  TEST CALLS — Sab questions run karo
// ============================================

console.log("=".repeat(50));
q1();

console.log("=".repeat(50));
q2("Fizza", "Nadeem");

console.log("=".repeat(50));
q3(15, 27);

console.log("=".repeat(50));
q4(10, 3, '+');
q4(10, 3, '-');
q4(10, 3, '*');
q4(10, 3, '/');
q4(10, 3, '%');

console.log("=".repeat(50));
q5(9);

console.log("=".repeat(50));
q6(6);

console.log("=".repeat(50));
q7(1, 10);

console.log("=".repeat(50));
q8(3, 4);

console.log("=".repeat(50));
q9(5, 8);

console.log("=".repeat(50));
q10("madam");
q10("racecar");
q10("hello");

console.log("=".repeat(50));
q11("the quick brown fox");

console.log("=".repeat(50));
q12("Web Development Tutorial");

console.log("=".repeat(50));
q13("JSResourceS.com", "o");

console.log("=".repeat(50));
q14(7);

console.log("=".repeat(50));