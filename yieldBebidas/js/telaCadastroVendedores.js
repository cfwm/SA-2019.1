function fnSalvarVendedor(){
    //BUSCAR INFORMAÇÕES FORMULARIO HTML
    var infoVendedor = {
        codigo:document.getElementById("codVendedor").value,
        nome:document.getElementById("nomeVendedor").value.toUpperCase(),
        cpf:document.getElementById("cpfVendedor").value,
        sexo:document.getElementById("sexoVendedor").value.toUpperCase(),
        endereco:
        {   
            cep:document.getElementById("cep").value,
            rua:document.getElementById("rua").value.toUpperCase(),
            numero:document.getElementById("num").value,
            complemento:document.getElementById("complemento").value.toUpperCase(),
            bairro:document.getElementById("bairro").value.toUpperCase(),
            cidade:document.getElementById("cidade").value.toUpperCase(),
            uf:document.getElementById("uf").value.toUpperCase(),
        },
        cargo:document.getElementById("cargo").value,
        dtAdmissao:document.getElementById("admissao").value,
        dtNascimento:document.getElementById("nascimento").value,
        contato:
        {
            dddFone:document.getElementById("dddFone").value,
            nrFone:document.getElementById("nrFone").value,
            dddCel:document.getElementById("dddCel").value,
            dddCel:document.getElementById("nrCel").value,
            email:document.getElementById("email").value,
            usrLogin:document.getElementById("usrLogin").value,
            usrSenha:document.getElementById("usrSenha").value,
        }
    }

    tabelaLogin(infoVendedor.codigo,infoVendedor.contato.usrLogin,infoVendedor.contato.usrSenha);

    //TRANSFORMAR JSON EM ARRAY
    var tabelaVendedor = JSON.parse(localStorage.getItem("tabelaVendedor"));

    //GERANDO ARRAY COM AS INFORMAÇÕES
    if(tabelaVendedor == null){
        var tabelaVendedor = new Array;
        tabelaVendedor.push(infoVendedor);    
    } else{
        tabelaVendedor.push(infoVendedor);
    }   
    
    console.log(tabelaVendedor);

    //SALVAR EM FORMATO JSON
    var formatoJSON = JSON.stringify(tabelaVendedor);
    localStorage.setItem("tabelaVendedor",formatoJSON);
    console.log("GRAVOU LOCALSTORAGE");    
    location.reload();  
}

//CANCELAR CADASTRO E EDIÇÃO
function fnCancelar(){    
    window.location.href="vendedores.html"
}

function consultaArray(){
    var table = document.getElementById("tabCadastro");
    var tabelaVendedor = JSON.parse(localStorage.getItem("tabelaVendedor"));

    var btnEditar="<a href=# style:(text-decoration-style: none; id=btn_edicao) onclick=fnModoEdicao()><img src=../img/btn_gerais/iconeEditar.png alt='Editar Cadastro Vendedor' title='Editar Cadastro Vendedor'></a>";
    // var btnInformacoes="<a href=# style:(text-decoration-style: none; height: 10%;) onclick=modal()><img src=../img/btn_gerais/iconeMaisInformacoes.png alt=Editar Cadastro Vendedor></a>";
    
    if(tabelaVendedor == null){
        console.log("NÃO LOJAS CADASTRADAS");
    } else {
        for(var i=0; i<tabelaVendedor.length; i++){
            //INSERE AS LINNNHAS NO HTML
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);
            cell4 = newRow.insertCell(3);
            cell5 = newRow.insertCell(4);
            cell6 = newRow.insertCell(5);
            cell7 = newRow.insertCell(6);
                        
            //RETORNA O VALORES DO ARRY
            codVendedor = tabelaVendedor[i].codigo,
            nomeVendedor = tabelaVendedor[i].nome,
            cpfVendedor = tabelaVendedor[i].cpf,
            sexoVendedor = tabelaVendedor[i].sexo,
            cep = tabelaVendedor[i].endereco.cep,
            rua = tabelaVendedor[i].endereco.rua,
            num = tabelaVendedor[i].endereco.numero,
            complemento = tabelaVendedor[i].endereco.complemento,
            bairro = tabelaVendedor[i].endereco.bairro,
            cidade = tabelaVendedor[i].endereco.cidade,
            uf = tabelaVendedor[i].endereco.uf,            
            cargo = tabelaVendedor[i].cargo,
            admissao = tabelaVendedor[i].dtAdmissao,
            nascimento = tabelaVendedor[i].dtNascimento
            dddFone = tabelaVendedor[i].contato.dddFone,
            nrFone = tabelaVendedor[i].contato.nrFone,
            dddCel = tabelaVendedor[i].contato.dddCel,
            nrCel = tabelaVendedor[i].contato.nrCel,
            email = tabelaVendedor[i].contato.email,        
            usrLogin = tabelaVendedor[i].contato.usrLogin, 
            usrSenha = tabelaVendedor[i].contato.usrSenha, 
            
            //INSERE VALORES NAS CELULAS
            cell1.innerHTML = codVendedor,
            cell2.innerHTML = nomeVendedor,
            cell3.innerHTML = cpfVendedor,
            cell4.innerHTML = cidade,
            cell5.innerHTML = uf,
            cell6.innerHTML = email;
            cell7.innerHTML = btnEditar;
        }
    }
}

