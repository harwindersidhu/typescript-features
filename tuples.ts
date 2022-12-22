const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40]; // It is now tupple
// pepsi[0] = 40 //This will give error because first element has to be string.

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

// This is object. It is mentioned here just to tell that objects are much more informative than tuples.
const carStats = {
  horsepower: 400,
  weight: 3354
};