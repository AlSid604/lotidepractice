const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Yep its true ${actual} = ${expected}  ✅✅✅`);
  } else
    console.log(`Nope chuck testa ${actual} does not equal ${expected}🛑🛑🛑`);
};
const array = ["Hello", "Lighthouse", "Labs"];
const tail = (array) => {
  return array.slice(1);
};

const result = tail(array);
console.log(result);
console.log(array);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
