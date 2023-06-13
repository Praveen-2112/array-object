var section = document.getElementById("about");

var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");

var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("row");



var gallery = [{
    imgsrc: "images/img-1.jpg",
    company: "Bajaj",
    model: "pulsar",
    Price: "134000",
    color: "red",
},
{
    imgsrc: "images/img-2.jpg",
    company: "Royal Enfield",
    model: "classic 350",
    Price: "240000",
    color: "red",
},
{
    imgsrc: "images/img-4.avif",
    company: "Hero",
    model: "splendor",
    Price: "84000",
    color: "black",
},
{
    imgsrc: "images/img.jpg",
    company: "Honda",
    model: "unicorn",
    Price: "114000",
    color: "black",
},]
gallery.forEach(function (element) {

    var div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.classList.add("col");

    var div4 = document.createElement("div");
    div3.appendChild(div4);
    div4.classList.add("card");

    var image = document.createElement("img");
    div4.appendChild(image);
    image.src = element.imgsrc;

    var div5 = document.createElement("div");
    div4.appendChild(div5);
    div5.classList.add("box");

    var heading = document.createElement("h3");
    div5.appendChild(heading);
    heading.innerHTML = element.company;

    var para = document.createElement("p");
    div5.appendChild(para);
    para.innerHTML = element.model;

    var para = document.createElement("p");
    div5.appendChild(para);
    para.innerHTML = element.Price;

    var para = document.createElement("p");
    div5.appendChild(para);
    para.innerHTML = element.color;
})