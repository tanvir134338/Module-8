/**
 * MULTIPLE CONDITIONS
 *  
 * */

const salary=40000;
const isBCS=false;
const hasCar=true;

// if(salary>=50000 && isBCS===true && hasCar===true){
//     // console.log('Biye dibo')
// }
// else{
//     console.log('Biye dibo na')
// }

// if(salary>50000 || isBCS===true){
//     console.log('Biye dibo')
// }

if(salary>=50000 && hasCar===true || isBCS===true){
    console.log('Biya Dimu')
}
else{
    console.log('Ja Vag')
}