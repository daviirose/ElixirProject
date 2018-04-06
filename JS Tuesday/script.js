unction rainbow() {
    var colors = ["red", "orange", "yellow", "green", "blue"]
    var pTags = document.getElementById("p");
    pTags.style.color = "red";
}
rainbow();
document.getElementsByTagName('body')[0].style.backgroundColor = "green";
var multiCLicka = 0;
var multiCLickb = 0;
function setColor() {
    var aTag = document.getElementById("color");
    if (multiCLicka % 2 === 0) {
        aTag.style.color = "blue";
        aTag.innerHTML = "Blue";
    } else {
        aTag.style.color = "black";
        aTag.innerHTML = "Black";
    }
}
function changeText() {
    var aTag = document.getElementById("text");
    if (multiCLickb % 2 === 0) {
        aTag.innerHTML += " a nosy button pusher.";
    } else {
        aTag.innerHTML = "You are ...";
    }
}
function addClicka() {
    multiCLicka++;
}
function addClickb() {
    multiCLickb++;
}
function addText() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Java");
    node.appendChild(textnode);
    document.getElementsByTagName("div")[0].appendChild(node);
}
function addImage() {
    var img = document.createElement("img");
    img.src = "java.png";
    img.style.height = "50px";
    img.style.width = "50px";
    document.getElementsByTagName("div")[0].appendChild(img);
}
