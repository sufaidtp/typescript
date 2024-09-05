// let array:number[]=[8,4,12,3,15];

// function bubbleSort(array:number[]){
// let count:number=1;
// do{
//     count=0;
//     for(let i:number=1;i<array.length;i++){
//         if(array[i]<array[i-1]){
//             let temp:number = array[i];
//             array[i]=array[i-1];
//             array[i-1]=temp;
//             count=1;
//         }
//     }
// }
// while(count){
//     return array;
// }

// }

// console.log(bubbleSort(array));



// check string is palindrome or not 

// let name: string = 'hello';
// let left: number = 0;
// let right: number = name.length - 1;

// function palindrome(name: string, left: number, right: number) {
//     if (name[left] != name[right]) {
//         //console.log("Not palindrome");
//         return 'not palindrome'
//     }
//     if (left >= right) {
//         return 'palindrome'
//     }
//     return palindrome(name, left + 1, right - 1);
// }

// console.log(palindrome(name, left, right));



// accept an array and display using functions

// function getArray():number[]{
//     const prompt=require('prompt-sync')();
//     const arraySize=parseInt(prompt("enter array size: "),10);
//     const array:number[]=[];

// for (let i:number = 0; i < arraySize; i++) {
//     const element = parseInt(prompt(`Enter element ${i + 1}: `), 10);
//     array.push(element);
//   }

//   return array;
// }
// function displayArray(arr: number[]): void {
//   console.log('Array values are:');
//   arr.forEach((value, index) => {
//     console.log(`Element ${index + 1}: ${value}`);
//   });
// }


// function main(): void {
//   let myArray: number[];

//   myArray = getArray();
//   displayArray(myArray);
// }

// main();



// check a number is prime or not.

// let value:number=15;

// function isPrime(value:number):boolean{
//     let count:number=0;
// for(let i:number=2;i<value;i++){
//     if(value%i===0){
//         count+=1;
//     }
// }
// return count>0?false:true;
// }

// console.log(isPrime(value));


//const prompt = require('prompt-sync')(); 

// const test: number = parseFloat(prompt("Enter marks in written exam:") || '');
// const lab: number = parseFloat(prompt("Enter marks in lab exam:")|| '');
// const assignment: number = parseFloat(prompt("Enter marks from assignment:")|| '');

// const grade:number = (test*70)/100 + (lab*20)/100 + (assignment*10)/100;

// console.log("Student Grade is ", grade);


//  const prompt = require('prompt-sync')(); 
// const income: number = parseInt(prompt("Enter your annual income:") || '');
// let tax:number;
// switch(true){
//     case (income<=250000): {
//         console.log("No tax");
//         break;
//     }
//     case (income>250000 && income<500000): {
//         tax=(income*5)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
//     case (income>500000 && income<1000000): {
//         tax=(income*20)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
//     case (income>1000000 && income<5000000): {
//         tax=(income*30)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
// }



// let k:number=1;
// let str:string='';
// for(let i:number=0;i<4;i++){
//     for(let j:number=0;j<4;j++){
//         if(j<=i){
//             str+= `${k} `;
//             k++;
//         }
//         else{
//            str+=" "; 
//         }
//     }
//     str+='\n';
    
// }
// console.log(str);

// const prompt = require('prompt-sync')(); 

// const limit: number = parseInt(prompt("Enter array limit:") || '');
// let array:number[]=[];
// let result:number[]=[];

// for(let i:number=0;i<limit;i++){
//     const value:number=parseInt(prompt("Enter array value "+i+":" ));
//     array.push(value);
// }

// for(let i:number=1;i<limit;i++){
//     result.push(array[i]*array[i-1])
// }

// console.log("Resultant array is: ",result);


// function reverse(my_string: string):void{
//     try{
//         const reverse_string: string = my_string.split('').reverse().join('');
//         console.log("reverse string:",reverse_string);
//         console.log("type-->",typeof reverse_string);   
//     }catch(error){
//         console.log(error);
        
//     }
// }

// reverse("typescript");


// const prompt = require('prompt-sync')();

// function getArray(size: number): number[][] {
//     let array: number[][] = [];
//     for (let i = 0; i < size; i++) {
//         array[i] = [];
//         for (let j = 0; j < size; j++) {
//             array[i][j] = parseInt(prompt(`Enter value for element [${i}][${j}]: `));
//         }
//     }
//     return array;
// }

// function addArray(array1: number[][], array2: number[][], size: number): number[][] {
//     let sumArray: number[][] = [];
//     for (let i = 0; i < size; i++) {
//         sumArray[i] = [];
//         for (let j = 0; j < size; j++) {
//             sumArray[i][j] = array1[i][j] + array2[i][j];
//         }
//     }
//     return sumArray;
// }

// function displayArray(array: number[][]) {
//     console.log("Sum of array 1 and array 2:");
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].join("\t"));
//     }
// }

// function main() {
//     const size: number = parseInt(prompt("Enter the size of the array: "));

//     console.log("Enter the values of array 1:");
//     let array1 = getArray(size);

//     console.log("Enter the values of array 2:");
//     let array2 = getArray(size);

//     let sumArray = addArray(array1, array2, size);

//     displayArray(sumArray);
// }

// main();



// const prompt=require('prompt-sync')();
// let my_height:number=parseInt(prompt("Enter your height :"));
// function checkisNan(my_height: number):void{
// try{
//     if(isNaN(my_height)){
//         throw("NotaNumberError");
//     }else if(my_height>200){
//         throw("hugeHeightError");
//     }else if(my_height<40){
//         throw("tinyHeightError");
//     }else{
//         console.log("valid height entered.");
        
//     }
// }catch(error){
//     console.log(error);
// }

// }
 
// checkisNan(my_height);



// class Car{
//     name: string;
//     mileage:number;
//     max_speed:number
//     constructor(name:string,mileage:number,max_speed:number){
//         this.name=name;
//         this.mileage=mileage;
//         this.max_speed=max_speed;
//     }
// }

// const myClass = new Car('polo',16,160);
// console.log(myClass.name);
// console.log(myClass.mileage);
// console.log(myClass.max_speed);



// Define the myFilter function
function myFilter(myArray: number[], callback: (num: number) => boolean): number {

    const sum = myArray.reduce((acc, num) => acc + num, 0);

    callback(sum);

    return sum;
}

function checkEvenOdd(num: number): boolean {
    if (num % 2 === 0) {
        console.log("The sum is even.");
        return true;
    } else {
        console.log("The sum is odd.");
        return false;
    }
}

const myArray = [1, 2, 3, 4, 5];
const result = myFilter(myArray, checkEvenOdd);
console.log("Sum of the array:", result); 



