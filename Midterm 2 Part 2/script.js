function myKeyPress(e){

  /* TODO: retrieve the value from the text input */
  //commit #1
  var mytextbox = document.getElementById('textinput').value


  // TODO: set the value of the textbox with the formatted value
  // commit #2 changes the value in var =y from the number to mytextbox
  var keyPressed;
  if(window.event) { // IE
    keyPressed = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  var y = formattextinputNumber(mytextbox);


  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);



  // TODO: Add a condition to ignore entries beyond 10 digits
  //commit #3
  if (y.length>11){
    document.getElementById('textinput').value = y.slice(0, 12)
    event.preventDefault(); //not accepting any more characters
  }else{
    document.getElementById('textinput').value = y
  }
}

function formattextinputNumber(value) {
  /* TODO: Use replace function to ignore extra - character */
  //commit #4
  function replace(r){
    var phone = /^\(([0-9]{3})\)[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var digits = r.replace(/\D/g, "");
  }

  if(value.length == 3){
    value = value.slice(0, 3) + "-";
  }else if (value.length > 4 && value.length < 7){
    value = value.slice(0, 3) + "-" + value.slice(4);
  }else if (value.length == 7){
    value = value.slice(0, 3) + "-" + value.slice(4, 7) + "-";
  }else if (value.length > 7){
    value = value.slice(0, 3) + "-" + value.slice(4, 7) + "-" + value.slice(8);
  }
  return value;
}
