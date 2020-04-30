function generate() {
  let disp = document.getElementById("number");
  
  disp.innerHTML = recur2();
}


function getRandom8digit(max) {
  return Math.floor(Math.random() * 100000000);
}
function recur2() {
  rand_num = getRandom8digit();
  if (validate(rand_num)) return rand_num;
  else return recur2();
}
function validate(num) {
  str_num = new Set(num.toString().split(""));
  if (str_num.size < 8) {
    return false;
  } else {
    return true;
  }
}
