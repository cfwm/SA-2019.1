function recuperaDadosInformados(){
    
    var produto = document.getElementById("localizaProduto").value;
    var quantidade = document.getElementById("produtoQuantidade").value;

    if(quantidade == "" || parseFloat(quantidade)<0){
        alert("Valor Inválido Para Quantidade!")
    } else {
        vendaTemporaria(produto, quantidade);

        document.getElementById("localizaProduto").value = "";
        document.getElementById("produtoQuantidade").value = "";
    }
}

function dataCompleta(){
    var data = new Date();
    var dia = data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
    return dia;
}


function vendaTemporaria(produto, quantidade){
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));
    var tabelaVendaTemporaria = JSON.parse(localStorage.getItem("tabelaVendaTemporaria"));
    var localizaIndexProduto = tabelaProduto.findIndex(function(descricaoProd) {
        return descricaoProd.descricao == produto;
    });

    var saldoEstque = tabelaProduto[localizaIndexProduto].quantidade >= parseFloat(quantidade);
      
    if(saldoEstque == false){
        alert("Não há saldo suficiente!\nSaldo atual para o produto \"" + tabelaProduto[localizaIndexProduto].descricao + "\" é " +tabelaProduto[localizaIndexProduto].quantidade + ".")
    } else{
       
        var produto =  produto;
        var quantidade = quantidade;
        var vUnitario = tabelaProduto[localizaIndexProduto].precoVenda;
        var vTotal = addZeroes(trocaSeparadorDecimal(tabelaProduto[localizaIndexProduto].precoVenda) * quantidade);

        if(tabelaVendaTemporaria == null){
            var dadosVendas = {
                dados: [{
                }],
                produto:[{
                    item: 1,
                    nomeProduto: produto,
                    qtdeVendida: quantidade,
                    vUnitario: vUnitario,
                    vTotal: vTotal,
                }],
            }
            tabelaVendaTemporaria = new Array;
            tabelaVendaTemporaria.push(dadosVendas);
        } else {
        var novoItem = {
                item: (tabelaVendaTemporaria[0].produto.length + 1),
                nomeProduto: produto,
                qtdeVendida: quantidade,
                vUnitario: vUnitario,
                vTotal: vTotal,
            }
            tabelaVendaTemporaria[0].produto.push(novoItem);
        }

        var formatoJSON = JSON.stringify(tabelaVendaTemporaria);
        localStorage.setItem("tabelaVendaTemporaria", formatoJSON);
        fnAtualizaEstoque("saida", produto, quantidade);
        consultaArray();
        valorTotalVenda();
    }
}

//CARREGAR ITENS CUPOM NA TELA
function consultaArray(){
    var tabelaItensCupom = document.getElementById("tabelaItensCupom");
    var tabelaVendaTemporaria = JSON.parse(localStorage.getItem("tabelaVendaTemporaria"));
    
    if(tabelaVendaTemporaria == null){
        console.log("NÃO LOJAS CADASTRADAS");
    } else { 
        var indice=tabelaVendaTemporaria[0].produto.length - 1;
        for(var i=indice; i<tabelaVendaTemporaria[0].produto.length; i++){
            //INSERE AS LINNNHAS NO HTML
            newRow = tabelaItensCupom.insertRow(tabelaItensCupom.length),
            newRow.setAttribute('id', i),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);
            cell4 = newRow.insertCell(3);
            cell5 = newRow.insertCell(4);
                        
            //RETORNA O VALORES DO ARRY
            cupom = tabelaVendaTemporaria[0].cupom,
            nomeLoja = tabelaVendaTemporaria[0].nomeLoja,
            nomeVendedor = tabelaVendaTemporaria[0].nomeVendedor,
            nomeCliente = tabelaVendaTemporaria[0].nomeCliente,
            item = tabelaVendaTemporaria[0].produto[i].item,
            nomeProduto = tabelaVendaTemporaria[0].produto[i].nomeProduto,
            qtdeVendida = tabelaVendaTemporaria[0].produto[i].qtdeVendida,
            vUnitario = tabelaVendaTemporaria[0].produto[i].vUnitario,
            vTotal = tabelaVendaTemporaria[0].produto[i].vTotal,
           
            //INSERE VALORES NAS CELULAS
            cell1.innerHTML = item,
            cell2.innerHTML = nomeProduto,
            cell3.innerHTML = qtdeVendida,
            cell4.innerHTML = vUnitario,
            cell5.innerHTML = vTotal
        }
    }
}

