// ! ==========================================================spread in JS====================================================
//  spread operator is used to expand an array or object into a new array or object
//  it is used to add elements to an array or object
//  it is used to add properties to an object
// syntax: [...array] or {...object}

// ? Case 1:
var data = ["dhoni-thala", "kholi-cheeku", "rohit-shaan", "jadeja-jaadu"];
console.log(data);
console.log(...data);
console.log([...data]);
console.log({...data});

//? case 2:
var data1 = ["dhoni", "kholi", "rohit", "jadeja"];
var data2 = ["thala", "cheeku", "shaan", "jaadu"];

var mergedTeam=[...data1, ...data2];
console.log(mergedTeam);
var mergedTeam=["original names are these :",...data1,"nicknames are these" ,...data2];
console.log(mergedTeam);
var mergedTeam=["original names are these :", ...data1,"nicknames are these" , ...data2];
console.log(mergedTeam);

// ?case 3:
var data3 = { name: "dhoni", age: 40, city: {state:"chennai"} };
var data4 = { name: "kholi", age: 30, city: {state:" delhi"} };

var mergeObj = {...data4,...data3};
console.log(mergeObj);
var mergeObj1 = {
    ...data4,
    ...data3,
    "city":{...data3.city,...data4.city}
    };
console.log(mergeObj1);

//? case 4:

var data5 = [10, 20, 30, 40, 50, 60, 70, 80];
var data6 = [70, 80, 90, 100, 110];
var mergedArray = [...data5, ...data6];
var mergedObj ={...data5,...data6};
console.log(mergedArray);
console.log(mergedObj);


//? case 5:
var isritikhappy = true;
var happygames =["cricket","golf","pithu","hide and seek"];

var gaems = ["bunji jumping", "skydiving",...(isritikhappy ? happygames : []) ,"paragliding"];
console.log(gaems);

// ? case 6:
var ismerncomplete = true;
var newskills = [ "javascript", "react", "nodejs" , "angular", "expressjs"];
var softskills = ["communication", "aptitude", "reasoning", "english"];

var obj = {
    sname: "ritanshu",
    sroll: 123,
    course: "mern" ,
    skills: ['html', 'css' ],
};
var updatedskills = {
    ...obj,
    ...(ismerncomplete ? newskills: softskills),
};
console.log(updatedskills);
var newObj = {
    ...obj,
    skills: updatedskills
};
console.log(newObj);

// ? case 7:
var isloggedIn = false;
var dataAtlogin = {
    profiledata: "profile Information",
    feeddata: "feed Information",
    requestdata: "request Information",
};
var dataAtlogout = {
    status: "logged out",
    signupform : "here lies signup form",
    guestaccess: "guest access(temporary)"
};

var result = {
    ...(isloggedIn ? dataAtlogin : dataAtlogout),
}
console.log(result);

// ? case 8:
var data = {
    name: "ritanshu",
    age: 25,
    gender: "male",
}
console.log({...data, course: "node js" });


//!=================================================rest=====================================================================

