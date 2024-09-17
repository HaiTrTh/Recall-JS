// Create the element
const newH1 = document.createElement("h1");

// add properties, attribute
newH1.textContent = "I like the pizza!";
newH1.id= "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// append child
document.getElementById("box2").appendChild(newH1);
document.getElementById("box1").appendChild(newH1);
// document.getElementById("box2").appendChild(newH1);
// document.getElementById("box2").appendChild(newH1);


