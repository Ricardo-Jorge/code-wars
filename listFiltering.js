// Level 7 kyu
function filter_list(l) {
  // Return a new array with the strings filtered out
  let numbArr = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number" && l[i] >= 0) {
      numbArr.push(l[i]);
    }
  }
  return numbArr;
}
