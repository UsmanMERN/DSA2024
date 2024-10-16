let myArr = [1, 2, 3, 4, 5]

// console.log('myArr :>> ', myArr);

// row=3 col=3

// let n = 4;

// let i = 1
// while (i <= n) {
//     let pattren = ""
//     let j = 1;
//     while (j <= (n - i) + 1) {
//         pattren += j;
//         j++;
//     }
//     console.log(pattren);
//     i++;
// }


// let n = 4;

// let i = 1
// while (i <= n) {
//     let pattren = ""
//     let j = 1;
//     while (j <= i) {
//         pattren += i;
//         j++;
//     }
//     console.log(pattren);
//     i++;
// }

// let n = 4;

// let i = n;
// while (i > 0) {
//     let pattren = ""
//     let j = (n - i) + 1;
//     while (j > 0) {
//         pattren += j + "  ";
//         j--;
//     }
//     console.log(pattren);
//     i--;
// }

// let n = 4;

// let i = 1;
// let count = 1
// while (i <= n) {
//     let pattren = ""
//     let j = 1;
//     while (j <= n) {
//         pattren += String.fromCharCode(97 + count - 1) + "  ";
//         count++
//         j++;
//     }
//     console.log(pattren);
//     i++;
// }

// let n = 3;

// let i = 1;
// let count = 1
// while (i <= n) {
//     let pattren = ""
//     let j = 0;
//     while (j < n) {
//         pattren += String.fromCharCode(97 + i + j - 1) + "  ";
//         count++
//         j++;
//     }
//     console.log(pattren);
//     i++;
// }

// let n = 4;

// let i = 1;
// let count = 1
// while (i <= n) {
//     let pattren = ""
//     let j = 1;
//     while (j <= i) {
//         pattren += String.fromCharCode(97 + count - 1) + "  ";
//         count++
//         j++;
//     }
//     console.log(pattren);
//     i++;
// }

// let n = 4;

// let i = 1;
// let count = 1
// while (i <= n) {
//     let pattren = ""
//     let j = 1;
//     while (j <= i) {
//         pattren += String.fromCharCode(97 + count - 1) + "  ";
//         count++
//         j++;
//     }
//     console.log(pattren);
//     i++;
// }


// let n = 4;

// let i = n;
// while (i > 0) {
//     let pattren = ""
//     let j = (n - i) + 1;
//     while (j > 0) {
//         pattren += String.fromCharCode(97 + j - 1) + "  ";
//         j--;
//     }
//     console.log(pattren);
//     i--;
// }

// let n = 4;

// let i = 1;
// while (i <= n) {
//     let pattren = ""
//     let j = n - i;
//     while (j) {
//         pattren += "*"
//         j--;
//     }
//     let k = 1
//     while (k <= i) {
//         pattren += " "
//         k++;
//     }

//     console.log(pattren);
//     i++;
// }

// let n = 4;

// let i = 1;
// while (i <= n) {
//     let pattren = ""
//     let j = n - i + 1;
//     let k = 1
//     while (k <= i) {
//         pattren += "."
//         k++;
//     }
//     while (j) {
//         pattren += "*"
//         j--;
//     }

//     console.log(pattren);
//     i++;
// }

// let n = 4;

// let i = 1;
// while (i <= n) {
//     let pattren = ""
//     let j = n - i + 1;
//     let k = 1
//     while (k <= i) {
//         pattren += " "
//         k++;
//     }
//     while (j) {
//         pattren += i
//         j--;
//     }

//     console.log(pattren);
//     i++;
// }

// let n = 4;

// let i = 1;
// while (i <= n) {
//     let pattren = ""
//     let j = n - i + 1;
//     while (j) {
//         pattren += j
//         j--;
//     }
//     let k = 1
//     while (k <= i) {
//         pattren += " "
//         k++;
//     }

//     console.log(pattren);
//     i++;
// }

// let n = 4

// let i = 1

// while (i <= n) {

//     let prompt = ""
//     let space = (n - i) + 1
//     while (space > 0) {
//         prompt += space
//         space--
//     }
//     let num = 1
//     while (num <= i) {
//         prompt += "*"
//         num++
//     }
//     let secondNum = (n - i) + 1
//     while (secondNum) {
//         prompt += secondNum
//         secondNum--
//     }

