// Level 6 Kyu
function solution(number) {
  let sum = 0;
  let count = 0;
  while (count < number) {
    if (number < 0) {
      return 0;
    }
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count;
    }

    count++;
  }
  return sum;
}
