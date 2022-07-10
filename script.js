// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
   let instruction = document.createElement('div');

   if(nombre < nombreAleatoire) {
       // Afficher : C'est plus;
       instruction.textContent = "#" + "coups" + "("+ nombre +") C'est plus";
       instruction.className = "instruction plus";

   }
   else if (nombre > nombreAleatoire) {
       // Afficher : C'est moins;
       instruction.textContent = "#" + "coups" + "("+ nombre +") C'est moins";
       instruction.className = "instruction moins";
   }
   else {
       // Afficher : Féliciation c'est le juste prix;
       instruction.textContent = "#" + "coups" + "("+ nombre +") Féliciations, c'est le juste prix";
       instruction.className = "instruction fini";
       input.disabled = true;
   }

   // Ajouter l'élément avant les autres
   document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
  if(isNaN(input.value)) {
    error.style.display = 'inline';
  }
  else {
    error.style.display ='none';
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault(); // Annulation de l'événement par défaut

    if(isNaN(input.value) || input.value == "") {
        // Mettre notre bordure de formulaire en rouge (red)
        input.style.borderColor = "red";
    }
    else {
        // Mettre notre bordure de formulaire en bleu (blue)
        coups ++
        input.style.border = 'blue';
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi)
    }
});

