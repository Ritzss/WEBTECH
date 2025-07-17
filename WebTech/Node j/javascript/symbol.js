// ! symbol data type
/*
symbol is a premitive data type
it helps us to create unique, even the discription is same
it mostly used to create unique keys in an object
to use symbol key eg: [sym1],[sym2]
it is not iterrable
 */

console.log(Symbol("_id"));
console.log(Symbol("_id") === Symbol("_id"));

var admin_id = Symbol("_id");
var user_id =Symbol("_id");

var sym1 =Symbol("uniquekey1");
var sym2 =Symbol("uniquekey2");

var obj ={
    [admin_id] : 123,
    [user_id] : 456,
    name : 'Ritanshu',
    age : 21,
    course : 'MERN',
}
