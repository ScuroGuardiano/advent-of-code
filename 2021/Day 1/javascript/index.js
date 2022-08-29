const fs = require('fs');

const data = fs.readFileSync(__dirname + '/../input.txt').toString();
const dataArr = data.split('\n').map(x => parseInt(x));

// PART 1
// Let's use some functional approach, because why not

const { increases } = dataArr.reduce((acc, curr) => ({
    prev: curr,
    increases: acc.increases += (curr > acc.prev)
}), { increases: 0, prev: Infinity });

console.log("Part one:", increases);

// PART 2
// Imperativé time
let part2Increases = 0;

for (let i = 3; i < dataArr.length; i++) {
    let a = dataArr[i - 3] + dataArr[i - 2] + dataArr[i - 1];
    let b = dataArr[i - 2] + dataArr[i - 1] + dataArr[i];
    part2Increases += b > a;
}

console.log("Part two:", part2Increases);