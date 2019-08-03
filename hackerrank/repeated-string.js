'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    //if string is of length 1 and is 'a', then all characters are 'a'
    if (s.length === 1 && s === 'a') { console.log('in 1'); return n; }

    //if string is of length 1 and is not 'a', then return
    if (s.length === 1 && s !== 'a') { console.log('in 2'); return 0; }

    //if string does not contain 'a' then no point in proceeding
    if (s.indexOf('a') === -1) { console.log('in 3'); return 0; }

    //string cannot be greater than 100 characters
    if (s.length > 100) { console.log('in 4'); return 0; }

    let count = 0;

    if (n < s.length) {
        for (let i = 0; i < n; i++){
            if (s[i] === 'a') count++;
        }
        console.log('in 5');
        return count;
    }

    let base = 0;

    //calculate the # of 'a's in the base string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') base++;
    }

    console.log('in 6');
    console.log('base: ' + base);
    //calculate the number of times the base string is repeated
    //base string is repeated at least once + remaining characters/base string.length + remaining characters%base string.length

    //construct the remaining string
    let remaining = '';
    //# of characters that remain after the first occurrence
    let m = n - s.length;

    let middle = parseInt(m / s.length) * base;
    console.log('middle: ' + middle);
    
    
    //let repeats = middle * base;
    //console.log('repeats: ' + repeats);
    
    let lastString = s.substring(0, m % s.length);
    let last = 0;
    for (let i = 0; i < lastString.length; i++) {
        if (lastString[i] === 'a') last++;
    }
    console.log('lastString Length: ' + last);
    return base + middle + last;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
