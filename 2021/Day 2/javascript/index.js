const fs = require('fs');

const data = fs.readFileSync(__dirname + '/../input.txt').toString();
partOne(data);
partTwo(data);


function partOne(data) {
    let x = 0;
    let y = 0;
    
    data.split('\n').forEach(line => {
        const [command, valueStr] = line.split(' ');
        const value = parseInt(valueStr);
    
        switch(command) {
            case "forward":
                x += value;
                break;
            case "up":
                y -= value;
                break;
            case "down":
                y += value;
                break;
        }
    });
    
    console.log("Part I:", x * y);
}

function partTwo(data) {
    let x = 0;
    let y = 0;
    let aim = 0;

    data.split('\n').forEach(line => {
        const [command, valueStr] = line.split(' ');
        const value = parseInt(valueStr);
    
        switch(command) {
            case "forward":
                x += value;
                y += aim * value;
                break;
            case "up":
                aim -= value;
                break;
            case "down":
                aim += value;
                break;
        }
    });

    console.log("Part II:", x * y);
}