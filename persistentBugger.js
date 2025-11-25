function persistence(num) {
  let loopedTimes = 0;
  let arrNumb = num.toString().split("");

  while (arrNumb.length > 1) {
    let newArray = arrNumb.reduce((a, b) => a * b);
    arrNumb = newArray.toString().split("");
    loopedTimes += 1;
  }
  return loopedTimes;
}
