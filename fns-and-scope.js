//////////////////PROBLEM 1////////////////////

var name = 'BryanJackson';


//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name){
    if (name === 'Tyler') {
      return true;
    }else {
      return false;
    }
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName(){
  var name = "";
  name = prompt("What is your name?")

  if (name === false){
    name = prompt  ("I did not get your name.  Would you please give it to me?")
  }
  return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome(){
  var name = getName();

  alert("Welcome, " + name);
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here - Arguments are used at the creation of a function.  Parameters are infomation that you put in the () when initializing a function basically if they keyword function is to the left of the line it is an argument rather than a paramiter.




//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here - 0 , "" , undefined , null, NaN, false are the falsy value.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here

  function myName(){

    return "Bryan Jackson";
  }



//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var newMyName;
  newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn(){
    return function() {return "Bryan Jackson"};
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn;
  innerFn = outerFn();

//Now invoke innerFn.
  innerFn();
