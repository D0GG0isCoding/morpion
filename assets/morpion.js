
  /* VARIABLES */
tab = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
          ];

let joueur= Math.floor(Math.random() * 2)+1;

var fin=false

let tour = 0;



  /* VERIFIE */
function verifie() {
    let res=0;
    // win ligne
    for (let i = 0; i < 3; i++) {
      if ((tab[i][0]==tab[i][1] && tab[i][1]==tab[i][2]) && (tab[i][0]!=0 && tab[i][1]!=0 && tab[i][2]!=0 )) {
        res=joueur;
      }
    }
    // win colonne
    for (let j = 0; j < 3; j++) {
      if ((tab[0][j]==tab[1][j] && tab[1][j]==tab[2][j]) && (tab[0][j]!=0 && tab[1][j]!=0 && tab[2][j]!=0)) {
        res=joueur;
      }
    }
    //win diago 1 /
    if (((tab[0][0]==tab[1][1]) && (tab[1][1]==tab[2][2])) && (tab[0][0]!=0 && tab[1][1]!=0 && tab[2][2]!=0)) {
      res=joueur;
    }
    //win diago 2 \
    if (((tab[2][0]==tab[1][1]) && (tab[1][1]==tab[0][2])) && (tab[2][0]!=0 && tab[1][1]!=0 && tab[0][2]!=0)) {
      res=joueur;
    }
    if (res != 0) {
      alert("Le joueur " + res + " a gagné !");
      fin=true
    }
    tour++;
    if (tour==9 && res==0) {
      alert("Égalité !");
      fin=true
    }
}



  /* JOUEUR */
function changerImage(img){
  ligne=img.alt.split("-")[0] -1;
  col=img.alt.split("-")[1] -1;
  //console.log(img);
  //console.log(ligne);
  //console.log(col);
  if (fin) {
    tour = 0;
  }
  else {
    if (joueur==1 && tab[ligne][col] == 0) {
      img.src="assets/1.png";
      tab[ligne][col] = joueur ;
      joueur=2;
    }
    if (joueur==2 && tab[ligne][col] == 0) {
      img.src="assets/2.png";
      tab[ligne][col] = joueur ;
      joueur=1;
    }
    verifie();
  }
  //console.log(joueur);
  //console.log(tab);
  //console.log(tour);
}
