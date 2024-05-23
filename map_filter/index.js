//mapping

var numbers=[1,2,3,4,5,6,7];

var mapping=numbers.map((x) => {                  //can use forEach also. Mapping : returns a new array with function on each element
    return x*x;
})

//console.log(mapping);

//filter

var filtering=numbers.filter((x)=>{                     //create a new array by keeping the numbers following some criteria
    return x>3;
})
//console.log(filtering);


//reduce

 var reduction=numbers.reduce((product,num)=>{                     //accumulate a value by doing something to all numbers and returning it
    return product*num;
 })
 //console.log(reduction);

 // find ES6 onwards
var finder=numbers.find((x)=>{                                        //returns first element following this criteria
    return x>3;
})
//console.log(finder);

//finIndex   ES6 onwards

var index=numbers.findIndex((x)=>{
    return x>1;
})
console.log(index);


