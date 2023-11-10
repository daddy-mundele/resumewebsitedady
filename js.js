// Fichier : script.js

// Fonction pour exécuter du code une fois que le document HTML est complètement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Votre code JavaScript ici
    console.log('Le document est complètement chargé.');

    // Exemple d'ajout d'un gestionnaire d'événement sur un bouton
    var monBouton = document.getElementById('monBouton');
    monBouton.addEventListener('click', function () {
        alert('Le bouton a été cliqué !');

        // Nouvelle fonctionnalité : changer la couleur de fond de la page
        changerCouleurFond();
    });

    // Fonction pour changer la couleur de fond
    function changerCouleurFond() {
        // Génération d'une couleur aléatoire
        var couleurAleatoire = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Changement de la couleur de fond de la page
        document.body.style.backgroundColor = couleurAleatoire;

        console.log('La couleur de fond a été changée : ' + couleurAleatoire);
    }
});

