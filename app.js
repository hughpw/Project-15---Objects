
const spaceCraft1 = {
  weightInkg: 5000,
  rangeInMiles: 20000,
  capacity: 10,
  topSpeedMph: 21000 
};

const spaceCraft2 = {
  weightInkg: 7500,
  rangeInMiles: 30000,
  capacity: 15,
  topSpeedMph: 14000
};

const spaceCraft3 = {
  weightInkg: 10000,
  rangeInMiles: 40000,
  capacity: 25,
  topSpeedMph: 10500
};

const spaceCraftCarrier = [];

spaceCraftCarrier.push(spaceCraft1, spaceCraft2, spaceCraft3);

console.log(spaceCraftCarrier);
console.log(`Spacecraft 2 has a range of ${
  spaceCraftCarrier[1].rangeInMiles} miles!`);

for (i=0; i <= 2; i++) {
  console.log(`Space craft ${i+1
  } has a top speed of ${spaceCraftCarrier[i].topSpeedMph
  } mph!`);
}

