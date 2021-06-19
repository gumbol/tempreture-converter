//based on an exercise from https://github.com/marijnh/eloquent-javascript

let txt = document.getElementById("result");
function isNum(num) {
   num = num.trim();

  if (isNaN(num) || num === "") {
    txt.innerHTML = "Please enter a number".fontcolor("red");
    return false
  }
  if (num > 1000 || num < -1000) {
    txt.innerHTML = "Please enter a number between -1000 and 1000";
  return false
  }
  return true
}
function toF() {
 let num = document.getElementById("input").value;

 if(isNum(num))

   {
     temp = new Temperature();
     temp.toFahrenheit = parseInt(num);
     if (temp.fahrenheit <= 32)
     {
       return (txt.innerHTML =
         temp.celsius + " C is " + temp.fahrenheit + " F" + " 🥶");
     } else if (temp.fahrenheit >= 86)
       return (txt.innerHTML =
         temp.celsius + " C is " + temp.fahrenheit + " F" + " 🥵 ");
 
     return (txt.innerHTML =
       temp.celsius + " C is " + temp.fahrenheit + " F");
   } 
}

function toC() {
  let num = document.getElementById("input").value;
  if (isNum(num)) {
    temp = new Temperature();
    temp.toCelsius = parseInt(num);
    if (temp.celsius <= 0) {
      return (txt.innerHTML =
        temp.fahrenheit + " F is " + temp.celsius + " C" + " 🥶");
    } else if (temp.celsius >= 30)
      return (txt.innerHTML =
        temp.fahrenheit + " F is " + temp.celsius + " C" + " 🥵 ");
    return (txt.innerHTML = temp.fahrenheit + " F is " + temp.celsius + " C");
  }
}