//     console.log(prompt);
//     i++
// }


// function countSetBits(n) {
//     let count = 0;
//     while (n) {
//         n &= (n - 1);  // This operation removes the lowest set bit
//         count++;
//     }
//     return count;
// }

// console.log('countSetBit() :>> ', countSetBits(12));

// let arr = [1, 2, 3];
// let n = arr.length;

// for (let i = 0; i < (1 << n); i++) {
//     let subset = [];
//     for (let j = 0; j < n; j++) {
//         if (i & (1 << j)) {
//             subset.push(arr[j]);
//         }
//     }
//     console.log(subset);
// }


// let a = 1
// let b = 2
// if (a-- > 0 || ++b > 2) {
//     console.log(b);
// } else {
//     console.log('++b :>> ', ++b);
// }

// console.log('a,b :>> ', a, b);

// let num = 3

// console.log('25*(++num) :>> ', 25 * (++num));

// fibonacci series

// let n = 10

// let a = 0
// let b = 1

// for (let i = 0; i < n; i++) {
//     const sum = a + b;
//     console.log('sum :>> ', sum);
//     a = b
//     b = sum

// }


// find prime

// let n = 9

// const findPrime = (n) => {
//     if (n == 0 || n == 1) {
//         console.log('A prime number:>> ');
//         return 1
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             console.log('Not a prime number');
//             return i
//         }

//     }
//     return 1
// }

// console.log('findPrime(n) :>> ', findPrime(9));


// const findPrime = (n) => {
//     for (let i = 2; i < n; i += 2) {
//         if (i & 1) {
//             console.log('i :>> ', i);
//             continue
//         }
//         i++
//     }
//     return 1
// }

// console.log('findPrime(n) :>> ', findPrime(9));

// var subtractProductAndSum = function (n) {

//     let sum = 0
//     let product = 1
//     while (n != 0) {
//         let rem = n % 10
//         sum += rem
//         product *= rem
//         n = Math.floor(n / 10)
//     }

//     let answer = product - sum
//     return answer

// };
// console.log('findPrime(n) :>> ', subtractProductAndSum(19));

// var findMin = function (n) {

//     let start = 0
//     let end = (nums.length) - 1

//     while (start < end) {
//         let mid = Math.floor((start + end) / 2)
//         if (nums[mid] > nums[end]) {
//             start = mid + 1
//         } else {
//             end = mid
//         }
//     }
//     return nums[start]
// };
// console.log('findPrime(n) :>> ', subtractProductAndSum(19));


// var func = (N) => {
//     let count = 0
//     while (N > 0) {
//         let lastDigit = N % 10
//         count++
//         N = Math.floor(N / 10)
//     }
//     return count

// }

// console.log('func(1231) :>> ', func(1231));

// var armstrongNumber = (n) => {
//     // code here
//     let sum = 0
//     let duplicateNum = n
//     while (n > 0) {
//         let lastdigit = n % 10
//         sum = (sum) + (lastdigit * lastdigit * lastdigit)
//         n = Math.floor(n / 10)
//     }
//     console.log('sum :>> ', sum);
//     console.log('sum :>> ', sum);
//     if (sum == duplicateNum) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log('func(1231) :>> ', armstrongNumber(153));



// Dear {fullName},


// 📅 *Important Reminder: October Fee Submission Due Soon!*

// We hope you're doing well! This is a gentle reminder that the deadline to submit your tuition fee for *October* is *9th Octore*. To avoid any late fees, please make sure your payment is completed before the deadline.

// ⚠️ Payments made after this date will include an additional fine. Kindly ensure timely submission to avoid any extra charges.

// *Fee Submission Details:*
// - *JazzCash Number:* 03356609060
// - *Account Title:* Muhammad Umair Ahmad

// Once you’ve made the payment, please share the receipt along with your name and roll number with us at your earliest convenience.

// 💖 *Let’s continue making this learning experience a success together!* If you've already made the payment or have any questions, feel free to contact us.

// Thank you for your cooperation and dedication to your studies. We’re here to support you every step of the way!

