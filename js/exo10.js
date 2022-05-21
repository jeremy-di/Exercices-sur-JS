/* === Exo10 ===
 *
 * définir une fonction 'renderModel()' qui permet d'afficher chaque caractère d'un tableau (contenu dans './js/map.js') dans la console. Pour sélectionner le tableau 'squid' par exemple on pour écrire map.models["squid"].
 * 
 * définir une fonction 'renderPixel(str)' qui permet de créer un élément 'span' dans le DOM et d'y inscrire la string 'str' donnée en paramètre. Cette fonction placera aussi le nouvel élément dans '#invader'
 * 
 * utiliser la fonction 'renderPixel()' dans la fonction 'renderModel()' pour afficher un élément dans le DOM plutôt qu'un caractère dans la console
 * 
 * regrouper ces éléments dans des blocs : un bloc représentera une ligne du tableau issu de './js/map.js'
 * 
 * associer chaque classe présente dans le fichier './css/invader.css' à chaque type de caractère présent dans les tableaux de './js/map.js' et ajouter ces classes dans les éléments créés grâce à la fonction 'renderPixel()'
 * 
 * on va maintenant s'occuper de la navigation entre mes modèles : créer une fonction 'generateMenu()' qui va créer un bouton pour chaque modèle présent dans './js/map.js'. Chaque bouton portera comme nom, le nom du modèle qu'il va afficher et un attribut 'data-model-name' qui reprend ce nom.Tous les boutons seront placés dans '#select-model'. Chaque bouton contiendra aussi un écouteur d'évènement qui lancera l'affichage du modèle qu'il désigne (prévoir une autre fonction 'handleClickButton(event)'...)
 */
