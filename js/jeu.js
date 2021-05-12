//////////////////////////////////////
/*Interface*/
//////////////////////////////////////

var canvas = document.getElementById("game-space");
var context = canvas.getContext("2d");

/*Barre d'info */
context.fillStyle = "Yellow";
context.fillRect(0, 0, 1200, 50);
context.font = "30px Impact";
context.shadowColor = "black";
context.shadowBlur = 7;
context.lineWidth = 5;
context.strokeText("Pepe Mining Simulator", 10, 35);
context.shadowBlur = 0;
context.fillStyle = "white";
context.fillText("Pepe Mining Simulator", 10, 35);

/*Espace pour les améliorations */
context.fillStyle = "Yellow";
context.fillRect(800, 55, 600, 360);
context.fillRect(800, 420, 600, 360);

/*Images */

var CoinIcon = new Image(); /*Création de l'image */

CoinIcon.onload = function () {
  var x = 800;
  var y = -5;
  var w = 120;
  var h = 60;
  context.shadowColor = "black";
  context.shadowBlur = 7;
  context.drawImage(CoinIcon, x, y, w, h);
};

CoinIcon.src = "img/pepecoin.png";

/* Espace de click*/
var nb_coins = 0;
function ajoutCoin(i) {
  nb_coins = nb_coins + i;
  console.log(nb_coins);
}

context.fillStyle = "green";
var clickspace = context.fillRect(0, 50, 800, 750);
clickspace.onclick = ajoutCoin(1);
