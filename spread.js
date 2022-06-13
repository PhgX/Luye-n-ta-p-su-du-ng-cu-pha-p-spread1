// function replace(array, from, to, elements) {
//     array.splice.apply(array, [from, to - from].c
//     oncat(elements))  
//   }   
//   let testArray = [1, 2, 100, 100, 6]  
//   replace(testArray, 2, 4, [3, 4, 5])  
//   console.log(testArray)
var replace = function (array, from, to, elements) {
    array.splice.apply(array, [from, to - from].concat(elements));
};
var testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);
//   function copyReplace(array, from, to, elements) {  
//     return array.slice(0, from).concat(elements).concat(array.slice(to))  
//   }  
//   console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5])) 
var copyReplace = function (array, from, to, elements) {
    return array.slice(0, from).concat(elements).concat(array.slice(to));
};
console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));
//   let customerOrder = []
//   function recordOrders(time) {  
//     customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})  
//   } 
//   recordOrders(new Date, "coffee", "yaourt", "pizza")  
//   console.log(customerOrder)
var customerOrder = [];
var recordOrders = function (time) {
    var Rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Rest[_i - 1] = arguments[_i];
    }
    customerOrder.push({ time: time, birds: Array.prototype.slice.call(Rest, 0) });
};
recordOrders(new Date, "coffee", "yaourt", "pizza");
console.log(customerOrder);
