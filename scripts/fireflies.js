// Script pour créer des lucioles animées
    const numFireflies = 50;

    for (let i = 0; i < numFireflies; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.top = `${Math.random() * 100}vh`;
        // Utilisation d'un délai négatif pour démarrer l'animation "en cours"
        firefly.style.animationDelay = `-${Math.random() * 10}s`;
        firefly.style.animationDuration = `${Math.random() * 10 + 5}s`;
        document.body.appendChild(firefly);
    }