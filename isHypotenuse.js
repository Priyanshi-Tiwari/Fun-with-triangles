var sides=document.querySelectorAll(".input-side");
var button=document.querySelector("#submit-btn");
var output=document.querySelector("#output-div");

function calculateSumOfSquares(a,b){
    var sum= a*a+b*b;
    return sum
}

function isHypotenuse(){

    var sumOfSquares=calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    var hypotenuse=Math.sqrt(sumOfSquares);
    output.innerText="The hypotenuse is "+hypotenuse

}


button.addEventListener("click",isHypotenuse)