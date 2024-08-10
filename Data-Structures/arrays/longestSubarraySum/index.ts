// https://www.naukri.com/code360/problems/longest-subarray-with-sum-k_6682399?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_Arrayproblems&count=25&search=&sort_entity=order&sort_order=ASC&leftPanelTabValue=SUBMISSION
// when array has only postives and negatives both
function longestSubarrayWithSumK(a: number[], k: number): number {
  // Write your code here.
  let maxLength = 0;
  let sum = 0;
  const sumMap = new Map();

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    const rem = sum - k;
    if (sum == k) {
      maxLength = Math.max(maxLength, i + 1);
    }

    if (sumMap.has(rem)) {
      maxLength = Math.max(maxLength, i - sumMap.get(rem));
    }

    if (!sumMap.has(sum)) {
      sumMap.set(sum, i);
    }
  }
  return maxLength;
}

console.log(longestSubarrayWithSumK([1, 2, 3, 1, 1, 1, 1], 3)); // 3
console.log(longestSubarrayWithSumK([1, 2, 1, 3], 2)); // 1

// we can optimize it using 2 pointers if the array contains positives only

function longestSubarrayWithSumK2(arr: number[], k: number) {
  // Write your code here.
  let maxLength = 0;
  let sum = arr[0];
  let i = 0;
  let j = 0;

  while (j < arr.length) {
    while (i <= j && sum > k) {
      sum -= arr[i];
      i++;
    }
    if (sum == k) {
      maxLength = Math.max(maxLength, j - i + 1);
    }
    j++;
    if (j < arr.length) {
      sum += arr[j];
    }
  }
  return maxLength;
}

console.log(longestSubarrayWithSumK2([1, 2, 3, 1, 1, 1, 1], 3)); // 3
console.log(longestSubarrayWithSumK2([1, 2, 1, 3], 2)); // 1
