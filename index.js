const calculate = (a,b,c) => {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return { x1: null, x2: null };
    } else if (discriminant === 0) {
        const x1 = -b / (2 * a);
        return { x1, x2: x1 };
    }else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { x1, x2 };
    }
}
const result = calculate(1,5,6)
console.log();
//====================================taska 2
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const n = 5;
const result = factorial(n);
console.log(`Факторіал числа ${n} дорівнює ${result}`);
//===========================================tska3

function calculate(callback, ...args) {
    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        result = callback(result, args[i]);
        }

    return result;
}

const additionResult = calculate((x, y) => x + y, 8, 2, 3, 4); 
console.log(additionResult); 

const subtractionResult = calculate((x, y) => x - y, 15, 2, 3); 
console.log(subtractionResult);

const multiplicationResult = calculate((x, y) => x * y, 2, 3, 4); 
console.log(multiplicationResult); 

const divisionResult = calculate((x, y) => x / y, 100, 2, 2); 
console.log(divisionResult); 


const fib = (n) => {
    const sequence = [1, 1]; 
    for (let i = 2; i < n; i++) {
    const nextFib = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextFib);
    }

    return sequence;
  };
  const n = 5;
  const result = fib(n);
  console.log(result.join(' ')); 

