//////////////////////////////////////
/*Animation*/
//////////////////////////////////////

//////////////////////////////////////
/*Jeu*/
//////////////////////////////////////

// Definir le nombre de coins au debut du jeu
var balance = 0;

// Afficher le nombre de coins au debut du jeu
document.getElementById("balance").innerHTML = balance;

// Initialiser le compteur avec un increment parametreable
function ajout(x) {
  balance += x;
  document.getElementById("balance").innerHTML = balance;
}

// Definir la valeur initiale de l'increment
var ini_click = 1;

// Evenement onclick pour lancer le compteur et d'afficher le nombre de coins (var balance)
document.getElementById("main-button").onclick = function () {
  ajout(ini_click);
};

// Definir la valeur initiale du prix pour "Upgrade coins per click"
var price_clicks = 100;

// Afficher le prix initial du "Upgrade coins per click"
document.getElementById("price_clicks").innerHTML =
  "Price:" + " " + price_clicks;

// Initialiser la fonction qui effectue l'achat
function increase_click() {
  if (balance >= price_clicks) {
    balance -= price_clicks;
    document.getElementById("balance").innerHTML = balance;
    ini_click += 1;
    document.getElementById("main-button").onclick = function () {
      ajout(ini_click);
    };
    price_clicks *= 2;
    document.getElementById("price_clicks").innerHTML =
      "Price:" + " " + price_clicks;
  } else {
    alert("Il vous faut au moins" + " " + price_clicks + " " + "Pepe Coins");
  }
}

var price_auto = 200;
var ini_auto = 1000;

document.getElementById("price_auto").innerHTML = "Price:" + " " + price_auto;

function autoclick() {
  document.getElementById("main-button").click();
}

function upgrade_auto() {
  if (balance >= price_auto) {
    if (ini_auto >= 300) {
      balance -= price_auto;
      document.getElementById("balance").innerHTML = balance;
      ini_auto -= 100;
      setInterval(autoclick, ini_auto);
      price_auto *= 2;
      document.getElementById("price_auto").innerHTML =
        "Price:" + " " + price_auto;
    } else {
      alert("Vous avez atteint l'auto-clique le plus rapide du jeu!");
    }
  } else {
    alert("Il vous faut au moins" + " " + price_auto + " " + "Pepe Coins");
  }
}
