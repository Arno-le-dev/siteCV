




// Get the modal
var modalExpedition = document.getElementById("modalExpedition");
// Get the button that opens the modal
var btnExpedition = document.getElementById("image_buttons_CI_expedition");
// Get the <span> element that closes the modal
var spanExpedition = document.getElementById("closeModalExpedition");
// When the user clicks on the button, open the modal
btnExpedition.onclick = function() {
  modalExpedition.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanExpedition.onclick = function() {
  modalExpedition.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalExpedition || event.target == modalEnvironnement || event.target == modalSport) {
    modalExpedition.style.display = "none";
    modalEnvironnement.style.display = "none";
    modalSport.style.display = "none";
  }
}



var modalSport = document.getElementById("modalSport");
var btnSport = document.getElementById("image_buttons_CI_sport");
var spanSport = document.getElementById("closeModalSport");

btnSport.onclick = function() {
    modalSport.style.display = "block";
  }

spanSport.onclick = function() {
    modalSport.style.display = "none";
  }

 



var modalEnvironnement = document.getElementById("modalEnvironnement");
var btnEnvironnement = document.getElementById("image_buttons_CI_environnement");
var spanEnvironnement = document.getElementById("closeModalEnvironnement");

btnEnvironnement.onclick = function() {
    modalEnvironnement.style.display = "block";
  }

spanEnvironnement.onclick = function() {
    modalEnvironnement.style.display = "none";
  }

  
