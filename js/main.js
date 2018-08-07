
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var pcPoint = 0;
var userPoint = 0;

while (pcPoint < 3 && userPoint < 3) {

  var userChoice = prompt("Entrez pierre, feuille ou ciseaux :").toLowerCase();
  var pcChoice = getRandomInt(3); // 0 = pierre; 1 = feuille; 2 = ciseaux;

  if (userChoice !== "pierre" && userChoice !== "feuille" && userChoice !== "ciseaux") {
    alert("Erreur: le mot que vous avez rentré n'est pas valide")
  } else {
    if (userChoice === "pierre") {
      if (pcChoice === 1) {
        alert("Vous avez perdu cette manche, 1 point de plus pour le PC!");
        pcPoint++;
      } else if (pcChoice === 2) {
        alert("Vous avez gagné cette manche, 1 point de plus pour vous !");
        userPoint++;
      } else {
        alert("Egalité !");
      }
    } else if (userChoice === "feuille") {
      if (pcChoice === 2) {
        alert("Vous avez perdu cette manche, 1 point de plus pour le PC!");
        pcPoint++;
      } else if (pcChoice === 0) {
        alert("Vous avez gagné cette manche, 1 point de plus pour vous !");
        userPoint++;
      } else {
        alert("Egalité !");
      }
    } else {
      if (pcChoice === 0) {
        alert("Vous avez perdu cette manche, 1 point de plus pour le PC!");
        pcPoint++;
      } else if (pcChoice === 1) {
        alert("Vous avez gagné cette manche, 1 point de plus pour vous !");
        userPoint++;
      } else {
        alert("Egalité !");
      }
    }
  }
}

if (pcPoint === 3) {
  alert("Vous avez perdu !");
} else {
  alert("Vous avez gagné !");
}
