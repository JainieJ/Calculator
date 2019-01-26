let buffer = "";
let counter = 0;
let result = 0;
let operator;
const screen = document.querySelector(".screen");

document.querySelector(".calc-buttons").addEventListener("click", function(event) {
	buttonClicked(event.target.innerText);
});

function buttonClicked(value) {
	if (isNaN(parseInt(value))) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
}

function handleNumber(value) {
	if (buffer === "") {
		 buffer+= value;
	 } else {
	 	 buffer = screen.innerText + event.target.innerText;
	 }
	 showBufferText ();
}


function handleOperator(value) {
	if (counter ===1) {
		result = parseInt(screen.innerText);
	} else {
		checkOperatorAndDoMath(value);
	}
	operator = event.target.innerText;
	buffer = "";
}

function checkOperatorAndDoMath(value) {
	if (operator==="+") {
		result+= parseInt(buffer);
	} else if (operator==="-") {
		result-= parseInt(buffer);
	} else if (operator==="×") {
		result *= parseInt(buffer);
	} else if (operator==="÷") {
		result /= parseInt(buffer);
	}
}

function deleteLastValue () {
	let length = screen.innerText.length;
	buffer = screen.innerText.substr(0, length-1);
}

function handleSymbol(value) {
	switch (value) {
	 case"+":
	 case"-":
	 case"×":
	 case"÷":
	  counter++;
      handleOperator(value);
      showBufferText ();
      break;
     case"=":
      checkOperatorAndDoMath(value);
      screen.innerText = result;
      operator = "";
      counter = "0";
      break;
     case "C":
	  buffer = "";
      operator = null;
      result = 0;
      showBufferText ();
      break;
     case "←":
      deleteLastValue ();
      showBufferText ();
      break;
	}
}

function showBufferText () {
	screen.innerText = buffer;
}

// the bug is if you start typing with zero, see later how to selltle it