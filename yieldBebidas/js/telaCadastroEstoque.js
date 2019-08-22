function fnSalvarProduto(){
    //BUSCAR INFORMAÇÕES FORMULARIO HTML
    var infoProduto = {
        codigo:document.getElementById("codProduto").value,
        codBarras: document.getElementById("codProdutoBarras").value,
        descricao:document.getElementById("nomeProduto").value.toUpperCase(),
        origem:document.getElementById("origemProduto").value.toUpperCase(),
        unidade:document.getElementById("unidadeProduto").value.toUpperCase(),
        validade:document.getElementById("validadeProduto").value.toUpperCase(),
        quantidade:document.getElementById("qtdProduto").value.toUpperCase(),
        precoCompra:document.getElementById("precoCompraProduto").value,
        valorEstoque:document.getElementById("valorTotalCustoEstoque").value,
        precoVenda:document.getElementById("precoVendaProduto").value,
        valotTotal:document.getElementById("valorTotalVendaEstoque").value,
    }

    //TRANSFORMAR JSON EM ARRAY
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));

    //GERANDO ARRAY COM AS INFORMAÇÕES
    if(tabelaProduto == null){
        var tabelaProduto = new Array;
        tabelaProduto.push(infoProduto);    
    } else{
        tabelaProduto.push(infoProduto);
    }   
    
    console.log(tabelaProduto);

    //SALVAR EM FORMATO JSON
    var formatoJSON = JSON.stringify(tabelaProduto);
    localStorage.setItem("tabelaProduto",formatoJSON);
    location.reload();  
}

//CANCELAR CADASTRO E EDIÇÃO
function fnCancelar(){          
    window.location.href="estoque.html"
}

function consultaArray(){
    var table = document.getElementById("tabCadastro");
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));

    var btnEditar="<a href=# style:(text-decoration-style: none; id=btn_edicao) onclick=fnModoEdicao()><img src=../img/btn_gerais/iconeEditar.png alt='Editar Cadastro Cliente' title='Editar Cadastro Produto'></a>";
    //var btnInformacoes="<a href=# style:(text-decoration-style: none; height: 10%;) onclick=modal()><img src=../img/btn_gerais/iconeMaisInformacoes.png alt=Editar Cadastro Produto></a>";
    
    if(tabelaProduto == null){
        console.log("NÃO EXISTEM PRODUTOS CADASTRADOS!");
    } else {
        for(var i=0; i<tabelaProduto.length; i++){
            //INSERE AS LINNNHAS NO HTML
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);
            cell4 = newRow.insertCell(3);
            cell5 = newRow.insertCell(4);
            cell6 = newRow.insertCell(5);
            // cell7 = newRow.insertCell(6);
            
                        
            //RETORNA O VALORES DO ARRY  

            codProduto = tabelaProduto[i].codigo,
            codProdutoBarras = tabelaProduto[i].codBarras,
            nomeProduto = tabelaProduto[i].descricao,
            origemProduto = tabelaProduto[i].origem,    
            unidadeProduto = tabelaProduto[i].unidade,
            validadeProduto = tabelaProduto[i].validade,
            qtdProduto = tabelaProduto[i].quantidade, 
            precoCompraProduto = tabelaProduto[i].precoCompra,
            valorTotalCustoEstoque = tabelaProduto[i].valorEstoque,
            precoVendaProduto = tabelaProduto[i].precoVenda,
            valorTotalVendaEstoque = tabelaProduto[i].valotTotal,
            
            //INSERE VALORES NAS CELULAS
            cell1.innerHTML = codProduto;
            cell2.innerHTML = codProdutoBarras;
            cell3.innerHTML = nomeProduto;
            cell4.innerHTML = qtdProduto;
            cell5.innerHTML = precoVendaProduto;
            cell6.innerHTML = btnEditar;
            // cell7.innerHTML = btnInformacoes;
        }
    }
}

//genIdProduto
function gerarCodigoProduto(){
    var btnIdCodigos = document.getElementById("btnIdCodigos");
    var genIdProduto = JSON.parse(localStorage.getItem("genIdProduto"));
    var numProduto = "P";

    if(genIdProduto == null){
        genIdProduto = new Array;
        numProduto = numProduto + 1;
        genIdProduto.push(numProduto);
    } else{
        numProduto = numProduto+(genIdProduto.length + 1);
        genIdProduto.push(numProduto);
    }

    //TRANSOFORMAR ARRYA EM FORMATO JSON
    var formatoJason = JSON.stringify(genIdProduto);
    //GRAVANDO NO LOCAL STORAGE
    localStorage.setItem("genIdProduto",formatoJason);
    //INSERE O CÓDIGO NO HTML
    document.getElementById("codProduto").value = numProduto;
    btnIdCodigos.style.visibility = 'hidden';
}

