let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length)
console.log(arr)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.join(" or "))

//concat
 let a1 =[1,2,3]
 let a2 = [4,5,6]
 let a3 = [7,8,9]
let b = a1.concat(a2,a3);
console.log(b);

//splice
let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
numbers.splice(1, 3)  
numbers.splice(1, 3, 222, 333) 
console.log(numbers)
// (4) [1, 222, 333, 5]


//loops
//for
let a = [1,93, 5,6,88]
a.forEach((value, index, arr)=>{
    console.log(value,index,arr)
})
//for in
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for(const key in obj){
    if (Object.hasOwn.call(obj, key)){
       const element = obj[key];
       console.log(element)
    }
}
//for of
for (const element of a) {
    console.log(element)
}