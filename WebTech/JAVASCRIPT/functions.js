//!==========================functions==========================================
//? types of functions 
       /* 1.named function
        2.anonymous functions
        3.first class function
        4.functional expression
        5.immediate invoakation function expression
        6.arrow function
        7.callback function
        8.higher-order function 
        9.nested function
        10.

        */
//? named function
// function made with function identifier is known as named function
    //! syntax
            /*function 'function_name'{
                content
            }
    //? example1:
            function greet(){
                return "hii, hello, how are you";
            }
            console.log(greet) // to see function declaration
            console.log(greet()) // to inwoke the function
    //? example2
            function sum(a,b){
                return a+b;
            }    
            console.log(sum) // to see function declaration
            console.log(sum(10,20)) // to inwoke the function
            */
//? anonymous function
// An anonymous function is a function that does not have a name and is often used as a value.
            //! syntax
            /* let 'variable_name' = function (){
                content
            }*/
    //? example1
            /*  
            let greet = function (){
            return "hii, hello, how are you";}  
            */
    //? example2
//? nested function
    //nested function is the functions 
    //? example1
    // console.log('start');
    // function grandParent(){
    //     var gp=80;

    //     function parent(){
    //         var p=50

    //         function child(){
    //             var c=-30

    //             var balance_land=gp+p+c;
    //             return balance_land;
    //         }
    //         return child();
    //     }
    //     return parent();
    // }
    // console.log(grandParent());
    // console.log('end');

//!==================================currying=========================================================

//?curring function
/*
example1:*/
function fun1(){
console.log('Oh My Gawddd!')
    function fun2(){
    console.log("fine thank you!")
        function fun3(){
            return " hello everynyan! how are you"
        }
        return fun3;
    }
    return fun2;
}

// console.log(fun1);
// console.log(fun1()()());
// console.log(fun1()());
console.log(fun1());
