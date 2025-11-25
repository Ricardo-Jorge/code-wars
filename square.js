// Level 7 kyu
var isSquare = function (n) {
  let x = Math.sqrt(n);
  if (Number.isInteger(x)) {
    return true;
  } else {
    return false;
  }
};
