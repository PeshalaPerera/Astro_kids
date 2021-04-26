//selecting all required elements
const start_btn = document.getElementById('start_btn');
const info_box = document.getElementById('info_box');
const exit_btn = document.getElementById('quit');
const continue_btn = document.getElementById('continue');
const quiz_box = document.getElementById('quiz_box');
const result_box = document.getElementById('result_box');
const option_list = document.getElementById('option_list');
const timeText = document.getElementById('time_left_txt');
const timeCount = document.getElementById('timer_sec');
const restart_quiz = document.getElementById('restart');
const next_btn = document.getElementById("next_btn");

// Varibles
var startingTime;
var endingTime;
var que_count = 0;
var userScore = 0;
var correct_anwers = 0;
var incorrect_anwers = 0;
var answered_questions = 0;
var counter;

// if start button clicked
start_btn.addEventListener("click", function() {
    // get starting time
    startingTime = new Date().getTime();
    //display info box
    info_box.classList.add("activeInfo");
});

// if exit button clicked
exit_btn.addEventListener("click", function() {
    //hide info box
    info_box.classList.remove("activeInfo");
});

// if continue button clicked
continue_btn.addEventListener("click", function() {
    //hide info box
    info_box.classList.remove("activeInfo"); 
    //display quiz box
    quiz_box.classList.add("activeQuiz"); 
    //calling showQestions function
    showQuetions(0); 
    //calling startTimer function
    startTimer(60); 
});

// if restart button clicked
restart_quiz.addEventListener("click", function() {
    // reloading the page
    location.reload();
});

// if next button clicked
next_btn.addEventListener("click", function() {
    //if question count is less than total question length
    if(que_count < questions.length - 1){ 
        //increment the que_count value
        que_count += 1; 
        //calling showQestions function
        showQuetions(que_count); 
        //calling startTimer function
        startTimer(60); 
        //change the timeText to Time Left
        timeText.textContent = "Time Left"; 
    }else{
        //clear counter
        clearInterval(counter);
        //calling showResult function
        showResult();
    }
});

// startTimer function for each question
function startTimer(time){
    // clearing previous counter
    clearInterval(counter);
    // setting the counter
    counter = setInterval(timer, 1000);

    function timer(){
        //changing the value of timeCount with time value
        timeCount.textContent = time; 
        //decrement the time value
        time -= 1; 

        //if timer is less than 0
        if(time < 0){ 
            //clear counter
            clearInterval(counter); 
            //change the time text to time off
            timeText.textContent = "Time Off"; 
            //getting all option items
            const allOptions = option_list.children.length;
            //getting correct answer from array
            var correcAns = questions[que_count].answer; 

            //if there is an option which is matched to an array answer 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    //Adding green color to matched option
                    option_list.children[i].setAttribute("class", "option correct");
                    //ticking the radio button
                    document.getElementById(i).checked = true; 
                }
            }

            //once user select an option then disabled all options
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            
            //show the next button if user selected any option
            next_btn.classList.add("show"); 
        }
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    var que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    var option_tag = '<div class="option" id="option1" onclick="optionSelected(1)"><span>'+ questions[index].options[0] +'</span><input type = "radio" name = "answer" value ="0" id="0"/></div>'
    + '<div class="option" id="option2"  onclick="optionSelected(2)"><span>'+ questions[index].options[1] +'</span><input type = "radio" name = "answer" value ="1" id="1"/></div>'
    + '<div class="option" id="option3"  onclick="optionSelected(3)"><span>'+ questions[index].options[2] +'</span><input type = "radio" name = "answer" value ="2" id="2"/></div>'
    + '<div class="option" id="option4"  onclick="optionSelected(4)"><span>'+ questions[index].options[3] +'</span><input type = "radio" name = "answer" value ="3" id="3"/></div>';
    //adding new span tag inside que_tag
    que_text.innerHTML = que_tag;
    //adding new div tag inside option_tag
    option_list.innerHTML = option_tag;
}

function optionSelected(n){
    // getting the radio value
    var selectedRadioValue = getRadioValue(document.getElementsByName("answer"));
    
    //clear counter
    clearInterval(counter);

    //getting user selected option
    var userAns = questions[que_count].options[selectedRadioValue];

    //getting correct answer from array
    var correcAns = questions[que_count].answer;

    //getting all option items
    const allOptions = option_list.children.length; 
    
    answered_questions += 1;

    var answer = document.getElementById('option' + n);

    if(userAns == correcAns){
        userScore += 2;
        correct_anwers = correct_anwers + 1;
        answer.classList.add("correct");
    }else{
        userScore -= 1;
        incorrect_anwers = incorrect_anwers + 1;
        answer.classList.add("incorrect");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }

    //show the next button if user selected any option
    next_btn.classList.add("show");

}

// getradiovalue function
function getRadioValue(radioArray) {
   var i;
   for ( i = 0; i < radioArray.length; i++ ) {
      if ( radioArray[ i ].checked ) { 
         return radioArray[ i ].value;
      }
   }
   return "";
}


function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    
    //getting time in seconds
    endingTime =  new Date().getTime();
    let question_time = (endingTime - startingTime)/1000;

    const scoreText = result_box.querySelector(".score_text");

    if (userScore >= 20){
        var scoreTag = `<center>and congrats!!! 🎉, You got <p> ${userScore} out of 20 </p> <br/> You have answered : ${answered_questions} Questions <br/> Correct answers : ${correct_anwers} <br/>Incorrect answers :  ${incorrect_anwers}  <br/> Time Taken: ${question_time}s </p></center>`;
        scoreText.innerHTML = scoreTag; 
        result_box.classList.add("quiz_green");
    }
    else if(userScore >= 10){ 
        var scoreTag = `<center>and good ! 😎, You got <p> ${userScore} out of 20 </p> <br/> You have answered : ${answered_questions} Questions <br/> Correct answers : ${correct_anwers} <br/>Incorrect answers :  ${incorrect_anwers}  <br/> Time Taken: ${question_time}s </p></center>`;
        scoreText.innerHTML = scoreTag;
        result_box.classList.add("quiz_yellow");
    }
    else{
        var scoreTag = `<center>and sorry, Study hard !!! 😐 😢, You got <p> ${userScore} out of 20 </p> <br/> You have answered : ${answered_questions} Questions <br/> Correct answers : ${correct_anwers} <br/>Incorrect answers :  ${incorrect_anwers}  <br/> Time Taken: ${question_time}s  </p></center>`;
        scoreText.innerHTML = scoreTag;
        result_box.classList.add("quiz_red");
    }
}