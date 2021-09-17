var myForm=document.querySelector(".quiz-form");
var button=document.querySelector("#submit-btn");
var output=document.querySelector("#output-div");

 var answers=["90°","right angled","equilateral","one right angle"]
function playQuiz(){
    var formData= new FormData(myForm);
    score=0;
    index=0;
    for(var value of formData.values()){
        if(value===answers[index]){
            score=score+1;

        }
        index=index+1;
        
    }
    output.innerText="Your score is "+score;

}


button.addEventListener("click",playQuiz)
