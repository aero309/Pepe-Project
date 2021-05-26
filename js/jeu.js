//////////////////////////////////////
                /*Jeu*/
//////////////////////////////////////

// Definir le nombre de coins au debut du jeu
var balance = 0;

// Afficher le nombre de coins au debut du jeu
document.getElementById("balance").innerHTML = balance;


////////////////////////////Initialisation du compteur////////////////////////////


// Initialiser la fonction qui termine le jeu
function finish(){
  var balance_max = 30000; //Nombre de coins maximal que l'on peut avoir
  if (balance > balance_max){
    document.body.style.background = "black url('https://thumbs.gfycat.com/CoolCoolBarnacle-max-1mb.gif')"//Arrière plan de la fin du jeu
    document.body.style.position = "relative"
    document.getElementById("game").innerHTML = "<img src='img/celebration.gif' style='position:absolute; top:500px; left:30%;'/>"//L'emplacement du personnage
    setTimeout(function(){ alert("Bravo! vous avez atteint le nombre maximal de PepeCoins. Appuyez sur 'OK' pour relancer le jeu."); 
    location.reload();}, 3000); //L'alerte apparaît trois secondes après. Le button "OK" va rafraîchir la page.
  }
}

//Initialiser la fonction qui joue un fichier audio qui est déjà défini dans les fichiers html du jeu
function yolo(){
  var yolo = document.getElementById("yolo")
  var steps = 1000 //Le fichier se joue après chaque 1000 points
  if (balance % steps == 0){
    yolo.play()
  }
}

// Initialiser le compteur avec un increment parametreable
function ajout(x) {
  balance += x;
  document.getElementById("balance").innerHTML = balance;
  yolo()
  finish();
}


////////////////////////////Ajout d'incrément////////////////////////////


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

// Initialiser la fonction qui effectue l'achat. Nombre max d'incréments': 16
function increase_click() {
  var max_inc = 16
  if (balance >= price_clicks) { //Tant que l'utilisateur ait suffisamment de coins
    if (ini_click < (max_inc-1)) { //Limiter le nombre d'incrément
      balance -= price_clicks; //Soustraire le nombre de coins par le prix
      document.getElementById("balance").innerHTML = balance; //Afficher le nombre de coins final
      ini_click += 1; //Augmenter l'incrément
      document.getElementById("main-button").onclick = function () {
        ajout(ini_click);//Mettre en place le nouveau compteur
      };
      price_clicks += 400;//Augmenter le prix après chaque achat
      document.getElementById("price_clicks").innerHTML =
        "Prix:" + " " + price_clicks; //Afficher le prix final
    } else if (ini_click == (max_inc-1)){  //Si l'utilisateur a atteint le nombre avant le nombre max
        balance -= price_clicks;
        document.getElementById("balance").innerHTML = balance; //Afficher le nombre de coins final
        ini_click += 1; //Augmenter l'incrément final
        document.getElementById("price_clicks").innerHTML =
          "Prix:" + " " + "N/A"; //Informer l'utlisateur que le prix n'est plus disponible
    } else { //Empecher l'utlisateur de ne pas ajouter plus d'incréments
        alert("Vous avez obtenu le plus grand nombre de coins par clique!");
    }
  } else { //Si l'utilisateur n'a pas assez de coins
    if (ini_click >= (max_inc)) { //S'il atteint le nombre max d'incrément
      alert("Vous avez obtenu le plus grand nombre de coins par clique!");
    } else { //Si l'utilisateur n'a pas assez de coins même si l'ajout d'incrément est encore disponible
      alert("Il vous faut au moins" + " " + price_clicks + " " + "Pepe Coins"); //Informer que l'utilisateur n'a pas assez de coins
    }
  }
}


////////////////////////////Auto-clique////////////////////////////


var price_auto = 200; //Prix de l'auto-clique
var ini_auto = 1000; //Interval entre chaque clique (en milliseconds)

//Afficher le prix initial des auto-cliques
document.getElementById("price_auto").innerHTML = "Prix:" + " " + price_auto;

//Initialiser la fonction qui simule les cliques
function autoclick() {
  document.getElementById("main-button").click();
}





//Initialiser une fonction qui effectue l'achat
function upgrade_auto() {
  var max_auto = 400
  if (balance >= price_auto) { //Tant que l'utilisateur ait suffisamment de coins
    if (ini_auto > (max_auto + 100)) { //Limiter l'intervalle
      balance -= price_auto; //Soustraire le nombre de coins par le prix
      document.getElementById("balance").innerHTML = balance; //Afficher le nombre de coins final
      ini_auto -= 100; //Reduire l'intervalle
      setInterval(autoclick, ini_auto); //Mettre en place l'intervalle entre chaque auto-cliques
      price_auto *= 2; //Doubler le nombre de coins
      document.getElementById("price_auto").innerHTML =
        "Prix:" + " " + price_auto; //Afficher le prix final
    } else if (ini_auto == (max_auto + 100)){ //Si l'utilisateur a atteint le nombre avant le nombre max
      balance -= price_auto; //Soustraire le nombre de coins par le prix
      document.getElementById("balance").innerHTML = balance; //Afficher le nombre de coins final
      ini_auto -= 100; //Reduire l'intervalle
      setInterval(autoclick, ini_auto); //Mettre en place l'intervalle entre chaque auto-cliques
      document.getElementById("price_auto").innerHTML =
        "Prix:" + " " + "N/A"; //Informer l'utlisateur que le prix n'est plus disponible
    } else { //Empecher l'utlisateur de réduire l'intervalle
      alert("Vous avez atteint l'auto-clique le plus rapide du jeu!");
    }
  } else { //Si l'utilisateur n'a pas assez de coins
    if (ini_auto <= (max_auto)) { //S'il atteint le nombre max d'intervalle
      alert("Vous avez atteint l'auto-clique le plus rapide du jeu!");
    } else { 
      alert("Il vous faut au moins" + " " + price_auto + " " + "Pepe Coins"); //Informer que l'utilisateur n'a pas assez de coins
    }
  }
}

////////////////////////////Accessoires////////////////////////////

//ch = classical hat
//ph = party hat
//sh = santa hat
//wh = witch hat
//g = glasses

//Définir le prix de chaque accessoire
var price_ch = 200;
var price_ph = 500;
var price_sh = 1000;
var price_wh = 5000;
var price_g = 10000;

//Les afficher
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

//Par conséquent, nous avons initialisé des fonctions uniques pour chaque accessoires

//Exemple pour le classical hat
function purchase_ch() {
  if (balance >= price_ch && purchased_ch < 1) { //Si l'utilisateur a assez de coins ET s'il n'a pas encore effectué son achat
    purchased_ch += 1; //Achat
    balance -= price_ch; //Soustraire le nombre de coins par le prix
    document.getElementById("balance").innerHTML = balance; //Afficher le nombre de coins final
    document.getElementById("hat").innerHTML =
      "<img src='img/classicalhat.png'/>"; //Afficher l'objet dans le fichier html jeu
    document.getElementById("price_ch").innerHTML = "Equiper";
  } else if ((balance >= price_ch || balance < price_ch) && purchased_ch == 1) { //Si l'utilisateur a déjà fait la transaction ET qu'il a assez de coins
    document.getElementById("hat").innerHTML =
      "<img src='img/classicalhat.png'/>"; //Afficher l'objet que le joueur souhaiterait d'utiliser
  } else { //Si l'utilisateur n'a pas assez de coins
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
