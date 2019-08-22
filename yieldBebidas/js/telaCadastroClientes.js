function fnSalvarCliente(){
    //BUSCAR INFORMAÇÕES FORMULARIO HTML
    var infoCliente = {
        codigo:document.getElementById("codCliente").value,
        nome:document.getElementById("nomeCliente").value.toUpperCase(),
        cpf:document.getElementById("cpfCliente").value,
        sexo:document.getElementById("sexoCliente").value.toUpperCase(),
        endereco:
        {   
            cep:document.getElementById("cep").value,
            rua:document.getElementById("rua").value.toUpperCase(),
            numero:document.getElementById("num").value.toUpperCase(),
            complemento:document.getElementById("complemento").value.toUpperCase(),
            bairro:document.getElementById("bairro").value.toUpperCase(),
            cidade:document.getElementById("cidade").value.toUpperCase(),
            uf:document.getElementById("uf").value.toUpperCase(),
        },
        contato:
        {
            dtNascimento:document.getElementById("nascimentoCliente").value.toUpperCase(),
            dddFone:document.getElementById("dddFoneCliente").value.toUpperCase(),
            nrFone:document.getElementById("nrFoneCliente").value.toUpperCase(),
            dddCel:document.getElementById("dddCelCliente").value.toUpperCase(),
            nrCel:document.getElementById("nrCelCliente").value.toUpperCase(),
            email:document.getElementById("emailCliente").value,
        }
    }

    console.log("ARRAY CADASTRO CRIADO");
    console.log(infoCliente);

    //TRANSFORMAR JSON EM ARRAY
    var tabelaCliente = JSON.parse(localStorage.getItem("tabelaCliente"));
    console.log("Retorno JSON >> " + tabelaCliente);

    //GERANDO ARRAY COM AS INFORMAÇÕES
    if(tabelaCliente == null){
        var tabelaCliente = new Array;
        tabelaCliente.push(infoCliente);    
        console.log("PASSOU PQ JSON ESTÁ VAZIO");
    } else{
        tabelaCliente.push(infoCliente);
        console.log("Criou porque o json estava com informações");
    }   
    
    console.log(tabelaCliente);

    //SALVAR EM FORMATO JSON
    var formatoJSON = JSON.stringify(tabelaCliente);
    localStorage.setItem("tabelaCliente",formatoJSON);
    console.log("GRAVOU LOCALSTORAGE");    
    location.reload();  
}

//CANCELAR CADASTRO E EDIÇÃO
function fnCancelar(){    
    window.location.href="clientes.html"
}

function consultaArray(){
    var table = document.getElementById("tabCadastro");
    var tabelaCliente = JSON.parse(localStorage.getItem("tabelaCliente"));

    var btnEditar="<a href=# style:(text-decoration-style: none; id=btn_edicao) onclick=fnModoEdicao()><img src=../img/btn_gerais/iconeEditar.png alt='Editar Cadastro Cliente' title='Editar Cadastro Cliente'></a>";
    //var btnInformacoes="<a href=# style:(text-decoration-style: none; height: 10%;) onclick=modal()><img src=../img/btn_gerais/iconeMaisInformacoes.png alt=Editar Cadastro Cliente></a>";
    
    if(tabelaCliente == null){
        console.log("NÃO LOJAS CADASTRADAS");
    } else {
        for(var i=0; i<tabelaCliente.length; i++){
            //INSERE AS LINNNHAS NO HTML
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);
            cell4 = newRow.insertCell(3);
            cell5 = newRow.insertCell(4);
            cell6 = newRow.insertCell(5);
            cell7 = newRow.insertCell(6);
            // cell8 = newRow.insertCell(7);
                        
            //RETORNA O VALORES DO ARRY
            codCliente = tabelaCliente[i].codigo,
            nomeCliente = tabelaCliente[i].nome,
            cpfCliente = tabelaCliente[i].cpf,
            sexoCliente = tabelaCliente[i].sexo,
            cep = tabelaCliente[i].endereco.cep,
            rua = tabelaCliente[i].endereco.rua,
            num = tabelaCliente[i].endereco.numero,
            complemento = tabelaCliente[i].endereco.complemento,
            bairro = tabelaCliente[i].endereco.bairro,
            cidade = tabelaCliente[i].endereco.cidade,
            uf = tabelaCliente[i].endereco.uf,           
            nascimentoCliente = tabelaCliente[i].contato.dtNascimento,
            dddFoneCliente = tabelaCliente[i].contato.dddFone,
            nrFoneCliente = tabelaCliente[i].contato.nrFone,
            dddCelCliente = tabelaCliente[i].contato.dddCel,
            nrCelCliente = tabelaCliente[i].contato.nrCel,
            emailCliente = tabelaCliente[i].contato.email,
            
            //INSERE VALORES NAS CELULAS
            cell1.innerHTML = codCliente;
            cell2.innerHTML = nomeCliente;
            cell3.innerHTML = cidade;
            cell4.innerHTML = uf;
            cell5.innerHTML = (dddFoneCliente+" "+nrFoneCliente);
            cell6.innerHTML = emailCliente;
            cell7.innerHTML = btnEditar;
            // cell8.innerHTML = btnInformacoes;
        }
    }
}

