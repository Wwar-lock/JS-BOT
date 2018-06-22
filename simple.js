var ques = [
    'Hello! What\'s your name?',
    'Am I a boring chatbot?? XD',
    'What are you doin\'?',
    'What are your future plans?',
    'Best Wishes!!'
  ];
  
  var counter=0;
  var output=document.querySelector("#ques");
  output.innerHTML = ques[0];
  var inputBox = document.querySelector("#ans");
  
  function response(){
    var input = inputBox.value;
    if(inputBox.value=""){
      
    }
    else{
      if(counter==0){
        output.innerHTML = `${input}!! Nice to meet you.`;
        inputBox.value = "";
        ++counter;
        setTimeout(nextquestion,2000);
      }
      else if(counter==1){
        output.innerHTML = `HAHAHAHAHAHA`;
        inputBox.value = "";
        ++counter;
        setTimeout(nextquestion,2000);
      }
      else if(counter==2){
        output.innerHTML = `Nice!! Keep it up :)`;
        inputBox.value = "";
        ++counter;
        setTimeout(nextquestion,2000);
      }
      else if(counter==3){
        output.innerHTML = `Best of luck, Buddy!!`;
        inputBox.value = "";
        ++counter;
        setTimeout(nextquestion,2000);
      }
    }
  }
  function nextquestion(){
    output.innerHTML = ques[counter];
    if(counter==4){
      inputBox.style.display = "none"
    }
  }
  $(document).keypress(function(e){
        if(e.which == 13)
         {
           response();
         } 
      });
  
  