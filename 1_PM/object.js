// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (key in obj) {
    if (typeof obj[key] === "object") {
      return hasFalsyValue(obj[key]);
    } else if (!obj[key]) {
      return true;
    }
  }

  return false;
};

const newObj = {
  name: "Mo",
  age: 0,
  friend: {
    friendName: "Sela"
  }
};

console.log(hasFalsyValue(newObj));
