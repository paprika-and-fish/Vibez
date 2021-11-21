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
  
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  var b = document.createTextNode('BMR: ');
  var r = document.createTextNode(parseFloat(bmr).toFixed(2));
  var c = document.createTextNode(' calories');
  
  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  h2.appendChild(c);
  
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmr);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmr);