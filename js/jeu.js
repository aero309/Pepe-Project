//////////////////////////////////////
/*Jeu*/
//////////////////////////////////////

// Definir le nombre de coins au debut du jeu
var balance = 0;

// Initialiser le compteur avec un increment parametreable
function ajout(x) {
  balance += x;
  document.getElementById("balance").innerHTML = balance;
}

// Definir la valeur initiale de l'increment
var ini = 1;

// Evenement onclick pour lancer le compteur et d'afficher le nombre de coins (var balance)
document.getElementById("main-button").onclick = function() {ajout(ini)};

// Definir la valeur initiale du prix pour "Upgrade coins per click"
var price_clicks = 100;

// Afficher le prix initial du "Upgrade coins per click"
document.getElementById("price_clicks").innerHTML = "Price:" + " " + price_clicks;

// Initialiser la fonction qui effectue l'achat
function increase_click(){
  if (balance >= price_clicks) {
      balance -= price_clicks;
      document.getElementById("balance").innerHTML = balance;
      ini += 1;
      document.getElementById("main-button").onclick = function() {ajout(ini)}
      price_clicks *= 2
      document.getElementById("price_clicks").innerHTML = "Price:" + " " + price_clicks;
  } else {
    alert("Il vous faut au moins" + " " + price_clicks + " " + "Pepe Coins")
  }
}