const dossierPrincipal = {
    nom: ' 📁 Ada',
    contenu: [{
        nom: ' 📁 Projets collectifs Ada',
        contenu: [{
            nom: ' 📁 Pico8',
            contenu: [{
              nom: ' 📑 mariokart.p8'
            }]
          },
          {
            nom: ' 📁 Dataviz',
            contenu: [{
                nom: ' 📑 index.html'
              },
              {
                nom: ' 📑 script.js'
              }
            ]
          }
        ]
      },
      {nom: ' 📑 CV.pdf'},
      {
        nom: '📁 Projets persos',
        contenu: [{
          nom: '📁 Portfolio',
          contenu: [{
              nom: '📑 index.html'
            },
            {
              nom: '📑 script.js'
            }
          ]
        }]
      },
    ],
};


// Etape 1, créer une fonction afficherDossier
const displayDirectory = (dossier) => {
    console.log(dossier.nom)
};

// Etape 2, créer 2 fonctions, une itératif et une recursive
const displayDirectoryIterative = (dossier) => {
    displayDirectory(dossierPrincipal)
    //const directory = dossier.contenu
    for(let i = 0; i < dossier.contenu.length; i++){
        console.log(dossier.contenu[i].nom);
    };
};

//displayDirectoryIterative(dossierPrincipal);

// fonction recursive
const displayDirectoryRecursive = (dossier) => {
    console.log(dossier.nom)
    if(dossier.contenu === undefined){
        return;
    }; 
    for(const dir of dossier.contenu){
        displayDirectoryRecursive(dir)
    }
}
displayDirectoryRecursive(dossierPrincipal);