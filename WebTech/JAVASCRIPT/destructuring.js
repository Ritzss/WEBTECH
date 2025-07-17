// !Destructuring

// ! ==================================================================================================================
// ! Array Destructuring

//case 1:
var a = [10,20,30,40,50];
/*
var b = a[0];
var c = a[1];
var d = a[2];
var e = a[3];
var f = a[4];
 */
var [b,c,d,e,f] = a;
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


// case 2:
var arr = [10,20,[300,400,500],60,70,80]
/*
var a = arr[0];
var b = arr[1];
var c = arr[2];
var m = c[0];
var n = c[1];
var o = c[2];
var d = arr[3];
var e = arr[4];
var f = arr[5];

 */

var [b,c,[d,e,f],g,h,i] = arr;
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// case 3:
var [b,c,[d,e,f],g,h,i] = [10,20,[300,400,500],60,70,80];
console.log(d);
console.log(f);

// case 4:
var [b,c,[d,e,f,m,n,o],g,h,i,j,k,l] = [10,20,[300, 400,500],60,70,80];
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(m);
console.log(n);
console.log(o);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);

//case 5:
var [b,c,[d,e,f],g,,i] = [10,20,[300,400,500],60,70,80];
console.log(g);
console.log(i); // undefined

// case 6:
var [,,[,,f],g,,] = [10,20,[300 ,400,500],60,70,80];
console.log(f);
console.log(g); 

// Case 7:
var ar = ['ritanshu',['chitranjan','manas'],['prashant','rohit',['dhoni','ab_devilers','dhawan',['virat','chahal']]]];
var [,[,],[,,[,x,,[,]]]] = ar;
var [,[,],[,,[,,,[g,]]]] = ar;
var [,[,c],[,,[,,,[,]]]] = ar;
var [,[,],[,e,[,,,[,]]]] = ar;
var [a,[,],[,,[,,,[,]]]] = ar;


console.log(g);
console.log(x);
console.log(c);
console.log(e);
console.log(a);


// ! ===================================================================================================================
// ! object destructuring

// case 1:
var obj = {sname:"ritanshu" , age:20, course: "javascript", skills:'jfs'};
var {sname,age,course,skills} = obj;
console.log(sname);
console.log(age);
console.log(course);
console.log(skills);

// case 2:
var obj = {sname:"ritanshu" , age:20, course: "javascript ", skills:'jfs'};
var {sname:sn,age:a,course:c,skills:s} = obj;
console.log(sn);
console.log(a);
console.log(c);
console.log(s);

// case 3:
var obj = {sname:"ritanshu" , age:20, course: "javascript",skills: {frontend: 'react js', backend: 'java',database:"mongodb"},
};

//explicit 
var {sname, age, course, talents,skills} = obj;
// var {frontend, backend, database} = talents;
var {frontend: f, backend: b, database: d} = skills;
console.log(sname);
console.log(age);
console.log(course);
console.log(f);
console.log(b);
console.log(d);
// implicit
var {sname, age, course,skills: {frontend: f, backend: b , database: d}} = obj;

console.log(sname);

// case 4:
var student_details={
    sname: "ritanshu",
    age: 20,
    course: ["jfs","mern","pfs"],
    skills: {
        frontend: ["react js",'html','css','javascript'],
        backend: ["java","nodejs","python"],
        database: ["mongodb","sql",'redis']
        },
    address:{
        presentAddress:{streetno: 123,area: "rkpuram"},
        permanentAddress:{state: "delhi",country: "india"}
        }
}
//explicit
var {sname,age,course,skills, address} = student_details;
console.log(sname);
console.log(age);
console.log(course);
console.log(address);
var {frontend: f, backend: b, database: d} = skills;
console.log(f);
var [f1,f2,f3,f4] = f;
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
console.log(b);
var [b1,b2,b3] = b;
console.log(b1);
console.log(b2);
console.log(b3);
console.log(d);
var [d1,d2,d3] = d;
console.log(d1);
console.log(d2);
console.log(d3);
var {presentAddress,permanentAddress} = address;
console.log(presentAddress);
console.log(permanentAddress);
var {streetno,area} = presentAddress;
console.log(streetno);
console.log(area);
var {state, country} = permanentAddress;
console.log(state);
console.log(country);
 
// implicit
var {sname,age,course,skills:{frontend:[f1,f2,f3,f4],backend:[b1,b2,b3],database:[d1,d2,d3]},address:{presentAddress:{streetno,area}, permanentAddress:{state, country}}} = student_details;
console.log(sname);
console.log(age);
console.log(course);
console.log(address);
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
console.log(b1);
console.log(b2);
console.log(b3);
console.log(d1);
console.log(d2);
console.log(d3);
console.log(presentAddress);
console.log(permanentAddress);
console.log(streetno);
console.log(area);
console.log(state);
console.log(country);