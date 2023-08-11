'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    let odd: string = ''
    let even: string = ''
    for(let i = 1; i < inputLines.length; i++){
        
        //Variabile
        let odd: string = ''
        let even: string = ''
        let str =inputLines[i]
        
        for(let c = 0; c < str.length; c++) {
            if( c%2 === 0) {
                even += str[c]
            }
            else{
                odd += str[c]
            }
        }
        console.log(even, odd)

            
    }

}
