const fs = require('fs');

const data = fs.readFileSync(__dirname + '/../input.txt').toString();
partOne(data);
partTwo(data);


function partOne(data) {
    const lines = data.split('\n');
    const bits = lines[0].length;    

    const counts = [];

    for (let i = 0; i < bits; i++) {
        counts.push({'0': 0, '1': 1});
    }
    
    lines.forEach(line => {
        line.split('').forEach((char,i ) => counts[i][char]++);
    });
    
    const gamma = parseInt(counts.map(c => c['0'] > c['1'] ? '0' : '1').join(''), 2);
    const epsilon = parseInt(counts.map(c => c['0'] < c['1'] ? '0' : '1').join(''), 2);
    
    console.log("Part I:", gamma * epsilon);
}

function partTwo(data) {
    let lines = data.split('\n').filter(line => line.trim() != '');
    let oxygen = [...lines];
    let co2 = [...lines];

    let bits = lines[0].length;    

    let countOxygen = { '0': 0, '1': 1 }
    let countCO2 = { '0': 0, '1': 1 }

    for (let i = 0; i < bits; i++) {
        oxygen.forEach(line => {
            countOxygen[line.charAt(i)]++;
        });
        co2.forEach(line => {
            countCO2[line.charAt(i)]++;
        });

        if (oxygen.length > 1) {
            let filtered = oxygen.filter(line => line.charAt(i) === (countOxygen['0'] > countOxygen['1'] ? '0' : '1'));
            if (filtered.length == 0) {
                oxygen = [oxygen.at(-1)];
            } else {
                oxygen = filtered;
            }
        }

        if (co2.length > 1) {
            let filtered = co2.filter(line => line.charAt(i) === (countCO2['0'] > countCO2['1'] ? '1' : '0'));
            if (filtered.length == 0) {
                co2 = [co2.at(-1)];
            } else {
                co2 = filtered;
            }
        }

        countOxygen = { '0': 0, '1': 0 };
        countCO2 = { '0': 0, '1': 0 };
    }

    const oxygenValue = parseInt(oxygen[0], 2);
    const co2Value = parseInt(co2[0], 2);

    console.log("Part II:", oxygenValue * co2Value);
}
