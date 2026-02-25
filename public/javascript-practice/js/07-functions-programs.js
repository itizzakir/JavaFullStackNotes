const programOutput = document.getElementById("programOutput");

function firstNaturalNum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

function sumInRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i += 1) {
    sum += i;
  }
  return sum;
}

function leapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function reverseStr(str) {
  let out = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    out += str[i];
  }
  return out;
}

function fibonacci(count) {
  let firstVal = 0;
  let secondVal = 1;
  const result = [];

  for (let i = 0; i < count; i += 1) {
    const nextVal = firstVal + secondVal;
    result.push(nextVal);
    firstVal = secondVal;
    secondVal = nextVal;
  }

  return result;
}

function* demoGenerator() {
  yield "Start";
  yield "Middle";
  yield "End";
  yield "ExcelR";
}

function closureDemo() {
  const username = "Parent function";
  return function child() {
    return "Child can access -> " + username;
  };
}

document.getElementById("runPrograms").addEventListener("click", () => {
  const lines = [];

  function demoNoParams() {
    return "Welcome to the world of functions";
  }

  function add(a, b) {
    return a + b;
  }

  const expressionFn = function () {
    return "Anonymous function expression executed";
  };

  const iifeValue = (function (a, b) {
    return "IIFE result -> " + (a * b);
  })(3, 2);

  const implicitArrow = (a, b) => a + b;
  const explicitArrow = (a, b) => {
    return a * b;
  };

  function hof(callback) {
    return callback();
  }

  const hofResult = hof(function () {
    return 10 * 5;
  });

  const generator = demoGenerator();
  const closureFn = closureDemo();

  lines.push("Function Basics:");
  lines.push("demoNoParams() -> " + demoNoParams());
  lines.push("add(10, 5) -> " + add(10, 5));
  lines.push("function expression -> " + expressionFn());
  lines.push(iifeValue);
  lines.push("implicit arrow (10,5) -> " + implicitArrow(10, 5));
  lines.push("explicit arrow (5,5) -> " + explicitArrow(5, 5));
  lines.push("higher order + callback result -> " + hofResult);

  lines.push("");
  lines.push("Programming Practice:");
  lines.push("sum of first n natural numbers (8) -> " + firstNaturalNum(8));
  lines.push("sum in range (10 to 20) -> " + sumInRange(10, 20));
  lines.push("2024 leap year? -> " + (leapYear(2024) ? "Leap year" : "Not leap year"));
  lines.push("12 prime? -> " + (isPrime(12) ? "Prime" : "Not prime"));
  lines.push("5 prime? -> " + (isPrime(5) ? "Prime" : "Not prime"));
  lines.push("reverse 'ExcelR' -> " + reverseStr("ExcelR"));
  lines.push("fibonacci (5) -> " + fibonacci(5).join(", "));

  lines.push("");
  lines.push("Generator Output:");
  lines.push("next1 -> " + JSON.stringify(generator.next()));
  lines.push("next2 -> " + JSON.stringify(generator.next()));
  lines.push("next3 -> " + JSON.stringify(generator.next()));
  lines.push("next4 -> " + JSON.stringify(generator.next()));

  lines.push("");
  lines.push("Closure Output:");
  lines.push(closureFn());

  programOutput.textContent = lines.join("\n");
});