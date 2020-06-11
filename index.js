// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO

console.log("a不是数组，b是数组");

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (i = 0; i < 5; i++) {
	a[i] *= 2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
var result1 = '';
for (i = 0; i < 3; i++) {
	result1 += colors[i] + ' ';
}
result1 += colors[3];
console.log(result1);

// case 3 output: 'Red,Green,White,Black'
var result2 = '';
for (i = 0; i < 3; i++) {
	result2 += colors[i] + ',';
}
result2 += colors[3];
console.log(result2);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (i = 0; i < a.length; i++) {
    for (j = i; j < a.length; j++) {
        if (a[i] < a[j]) {
            max = a[j];
            a[j] = a[i];
            a[i] = max;
        }
    };
};
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let heap = {};
let maxName = '', maxNum = 0;
a.forEach((item) => {
	heap[item] ? heap[item] += 1 : heap[item] = 1
})
for (k in heap) {
	if (heap[k] > maxNum) {
		maxName = k;
		maxNum = heap[k];
	}
}
console.log(maxName+ " "+ maxNum);