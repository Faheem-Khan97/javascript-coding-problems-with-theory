// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let count = 0;
    let curr = nums[0]

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == curr){
            count++;
        }
        else if(count == 0){
            curr = nums[i]
            count = 1;
        }
        else{
            count--;
        }
    }

    // make sure the element always exists.
    count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == curr){
            count++;
        }
       
    }

    return count > nums.length/2 ? curr : -1;
};

console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([7,7,5,5,5,1,1,5,5]))