// Warm regards,
// *Seeraht Skill Development Program*

// var filter = function (arr, fn) {
//     let newArray = new Array()
//     let i = 0
//     for (let num of arr) {
//         if (fn(num, i)) {
//             newArray.push(num)
//         }
//         i++
//     }
//     return newArray
// };


// console.log('func(1231) :>> ', filter(153));

// var gcd = (a, b) => {
//     if (b == 0) {
//         return a
//     }
//     while (a != b) {
//         if (a > b) {
//             a = a - b
//         } else {
//             b = b - a
//         }
//     }
//     return a
// }

// let lcm = (a, b) => {
//     return (a * b) / gcd(a, b)
// }
// var lcmAndGcd = (a, b) => {

//     let gcdValue = gcd(a, b)
//     let lcmValue = lcm(a, b)
//     return { gcdValue, lcmValue }
// }
// console.log('func(1231) :>> ', lcmAndGcd(40, 4));

// var plusOne = function (digits) {
//     let totalPlusOne = digits.reduce((prev, value, index, array) => prev = (prev * 10) + value, 0) + 1
//     let updatedArray = []
//     while (totalPlusOne > 0) {
//         let lastDigit = totalPlusOne % 10
//         updatedArray.unshift(lastDigit)
//         totalPlusOne = Math.floor(totalPlusOne / 10)
//     }
//     return updatedArray
// };


// console.log('func(1231) :>> ', plusOne([40, 4]));

// var reverseArray = function (digits) {
//     let i = 0;
//     let j = digits.length - 1; // Initialize j to the last valid index in the array

//     while (i <= j) {  // Loop until the two pointers meet or cross
//         let startElement = digits[i];  // Save the element at index i
//         let endElement = digits[j];    // Save the element at index j

//         // Swap the elements at i and j
//         digits[i] = endElement;
//         digits[j] = startElement;

//         // Move the pointers inward
//         i++;
//         j--;
//     }

//     return digits;
// };


// console.log('func(1231) :>> ', reverseArray([40, 21, 3, 1, 4, 7]));

// var swapNumber = (arr) => {

//     for (let i = 0; i < arr.length; i += 2) {
//         let firstElement = arr[i];
//         if (i + 1 < arr.length) {
//             let secondElement = arr[i + 1];
//             arr[i] = secondElement
//             arr[i + 1] = firstElement
//         }
//     }
//     return arr
// }

// console.log('func(1231) :>> ', swapNumber([40, 21, 1, 4, 7, 8]));

// var checkSorted = (arr) => {

//     let count = 0
//     let n = arr.length
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > arr[(i + 1) % n]) {
//             count++
//             console.log('count :>> ', count);
//             console.log('arr[i] :>> ', arr[i]);
//             console.log('arr[(i+1%n)] :>> ', arr[(i + 1 % n)]);
//         }
//     }
//     return count === 0 || count === 1
// }

// console.log('func(1231) :>> ', checkSorted([40, 21, 1, 4, 7, 8]));


// var checkSorted = (arr) => {

//     let count = 0
//     let n = arr.length
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > arr[(i + 1) % n]) {
//             count++
//             console.log('count :>> ', count);
//             console.log('arr[i] :>> ', arr[i]);
//             console.log('arr[(i+1%n)] :>> ', arr[(i + 1 % n)]);
//         }
//     }
//     return count === 0 || count === 1
// }

// console.log('func(1231) :>> ', checkSorted([40, 21, 1, 4, 7, 8]));

var rotateArray = (nums, k) => {
    let n = nums.length;

    // Handle cases where k is greater than the length of the array
    k = k % n; // Get effective rotations

    console.log('k :>> ', k);
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    console.log('k :>> ', k);
    // Reverse the remaining n-k elements
    reverse(nums, k, n - 1);
    console.log('k :>> ', k);

    return nums;
}

// Helper function to reverse a portion of the array
const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
};

// Example usage:
console.log('func(1231) :>> ', rotateArray([40, 21, 1, 4, 7, 8, 23, 1, 2, 12, 21], 5)); // Output: [7, 8, 40, 21, 1, 4]



