let button=document.createElement("button");
button.id="random";
button.innerHTML="Generate"
button.setAttribute("onclick","number()");
document.getElementsByTagName("body")[0].append(button);
let h4=document.createElement("h4");
h4.id="gen";
document.getElementsByTagName("body")[0].appendChild(h4);
function number(){
  i=0;
  arr=[];
  numberGen(arr);
  h4.innerHTML="The random number generated is "+arr.join("");
}
function numberGen(arr) {

if (i >= 8)
  return;
let newNumber = Math.floor(Math.random() * 10) ;
if (arr.indexOf(newNumber) < 0) {
  arr.push(newNumber);
  i+=1;
}
numberGen(arr);
}
