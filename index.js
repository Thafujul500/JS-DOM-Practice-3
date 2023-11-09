
// document.getElementById("headin_1").innerHTML = "I am Thafujul Islam"
var myheading = document.getElementById("headin_1");

myheading.innerHTML = "I am Zihad."

// document.getElementById("para_1").innerHTML = "This is my another para."

var myPara = document.getElementById("para_1");

myPara.innerHTML = "This is my another para."

// document.getElementsByTagName("h2")[1].innerHTML = "This is my aother h2"

var my_h2 = document.getElementsByTagName("h2")[1];

my_h2.innerHTML = "This is my ..."

// document.getElementsByClassName("myClass")[0].innerHTML = "hi"

var my_Class = document.getElementsByClassName("myClass")[0];

my_Class.innerHTML = "Hellow."

//      Queary Selector

document.querySelector("#queary_para").innerHTML = "Oh my Allah this is queary paragraph.."

document.querySelector(".queary_h1").innerHTML = "Oh my Allah this is queary heading.."

// document.querySelector("h3").innerHTML = "Oh my Allah is is a h3 quary heading."

var quary_tag = document.querySelector("h3");

quary_tag.innerHTML = "this is nother variaable queary selector."

// queary selector Advance 

// document.querySelector("li a").innerHTML = "new tabs"

// document.querySelector(".my_div a").innerHTML = "This is a child."

// document.querySelectorAll("h4")[0][1].innerHTML = "This is last h4."

//           Onclick 

function myMessage(){
    alert("Hellow Everyone.")
}

function t(){
    alert("I am Thafujul")
}

function fa(){
    var btn = document.querySelector("#onak_para");
    btn.innerHTML = "You have click on button!"
}

function tha(){

    var result = document.getElementsByClassName("zi")[0];


    result.innerHTML = "My full name is Thafujul Islam."
}

// <!-- A To Z DOM -->

// var hh = document.getElementById("tt");

// hh.innerHTML = "I am a h1";

var crt = document.createElement("h1");

var text = document.createTextNode("I love you Bangladesh.")

crt.appendChild(text)


var myDiv = document.getElementById("my-div");

myDiv.appendChild(crt);

var rmv = getElementsByTagName("h1")[0];

myDiv.removeChild(rmv)

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("I am in the first positin.")

heading0.appendChild(text0);


myDiv.insertBefore(heading0,rmv)


// DOM traversing & manipulating

function color(){
    var myVar = document.getElementById("tha");

    myVar.style.color = "red";
    myVar.style.fontSize = "40px";
}

function discolor(){
    var myvar = document.getElementById("tha");
    myvar.style.color  = "blue";
    myvar.style.fontSize = "1rem";

}






















