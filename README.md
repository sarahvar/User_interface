## Projet Vite

Ce projet utilise Vite, un bundler rapide pour le développement web moderne.

Prérequis
Node.js (version 14 ou supérieure)
Installation
Clonez le repository :

bash
Copier le code
git clone https://github.com/sarahvar/User_interface
Allez dans le dossier du projet :

bash
Copier le code
cd nom-du-projet
Installez les dépendances :

bash
Copier le code
npm install
Démarrer le projet
Pour lancer l'application en mode développement :

bash
Copier le code
npm run dev
Accédez ensuite à http://localhost:5173 dans votre navigateur.

Construction pour la production
Pour créer une version optimisée du projet :

bash
Copier le code
npm run build
Lancer en mode production
Après avoir construit l'application, vous pouvez la tester en local :

bash
Copier le code
npm run preview
Scripts disponibles
npm run dev : Lance le serveur de développement.
npm run build : Crée une version optimisée pour la production.
npm run preview : Teste la version de production localement.

## 2) Interface utilisateur

Faire une petite application de gestion de tickets de caisse (date,intitulé,montant) :
- liste des tickets
- création
- modification
- suppression
- total par mois
- total général
* contrainte : Il ne peut y avoir 2 tickets avec la même date
