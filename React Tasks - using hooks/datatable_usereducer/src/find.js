// const Find = ()=>{

const age =["20","35","25","52","41"]
let res = age.findIndex((val=>{
    return val>"50";
}))
console.log(res);

let num = ["t","r"]
num.push(2)
console.log(num);

let num1 = [12,25,52,35,62]
let res1 = num1.every((val=>{return val>10}))
console.log(res1);
let name = ['t','k','c']
let y = Object.keys(name)
console.log(y);

let x = [1,2,3,4,5]
x.splice(2,3,'x','y')
console.log(x);

let hello = ['a','b','c','d','e']
let ray = hello.indexOf('c',0)
console.log(ray);
let ray1 = hello.indexOf('b',3)
console.log(ray1);

// let hi="maha"
// hi.reverse();
// console.log(hi);


// let hi = "maha";
// let reversedHi = hi.reverse(
    
// );
// console.log(reversedHi);

let mariya = [44,55,'a','b',66,77];
for (let index = 0; index < mariya.length; index++) {
console.log(mariya[index]);
}
// }
// export default Find;

let r = [ 'a', 'b', 'c', 'a', 'b', 'c', 'a']
let t = r.lastIndexOf('c',0)
console.log(t)