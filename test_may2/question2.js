// 2. Print unique values from an array

// [1, 2, 3, 3, 4, 5, 5]

// Ans: [ 1, 2, 3, 4, 5 ]

var values_arr =[1, 2, 3, 3, 4, 5, 5];

console.log(values_arr.filter(function(item, pos) {
    return values_arr.indexOf(item) == pos;
}));



