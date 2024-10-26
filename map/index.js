let studentMap = new Map([
    ['John', 85],
    ['Jane', 92],
    ['Bob', 78]
]);

// studentMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });

// Output:
// John: 85
// Jane: 92
// Bob: 78

// Extended example with all parameters

// studentMap.forEach((value, key, map) => {
//     console.log(`Key: ${key}`);
//     console.log(`Value: ${value}`);
//     console.log(`Full map size: ${map.size}`);
//     console.log('-------------');
// });

// Output:
// Key: John
// Value: 85
// Full map size: 3
// -------------
// Key: Jane
// Value: 92
// Full map size: 3
// -------------
// Key: Bob
// Value: 78
// Full map size: 3
// -------------

// Without destructuring
// for (let entry of studentMap.entries()) {
//     console.log(`Key: ${entry[0]}`);
//     console.log(`Value: ${entry[1]}`);
//     console.log('-------------');
// }


// Output:
// John: 85
// Jane: 92
// Bob: 78

// Output:
// Key: John
// Value: 85
// -------------
// Key: Jane
// Value: 92
// -------------
// Key: Bob
// Value: 78
// -------------

// for (let [name, score] of studentMap.entries()) {
//     console.log(`${name}: ${score}`);
// }

// Output:
// John: 85
// Jane: 92
// Bob: 78


// for (let name of studentMap.keys()) {
//     console.log(name);
// }

// Output:
// John
// Jane
// Bob

// Practical example with keys
// let names = Array.from(studentMap.keys());
// console.log(names); // ['John', 'Jane', 'Bob']

// Finding specific students
// for (let name of studentMap.keys()) {
//     if (name.startsWith('J')) {
//         console.log(`Found student: ${name}`);
//     }
// }


// for (let score of studentMap.values()) {
//     console.log(score);
// }

// Output:
// 85
// 92
// 78

// Practical example with values
// Calculate average score
// let scores = Array.from(studentMap.values());
// let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
// console.log(`Average score: ${average}`); // 85


// Using multiple methods together
// function getHighScorers(map, threshold) {
//     let highScorers = [];

//     for (let [name, score] of map.entries()) {
//         if (score >= threshold) {
//             highScorers.push(name);
//         }
//     }

//     return highScorers;
// }

// console.log(getHighScorers(studentMap, 90)); // ['Jane']


// Using forEach to modify values
// function addBonusPoints(map, bonus) {
//     map.forEach((score, name) => {
//         map.set(name, score + bonus);
//     });
// }

// addBonusPoints(studentMap, 5);
// console.log(studentMap);
// // Map(3) { 'John' => 90, 'Jane' => 97, 'Bob' => 83 }

// function getStats(map) {
//     let scores = Array.from(map.values());
//     let total = scores.reduce((sum, score) => sum + score, 0);

//     return {
//         average: total / scores.length,
//         highest: Math.max(...scores),
//         lowest: Math.min(...scores),
//         students: map.size
//     };
// }

// console.log(getStats(studentMap));
// {
//     average: 85,
//     highest: 92,
//     lowest: 78,
//     students: 3
// }

// var pairSum = (nums, target) => {
//     let n = nums.length
//     let j = n - 1
//     let i = 0
//     nums.sort((a, b) => a - b)
//     while (i < j) {
//         let pairSum = nums[i] + nums[j]
//         if (pairSum > target) {
//             j--
//         } else if (pairSum < target) {
//             i++
//         } else {
//             return [i, j]
//         }
//     }
// }

// console.log('pairSum([2,7,11,15],9) :>> ', pairSum([3, 2, 4], 6));

var rearrangeArray = function (nums) {
    let positive = []
    let negative = []
    for (let num of nums) {
        if (num > 0) {
            positive.push(num)
        } else {
            negative.push(num)
        }
    }
    for (let i = 0; i < nums.length / 2; i++) {
        // const element = array[i];
        nums[2 * i] = positive[i]
        nums[(2 * i) + 1] = negative[i]
    }
    return nums
};

console.log('pairSum([2,7,11,15],9) :>> ', rearrangeArray([3, 1, -2, -5, 2, -4]));