function fnAtualizaEstoque(tipo, produto, quantidade){
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));
    var indexProduto = tabelaProduto.findIndex(function(descricaoProd) {
        return descricaoProd.descricao == produto;
    });
    var tipo = tipo;
    var quantidade = parseFloat(quantidade);
    var atualizaEstoque = 0;
    var precoCompra = tabelaProduto[indexProduto].precoCompra;
    var precoVenda = tabelaProduto[indexProduto].precoVenda;

    if(tipo == "saida") {
        atualizaEstoque = tabelaProduto[indexProduto].quantidade - quantidade;
    }   
    
    if(tipo == "entrada") {
        atualizaEstoque = tabelaProduto[indexProduto].quantidade + quantidade;
    }   

    tabelaProduto[indexProduto].quantidade = atualizaEstoque;

    var formatoJSON = JSON.stringify(tabelaProduto);
    localStorage.setItem("tabelaProduto",formatoJSON);
    fnCalculaValorEstoque(indexProduto, atualizaEstoque, precoCompra, precoVenda);
}

function addZeroes(num) {
    return num.toLocaleString("pt-BR", {useGrouping: true, minimumFractionDigits: 2})
 }

 function valorTotalVenda(){
    var tabelaVendaTemporaria = JSON.parse(localStorage.getItem("tabelaVendaTemporaria"));
    var arrayLength = tabelaVendaTemporaria[0].produto.length;
    var total = 0;

    for (var i=0; i<arrayLength; i++){
        let nvalor = trocaSeparadorDecimal(tabelaVendaTemporaria[0].produto[i].vTotal);
        total += parseFloat(nvalor);
    }
    
    document.getElementById("somaTotal").innerText = addZeroes(total);
 }

 function fnExcluiItemVenda(){
    var tabelaVendaTemporaria = JSON.parse(localStorage.getItem("tabelaVendaTemporaria"));
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));
    var i = parseInt(prompt("Informe o item a ser excluído:"))
    var index = (i-1);
    var retornaSaldo = tabelaVendaTemporaria[0].produto[index].qtdeVendida;
    var produto = tabelaVendaTemporaria[0].produto[index].nomeProduto

    tabelaVendaTemporaria[0].produto[index].vTotal = 0;
    tabelaVendaTemporaria[0].produto[index].vUnitario = 0;
    tabelaVendaTemporaria[0].produto[index].qtdeVendida = 0;

    var formatoJSON = JSON.stringify(tabelaVendaTemporaria);
    localStorage.setItem("tabelaVendaTemporaria",formatoJSON);

    //PRODUTO
    var indexProduto = tabelaProduto.findIndex(function(descricaoProd) {
        return descricaoProd.descricao == produto;
    });

    fnAtualizaEstoque("entrada", produto, retornaSaldo);
    trocarCorExcluido(index);
    valorTotalVenda();
 }

 function trocarCorExcluido(item){
     document.getElementById(item).style.backgroundColor = 'red';
     document.getElementById(item).style.color = 'white';
 }

 function fnFinalizaVenda(){
    var tabelaVendaTemporaria = JSON.parse(localStorage.getItem("tabelaVendaTemporaria"));
    var tabelaVenda = JSON.parse(localStorage.getItem("tabelaVenda"));

    var dadosVendas = {
            nrCupom:  fnGeraNrCupom(),
            nomeLoja: document.getElementById("localizaLoja").value,
            nomeVendedor: document.getElementById("localizaVendedor").value,
            nomeCliente: document.getElementById("localizaCliente").value,
            data: dataCompleta(),
    }

    tabelaVendaTemporaria[0].dados.push(dadosVendas);
    console.log(tabelaVendaTemporaria);
    tabelaVendaTemporaria[0].dados.shift();
    console.log(tabelaVendaTemporaria);

    if(tabelaVenda == null){
        formatoTempJSON = JSON.stringify(tabelaVendaTemporaria);
        localStorage.setItem("tabelaVenda",formatoTempJSON); 
    } else {
        tabelaVenda.push(tabelaVendaTemporaria[0]);
        formatoJSON = JSON.stringify(tabelaVenda);
        localStorage.setItem("tabelaVenda",formatoJSON); 
    }
    
    localStorage.removeItem('tabelaVendaTemporaria');
    location.reload();
 }

 function fnCancelaVenda(){
    let tabelaVendaTemporaria = JSON.parse(localStorage.getItem("tabelaVendaTemporaria"));

    if (tabelaVendaTemporaria != null){
        let venda = tabelaVendaTemporaria[0];
        console.log(venda.produto.length)
        for (let i = 0; i < venda.produto.length; i++){
            console.log(venda.produto[i].nomeProduto + "\n" + venda.produto[i].qtdeVendida);
            fnAtualizaEstoque("entrada", venda.produto[i].nomeProduto, venda.produto[i].qtdeVendida);
        }
    }
    localStorage.removeItem('tabelaVendaTemporaria');
    location.reload();
 }


 function fnCalculaValorEstoque(indexProduto, atualizaEstoque, precoCompra, precoVenda){
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));
    var indexProduto = indexProduto;
    var qtdProduto = atualizaEstoque;
    var precoCompraProduto = precoCompra;
    var precoVendaProduto = precoVenda;
    var valorEstoqueCompraAtualizado = (qtdProduto * precoVendaProduto);
    var valorEstoqueVendaAtualizado = (qtdProduto * precoCompraProduto);
    
    tabelaProduto[indexProduto].valorEstoque = valorEstoqueVendaAtualizado.toFixed(2);
    tabelaProduto[indexProduto].valotTotal = valorEstoqueCompraAtualizado.toFixed(2);

    var formatoJSON = JSON.stringify(tabelaProduto);
    localStorage.setItem('tabelaProduto', formatoJSON)
}
 
