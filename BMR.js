var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");

function validateForm(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmr);
  }else{
    countBmr();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function countBmr(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  form.reset();
  var bmr = 10*p[2]+6.25*p[1]-5*p[0]+5;
      
  var result = '';
  if(bmr<=1926){
    result = 'Sedentary: little or no exercise';
     }else if(1926<bmr&&bmr<=2207){
    result = 'Exercise 1-3 times/week';
     }else if(2207<bmr&&bmr<=2351){
    result = 'Exercise 4-5 times/week';
     }else if(2351<bmr&&bmr<=2488){
    result = 'Daily exercise or intense exercise 3-4 times/week';
     }else if(2488<bmr&&bmr<=2769){
    result = 'Intense exercise 6-7 times/week';
     }else if(2769<bmr&&bmr<=3050){
    result = 'Very intense exercise daily, or physical job';
     }else if(3050<bmr){
       result = 'U lyin dawg';
     }
  
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  var b = document.createTextNode('BMR: ');
  var r = document.createTextNode(parseFloat(bmr).toFixed(2));
  
  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmr);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmr);