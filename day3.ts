import fs from "fs"

function getLargestValuesFromBatteries(number: string, second: boolean = false) : {value: string, index: number} {
    let value = 0, idx = 0;
    console.log(`${number}\n`);
    
    if(number.length === 1) return {value: number, index: 0};
    for(let i = 0; i < number.length; i++) {
        if(!second && i === number.length - 1) continue;
        if(number[i] === '9' || value === 9) return {index: i, value: '9'};
        if(parseInt(number[i]) > value) {
            value = parseInt(number[i]);
            idx = i;
        }
    }
    return {value: value.toString(), index: idx};
}


const input: string[] = fs.readFileSync('day3_input.txt', 'utf-8').trim().split('\r\n');

const largestValues: number[] = [];
for(let i of input) {
    largestValues.push(parseInt(getLargestValuesFromBatteries(i).value + getLargestValuesFromBatteries(i.substring(getLargestValuesFromBatteries(i).index + 1, i.length), true).value));
}

console.log(JSON.stringify(largestValues));
console.log('Final Results:', largestValues.reduce((a, b) => a + b, 0));