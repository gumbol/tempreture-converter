   function f() {
        let num = document.getElementById("temp").value;
        let txt = document.getElementById("result");
        num = num.trim();
        if (isNaN(num) || num === "")
          return (txt.innerHTML = "Please enter a number".fontcolor("red"));
		  if (num > 1000 || num < -1000)
          return (txt.innerHTML =
            "Please enter a number between -1000 and 1000");
        temp = new Temperature();
        temp.toFahrenheit = parseInt(num);
			if(temp.fahrenheit <= 32){
			 return (txt.innerHTML =
          temp.celsius + " C is " + temp.fahrenheit + " F" + " 🥶");
			}else if(temp.fahrenheit >= 86)
        return (txt.innerHTML =
          temp.celsius + " C is " + temp.fahrenheit + " F" + " 🥵 ");
		  
		   return (txt.innerHTML =
          temp.celsius + " C is " + temp.fahrenheit + " F");
      }

      function c() {
        let num = document.getElementById("temp").value;
        let txt = document.getElementById("result");
        num = num.trim();
        if (isNaN(num) || num === "")
          return (txt.innerHTML = "Please enter a number".fontcolor("red"));
        if (num > 1000 || num < -1000)
          return (txt.innerHTML =
            "Please enter a number between -1000 and 1000");
        temp = new Temperature();
        temp.toCelsius = parseInt(num);
		if(temp.celsius <= 0){
			 return (txt.innerHTML =
          temp.fahrenheit + " F is " + temp.celsius + " C" + " 🥶");
		}else if(temp.celsius >= 30)
        return (txt.innerHTML =
          temp.fahrenheit + " F is " + temp.celsius + " C" + " 🥵 ");
        return (txt.innerHTML =
          temp.fahrenheit + " F is " + temp.celsius + " C");
      }
