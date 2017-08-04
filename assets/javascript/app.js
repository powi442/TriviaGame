$(document).ready(function() {
  // create start screen
  var number = 15;
  // variable holds the id when we execute start function
  var intervalId;

  correctTally = 0;
  wrongTally = 0;

  // when button is clicked, the timer starts and the questions show
    $("#start").on("click", start);


  function start() {
    intervalId = setInterval(decrement, 1000);
  };


//creates the decrement function
function decrement() {
  // shows how time will decrease 1 by 1
  number--;
  //writes the script onto the page
  $("#show-number").html("<h2>" + number + "</h2>");
  // conditional showing what will happen if timer is 0
  if (number === 0) {
    //this will iniate the stop function
    stop();
    //creates an alarm
    alert("Time up!")
  }
}

function stop() {
  clearInterval(intervalId)
  // counts correct answers
  // if (userGuess === Questions.)
}
// counts incorrect answers


// when quiz starts the timer starts counting down from 20 seconds
// the user can choose from four options (and only one of them)
// when the timer ends, the wins losses and unkown answers are calculated
// reset game back to the beginning
// create questions
var question = [{

  Question: "Michael and Holly perform a skit at the company picnic based off of which movie?",
  Choices: ["Gone with the wind", "Pulp Fiction", "Die Hard", "Slumdog Millionaire"],
  Answer: 3
},
  {
  Question: "What is the name of Robert California's son?",
  Choices: ["Devon", "Bert", "Mitchell", "Sam"],
  Answer: 1
}];

//create a loop to write the question and answers
for (var i = 0; i < question.length; i++) {
  var questions = question[i];
  $("#question"+ [i]).html("<div>"+ question[i].Question + "<div>")
  $("#choices"+ [i]).html("<input type='radio'>"+ question[i].Choices[i]);
  $("#choices"+ [i]).html("<input type='radio'>"+ question[i].Choices[i]);
  $("#choices"+ [i]).html("<input type='radio'>"+ question[i].Choices[i]);
  $("#choices"+ [i]).html("<input type='radio'>"+ question[i].Choices[i]);


}
});
// variable for user click should trigger an event
// //describe win condition
// if (guess == Question[0].Answer) {
//   win++;
// } else {
//   loss--;
// }
