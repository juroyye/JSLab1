// // The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4)

// 1500 miles

// 1500 miles / 30 = 50 gallons 
// 1500 miles / 28 = 53.5 gallons 
// 1500 miles / 23 =  65.21 gallons 

// 30 MPG at 55 mph * 3 == $150  Below budget // 27.27 hrs
// 28 MPG at 60 mph * 3 == $162 Below budget // 25 hrs
// 23 MPG at 75 mph * 3 == $198 Over budget // 20 hrs


const totalMileage = 1500;
let speed1 = 55;
let speed2 = 60;
let speed3 = 75;

let efficiency1 = 30; //MPG
let efficiency2 = 28; //MPG
let efficiency3 = 23; //MPG

let costOfFuel = 3; // dollars
let budget = 175; // dollars



let time_55 = totalMileage / speed1;
let time_60 = totalMileage / speed1;
let time_75 = totalMileage / speed1;






function calcGallonsNeeded(){
  let gallonsNeeded = totalMileage/efficiency1;
  console.log(`The trip will require ${gallonsNeeded} gallons at 55mph.`) 
}
function CalcMoneyNeed(){
  let gallonsNeeded = totalMileage/efficiency1;
  let moneyNeeded = gallonsNeeded * 3;
  console.log(`The amount of money needed is $${moneyNeeded}.`)
}

function calcTimeNeeded(){
  let timeNeeded = totalMileage / speed1
  console.log(`The time it will take for this trip is ${timeNeeded} hours.`)
}


calcGallonsNeeded();
CalcMoneyNeed();
calcTimeNeeded();

