# Tutoriel Blockchain : de zéro vers ...

## Je valide !

Maintenant que l'on peut vérifier si notre Blockchain est valide, faisons le. Vous pouvez le voir, j'ai rajouté un nouveau fichier `Blockchain.js` et modifié `index.js`. Dans `Blockchain.js`, écrivez la fonction `isValid`. Pour chaque block, elle doit faire deux choses : vérifier que son id est valide et que l'identifiant du block précédent correspond bien.

Bon, vous êtes en mesure de vérifier que la chaine est valide, bravo !

## Je ne suis pas seul

Maintenant, quand vous utilisez une Blockchain, vous n'êtes pas tout seul. Vous n'êtes pas le seul qui peut créer des blocks et vous êtes dans une application distribuée avec tous les problèmes qui peuvent être du au réseau ou à plusieurs personnes qui créent un block en même temps. Il faut donc un algorithme de consensus pour savoir quels blocks sont ajoutés dans la chaine.

Une des propriétés de cette algorithme de consensus est garder la chaine la plus longue. Imaginez maintenant un utilisateur modifiant un vieux block et recalculant tous les blocks depuis et en ajoutant une dizaine d'autres. Sa chaine remplacera l'ancienne qui est légitime mais ne pas avoir cette propriété pose plein d'autres problèmes. Avez-vous une idée de comment faire ?

La solution s'appelle la preuve de travail. Cette technique consiste à faire dépenser à la personne qui veut ajouter un block beaucoup de puissance de calcule et donc du temps et de l'argent. L'attaquant devra donc avoir plus de puissance que l'ensemble des autres membres réunies pour pouvoir modifier la chaine.

## Minons du hash

Comment faire pour qu'un block prenne du temps à ajouter à la chaine ?

Indice : ça à un rapport avec la fonction de hachage.

Les fonctions de hachage comme SHA ont une propriété très intéressante, on ne peut pas prédire l'empreinte qu'une donnée va produire avant d'avoir exécuter la fonction. L'astuce consiste donc à mettre une contrainte sur la forme que doit avoir l'empreinte pour être un identifiant valide de block. Par exemple, on peut contraindre l'empreinte à avoir 5 zéros au début.

Maintenant, il faut trouver une empreinte qui commence par 5 zéros pour que ce soit un identifiant valide. Oui mais l'empreinte de mes blocks n'a pas 5 zéros, comment je fais pour produire une nouvelle empreinte ?

Indice : c'est une question de bruit.

On rajoute du bruit tout simplement ! Pour cela, on ajoute au block un élément appelé `nonce` initialisé à 0 et incrémenté de 1 après chaque essaie invalide. Cette opération de recherche d'un hash valide s'appelle le minage.

Dans la class Block, ajoutez une une propriété `nonce` et une fonction `miner` qui prend en paramètre le nombre de zéros qu'il faut en début d'empreinte.

Modifier `index.js` pour miner les trois premiers blocks avec une difficulté de 5.

Ça met un peu de temps ? Parfait ! Sinon augmentez la difficulté.

Modifier la fonction de vérification pour qu'elle vérifie que la difficulté est bien respectée.

Maintenant, votre Blockchain est beaucoup plus difficile à attaquer !