function fnGeraNrCupom(){
    var genNrCupom = JSON.parse(localStorage.getItem("genNrCupom"));
    var nrCupom = 0;

    if(genNrCupom == null){
        genNrCupom = new Array;
        nrCupom = 1;
        genNrCupom.push(nrCupom);
    } else {
        nrCupom = (genNrCupom.length + 1);
        genNrCupom.push(nrCupom);
    }

    var formatoJSON = JSON.stringify(genNrCupom);
    localStorage.setItem("genNrCupom", formatoJSON);

    return nrCupom;
}

function addZeroes(num) {
    return num.toLocaleString("pt-BR", {useGrouping: false, minimumFractionDigits: 2})
 }

function trocaSeparadorDecimal(preco){
    let precoSubstituido = preco;
    return precoSubstituido.replace(",",".");
}



//FUNÇÕES DE LOCALIZA DADOS EM ARRAY
    // //LOJA
    // var indexLoja = tabelaLoja.findIndex(function(nomeLoja) {
    //     return nomeLoja.nome == loja;   
    // });
    
    // //VENDEDOR
    // var indexVendedor = tabelaVendedor.findIndex(function(nomeVendedor) {
    //     return nomeVendedor.nome == vendedor;
    // });
    // //CLIENTE
    // var indexCliente = tabelaCliente.findIndex(function(nomeCliente) {
    //     return nomeCliente.codigo == cliente;
    // });
    // //PRODUTO
    // var indexProduto = tabelaProduto.findIndex(function(descricaoProd) {
    //     return descricaoProd.descricao == produto;
    // });