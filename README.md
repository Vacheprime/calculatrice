# Calculatrice

Ce project est une calculatrice qui permet à un utilisateur sur desktop ou mobile d'effectuer des calculs simples.

## Technologies

Cette calculatrice a été créée à l'aide de React et Next.JS.

Ceci est mon tout premier project fait avec ces deux frameworks.

## Fonctionalitées

- La calculatrice est utilisable sur desktop ou mobile. 
- Elle permet d'effectuer des additions, soustractions, multiplications et divisions.
- Elle permet d'évaluer des expressions mathématiques simples.
- Elle valide les entrées de l'utilisateur afin de s'assurer que la syntaxe de l'expression mathématique reste valide.

## Bugs connus
- Les très grands résultats se font représentés en notation exponentielle, ce qui inclut les charactères «^» et «e».
Cependant, ces derniers ne font pas l'object de validations. Par conséquent, l'utilisateur peut entrer une expression syntaxiquement incorrecte.
- L'affichage de l'expression mathématique ne suit pas les nouveaux caractères entrés si l'entrée est remplie. 