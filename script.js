var questions = [
    {
      question:"what colour is green",
      options: [ "red","blue","green","brown" ],
      right_answer: "red"
    },
    {
      question:"what is the full form of HTML",
      options: [ "high markup language",
                  "hyper text mockup language",
                  "hyper text markup language",
                  "none of the above" 
                ],
      right_answer: "hyper text markup language"
    },
    {
      question:"html is programming language",
      options: [ "yes","no"],
      right_answer: "no"
    },
    {
      question:"There are no array in js",
      options: [ "yes","no","strictly no", "maybe" ],
      right_answer: "yes"
    },
    
  ];
  
  var score = 0;
  var current_question = 0;
  
  var question_container = document.getElementById("question_container");
  var title = document.getElementById("title");
  var options = document.getElementById("options");
  var result = document.getElementById("result");
  var submit = document.getElementById("submit");
  var next = document.getElementById("next");
  var answersheet = document.getElementById("answersheet");
  var heading=document.getElementById("heading");
  var outer=document.getElementById("outer");
  
  function createQuestion()
  {
    question_container.style.display = "block";
    var question = questions[current_question];
  
  
    next.style.display = "none";
  
    title.innerText = question.question;
  
    question.options.forEach(function(option, index)
    {
      var radio = document.createElement("input");
      radio.setAttribute("type","radio");
      radio.setAttribute("name","option");
      radio.setAttribute("value",option);
       radio.setAttribute("id","rad"); 
      var label = document.createElement("label");
      label.innerText = option;
  
      var list_item = document.createElement("li");
  
      list_item.appendChild(radio);
      list_item.appendChild(label);
  
      options.appendChild(list_item);
    })
  
  
  }
  
  createQuestion()
  
  
  submit.addEventListener("click", function(event)
  {
    var options = document.getElementsByName("option");
  
    var checked_answer = "";
  
    options.forEach(function(option, index)
    {
  
      if( option.checked )
      {
        checked_answer = index
      }
    })
    if(checked_answer === ""){
	alert("fill the option");
}
  
    var selected_option = options[checked_answer].value;
  
    var is_right = questions[current_question].right_answer === selected_option;
     document.getElementById("rad").disabled = true;
    if( is_right )
    {
      submit.style.display = "none";
      
      result.innerText = "Correct";
  
      result.classList.add("correct");
  
      next.style.display = "block";
      
      score++;
    }
    else
    {
      submit.style.display = "none";
      
      result.innerText = "In Correct";
      
      result.classList.add("incorrect");
  
      next.style.display = "block";
    }
  })
  
  next.addEventListener("click",function()
  {
    result.setAttribute("class","");
    result.innerHTML = ""
  
    options.innerHTML = "";
  
    next.style.display = "none";
    submit.style.display = "block";
  
    current_question++;
  
    if( questions[current_question] )
    {
      createQuestion();
  
    }
    else
    {
      answersheet.style.display = "block";
      question_container.style.display = "none";
  
      showAnswerSheet();
  
    }
  
  })
  
  function showAnswerSheet()
  {
    
    heading.innerText = "Score: "+score;
  
    
     outer.innerHTML="ANSWER KEY";

    
  
     var list = document.createElement("ul");
     var button = document.createElement("button");
    
     questions.forEach(function(question)
     {
       var list_item = document.createElement("a");
      
      var label=document.createElement("label");
       label.innerHTML=question.question +" - " ;
       var label2=document.createElement("label");
       label2.setAttribute("id","label2");
       label2.innerHTML=question.right_answer;
      
       list_item.appendChild(label);
       list_item.appendChild(label2);
       var br=document.createElement("br");
       list.appendChild(list_item);
       list.appendChild(br);

       button.setAttribute("id","restart");
       button.innerHTML="Restart"

      
     })
  
     answersheet.appendChild(list);
     answersheet.appendChild(button);

     button.addEventListener("click",function(){
        location.reload();
        
       })
  }