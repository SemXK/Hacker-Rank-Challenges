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
    class Person{
        //Class variables
        initialAge:number;
        constructor(initialAge: number) {
            this.initialAge = initialAge
        }
        
        //Class Function
        checkAge(): void {
            if(this.initialAge < 0) {
                console.log('Age is not valid, setting age to 0.');
                console.log('You are young.');
                this.initialAge = 0
            }
            else if(this.initialAge < 13) {
                console.log('You are young.');
            }
            else if(this.initialAge >= 13 && this.initialAge < 18) {
                console.log('You are a teenager.');
            } 
            else{
                console.log('You are old.');
            }                        
        }
        launchTwice() {
            this.checkAge()
            this.initialAge += 3;
            this.checkAge()
        }
    }
    for(let i = 1; i < inputLines.length; i++) {
        new Person(Number(inputLines[i])).launchTwice()
        if(!(i == inputLines.length -1 )) {
            console.log('')
        }
    }
}
