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

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    if (expenditure.length < 1 || d < 1) return;;

    var start = 0;
    var end = d;
    var alert = 0;
    var median = 0.0;
    var midpoint = Number.parseInt(d / 2);
    for (let i = d; i < expenditure.length; i++){

        let newExp = expenditure.slice(start, end);
        console.log('NewExp before sorting: '+ newExp);
        newExp.sort((a, b) => a - b);
        console.log('NewExp after sorting: '+ newExp);
        median = newExp.length % 2 > 0 ? newExp[midpoint] : Number.parseFloat((newExp[midpoint - 1] + newExp[midpoint]) / 2).toFixed(2);
        console.log('Midpoint: '+midpoint);
        //median = newExp[midpoint];
        console.log('Median: '+median);
        if (expenditure[i] >= 2 * median) alert++;
        start++;
        end++;
    }

    return alert;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);

    ws.write(result + "\n");

    ws.end();
}
