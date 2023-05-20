// import React from 'react';

// const SplitArray659: React.FC = () => {
//     let result = false;
//     const inputArr = [1, 2, 3, 3, 4, 5];
//     result = findConseIntSub(inputArr);
//     return (<div>
//         {result}
//     </div>);
// };

// export default SplitArray659;

// function findConseIntSub(nums: Array<number>): boolean {
//     if (nums.length < 3 && nums.length > 0) {
//         return false;
//     }
//     if (nums.length === 0) {
//         return true;
//     }
//     const obj: any = {};
//     for (let n of nums) {
//         if (obj[n]) {
//             obj[n] += 1;
//         } else {
//             obj[n] = 1;
//         }
//     }
//     console.log(obj);
//     const delIndexArr: any = [0];
//     const oneSub = findSub(nums, delIndexArr);
//     console.log(oneSub);
//     const newArr = nums.filter((n, index) => !oneSub.includes(index));
//     console.log(newArr);

//     // const newArr: any = [];
//     // Object.keys(obj).forEach((k) => {
//     //     while (obj[k] > 0) {
//     //         newArr.push(Number(k));
//     //         obj[k]--;
//     //     }
//     // });
//     // console.log(newArr);
//     return true;
//     // return findConseIntSub(newArr);
// }

// function findCury(arr: any, delIndexArr: any) {
//     const newArr = arr.filter((n, index) => !delIndexArr.includes(index));
//     if (newArr.length > 0 && newArr.length < 3) {
//         return false;
//     }
//     if (newArr.length === 0) {
//         return true;
//     }
//     return findCury(newArr, findSub(newArr, delIndexArr));
// }

// function findSub(nums: any, delIndexArr: any) {
//     if (!nums.length) {
//         return [];
//     }
//     let k = 1;
//     let prevNum = nums[0];
//     while (k < nums.length) {
//         while (nums[k] === prevNum || delIndexArr.includes(k)) {
//             k++;
//         }
//         if (nums[k] === prevNum + 1) {
//             delIndexArr.push(k);
//             prevNum = nums[k];
//             k++;
//         } else {
//             break;
//         }
//     }
//     return delIndexArr;
// }
