// Fonction pour générer des feuilles de Sakura
function createSakuraPetal() {
    const sakuraPetal = document.createElement('div');
    sakuraPetal.classList.add('sakura');

    // Position horizontale de la feuille de Sakura (aléatoire)
    sakuraPetal.style.left = `${Math.random() * 100}vw`;
    sakuraPetal.style.animationDuration = `${Math.random() * 5 + 5}s`; // Durée de chute aléatoire
    sakuraPetal.style.opacity = Math.random(); // Opacité aléatoire pour plus de réalisme
    sakuraPetal.style.fontSize = `${Math.random() * 100 + 30}px`; // Taille aléatoire plus grande

    document.body.appendChild(sakuraPetal);

    // Retirer l'élément après la fin de l'animation pour éviter de surcharger la page
    setTimeout(() => {
        sakuraPetal.remove();
    }, 10000); // Délai avant suppression (doit correspondre à la durée max de l'animation)
}

// Générer les feuilles toutes les 300ms
setInterval(createSakuraPetal, 300);
