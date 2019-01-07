// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  return !(el % 7);
};

Array.prototype.filter = function(fun) {
  // TODO
  const filtered = [];
  this.forEach(el => {
    if (typeof el === "number" && fun(el)) {
      filtered.push(el);
    }
  });

  return filtered;
};

const newArr = arr.filter(multOf7);

console.log(newArr);
