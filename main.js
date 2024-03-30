function isSecure() {
  return window.location.protocol == "https:";
}

function remove() {
  var frame = document.getElementById("sventeaser");
  frame.parentNode.removeChild(frame);
}

if (isSecure()) {
  document.body.className += " " + "secure";

  document.getElementById("secure-button").style.display = "block";
  document.getElementById("dummy-image").style.display = "none";
  remove();
} else {
  document.getElementById("dummy-image").style.display = "block";
  document.getElementById("secure-button").style.display = "none";
}