//genIdCodBarras
function gerarCodigoBarras(){
    console.log("inicio função")
    var btnIdCodigosBarras = document.getElementById("btnIdCodigosBarras");
    var genIdProdutoBarras = JSON.parse(localStorage.getItem("genIdProdutoBarras"));
    var numProdutoBarras = 7851364290000;

    if(genIdProdutoBarras == null){
        genIdProdutoBarras = new Array;
        numProdutoBarras = numProdutoBarras + 1;
        genIdProdutoBarras.push(numProdutoBarras);
    } else{
        numProdutoBarras = numProdutoBarras+(genIdProdutoBarras.length + 1);
        genIdProdutoBarras.push(numProdutoBarras);
    }

    //TRANSOFORMAR ARRYA EM FORMATO JSON
    var formatoJason = JSON.stringify(genIdProdutoBarras);
    //GRAVANDO NO LOCAL STORAGE
    localStorage.setItem("genIdProdutoBarras",formatoJason);
    //INSERE O CÓDIGO NO HTML
    document.getElementById("codProdutoBarras").value = numProdutoBarras;
    btnIdCodigosBarras.style.visibility = 'hidden';
}

function fnModoEdicao(){
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));
    var rIndex,table = document.getElementById("tabCadastro");
    for (var i=0; i<table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById("codProduto").value = tabelaProduto[(rIndex-1)].codigo;
            document.getElementById("codProdutoBarras").value = tabelaProduto[(rIndex-1)].codBarras;
            document.getElementById("nomeProduto").value = tabelaProduto[(rIndex-1)].descricao;
            document.getElementById("origemProduto").value = tabelaProduto[(rIndex-1)].origem;
            document.getElementById("unidadeProduto").value = tabelaProduto[(rIndex-1)].unidade;
            document.getElementById("validadeProduto").value = tabelaProduto[(rIndex-1)].validade;
            document.getElementById("qtdProduto").value = tabelaProduto[(rIndex-1)].quantidade;
            document.getElementById("precoCompraProduto").value = tabelaProduto[(rIndex-1)].precoCompra;
            document.getElementById("valorTotalCustoEstoque").value = tabelaProduto[(rIndex-1)].valorEstoque;
            document.getElementById("precoVendaProduto").value = tabelaProduto[(rIndex-1)].precoVenda;
            document.getElementById("valorTotalVendaEstoque").value = tabelaProduto[(rIndex-1)].valotTotal;
        }
    }
    document.getElementById("editLoja").setAttribute("checked","disabled", "style","display: block");
    document.getElementById("modoEdicao").innerText = "MODO EDIÇÃO"; 
    document.getElementById("btnAdicionar").style.display = "none";
    document.getElementById("btnEditar").style.display = "inline-block";
    btnIdCodigosBarras.style.visibility = 'hidden';
    btnIdCodigos.style.visibility = 'hidden';
}

function fnEditarCadProduto(){
    // alert("OK")
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));
    var indexProduto = tabelaProduto.findIndex(function(codProduto) {
        return codProduto.codigo == document.getElementById("codProduto").value;
    });
    
    tabelaProduto[indexProduto] = {
        codigo:document.getElementById("codProduto").value,
        codBarras: document.getElementById("codProdutoBarras").value,
        descricao:document.getElementById("nomeProduto").value.toUpperCase(),
        origem:document.getElementById("origemProduto").value.toUpperCase(),
        unidade:document.getElementById("unidadeProduto").value.toUpperCase(),
        validade:document.getElementById("validadeProduto").value.toUpperCase(),
        quantidade:document.getElementById("qtdProduto").value.toUpperCase(),
        precoCompra:document.getElementById("precoCompraProduto").value,
        valorEstoque:document.getElementById("valorTotalCustoEstoque").value,
        precoVenda:document.getElementById("precoVendaProduto").value,
        valotTotal:document.getElementById("valorTotalVendaEstoque").value,
    }

    var formatoJSON = JSON.stringify(tabelaProduto);
    localStorage.setItem("tabelaProduto",formatoJSON);
    location.reload();
}

function fnCalculaEstoque(idPreco){
    let idPrecoProduto = idPreco;
    let preco = trocaSeparadorDecimal(document.getElementById(idPrecoProduto).value);
    let qtdProduto = document.getElementById("qtdProduto").value;
    let resultado = addZeroes((qtdProduto * preco));
    
    if(idPrecoProduto == "precoCompraProduto"){
        document.getElementById("valorTotalCustoEstoque").value = resultado;
    } else if(idPrecoProduto == "precoVendaProduto") {
        document.getElementById("valorTotalVendaEstoque").value = resultado;
    }

}

function addZeroes(num) {
    return num.toLocaleString("pt-BR", {useGrouping: false, minimumFractionDigits: 2})
 }

function trocaSeparadorDecimal(preco){
    let precoSubstituido = preco;
    return precoSubstituido.replace(",",".");
}

