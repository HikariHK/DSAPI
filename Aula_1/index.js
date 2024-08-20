var mDiv = document.getElementById('mDiv');
var conteudo = mDiv.innerHTML + " Hello World! <hr>";
mDiv.innerHTML = conteudo;

function alterar() {
    mDiv.setAttribute("align", "center");
    mDiv.style.backgroundColor = "#FF0000";
    mDiv.style.width = "50%";
    
}

txtNome = document.getElementById("txtNome");
lista = document.getElementById("lista");
function salvar(){
    lista.innerHTML += "<li>" + txtNome.value + "</li>";
}