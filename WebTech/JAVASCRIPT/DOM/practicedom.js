// ! resume building DOM
let body = document.body;
let h1 = document.createElement("h1");
let p = document.createElement("p");
let p2 = document.createElement("p");
let hr = document.createElement("hr");
let h2 = document.createElement("h2");
let section = document.createElement("section");
let div = document.createElement("div");
// !======================================================================== content ==============================================================================================
h1.innerHTML = "<i>Ritanshu Babuta</i>";
p.innerHTML = "I am an engineer who loves to code and build applications which are used to make life easier and better. <u>I am a full stack developer</u> and I love to work on new technologies and learn new things. I am a quick learner and I love to work in a team. I am a good communicator and I love to share my knowledge with others. I am a good listener and I love to help others. I am a good team player and I love to work in a team. I am a good leader and I love to lead a team.";
h1.style.color = "white";
h1.style.textAlign = "center";
h1.style.fontSize = "50px";
p.style.color = "white";
p.style.textAlign = "center";
p.style.fontSize = "20px";
hr.style.color = "white";
h2.innerHTML = "<i>Skills</i>"
p2.innerHTML = "<i>Java,<br>Python,<br>C++,<br>HTML,<br>CSS,<br> JavaScript,<br> React,<br> Node.js,<br> Express.js,<br> MongoDB,<br> MySQL,<br> PostgreSQL,<br> Git,<br> GitHub,<br> Docker,<br> Kubernetes<br></i>";
p2.style.textWrap = "wrap";
p2.style.textAlign = "center";
section.style.border = "2px solid white";
body.style.background = "linear-gradient(to right,rgb(211, 20, 20) 1% ,rgb(66, 151, 255) 30%,#26bf08 60%,#e3ff0f 8%)";
h2.style.textAlign = "center"; 
section.style.width = "10%";
body.style.color = "white";
section.animate(
    [
        { transform : "translateX(-200px)" },
        { transform : "translateX(0px)" }
    ],
    {
        duration: 6000
    }
);
// !====================================================================== append =================================================================================================
body.append(h1);
body.append(p);
body.append(hr);
body.append(div);
div.append(section);
section.append(h2);
section.append(p2);
