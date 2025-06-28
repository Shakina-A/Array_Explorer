let numbers=[];

function getArray(){
   const input = document.getElementById("arrayInput").value;


    numbers=input.split(",")
    .map((num)=>parseFloat(num.trim()))
    .filter((num)=>!isNaN(num));//isnan check if it a number or not
    return numbers;
}

//displaying output
function displayResult(text){
    document.getElementById("result").innerText=text;
}

//sorting
function sortArray(){
    getArray();
    displayResult("Ascending Sorted:"+numbers.sort((a,b)=>a-b));
}

//even
function findEven(){
    getArray();
    displayResult("Even:"+numbers.filter((num)=>num%2===0));
}

//prime number
function findPrimes(){
    getArray();
    function isPrime(num){
        if(num<2) return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i ==0) return false;
        }
        return true;
    }
    displayResult("Primes:"+numbers.filter(isPrime));
}

//to finf odd numbers
function findOdd(){
    getArray();
    displayResult("Odd:"+numbers.filter((num)=>num%2!==0));
}

//to find sum
function findSum(){
    getArray();
    displayResult("Sum of Elements:"+numbers.reduce((acc, curr) => acc + curr, 0));
}

function findAvg(){
    getArray();
    let sum=numbers.reduce((acc,curr)=>acc+curr,0);
    displayResult("Average of Elements:"+sum/numbers.length);
}

function reverse(){
    getArray();
    displayResult("Reversed: " + numbers.reverse());
}
 
function findMax(){
    getArray();
    const max = Math.max(...numbers);
    displayResult("Maximum Value: " + max);
}

function findMin(){
    getArray();
    const min = Math.min(...numbers);
    displayResult("MinimumValue: " + min);
}

function findDuplicate() {
    getArray();
    let duplicates = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
                duplicates.push(numbers[i]);
            }
        }
    }

    if (duplicates.length > 0) {
        displayResult("Duplicate Elements: " + duplicates.join(", "));
    } else {
        displayResult("No duplicates found.");
    }
}

function RemoveDuplicate(){
    getArray();
    const unique = [...new Set(numbers)];
    displayResult("Without Duplicates: " + unique.join(", "));
}

function findMedian(){
    getArray();
    const sorted=numbers.sort((a,b)=>a-b);
    const mid = Math.floor(sorted.length / 2);

    let median;

    if (sorted.length % 2 === 0) {
        // if length is even 
        median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        // if length is odd 
        median = sorted[mid];
    }

    displayResult("Median: " + median);
}

function findMode() {
    getArray();
    let modes = [];
    let maxCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            modes = [numbers[i]];
        } else if (count === maxCount && !modes.includes(numbers[i])) {
            modes.push(numbers[i]);
        }
    }

    displayResult("Mode: " + modes.join(", "));
}

function findsqnumber(){
    getArray();
    let sqnum=[];
    for(let i=0;i<numbers.length;i++){
        let sqt=Math.sqrt(numbers[i]);
        if(numbers[i]===sqt*sqt && !sqnum.includes(numbers[i])){
               sqnum.push(numbers[i]);
        }
    }
    displayResult("Square Root Numbers:"+sqnum.join(","));
}

function findFactorial() {
    getArray();
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num < 0 || !Number.isInteger(num)) {
            result.push(`Invalid for ${num}`);
            continue;
        }

        let fact = 1;
        for (let j = 1; j <= num; j++) {
            fact *= j;
        }

        result.push(`${num}! = ${fact}`);
    }

    displayResult("Factorials of each element: " + result.join(", "));
}

function filter(){
    getArray();
    const ip= parseFloat(document.getElementById("Input").value);
     const filtered = numbers.filter(num => num >= ip);
    displayResult("Filtered value: " + filtered.join(", "));
}

