//test increment;
var points = 0;
function addPoint(amount) {
  points += amount;
  if (points === 1) {
    document.getElementById("points").innerHTML = points + " " + "Pepe saved";
  } else {
    document.getElementById("points").innerHTML = points + " " + "Pepes saved";
  }
}
