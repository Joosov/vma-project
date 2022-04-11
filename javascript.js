 // Get the modal
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("work");

for (var i = 0; i < images.length; i++) {
  var img = images[i];

  // and attach our click listener for this image.
  img.onclick = function(e){
    e.preventDefault()
    modal.style.display = "block";
    modalImg.src = this.href;
  }
}
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }