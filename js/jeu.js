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
  "Prix:" + " " + price_clicks;

// Initialiser la fonction qui effectue l'achat. Nombre max de coins/sec: 16
function increase_click() {
  if (balance >= price_clicks) {
    if (ini_click <= 15) {
      balance -= price_clicks;
      document.getElementById("balance").innerHTML = balance;
      ini_click += 1;
      document.getElementById("main-button").onclick = function () {
        ajout(ini_click);
      };
      price_clicks *= 2;
      document.getElementById("price_clicks").innerHTML =
        "Prix:" + " " + price_clicks;
    } else {
      if (ini_click === 15) {
        ini_click += 1;
        alert("Vous avez obtenu le plus grand nombre de coins par clique!");
        document.getElementById("price_clicks").innerHTML =
          "Prix:" + " " + "N/A";
      } else {
        alert("Vous avez obtenu le plus grand nombre de coins par clique!");
        document.getElementById("price_clicks").innerHTML =
          "Prix:" + " " + "N/A";
      }
    }
  } else {
    alert("Il vous faut au moins" + " " + price_clicks + " " + "Pepe Coins");
  }
}

var price_auto = 200;
var ini_auto = 1000;

document.getElementById("price_auto").innerHTML = "Prix:" + " " + price_auto;

function autoclick() {
  document.getElementById("main-button").click();
}

function upgrade_auto() {
  if (balance >= price_auto) {
    if (ini_auto >= 400) {
      balance -= price_auto;
      document.getElementById("balance").innerHTML = balance;
      ini_auto -= 100;
      setInterval(autoclick, ini_auto);
      price_auto *= 2;
      document.getElementById("price_auto").innerHTML =
        "Prix:" + " " + price_auto;
    } else {
      if (ini_auto === 400) {
        ini_auto -= 100;
        document.getElementById("price_auto").innerHTML = "Rupture de stock!";
        alert("Vous avez atteint l'auto-clique le plus rapide du jeu!");
      } else {
        alert("Vous avez atteint l'auto-clique le plus rapide du jeu!");
      }
    }
  } else {
    alert("Il vous faut au moins" + " " + price_auto + " " + "Pepe Coins");
  }
}

var price_ch = 2;
var price_ph = 5;
var price_sh = 1;
var price_wh = 5;
var price_g = 1;

document.getElementById("price_ch").innerHTML = "Prix:" + " " + price_ch;
document.getElementById("price_ph").innerHTML = "Prix:" + " " + price_ph;
document.getElementById("price_sh").innerHTML = "Prix:" + " " + price_sh;
document.getElementById("price_wh").innerHTML = "Prix:" + " " + price_wh;
document.getElementById("price_g").innerHTML = "Prix:" + " " + price_g;

// 0 = Achat non effectué, 1 = Achat effectué
var purchased_ch = 0;
var purchased_ph = 0;
var purchased_sh = 0;
var purchased_wh = 0;
var purchased_g = 0;

//Nous avons pas trouvé un moyen pour paramétrer la fonction d'achat, sans que la variable "purchased" reprenne la valeur 0 à chaque appelle

function purchase_ch() {
  if (balance >= price_ch && purchased_ch < 1) {
    purchased_ch += 1;
    balance -= price_ch;
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("hat").innerHTML =
      "<img src='img/classicalhat.png'/>";
    document.getElementById("price_ch").innerHTML = "Equiper";
  } else if ((balance >= price_ch || balance < price_ch) && purchased_ch == 1) {
    document.getElementById("hat").innerHTML =
      "<img src='img/classicalhat.png'/>";
  } else {
    alert("Il vous faut au moins" + " " + price_ch + " " + "Pepe Coins");
  }
}

function purchase_ph() {
  if (balance >= price_ph && purchased_ph < 1) {
    purchased_ph += 1;
    balance -= price_ph;
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("hat").innerHTML = "<img src='img/partyhat.png'/>";
    document.getElementById("price_ph").innerHTML = "Equiper";
  } else if ((balance >= price_ph || balance < price_ph) && purchased_ph == 1) {
    document.getElementById("hat").innerHTML = "<img src='img/partyhat.png'/>";
  } else {
    alert("Il vous faut au moins" + " " + price_ph + " " + "Pepe Coins");
  }
}

function purchase_sh() {
  if (balance >= price_sh && purchased_sh < 1) {
    purchased_sh += 1;
    balance -= price_sh;
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("hat").innerHTML = "<img src='img/santahat.png'/>";
    document.getElementById("price_sh").innerHTML = "Equiper";
  } else if ((balance >= price_sh || balance < price_sh) && purchased_sh == 1) {
    document.getElementById("hat").innerHTML = "<img src='img/santahat.png'/>";
  } else {
    alert("Il vous faut au moins" + " " + price_sh + " " + "Pepe Coins");
  }
}

function purchase_wh() {
  if (balance >= price_wh && purchased_wh < 1) {
    purchased_wh += 1;
    balance -= price_wh;
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("hat").innerHTML = "<img src='img/witchhat.png'/>";
    document.getElementById("price_wh").innerHTML = "Equiper";
  } else if ((balance >= price_wh || balance < price_wh) && purchased_wh == 1) {
    document.getElementById("hat").innerHTML = "<img src='img/witchhat.png'/>";
  } else {
    alert("Il vous faut au moins" + " " + price_wh + " " + "Pepe Coins");
  }
}

function purchase_g() {
  if (balance >= price_g && purchased_g < 1) {
    purchased_g += 1;
    balance -= price_g;
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("glasses_wear").innerHTML =
      "<img src='img/glasses.png'/>";
    document.getElementById("price_g").innerHTML = "Equiper";
  } else if ((balance >= price_g || balance < price_g) && purchased_g == 1) {
    document.getElementById("glasses_wear").innerHTML =
      "<img src='img/glasses.png'/>";
  } else {
    alert("Il vous faut au moins" + " " + price_g + " " + "Pepe Coins");
  }
}