//genIdCliente
function gerarCodigoCliente(){
    console.log("inicio função")
    var btnIdCodigos = document.getElementById("btnIdCodigos");
    var genIdCliente = JSON.parse(localStorage.getItem("genIdCliente"));
    var numCliente = "CLI";

    if(genIdCliente == null){
        genIdCliente = new Array;
        numCliente = numCliente + 1;
        genIdCliente.push(numCliente);
    } else{
        numCliente = numCliente+(genIdCliente.length + 1);
        genIdCliente.push(numCliente);
    }

    //TRANSOFORMAR ARRYA EM FORMATO JSON
    var formatoJason = JSON.stringify(genIdCliente);
    //GRAVANDO NO LOCAL STORAGE
    localStorage.setItem("genIdCliente",formatoJason);
    //INSERE O CÓDIGO NO HTML
    document.getElementById("codCliente").value = numCliente;
    btnIdCodigos.style.visibility = 'hidden';
}

function fnModoEdicao(){
    var tabelaCliente = JSON.parse(localStorage.getItem("tabelaCliente"));
    var rIndex,table = document.getElementById("tabCadastro");
    for (var i=0; i<table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById("codCliente").value = tabelaCliente[(rIndex-1)].codigo;
            document.getElementById("nomeCliente").value = tabelaCliente[(rIndex-1)].nome;
            document.getElementById("cpfCliente").value = tabelaCliente[(rIndex-1)].cpf;
            document.getElementById("sexoCliente").value = tabelaCliente[(rIndex-1)].sexo;
            document.getElementById("cep").value = tabelaCliente[(rIndex-1)].endereco.cep;
            document.getElementById("rua").value = tabelaCliente[(rIndex-1)].endereco.rua;
            document.getElementById("num").value = tabelaCliente[(rIndex-1)].endereco.numero;
            document.getElementById("complemento").value = tabelaCliente[(rIndex-1)].endereco.complemento;
            document.getElementById("bairro").value = tabelaCliente[(rIndex-1)].endereco.bairro;
            document.getElementById("cidade").value = tabelaCliente[(rIndex-1)].endereco.cidade;
            document.getElementById("uf").value = tabelaCliente[(rIndex-1)].endereco.uf;
            document.getElementById("nascimentoCliente").value = tabelaCliente[(rIndex-1)].contato.dtNascimento;
            document.getElementById("dddFoneCliente").value = tabelaCliente[(rIndex-1)].contato.dddFone;
            document.getElementById("nrFoneCliente").value = tabelaCliente[(rIndex-1)].contato.nrFone;
            document.getElementById("dddCelCliente").value = tabelaCliente[(rIndex-1)].contato.dddCel;
            document.getElementById("nrCelCliente").value = tabelaCliente[(rIndex-1)].contato.nrCel;
            document.getElementById("emailCliente").value = tabelaCliente[(rIndex-1)].contato.email;
        }
    }
    document.getElementById("editLoja").setAttribute("checked","disabled", "style","display: block");
    document.getElementById("modoEdicao").innerText = "MODO EDIÇÃO"; 
    document.getElementById("btnAdicionar").style.display = "none";
    document.getElementById("btnEditar").style.display = "inline-block";
    btnIdCodigos.style.visibility = 'hidden';
    
}

function fnEditarCadCliente(){
    // alert("OK")
    var tabelaCliente = JSON.parse(localStorage.getItem("tabelaCliente"));
    var indexCliente = tabelaCliente.findIndex(function(codCliente) {
        return codCliente.codigo == document.getElementById("codCliente").value;
    });
    
    tabelaCliente[indexCliente] = {
        codigo:document.getElementById("codCliente").value,
        nome:document.getElementById("nomeCliente").value.toUpperCase(),
        cpf:document.getElementById("cpfCliente").value,
        sexo:document.getElementById("sexoCliente").value.toUpperCase(),
        endereco:
        {   
            cep:document.getElementById("cep").value.toUpperCase(),
            rua:document.getElementById("rua").value.toUpperCase(),
            numero:document.getElementById("num").value.toUpperCase(),
            complemento:document.getElementById("complemento").value.toUpperCase(),
            bairro:document.getElementById("bairro").value.toUpperCase(),
            cidade:document.getElementById("cidade").value.toUpperCase(),
            uf:document.getElementById("uf").value.toUpperCase(),
        },
        contato:
        {
            dtNascimento:document.getElementById("nascimentoCliente").value, 
            dddFone:document.getElementById("dddFoneCliente").value,
            nrFone:document.getElementById("nrFoneCliente").value,
            dddCel:document.getElementById("dddCelCliente").value,
            nrCel:document.getElementById("nrCelCliente").value,
            email:document.getElementById("emailCliente").value,
        }
    }
    var formatoJSON = JSON.stringify(tabelaCliente);
    localStorage.setItem("tabelaCliente",formatoJSON);
    location.reload();
}