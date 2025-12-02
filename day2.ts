import fs from 'fs';

function doesStringHaveRepeatingChars(str: string) {
    if(str.length % 2 !== 0) {
        return undefined;
    }
    const val: string = str.substring(0, str.length / 2);
    if(val + val === str) {
        return str;
    }
}

function getRepeatingCharsInRange(min: number, max: number) {
    const results: number[] = [];
    for(let i = min; i <= max; i++) {
        if(i.toString().startsWith('0')) {
            continue;
        }
        const repeatingChars = doesStringHaveRepeatingChars(i.toString());
        if (repeatingChars !== undefined) {
            results.push(parseInt(repeatingChars));
            console.log(`Found repeating chars: ${repeatingChars} in number: ${i}`);
        }
    }
    return results;
}

function main() {
    const input = fs.readFileSync('day2_input.txt', 'utf-8').trim();
    const ranges_string = input.split(',');
    const ranges_obj: [{min: number, max: number}] = ranges_string.map((range: string) => {
        const [min, max] = range.split('-').map(num => parseInt(num));
        return { min, max };
    }
    ) as [{min: number, max: number}];

    console.log(ranges_string);
    console.log(ranges_obj);

    let final_results: number[] = [];

    ranges_obj.forEach(range => {
        const results = getRepeatingCharsInRange(range.min, range.max);
        final_results.push(...results);
    }
    );
    console.log('Final Results:', final_results.reduce((a, b) => a + b, 0));
}

main()