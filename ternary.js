/**
 * Binary --> two
 * Ternary --> three
 * ...........--------------------------
 * condition ? if true : if false
 */

// const age = 24;
// if(age>=18){
//     console.log('You can vote')
// }
// else{
//     console.log('You can not vote yet.')
// }

// const age = 24;

// age >=18 ? console.log('Please Vote') : console.log('You can not vote yet.') this is the one line structure//


// age >=18 ? console.log('Please Vote') : console.log('You can not vote yet.')




let price=500;
const isLeader=true;

// if(isLeader){
//     price=0;
// }
// else{
//     price=price+100;
// }
// console.log('Price is:', price)

price = isLeader ? 0 : price+100;
console.log('Price now', price)