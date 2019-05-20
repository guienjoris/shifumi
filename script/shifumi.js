var pierre= document.getElementById("pierre");
var ciseau= document.getElementById("ciseau");
var feuille= document.getElementById("feuille");
var compteurNous=document.getElementById("compteur_nous");
var compteurAdversaire=document.getElementById("compteur_adversaire");
var win= document.getElementById("win");
var lose= document.getElementById("lose");
var equite= document.getElementById("equite");
var img_selection_nous= document.getElementById("img_resultat_nous");
var img_selection_adversaire= document.getElementById("img_resultat_adversaire");
var choix_utilisateur= pierre || feuille || ciseau;
var comment= document.getElementById("comment");
function choixUtilisateur(){
    choix_random= Math.random();
    pierre.onclick=function(){
        img_selection_nous.setAttribute("src","./image/pierre.png");
        img_resultat.style.display="flex";
        choix_utilisateur=pierre;
        return choixUtilisateur();
    }
    ciseau.onclick=function(){
        img_selection_nous.setAttribute("src","./image/ciseau.png");
        img_resultat.style.display="flex";
        choix_utilisateur=ciseau;
        return choixUtilisateur();

    }
    feuille.onclick=function(){
        img_selection_nous.setAttribute("src","./image/feuille.png");
        img_resultat.style.display="flex";
        choix_utilisateur=feuille;
        return choixUtilisateur();

    }
    
    if (choix_random <= 0.33){
        var choix_adversaire= pierre;
        img_selection_adversaire.setAttribute("src","./image/pierre.png");
    }
    else if ( choix_random >=0.33 && choix_random<= 0.66){
        var choix_adversaire=ciseau;
        img_selection_adversaire.setAttribute("src","./image/ciseau.png");
    }
    else {
        var choix_adversaire=feuille;
        img_selection_adversaire.setAttribute("src","./image/feuille.png");
    }

    if (choix_adversaire == pierre && choix_utilisateur == pierre ){
        
        comment.innerHTML="Match nul";
    }
    else if (choix_adversaire == pierre && choix_utilisateur == feuille ){
        compteurNous.innerHTML++;
        compteurAdversaire.innerHTML--;
        comment.innerHTML="Vous avez gagné";
    }
    else if (choix_adversaire == pierre && choix_utilisateur == ciseau ){
        compteurNous.innerHTML--;
        compteurAdversaire.innerHTML++;
        comment.innerHTML="Vous avez perdu";
    }
    else if (choix_adversaire == ciseau && choix_utilisateur == ciseau ){
        
        comment.innerHTML="Match nul";
    }
    else if (choix_adversaire == ciseau && choix_utilisateur == feuille ){
        compteurNous.innerHTML--;
        compteurAdversaire.innerHTML++;
        comment.innerHTML="Vous avez perdu";
    }
    else if (choix_adversaire == ciseau && choix_utilisateur == pierre){
        compteurNous.innerHTML++;
        compteurAdversaire.innerHTML--;
        comment.innerHTML="Vous avez gagné";
    }
    else if (choix_adversaire == feuille && choix_utilisateur == ciseau){
        compteurNous.innerHTML++;
        compteurAdversaire.innerHTML--;
        comment.innerHTML="Vous avez gagné";
    }
    else if (choix_adversaire == feuille && choix_utilisateur == pierre){
        compteurNous.innerHTML--;
        compteurAdversaire.innerHTML++;
        comment.innerHTML="Vous avez perdu";
    }
    else if (choix_adversaire == feuille && choix_utilisateur == feuille){
    
        comment.innerHTML="Match nul";
    }

        

}