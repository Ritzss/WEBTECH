// ! ============================== receving props ================================
//? case 1:
/*
var ChildComponent = (props) => {
    console.log(props);
    console.log("I am from ChildComponent");
    return (
        <>
        <h2>I am from ChildComponent</h2>
        <p> Name is {props.name}</p>
        <p> Age is {props.age}</p>
        <p> Course is {props.course}</p>
        </>
    )
}
export default ChildComponent;
*/


//? case 2:
var childcomponent = (props) => {
    console.log(props);
    console.log("I am from ChildComponent");
    return (
        <>
            <h2>I am from ChildComponent</h2>
            <p> <b>Name :</b> {props.name}</p>
            <p> <b>Age :</b> {props.age}</p>
            <p> <b>Course :</b> {props.course}</p>
            <p> <b>Skills are :</b> {props.skills.join(", ")}</p>
            <p> <b>Friend's name :</b> {props.friends.fname}</p>
            <p> <b>Year of Friendship :</b> {props.friends.yof}</p>
            <p> <b>Friend's city :</b> {props.friends.city}</p>
            <p> <b>Friend's package :</b> {props.friends.package}</p>
            <p> <b>Is Placed:</b> {props.isPlaced ? "Yes" : "No"}</p>
            <p> <b>Is Dead Inside:</b> {props.isDeadInside ? "Definitely" : "inDenial"}</p>
            <p> <b>Package:</b> {props.package}</p>


        </>
    )
}

//! ============================ Props Children ================================

//? case 3:
var childcomponent = (props) => {
    console.log(props);
    console.log("I am from ChildComponent");
    return (
        <>
            <h2>I am from ChildComponent</h2>
        </>
    )
}

//! ============================ Props DESTRUCTURING ================================

var childcomponent = ({ name, age, course, skills, friends, isPlaced, isDeadInside }) => {
    console.log("I am from ChildComponent");
    return (
        <>
            <h2>I am from ChildComponent</h2>
            <p> <b>Name :</b> {name}</p>
            <p> <b>Age :</b> {age}</p>
            <p> <b>Course :</b> {course}</p>
            <p> <b>Skills are :</b> {skills.join(", ")}</p>
            <p> <b>Friend's name :</b> {friends.fname}</p>
            <p> <b>Year of Friendship :</b> {friends.yof}</p>
            <p> <b>Friend's city :</b> {friends.city}</p>
            <p> <b>Friend's package :</b> {friends.package}</p>
            <p> <b>Is Placed:</b> {isPlaced ? "Yes" : "No"}</p>
            <p> <b>Is Dead Inside:</b> {isDeadInside ? "Definitely" : "inDenial"}</p>
        </>
    )
}
// export default childcomponent;

// ! ================================= default props =================================



//? case 4:
// Default props are used to set default values for props if they are not provided by the parent

var childcomponent = ({ name = "Default Name", age = 18, course = "Default Course", skills = ["java", "css"], friends = {no: "Friend"}, isPlaced = false, isDeadInside = false }) => {
    console.log("I am from ChildComponent");
    return (
        <>
        <h2>i am from childcomponent</h2>
            <p> <b>Name :</b> {name}</p>
            <p> <b>Age :</b> {age}</p>
            <p> <b>Course :</b> {course}</p>
            <p> <b>Is Placed:</b> {isPlaced ? "Yes" : "No"}</p>
            <p> <b>Is Dead Inside:</b> {isDeadInside ? "Definitely" : "inDenial"}</p>
        </>
    )
}

export default childcomponent;