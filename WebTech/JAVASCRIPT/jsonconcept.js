// ! json 
/* take from officcial site*/

// ? case 1:
// array
    const arr = [1, 2, 3, 4, 5];
    const json = JSON.stringify(arr);
    console.log(json); // [1,2,3,4,5]
    let arr4 = JSON.parse(json);
    console.log(arr4); // [1,2,3,4,5]   
// ? case 2:
// object
    const obj = { name: 'yash', age: 30 };
    const json2 = JSON.stringify(obj);
    console.log(json2); 
    let obj2 = JSON.parse(json2);
    console.log(obj2); // { name: 'yash', age: 30 }

// ? case 3:
 // object inside array
    const arr1 = [
    { name: 'ritanshu', age: 30 },
    { name: 'yash', age: 25 }
    ];
    const json1 = JSON.stringify(arr1);
    console.log(json1); 
    let obj1 = JSON.parse(json1)
    console.log(obj1); // [{name: 'ritanshu', age: 30},
// ? case 4: 
// object with nested object
    const obj3 = {
    name: 'prashant',
    age: 30,
    address: {
        street: '123',
        city: 'delhi',
        state: 'india',
        zip: '110022'
        }
        };
    const json3 = JSON.stringify(obj3);
    console.log(json3); 
     const js4 = JSON.parse(json3); 
     console.log(js4);

// ? case 5:
// arrray with nested array
    const arr2 = [
    "yash",
    "ritanshu",
    "prashant",
    [1, 2, 3],
    [4, 5, 6],
    [true,false],
    [null, undefined],
    'manav',
    "pranchi"
     ];
     const json5 = JSON.stringify(arr2);
     console.log(json5); 
     const js5 = JSON.parse(json5); 
     console.log(js5);

// ? case 6:
// array inside object
    const obj4 = {
    name: 'yash', 
    age: 30,
    hobbies: [ 'reading', 'swimming', 'coding' ]
    };
    const json6 = JSON.stringify(obj4);
    console.log(json6);
     const js6 = JSON.parse(json6); 
     console.log(js6);