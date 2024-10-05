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

var findMin = function (n) {

    let start = 0
    let end = (nums.length) - 1

    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] > nums[end]) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return nums[start]
};
console.log('findPrime(n) :>> ', subtractProductAndSum(19));

