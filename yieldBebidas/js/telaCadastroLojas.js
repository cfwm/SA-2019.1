function fnSalvarLoja(){
    //BUSCAR INFORMAÇÕES FORMULARIO HTML
    var infoLojas = {
        codigo:document.getElementById("codLoja").value,
        nome:document.getElementById("nomeLoja").value.toUpperCase(),
        cnpj:document.getElementById("cnpjLoja").value,
        dados:
        {   
            cep:document.getElementById("cep").value,
            rua:document.getElementById("rua").value,
            numero:document.getElementById("num").value,
            complemento:document.getElementById("complemento").value,
            bairro:document.getElementById("bairro").value,
            cidade:document.getElementById("cidade").value,
            uf:document.getElementById("uf").value,
            contato:document.getElementById("contato").value,
            ddd:document.getElementById("ddd").value,
            telefone:document.getElementById("telefone").value,
            email:document.getElementById("email").value,
            site:document.getElementById("site").value,
        }
    }

    console.log("ARRAY CADASTRO CRIADO");
    console.log(infoLojas);

    //TRANSFORMAR JSON EM ARRAY
    var tabelaLoja = JSON.parse(localStorage.getItem("tabelaLoja"));
    console.log("Retorno JSON >> " + tabelaLoja);

    //GERANDO ARRAY COM AS INFORMAÇÕES
    if(tabelaLoja == null){
        var tabelaLoja = new Array;
        tabelaLoja.push(infoLojas);    
        console.log("PASSOU PQ JSON ESTÁ VAZIO");
    } else{
        tabelaLoja.push(infoLojas);
        console.log("Criou porque o json estava com informações");
    }   
    
    console.log(tabelaLoja);

    //SALVAR EM FORMATO JSON
    var formatoJSON = JSON.stringify(tabelaLoja);
    localStorage.setItem("tabelaLoja",formatoJSON);
    console.log("GRAVOU LOCALSTORAGE");    
    location.reload();  
}
//CANCELAR CADASTRO E EDIÇÃO
function fnCancelar(){    
    window.location.href="lojas.html"
}
// function respCadCliente(){
//     document.getElementById("respCadCliente").innerText = "Não há cadastro de lojas!";
// }

//FUNÇÃO INSERÇÃO DE ARRAY NA TABELA
function consultaArray(){
    const storageLoja = JSON.parse(localStorage.getItem("tabelaLoja"));
    const tbody = document.getElementById("tbody");
    const btnEditar="<a href=# style:(text-decoration-style: none; id=btn_edicao) onclick=fnModoEdicao()><img src=../img/btn_gerais/iconeEditar.png alt='Editar Cadastro Loja' title='Editar Cadastro Loja'></a>";
//10% 20% 20% 20% 5% 20% 5%
    for(let i = 0; i < storageLoja.length; i++){
        var linha = "<tr>"+
                "<td style='width: 10%'>"    + storageLoja[i].codigo      + "</td>" +
                "<td style='width: 20%'>"    + storageLoja[i].nome    + "</td>" +
                "<td style='width: 20%'>"   + storageLoja[i].cnpj + "</td>" +
                "<td style='width: 20%'>"   + storageLoja[i].dados.cidade  + "</td>" +
                "<td style='width: 5%'>"   + storageLoja[i].dados.uf  + "</td>" +
                "<td style='width: 20%'>"   + storageLoja[i].dados.email  + "</td>" +
                "<td style='width: 5%'>"   + btnEditar    + "</td>" +
            "</tr>";
        tbody.innerHTML += linha;
        var linha = tbody.childNodes;
    }
}


function consultaArray1(){
    var table = document.getElementById("tabCadastro");
    var tabelaLoja = JSON.parse(localStorage.getItem("tabelaLoja"));

    var btnEditar="<a href=# style:(text-decoration-style: none; id=btn_edicao) onclick=fnModoEdicao()><img src=../img/btn_gerais/iconeEditar.png alt='Editar Cadastro Loja' title='Editar Cadastro Loja'></a>";
    //var btnInformacoes="<a href=# style:(text-decoration-style: none; height: 10%;) onclick=modal()><img src=../img/btn_gerais/iconeMaisInformacoes.png alt=Editar Cadastro Vendedor></a>";
    
    if(tabelaLoja == null){
        console.log("NÃO LOJAS CADASTRADAS");
    } else {
        for(var i=0; i<tabelaLoja.length; i++){
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
            codLoja = tabelaLoja[i].codigo,
            nomeLoja = tabelaLoja[i].nome,
            cnpjLoja = tabelaLoja[i].cnpj,
            cep = tabelaLoja[i].cep,
            rua = tabelaLoja[i].dados.rua,
            num = tabelaLoja[i].dados.numero,
            complemento = tabelaLoja[i].dados.complemento,
            bairro = tabelaLoja[i].dados.bairro,
            cidade = tabelaLoja[i].dados.cidade,
            uf = tabelaLoja[i].dados.uf,
            contato = tabelaLoja[i].dados.contato,
            ddd = tabelaLoja[i].dados.ddd,
            telefone = tabelaLoja[i].dados.telefone,
            email = tabelaLoja[i].dados.email,
            site = tabelaLoja[i].dados.site,
            
            //INSERE VALORES NAS CELULAS
            cell1.innerHTML = codLoja,
            cell2.innerHTML = nomeLoja,
            cell3.innerHTML = cnpjLoja,
            cell4.innerHTML = cidade,
            cell5.innerHTML = uf,
            cell6.innerHTML = email;
            cell7.innerHTML = btnEditar;
        }
    }
}
//genIdLoja
function gerarCodigoLoja(){
    console.log("inicio função")
    var btnIdCodigos = document.getElementById("btnIdCodigos");
    var genIdLoja = JSON.parse(localStorage.getItem("genIdLoja"));
    var numLoja = "LJ";

    if(genIdLoja == null){
        genIdLoja = new Array;
        numLoja = numLoja + 1;
        genIdLoja.push(numLoja);
    } else{
        numLoja = numLoja+(genIdLoja.length + 1);
        genIdLoja.push(numLoja);
    }

    //TRANSOFORMAR ARRYA EM FORMATO JSON
    var formatoJason = JSON.stringify(genIdLoja);
    //GRAVANDO NO LOCAL STORAGE
    localStorage.setItem("genIdLoja",formatoJason);
    //INSERE O CÓDIGO NO HTML
    document.getElementById("codLoja").value = numLoja;
    btnIdCodigos.style.visibility = 'hidden';
}