//genIdVendedor
function gerarCodigoVendedor(){
    console.log("inicio função")
    var btnIdCodigos = document.getElementById("btnIdCodigos");
    var genIdVendedor = JSON.parse(localStorage.getItem("genIdVendedor"));
    var numVendedor = "COL";

    if(genIdVendedor == null){
        genIdVendedor = new Array;
        numVendedor = numVendedor + 1;
        genIdVendedor.push(numVendedor);
    } else{
        numVendedor = numVendedor+(genIdVendedor.length + 1);
        genIdVendedor.push(numVendedor);
    }

    //TRANSOFORMAR ARRYA EM FORMATO JSON
    var formatoJason = JSON.stringify(genIdVendedor);
    //GRAVANDO NO LOCAL STORAGE
    localStorage.setItem("genIdVendedor",formatoJason);
    //INSERE O CÓDIGO NO HTML
    document.getElementById("codVendedor").value = numVendedor;
    btnIdCodigos.style.visibility = 'hidden';
}

function fnModoEdicao(){
    var tabelaVendedor = JSON.parse(localStorage.getItem("tabelaVendedor"));
    var rIndex,table = document.getElementById("tabCadastro");
    for (var i=0; i<table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById("codVendedor").value = tabelaVendedor[(rIndex-1)].codigo;
            document.getElementById("nomeVendedor").value = tabelaVendedor[(rIndex-1)].nome;
            document.getElementById("cpfVendedor").value = tabelaVendedor[(rIndex-1)].cpf;
            document.getElementById("sexoVendedor").value = tabelaVendedor[(rIndex-1)].sexo;
            document.getElementById("cep").value = tabelaVendedor[(rIndex-1)].endereco.cep;
            document.getElementById("rua").value = tabelaVendedor[(rIndex-1)].endereco.rua;
            document.getElementById("num").value = tabelaVendedor[(rIndex-1)].endereco.numero;
            document.getElementById("complemento").value = tabelaVendedor[(rIndex-1)].endereco.complemento;
            document.getElementById("bairro").value = tabelaVendedor[(rIndex-1)].endereco.bairro;
            document.getElementById("cidade").value = tabelaVendedor[(rIndex-1)].endereco.cidade;
            document.getElementById("uf").value = tabelaVendedor[(rIndex-1)].endereco.uf;
            document.getElementById("cargo").value = tabelaVendedor[(rIndex-1)].cargo;
            document.getElementById("admissao").value = tabelaVendedor[(rIndex-1)].dtAdmissao;
            document.getElementById("nascimento").value = tabelaVendedor[(rIndex-1)].dtNascimento;
            document.getElementById("dddFone").value = tabelaVendedor[(rIndex-1)].contato.dddFone;
            document.getElementById("nrFone").value = tabelaVendedor[(rIndex-1)].contato.nrFone;
            document.getElementById("dddCel").value = tabelaVendedor[(rIndex-1)].contato.dddCel;
            document.getElementById("nrCel").value = tabelaVendedor[(rIndex-1)].contato.nrCel;
            document.getElementById("email").value = tabelaVendedor[(rIndex-1)].contato.email;
            document.getElementById("usrLogin").value = tabelaVendedor[(rIndex-1)].contato.usrLogin;
            document.getElementById("usrSenha").value = tabelaVendedor[(rIndex-1)].contato.usrSenha;
        }
    }
    document.getElementById("editLoja").setAttribute("checked","disabled", "style","display: block");
    document.getElementById("modoEdicao").innerText = "MODO EDIÇÃO"; 
    document.getElementById("btnAdicionar").style.display = "none";
    document.getElementById("btnEditar").style.display = "inline-block";
    btnIdCodigos.style.visibility = 'hidden';
    btnGeraSenha.style.visibility = 'hidden';
    document.getElementById("usrLogin").disabled = true;    
}

