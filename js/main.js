
var divs = document.getElementsByTagName("div");
var paragraph = document.getElementById("result");
var score = document.getElementById("score");
var divsSection = document.getElementById("divsChoice");
var endGame = document.getElementById("endGame");
var button = document.getElementById("onloadButton");

var pcPoint = 0;
var userPoint = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}   // appelée pour pcChoice

function game(element){

  var pcChoice = getRandomInt(3); // 0 = pierre; 1 = feuille; 2 = ciseaux;

  if (element.id !== "pierre" && element.id !== "feuille" && element.id !== "ciseaux") {
      paragraph.innerHTML = "Erreur: le mot que vous avez rentré n'est pas valide";
  } else {

    if (element.id === "pierre") {
      if (pcChoice === 1) {
        paragraph.innerHTML = "Il a choisi feuille ! Vous avez perdu cette manche, 1 point de plus pour le PC!";
        pcPoint++;
      } else if (pcChoice === 2) {
        paragraph.innerHTML = "Il a choisi ciseaux ! Vous avez gagné cette manche, 1 point de plus pour vous !";
        userPoint++;
      } else {
        paragraph.innerHTML = "Il a choisi pierre ! Egalité !";
      }

    } else if (element.id === "feuille") {
      if (pcChoice === 2) {
        paragraph.innerHTML = "Il a choisi ciseaux ! Vous avez perdu cette manche, 1 point de plus pour le PC!";
        pcPoint++;
      } else if (pcChoice === 0) {
        paragraph.innerHTML = "Il a choisi pierre ! Vous avez gagné cette manche, 1 point de plus pour vous !";
        userPoint++;
      } else {
        paragraph.innerHTML = "Il a choisi feuille ! Egalité !";
      }

    } else {
      if (pcChoice === 0) {
        paragraph.innerHTML = "Il a choisi pierre ! Vous avez perdu cette manche, 1 point de plus pour le PC!";
        pcPoint++;
      } else if (pcChoice === 1) {
        paragraph.innerHTML = "Il a choisi feuille ! Vous avez gagné cette manche, 1 point de plus pour vous !";
        userPoint++;
      } else {
        paragraph.innerHTML = "Il a choisi ciseaux ! Egalité !";
      }
    }   // fin if userChoice > ou = ou < pcChoice

  }   // fin if !== ou === pierre && feuille && ciseaux


    score.innerHTML = "Vous : " + userPoint + " - " + pcPoint + " : Ordi";


    if (pcPoint === 3 || userPoint === 3) {
      divsChoice.style.display = "none";
      endGame.style.display = "block";
      button.style.display = "block";

      if (pcPoint > userPoint) {
        endGame.innerHTML = "Vous avez perdu la partie !";
      } else {
        endGame.innerHTML = "Vous avez gagné la partie !";
      }
    }


}   // fin game()

endGame.style.display = "none";
button.style.display = "none";


for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function() {
    game(this);
  };
}   // détermine le paramètre de game()

button.onclick = function() {
  document.location.reload(true);
};



// ALGO (while, prompt, etc)

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }   // appelée pour pcChoice
//
// var pcPoint = 0;
// var userPoint = 0;
//
// while (pcPoint < 3 && userPoint < 3) {
//
//   var userChoice = prompt("Entrez pierre, feuille ou ciseaux :").toLowerCase();
//   var pcChoice = getRandomInt(3); // 0 = pierre; 1 = feuille; 2 = ciseaux;
//
//   if (userChoice !== "pierre" && userChoice !== "feuille" && userChoice !== "ciseaux") {
//     alert("Erreur: le mot que vous avez rentré n'est pas valide")
//   } else {
//     if (userChoice === "pierre") {
//       if (pcChoice === 1) {
//         alert("Vous avez perdu cette manche, 1 point de plus pour le PC!");
//         pcPoint++;
//       } else if (pcChoice === 2) {
//         alert("Vous avez gagné cette manche, 1 point de plus pour vous !");
//         userPoint++;
//       } else {
//         alert("Egalité !");
//       }
//     } else if (userChoice === "feuille") {
//       if (pcChoice === 2) {
//         alert("Vous avez perdu cette manche, 1 point de plus pour le PC!");
//         pcPoint++;
//       } else if (pcChoice === 0) {
//         alert("Vous avez gagné cette manche, 1 point de plus pour vous !");
//         userPoint++;
//       } else {
//         alert("Egalité !");
//       }
//     } else {
//       if (pcChoice === 0) {
//         alert("Vous avez perdu cette manche, 1 point de plus pour le PC!");
//         pcPoint++;
//       } else if (pcChoice === 1) {
//         alert("Vous avez gagné cette manche, 1 point de plus pour vous !");
//         userPoint++;
//       } else {
//         alert("Egalité !");
//       }
//     }   // fin if userChoice > ou = ou < pcChoice
//   }   // fin if !== ou === pierre && feuille && ciseaux
// }   // fin boucle while
//
// if (pcPoint === 3) {
//   alert("Vous avez perdu !");
// } else {
//   alert("Vous avez gagné !");
// }
