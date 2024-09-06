/**
 * ojective: write a function to give me then of all number in a array....
 * step-1:declare a function
 * step-2:call chake whether the function is called properly
 * step-3:set a parameter(s)
 * step-4: pas the paramter(s), chake wheter parameter is passed in a proper format..
 * stap-5: do the function task (step by step)
 */

function sumOfNumber(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number ;
    }
    return sum ;
}

const nums = [34, 66, 34, 56, 54, 87];
const sum = sumOfNumber(nums);
console.log("sum of number is", sum);