function fnEditarCadVendedor(){
    // alert("OK")
    var tabelaVendedor = JSON.parse(localStorage.getItem("tabelaVendedor"));
    var indexVendedor = tabelaVendedor.findIndex(function(codVendedor) {
        return codVendedor.codigo == document.getElementById("codVendedor").value;
    });
    
    tabelaVendedor[indexVendedor] = {
        codigo:document.getElementById("codVendedor").value,
        nome:document.getElementById("nomeVendedor").value.toUpperCase(),
        cpf:document.getElementById("cpfVendedor").value,
        sexo:document.getElementById("sexoVendedor").value,
        endereco:
        {   
            cep:document.getElementById("cep").value,
            rua:document.getElementById("rua").value,
            numero:document.getElementById("num").value,
            complemento:document.getElementById("complemento").value,
            bairro:document.getElementById("bairro").value,
            cidade:document.getElementById("cidade").value,
            uf:document.getElementById("uf").value,
        },
        cargo:document.getElementById("cargo").value,
        dtAdmissao:document.getElementById("admissao").value,
        dtNascimento:document.getElementById("nascimento").value,
        contato:
        {
            dddFone:document.getElementById("dddFone").value,
            nrFone:document.getElementById("nrFone").value,
            dddCel:document.getElementById("dddCel").value,
            nrCel:document.getElementById("nrCel").value,
            email:document.getElementById("email").value,
            usrLogin:document.getElementById("usrLogin").value,
            usrSenha:document.getElementById("usrSenha").value,
        }
    }
    var formatoJSON = JSON.stringify(tabelaVendedor);
    localStorage.setItem("tabelaVendedor",formatoJSON);
    btnIdCodigos.style.visibility = 'hidden';
    btnGeraSenha.style.visibility = 'hidden';
    location.reload();
}

//geradorDeSenhas
function gerarSenhas(){
    var btnGeraSenha = document.getElementById("btnGeraSenha");
    var usrSenha = 0;
    var min = 00000000;
    var max = 99999999;
    
    usrSenha = Math.floor((Math.random() * (max - min)) + min);
    btnGeraSenha.style.visibility = 'hidden';
    document.getElementById("usrSenha").value = usrSenha;
}


function tabelaLogin(codigoVendedor, usrLogin, usrSenha){
    var codigoVendedor = codigoVendedor;
    var usrLogin = usrLogin;
    var usrSenha = usrSenha;
    var infoLogins =  {
            codigo:codigoVendedor,
            usrLogin:usrLogin,
            usrSenha:usrSenha,
        }

    var tabelaLogin = JSON.parse(localStorage.getItem("tabelaLogin"));

    if(tabelaLogin == null){
        var tabelaLogin = new Array();
        tabelaLogin.push(infoLogins);
    }else{
        tabelaLogin.push(infoLogins);
    }   
    var formatoJSON = JSON.stringify(tabelaLogin);
    localStorage.setItem("tabelaLogin",formatoJSON);
}