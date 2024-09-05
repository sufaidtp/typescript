// const limit:number =10;
// let sum:number=0;
// for(let i:number=1;i<=limit;i++){
//     if(i%2==1){
//         sum+=i;
//     }
// }
// console.log("sum of odd number upto limit is:", sum);

// for(let i:number=1;i<=5;i++){
//     let str:string='';
//     for(let j:number=1;j<=i;j++){
//         str=str+' '+ j;
//     }
//     console.log(str);
// }

// let array1:number[]=[5,6,3,4,5];
// let array2:number[]=[6,10,2,9,10];

// for(let i:number=0;i<array1.length;i++){
//     let temp:number=array1[i];
//     array1[i]=array2[i];
//     array2[i]=temp;
// }

// console.log("array1 is:", array1);
// console.log("array2 is:", array2);


let array:number[]=[8,42,12,7,15];
let count:number=0;
for(let i:number=0;i<array.length;i++){
    if(array[i]%2==0){
            count+=1;
    }
}
console.log("Total even number is:", count);