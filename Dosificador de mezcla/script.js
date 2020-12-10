"use strict";

const volumenMezcla = Number(document.querySelector(".volumeInput").value);
const tipoMezcla = document.getElementById("mezclasTypes").value;

const getSelectedValue = function () {
  let selectedValue = document.getElementById("mezclasTypes").value;
  console.log(selectedValue);
  return selectedValue;
};
//const tipoMezcla = getSelectedValue();

document.addEventListener("keydown", function (e) {
  const volumenMezcla = Number(document.querySelector(".volumeInput").value);
  const tipoMezcla = document.getElementById("mezclasTypes").value;

  const getSelectedValue = function () {
    let selectedValue = document.getElementById("mezclasTypes").value;
    console.log(selectedValue);
    return selectedValue;
  };
  if (e.key === "Enter") {
    if (getSelectedValue() === "1:2:3") {
      document.querySelector(".cementResult").value = volumenMezcla * 8;
      document.querySelector(".sandResult").value = volumenMezcla * 0.45;
      document.querySelector(".gravaResult").value = volumenMezcla * 0.77;
      document.querySelector(".waterResult").value = volumenMezcla * 58;
    } else if (getSelectedValue() === "1:2:4") {
      document.querySelector(".cementResult").value = volumenMezcla * 8.25;
      document.querySelector(".sandResult").value = volumenMezcla * 0.44;
      document.querySelector(".gravaResult").value = volumenMezcla * 0.88;
      document.querySelector(".waterResult").value = volumenMezcla * 50;
    } else if (getSelectedValue() === "1:3:5") {
      document.querySelector(".cementResult").value = volumenMezcla * 6.5;
      document.querySelector(".sandResult").value = volumenMezcla * 0.52;
      document.querySelector(".gravaResult").value = volumenMezcla * 0.86;
      document.querySelector(".waterResult").value = volumenMezcla * 50;
    } else if (getSelectedValue() === "1:1") {
      document.querySelector(".cementResult").value = volumenMezcla * 21.23;
      document.querySelector(".sandResult").value = volumenMezcla * 0.625;
      document.querySelector(".gravaResult").value = 0;
      document.querySelector(".waterResult").value = volumenMezcla * 60;
    } else if (getSelectedValue() === "1:2") {
      document.querySelector(".cementResult").value = volumenMezcla * 13.21;
      document.querySelector(".sandResult").value = volumenMezcla * 0.625;
      document.querySelector(".gravaResult").value = 0;
      document.querySelector(".waterResult").value = volumenMezcla * 60;
    } else if (getSelectedValue() === "1:3") {
      document.querySelector(".cementResult").value = volumenMezcla * 11.44;
      document.querySelector("sandResult").value = volumenMezcla * 1;
      document.querySelector(".gravaResult").value = 0;
      document.querySelector(".waterResult").value = volumenMezcla * 60;
    } else if (getSelectedValue() === "1:4") {
      document.querySelector(".cementResult").value = volumenMezcla * 6.5;
      document.querySelector(".sandResult").value = volumenMezcla * 1;
      document.querySelector(".gravaResult").value = 0;
      document.querySelector(".waterResult").value = volumenMezcla * 60;
    } else if (getSelectedValue() === "1:5") {
      document.querySelector(".cementResult").value = volumenMezcla * 6.82;
      document.querySelector(".sandResult").value = volumenMezcla * 1;
      document.querySelector(".gravaResult").value = 0;
      document.querySelector(".waterResult").value = volumenMezcla * 60;
    } else if (getSelectedValue() === "1:6") {
      document.querySelector(".cementResult").value = volumenMezcla * 5.69;
      document.querySelector(".sandResult").value = volumenMezcla * 1;
      document.querySelector(".gravaResult").value = 0;
      document.querySelector(".waterResult").value = volumenMezcla * 60;
    }
  }
});

const undoButton = document.querySelector(".UNDO");
undoButton.addEventListener("click", function () {
  document.querySelector(".volumeInput").value = 0;
  document.querySelector(".cementResult").value = 0;
  document.querySelector(".sandResult").value = 0;
  document.querySelector(".gravaResult").value = 0;
  document.querySelector(".waterResult").value = 0;
  document.querySelector(".costosResult").value = 0;
});
