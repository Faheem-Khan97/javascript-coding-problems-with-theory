// Problem - 1
/*

input -->   [[[1, [1.1]], 2, 3], [4, 5]];
output -->  [1, 1.1, 2, 3, 4, 5]; 
disclaimer: This might not be the best solution. Feel free to propose a new solution if find anything wrong here.
*/

function flattenArray(array){
    const res = [];

    function flattenArr(arr){
        for(let ele of arr){
            //Check if the ele is an array
            if(Array.isArray(ele)){
                flattenArr(ele)
            }
            else{
                res.push(ele)
            }
        }
    }

    flattenArr(array);
    return res;
}
const arr = [[[1, [1.1]], 2, 3], [4, 5]]
console.log(flattenArray(arr));


// Problem -2 

// Flatten upto the given depth 
function flattenArray2(arr, depth) {
    const res = [];

    function flat(ar, deep){
      for(let ele of ar){
        if(Array.isArray(ele) && deep > 0 ){
          flat(ele, deep -1)
        }
        else{
          res.push(ele)
        }
      }
    }

    flat(arr, depth);
    return res;       
};

console.log(flattenArray2([1, 2, 3, [4, 5, [6, 7]]], 1)); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log(flattenArray2([1, 2, 3, [4, 5, [6, 7]]], 2)); // [1, 2, 3, 4, 5, 6, 7]
