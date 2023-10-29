/*
console.log("hello")
let js = " amazing";

console.log( 40+8+23-10);
console.log("logeshwari");
console.log (45);

let firstname = "yashika";
console.log(firstname)

function add (y)
{
    let x =5;
    x=x+y
    return x
} 
result=add(6);
console.log(result);
let logi_maths ="hero";
let $function = 34;

let person = "jonas";
let PI = 4.5688;

let myFirstHtml = "website";
let myCurrentJS = "game";

console.log(myFirstHtml)

// primitive Number(float,int,decimal) of datatype
let age= 23;
console.log(age);
console.log(typeof age);

// primitive string(charater) datatype
let friendName ="vaishnavi";
console.log(friendName);
console.log(typeof friendName);

// primitive boolean(true or false) datatype
let currentname =true;
console.log(currentname);
console.log(typeof currentname);

//primitive undefined(empty value) datatype
let department;
console.log(department);
console.log( typeof department);

//primitive symbol datatype
let $carry = 3.5788;
console.log($carry);
console.log(typeof $carry);

//primitive big(billion) datatype
let ES2020 = 567624789489;
console.log(ES2020);
console.log(typeof ES2020);

console.log(typeof null);
console.log(typeof ES2015);

// opeartor
// arithmetric opeartor
x = 5;
y = 10;
z = x + y
console.log(z);

z = x * y
console.log(z);

z = x ** y
console.log(z);

z = x / y
console.log(z);

z = x % y
console.log(z);

z = x // y
console.log(z);

z = x - y
console.log(z);

x = 35
console.log(x);
x += 1;
console.log(x);

x -= 1;
console.log(x);

// comparison opeartor

a = 3;
b = 6;

a == b
console.log(a == b);
console.log(a === b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a != b);
console.log(a !== b);

const now = 2026;
let nithiya = now - 2018;
let vaishu = now - 2006;
console.log(now - 2000 > now - 2006);

average = (nithiya + vaishu)/2;
console.log(nithiya,vaishu,average);
let l,k;
l=k=25 - 5 -10;
console.log(l,k);

let mark_mass = 95;
let john_mass = 85;
let mark_height= 1.88;
let john_height = 1.76;
bmi_mark= mark_mass /mark_height ** 2 
bmi_john = john_mass /john_height ** 2 

let markHightBMI = (bmi_mark > bmi_john);

console.log(bmi_mark,bmi_john);
console.log(markHightBMI);
console.log('');

console.log('');*/
/*const firstName = "logeshwari";
const present = "student";
const birthYear = 2006;
const year = 2023;

const logi = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + present + '!';
console.log(logi);

const logiNew = "I' m ${firstName}, a ${year - birthYear}  years old ${present}!";
console.log(logiNew);

console.log("string with /n/ multiple /n/ lines");*/
let favorite = prompt('who are you movie');
let movie1 = 'leo';
let movie2 = 'vikram';
let movie3 = 'kaithi';
let movie4 ='rrr';

// if("leo" in lcu ){
//     console.log("true")
// }
// else{
//     console.log("False")
// };

const lcu = ['leo','vikram','rrr'];

// console.log(0 in lcu);

// const number = [2, 3, 4, 5];

// console.log(3 in number);

//lcu = ['leo','vikram','rrr']
 
if (lcu.includes(favorite)) {
    console.log('lokesh movie1 director')
} else if (lcu.includes(favorite)) {
    console.log('lokesh movie2 director')
} else if (lcu.includes(favorite)) {
    console.log('lokesh movie3 director')
}  else if (lcu.includes(favorite))  {
    console.log('lokesh movie4 director')
} else {
    console.log('lokesh not movies director')
}


//if(lcu.includes(favorite)){
    //console.log("True")
//}
//else{
    //console.log("False")
//}