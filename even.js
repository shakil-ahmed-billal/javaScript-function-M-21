function evenNumber(numbars) {
  let evens = [];
  for (const numbar of numbars) {
    if (numbar % 2 === 0) {
      console.log(numbar);
      evens.push(numbar);
    }
  }
  return evens;
}
function oddNumbar(numbars) {
  let odd = [];
  for (const numbar of numbars) {
    if (numbar % 2 === 1) {
      console.log(numbar);
      odd.push(numbar);
    }
  }
  return odd;
}

const numbars = [34, 56, 76, 45, 66, 88, 35, 33];

//even numbar declear..........
const evens = evenNumber(numbars);
console.log("only even number", evens);

//odd numbar declear...........
const odd = oddNumbar(numbars);
console.log("odd number", odd);

function evenSumNumbar(numbars) {
  let sum = 0;
  for (const numbar of numbars) {
    if (numbar % 2 === 0) {
      console.log(numbar);
      sum = sum + numbar;
    }
  }
  return sum;
}

const sum = evenSumNumbar(numbars);
console.log("even the sum numbar of:", sum);
