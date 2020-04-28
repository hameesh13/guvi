document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dob").defaultValue = "2000-01-01";
    age();
    setTime();
  });
  function age() {
    let dob = new Date(document.getElementById("dob").value);
    let now = Date.now();
    let age_mils = now - dob + (5 * 60 + 30) * 60 * 1000;
    let seconds = Math.floor(age_mils / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30.42);
    let years = Math.floor(months / 12);
    let rem_days = days;
    document.getElementById("year").innerHTML = years;
    document.getElementById("month").innerHTML = months;
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
  }
  function setTime() {
    setInterval(() => {
      age();
    }, 1000);
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dob").defaultValue = "2000-01-01";
    age();
    setTime();
  });
  function age() {
    let dob = new Date(document.getElementById("dob").value);
    let now = Date.now();
    let age_mils = now - dob + (5 * 60 + 30) * 60 * 1000;
    let seconds = Math.floor(age_mils / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30.42);
    let years = Math.floor(months / 12);
    let rem_days = days;
    document.getElementById("year").innerHTML = years;
    document.getElementById("month").innerHTML = months;
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
  }
  function setTime() {
    setInterval(() => {
      age();
    }, 1000);
  }
    