var sides=document.querySelectorAll(".side");
var button=document.querySelector("#submit-btn");
var output=document.querySelector("#output-div");

function calculateArea(){
    var area=(1/2)*sides[0].value*sides[1].value;
    output.innerText="The area is "+area;
}

button.addEventListener("click",calculateArea)