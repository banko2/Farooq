
function sum(...numbers) {
    //numbers=prompt('Enter numbers');
    let total=0;
    for(const number of numbers){
        total+=number;
    }
   console.log(total);
   return total;
   alert('Sum is '+ total);
}
sum(2,3,4,5)