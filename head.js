let array = [5, 6, 7];
console.log(array[0]);
const head = (array) => {
  return array[0];
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Yep its true ${actual} = ${expected}  ✅✅✅`);
  } else
    console.log(`Nope chuck testa ${actual} does not equal ${expected}🛑🛑🛑`);
};

// const actual = "Bootcamps";
// const expected = "Bootcamp";

// const corrected = (actual) => {
//   return actual.slice(0, -1);
// };

// assertEqual(corrected(actual), expected);

assertEqual(head(array), 5);
