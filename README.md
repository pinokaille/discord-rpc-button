# discord-rpc-button

```diff
- CECI N'EST PAS UN SELFBOT
- l'utilisations d'une rich Presence est autorisée par discord
```

**Prérequis** 
: <a href="https://nodejs.org/fr/">Node.js</a>



Installations modules
=================

Pour installer les modules nécessaire lancez ```start_linux.sh``` ou ```start_windows.bat``` selon votre système d'exploitation
ou faites simplement ```npm i``` dans un terminal 

Configurer la rich presence
=================
Le fichier de configuration de la richPresence est ```config.js```

<a href="https://imgbb.com/"><img src="https://i.ibb.co/PmHXdpf/image.png" alt="image" border="0"></a>
```js

module.exports={
    details: "Discord rpc",
    image_name: "nom de l'asset (image)",
    image_text: "text qui s'affiche sur l'image",
    id: "id applications ici",
    button_name:"Nom bouton 1",
    button_link:"Lien ici", 
    button_name2:"Nom bouton 2",
    button_link2:"Liens ici"
}
```
Créé une application pour sa Rich Presence
==============
Pour créé une applications allez sur https://discord.com/developers/applications
connectez vous à discord si ce n'est pas déja fais !
Cliquez sur le bouton **New application**

<a href="https://imgbb.com/"><img src="https://i.ibb.co/bR1nbZH/image.png" alt="image" border="0"></a>

Ensuite copiez l'id de vôtre applications 

<a href="https://imgbb.com/"><img src="https://i.ibb.co/JQ6QcMP/image.png" alt="image" border="0"></a>

et collez le dans la config à cette ligne : ```id: "12345678910111213",```

Ensuite allez dans la catégorie **Art Assets**

<a href="https://imgbb.com/"><img src="https://i.ibb.co/vBVkdbv/image.png" alt="image" border="0"></a>

Et cliquez sur **add image** et donnez un nom à cette image

placez ensuite le nom de l'image à cette ligne 

```
image_name: "voiture (exemple)",
```

Le reste est configurable facilement il vous suffit de choisir le texte que vous voulez !

Lancement 
=================
Pour lancer la rich presence ouvrez ```start_windows.bat``` ou ```start_linux.sh``` selon votre système d'exploitation ou faites
ou faites simplement ```node index.js``` dans un terminal 
