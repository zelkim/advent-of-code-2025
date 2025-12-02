const fs = require('fs');
const path = require('path');

const getPassword = (list) => {
    let count = 0, curr = 50;
    for(const i of list) {
        if (curr === 0) count++;
        curr = i.startsWith('R') ? (curr + parseInt(i.slice(1))) % 100 : (curr - parseInt(i.slice(1)) + 100) % 100;
    }
    return count;
}

const data = fs.readFileSync(path.join(__dirname, 'day1_steps.txt'), 'utf8');
const lines = data.split('\n').map(l => l.trim());

console.log(lines)
console.log(getPassword(lines));