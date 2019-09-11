// alert("test");
var buttonAux = "O";



function resetBoard() {
  var pos1 = document.getElementById("1");
  var pos2 = document.getElementById("2");
  var pos3 = document.getElementById("3");
  var pos4 = document.getElementById("4");
  var pos5 = document.getElementById("5");
  var pos6 = document.getElementById("6");
  var pos7 = document.getElementById("7");
  var pos8 = document.getElementById("8");
  var pos9 = document.getElementById("9");

  pos1.value = "";
  pos2.value = "";
  pos3.value = "";
  pos4.value = "";
  pos5.value = "";
  pos6.value = "";
  pos7.value = "";
  pos8.value = "";
  pos9.value = "";

  pos1.disabled = false;
  pos2.disabled = false;
  pos3.disabled = false;
  pos4.disabled = false;
  pos5.disabled = false;
  pos6.disabled = false;
  pos7.disabled = false;
  pos8.disabled = false;
  pos9.disabled = false;

  document.getElementById("popup").style.visibility = "hidden";
  document.getElementById("overlay").style.visibility = "hidden";
}

function disableBoard() {
  var pos1 = document.getElementById("1");
  var pos2 = document.getElementById("2");
  var pos3 = document.getElementById("3");
  var pos4 = document.getElementById("4");
  var pos5 = document.getElementById("5");
  var pos6 = document.getElementById("6");
  var pos7 = document.getElementById("7");
  var pos8 = document.getElementById("8");
  var pos9 = document.getElementById("9");

  pos1.disabled = true;
  pos2.disabled = true;
  pos3.disabled = true;
  pos4.disabled = true;
  pos5.disabled = true;
  pos6.disabled = true;
  pos7.disabled = true;
  pos8.disabled = true;
  pos9.disabled = true;
}

function winnerMessage(winner) {
  disableBoard();

  popuptext = document.getElementById("text");
  popuptext.innerHTML = winner + " venceu.";

  var pop = document.getElementById("popup");
  var overlay = document.getElementById("overlay");
  pop.style.visibility = "visible";
  overlay.style.visibility ="visible";
}

function drawMessage() {
  disableBoard();

  popuptext = document.getElementById("text");
  popuptext.innerHTML = empate;

  var pop = document.getElementById("popup");
  var overlay = document.getElementById("overlay");
  pop.style.visiblity = "visible";
  overlay.style.visibility = "visible";

}


function winCondition() {
  var pos1 = document.getElementById("1").value;
  var pos2 = document.getElementById("2").value;
  var pos3 = document.getElementById("3").value;
  var pos4 = document.getElementById("4").value;
  var pos5 = document.getElementById("5").value;
  var pos6 = document.getElementById("6").value;
  var pos7 = document.getElementById("7").value;
  var pos8 = document.getElementById("8").value;
  var pos9 = document.getElementById("9").value;

  if (((pos1 == "X") || (pos1 == "O")) && ((pos1 == pos2) && (pos2 == pos3)))
      winnerMessage(pos1);

  else if (((pos1 == "X") || (pos1 == "O")) && ((pos1 == pos4) && (pos4 == pos7)))
      winnerMessage(pos1);

  else if (((pos9 == "X") || (pos9 == "O")) && ((pos9 == pos8) && (pos8 == pos7)))
      winnerMessage(pos9);

  else if (((pos9 == "X") || (pos9 == "O")) && ((pos9 == pos6) && (pos6 == pos3)))
    winnerMessage(pos9);

  else if (((pos4 == "X") || (pos4 == "O")) && ((pos4 == pos5) && (pos5 == pos6)))
    winnerMessage(pos4);

  else if (((pos2 == "X") || (pos2 == "O")) && ((pos2 == pos5) && (pos5 == pos8)))
    winnerMessage(pos2);

  else if (((pos1 == "X") || (pos1 == "O")) && ((pos1 == pos5) && (pos5 == pos9)))
    winnerMessage(pos1);

  else if (((pos7 == "X") || (pos7 == "O")) && ((pos7 == pos5) && (pos5 == pos3)))
    winnerMessage(pos7);

  else if  ((pos1 == "X" || pos1 == "O") && ((pos1 == pos2) && (pos1 == pos3) && (pos1 == pos4) && (pos1 == pos5) && (pos1 == pos6) && (pos1 == pos7)
  && (pos1 == pos8) && (pos1 == pos9)))
    drawMessage();
}

//X oder Y eindisablePosition
function disablePosition(x, buttonAux) {

  switch (x) {
    case 1:
      var button = document.getElementById("1");
      button.value = buttonAux;
      button.disabled = true;
    break;
    case 2:
      var button = document.getElementById("2");
      button.value = buttonAux;
      button.disabled = true;
    break;
    case 3:
      var button = document.getElementById("3");
      button.value = buttonAux;
      button.disabled = true;
    break;
    case 4:
      var button = document.getElementById("4");
      button.value = buttonAux;
      button.disabled = true;
    break;
    case 5:
      var button = document.getElementById("5");
      button.value = buttonAux;
      button.disabled = true;
    break;
    case 6:
      var button = document.getElementById("6");
      button.value = buttonAux;
      button.disabled = true;
    break;
    case 7:
      var button = document.getElementById("7");
      button.value = buttonAux;
      button.disabled = true;
    break;
    case 8:
      var button = document.getElementById("8");
      button.value = buttonAux;
      button.disabled = true;
    break;
    case 9:
      var button = document.getElementById("9");
      button.value = buttonAux;
      button.disabled = true;
    break;
  }
  winCondition();
}

function buttonPress(button) {
  if (buttonAux == "X") {
    buttonAux = "O";
    disablePosition(button, buttonAux);
  }
  else if (buttonAux == "O") {
    buttonAux = "X";
    disablePosition(button, buttonAux);
  }
}
