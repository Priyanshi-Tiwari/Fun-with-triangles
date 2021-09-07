var angles=document.querySelectorAll(".input-angle");
var button=document.querySelector("#submit-btn");
var output=document.querySelector("#output-div");

function calculateSumOfAngles(angle1,angle2,angle3){
    var sum=angle1+angle2+angle3;
    return sum;
}

function isTriangle(){
    var sumOfAngles= calculateSumOfAngles(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value))
    if(sumOfAngles===180){
        output.innerText="This is a triangle"
    }
    else{
        output.innerText="This is not a triangle"
    }
}



button.addEventListener("click",isTriangle)