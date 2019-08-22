function btn_cadastraLogin(){

    var loginCadastro = [
	{nome:"leoslemos", senha:"123"}, 
	{nome:"carlos", senha:"123"},
	{nome:"jonathan", senha:"123"}
]

    var formatoJSon = JSON.stringify(loginCadastro);
    localStorage.setItem("login",formatoJSon);

    console.log(loginCadastro);
}

function  btn_acessaLogin(){
    //BUSCA LOGIN E SENHA
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    //RETORNA STORAGE EM ARRAY
    var validaAcesso = JSON.parse(localStorage.getItem("login"));

    if(validaAcesso==null){
        document.getElementById("retorno").innerHTML = "Não há usuários cadastrados!"
    } else {
        //LOCALIZA E VALIDA LOGIN NO ARRAY
        var logado=false;
        for(var i=0; i<validaAcesso.length; i++){
            if(login == validaAcesso[i].nome && senha == validaAcesso[i].senha){
                logado=true;

                location.href ="html/home.html";
            } else{
                ///alert("Usuário/Senha Inválido!!!");
                document.getElementById("login").style.background = "#ea7373";
                document.getElementById("senha").style.background = "#ea7373";
                document.getElementById("retorno").innerHTML = "Usuário e/ou Senha Inválidos"
            }
        }
    }
}


/*EVENTOS */
function btnAcessarOver(){
    document.getElementById("btnAcessar").style.background = "#222";
}

function btnAcessarOut(){
    document.getElementById("btnAcessar").style.background = "#006699";
}

/*INICIO  TELA DE VENDAS*/



/*FIM TELA DE VENDAS*/