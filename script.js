// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/


(function() {
  //Basic Requirments
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i=0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter==='j') {
      byeSpeaker.speak(names[i]);
    }
    else {
      helloSpeaker.speak(names[i]);
    }
  }

  //Additional Requirements
  var speakSimple = function(name){
    var firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter==='j') {
      return byeSpeaker.speakSimple(name);
    }
    else {
      return helloSpeaker.speakSimple(name);
    }
  };
  names2 = names.map(speakSimple);
  for (i=0; i < names2.length; i++){
    console.log(names2[i]);
  }

  //Bonus Requirements
  var greetings = {
    hello: [],
    bye: []
  };

  greetings = names.reduce((accumulator, currentValue)=>{
    if (currentValue.charAt(0).toLowerCase()==="j"){
      greetings.bye.push(byeSpeaker.speakSimple(currentValue));
    }
    else{
      greetings.hello.push(helloSpeaker.speakSimple(currentValue));
    }
    return greetings;
  }, greetings);

  for (i=0; i < greetings.hello.length; i++){
    console.log(greetings.hello[i]);
  };
  for (i=0; i < greetings.bye.length; i++){
    console.log(greetings.bye[i]);
  };

})();
