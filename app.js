// grab the modal by id name
var modal = document.getElementById("modalConatiner");

// grab the button that opens or triggers the modal event by id name
var modalbtn = document.getElementById("modalButton");

// grab the <span> element that closes the modal window by class name
var spanClose = document.getElementsByClassName("close_window")[0];

// when the button has been clicked, the modal window will open 
modalbtn.onclick = function() {
  modal.style.display = "block";
}

// when the <span> element which is the "x" inside thw modal window, the modal closes
spanClose.onclick = function() {
  modal.style.display = "none";
}

// when user clicks outside the modal window, like the gray background, the modal will also close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}