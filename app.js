let trevasComum = document.getElementById("input-trevas");
let trevasTrevas = document.getElementById("resultado-trevas");
let vugnaesComum = document.getElementById("input-vugnaes");
let vugnaesVugnaes = document.getElementById("resultado-vugnaes");

function traduzirTrevas() {
    trevasTrevas.value = trevasComum.value;
}

function vugnaeficarFrase() {
    vugnaesVugnaes.value = vugnaefication(vugnaesComum.value);
}

function desvugnaeficarFrase() {
    vugnaesComum.value = desvugnaefication(vugnaesVugnaes.value);
}

function vugnaefication(frase) {
    
    var alfabeto =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"Ç"," ", "-", "_", ".", "&","?", "!", "@", "#", "/","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ç"];
    
    var alfabetoVugnesco = ['S','N','V','F','R','G','H','J','O','K','L','Ç',',','M','P','´','W','T','D','Y','I','B','E','C','U','X',"~", " ", "-", "_", ".", "&","?", "!", "@", "#", "/","s","n","v","f","r","g","h","j","o","k","l","ç",",","m","p","´","w","t","d","y","i","b","e","c","u","x","~"];
    
    var resultadoVugnaes = [];
    for(let i=0; i<frase.length; i++){
        for(let j =0; j<alfabeto.length; j++){
            if(frase[i] === alfabeto[j]){
            resultadoVugnaes.push(alfabetoVugnesco[j]);
            }
        }
    }
    return resultadoVugnaes.join("");
  }

  function desvugnaefication(frase) {
    
    var alfabeto =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"Ç"," ", "-", "_", ".", "&","?", "!", "@", "#", "/","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ç"];
    
    var alfabetoVugnesco = ['S','N','V','F','R','G','H','J','O','K','L','Ç','入','M','P','入','W','T','D','Y','I','B','E','C','U','X',"入", " ", "-", "_", ".", "&","?", "!", "@", "#", "/","s","n","v","f","r","g","h","j","o","k","l","ç",",","m","p","´","w","t","d","y","i","b","e","c","u","x","~"];
    
    var resultadoDesvugnaes = [];
    for(let i=0; i<frase.length; i++){
        for(let j =0; j<alfabetoVugnesco.length; j++){
            if(frase[i] === alfabetoVugnesco[j]){
            resultadoDesvugnaes.push(alfabeto[j]);
            }
        }
    }
    return resultadoDesvugnaes.join("");
  }