// function selecionarItemTabela(){
//     var rIndex,table = document.getElementById("tabCadastro");
//     for (var i=1; i<table.rows.length; i++){
//         table.rows[i].onclick = function(){
//             rIndex = this.rowIndex;
//             document.getElementById("codLoja").value = this.cells[0].innerHTML;
//             document.getElementById("nomeLoja").value = this.cells[1].innerHTML;
//             document.getElementById("cnpjLoja").value = this.cells[2].innerHTML;
//             document.getElementById("cidade").value = this.cells[3].innerHTML;
//             document.getElementById("uf").value = this.cells[4].innerHTML;
//             document.getElementById("email").value = this.cells[5].innerHTML;
//         }
//     }
//     document.getElementsByClassName("label_abas")
// }

function fnModoEdicao(){
    var tabelaLoja = JSON.parse(localStorage.getItem("tabelaLoja"));
    var rIndex,table = document.getElementById("tabCadastro");
    for (var i=0; i<table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById("codLoja").value = tabelaLoja[(rIndex-1)].codigo;
            document.getElementById("nomeLoja").value = tabelaLoja[(rIndex-1)].nome;
            document.getElementById("cnpjLoja").value = tabelaLoja[(rIndex-1)].cnpj;
            document.getElementById("cep").value = tabelaLoja[(rIndex-1)].dados.cep;
            document.getElementById("rua").value = tabelaLoja[(rIndex-1)].dados.rua;
            document.getElementById("num").value = tabelaLoja[(rIndex-1)].dados.numero;
            document.getElementById("complemento").value = tabelaLoja[(rIndex-1)].dados.complemento;
            document.getElementById("bairro").value = tabelaLoja[(rIndex-1)].dados.bairro;
            document.getElementById("cidade").value = tabelaLoja[(rIndex-1)].dados.cidade;
            document.getElementById("uf").value = tabelaLoja[(rIndex-1)].dados.uf;
            document.getElementById("contato").value = tabelaLoja[(rIndex-1)].dados.contato;
            document.getElementById("ddd").value = tabelaLoja[(rIndex-1)].dados.ddd;
            document.getElementById("telefone").value = tabelaLoja[(rIndex-1)].dados.telefone;
            document.getElementById("email").value = tabelaLoja[(rIndex-1)].dados.email;
            document.getElementById("site").value = tabelaLoja[(rIndex-1)].dados.site;
        }
    }
    document.getElementById("editLoja").setAttribute("checked","disabled", "style","display: block");
    document.getElementById("modoEdicao").innerText = "MODO EDIÇÃO"; 
    document.getElementById("btnAdicionar").style.display = "none";
    document.getElementById("btnEditar").style.display = "inline-block";
    btnIdCodigos.style.visibility = 'hidden';
    
}


function fnEditarCadLoja(){
    // alert("OK")
    var tabelaLoja = JSON.parse(localStorage.getItem("tabelaLoja"));
    var indexLoja = tabelaLoja.findIndex(function(codLoja) {
        return codLoja.codigo == document.getElementById("codLoja").value;
    });
    
    tabelaLoja[indexLoja] = {
        codigo:document.getElementById("codLoja").value,
        nome:document.getElementById("nomeLoja").value.toUpperCase(),
        cnpj:document.getElementById("cnpjLoja").value,
        dados:
        {   
            cep:document.getElementById("cep").value,
            rua:document.getElementById("rua").value,
            numero:document.getElementById("num").value,
            complemento:document.getElementById("complemento").value,
            bairro:document.getElementById("bairro").value,
            cidade:document.getElementById("cidade").value,
            uf:document.getElementById("uf").value,
            contato:document.getElementById("contato").value,
            ddd:document.getElementById("ddd").value,
            telefone:document.getElementById("telefone").value,
            email:document.getElementById("email").value,
            site:document.getElementById("site").value,
        }
    }

    var formatoJSON = JSON.stringify(tabelaLoja);
    localStorage.setItem("tabelaLoja",formatoJSON);
    location.reload();
}

function localizarCadLoja(){
    var tabelaLoja = JSON.parse(localStorage.getItem("tabCadastro"));
    var nomes = tabelaLoja.findIndex(function(nome) {
        return nome.codigo == document.getElementById("codLoja").value;
    });
    
    tabelaLoja[nomes] = {
        codigo:document.getElementById("codLoja").value,
        nome:document.getElementById("nomeLoja").value,
        cnpj:document.getElementById("cnpjLoja").value,
        cidade:document.getElementById("cidadE").value,
        uf:document.getElementById("uf").value,
        email:document.getElementById("email").value,
    }

    console.log(tabelaLoja);
    console.log(tabelaLoja[nomes].email);

    var formatoJSON = JSON.stringify(tabelaLoja);
    localStorage.setItem("tabelaLoja",formatoJSON);

    location.reload();
    consultaArray();
}

function aparecer(){
    document.getElementById("cadLoja").style.visibility = "visible"
}



function modal(){
    alert("Fazer modal com todas as informações das lojas!!");s
}