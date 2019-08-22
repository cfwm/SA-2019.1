function dataCompleta(){
    var data = new Date();
    var dia = data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
    return dia;
}

function fnRelatoriosVendas(){
    let nomeLoja = document.getElementById("localizaLoja").value;
    let nomeVendedor = document.getElementById("localizaVendedor").value;
    let nomeCliente = document.getElementById("localizaCliente").value
    let nomeProduto = document.getElementById("localizaProduto").value
    let dtInicial = document.getElementById("dtInicial").value;
    let dtFinal = document.getElementById("dtFinal").value;

    excluirTabela();
    fnCriaStorageVendas();
    let storageVendas = JSON.parse(localStorage.getItem("tempStorageVendas"));
    
    console.log(storageVendas);

    let config = {cliente: nomeCliente, loja: nomeLoja, vendedor: nomeVendedor, produto: nomeProduto, dtInicial: dtInicial, dtFinal: dtFinal };
    let relatorio_filtro = fnDaniel(storageVendas,  config);

    fnGeraRelatorioVendas(relatorio_filtro);
    
}

function fnGeraRelatorioVendas(storageVendas){
    document.getElementById("relBody").style = ("visibility:","visibility");
    document.getElementById("relFooter").style = ("visibility:","visibility");
    const tbody = document.getElementById("tbody");
    
    
    for(let i = 0; i < storageVendas.length; i++){
        if(storageVendas[i].qtdeVendida > 0){
            var linha = "<tr>"+
                    "<td style='width: 7%'>"    + storageVendas[i].nrCupom      + "</td>" +
                    "<td style='width: 7%'>"    + storageVendas[i].dataVenda    + "</td>" +
                    "<td style='width: 17%; text-align: left;'>"   + storageVendas[i].nomeVendedor + "</td>" +
                    "<td style='width: 17%; text-align: left;'>"   + storageVendas[i].nomeCliente  + "</td>" +
                    "<td style='width: 17%; text-align: left;'>"   + storageVendas[i].nomeProduto  + "</td>" +
                    "<td style='width: 10%; text-align: right;'>"   + storageVendas[i].qtdeVendida  + "</td>" +
                    "<td style='width: 10%; text-align: right;'>"   + storageVendas[i].vUnitario    + "</td>" +
                    "<td style='width: 10%; text-align: right;'>"   + storageVendas[i].vTotal       + "</td>" +
                "</tr>";
            tbody.innerHTML += linha;
            var linha = tbody.childNodes;
        }
    }
    fnTotalRelatorio(storageVendas);
    
}


function excluirTabela(){
    let linhas = document.getElementById("tbody").rows;
    if(linhas.length > 0) {
        for (i = linhas.length-1; i>=0; i--){
            document.getElementById("tbody").deleteRow(i);
        }
    }
}

function fnTotalRelatorio(storageVendas){
        var total = 0;

    for (var i=0; i<storageVendas.length; i++){
        // let nvalor = fnTrocaVirgulaPorPonto(storageVendas[i].vTotal);
        let nvalor = storageVendas[i].vTotal;
        console.log("nValor: " + nvalor);
        total += parseFloat(nvalor);
        console.log("Total: " + total);
    }
    
    document.getElementById("valorTotal").innerText = addZeroes(total);
 }

 function fnTrocaVirgulaPorPonto(preco){
    let precoSubstituido =  preco;
    let novo = precoSubstituido.replace(",",".");
    return novo;
}

function addZeroes(num) {
    return num.toLocaleString("pt-BR", {useGrouping: true, minimumFractionDigits: 2})
 }


function fnCriaStorageVendas(){
 
        const storageVendas = JSON.parse(localStorage.getItem("tabelaVenda"));
        const storageRelatorioVendas = new Array;
        
        for(let i = 0; i < storageVendas.length; i++){
            for(let j = 0; j < storageVendas[i].dados.length; j++) {
                for(let k = 0; k < storageVendas[i].produto.length; k++){
                    let dadosVendas = {
                        nrCupom: storageVendas[i].dados[j].nrCupom,
                        dataVenda: storageVendas[i].dados[j].data,
                        nomeLoja: storageVendas[i].dados[j].nomeLoja,
                        nomeVendedor: storageVendas[i].dados[j].nomeVendedor,
                        nomeCliente: storageVendas[i].dados[j].nomeCliente,
                        nomeProduto: storageVendas[i].produto[k].nomeProduto,
                        qtdeVendida: storageVendas[i].produto[k].qtdeVendida,
                        vUnitario: storageVendas[i].produto[k].vUnitario,
                        vTotal: storageVendas[i].produto[k].vTotal,
                    }
                    storageRelatorioVendas.push(dadosVendas);
                }
            }
        }

        const formatoJason = JSON.stringify(storageRelatorioVendas);
        localStorage.setItem("tempStorageVendas", formatoJason);
    
}

//BY DANIEL
function fnDaniel(dados_entrada, config){

    let temparray = JSON.parse(JSON.stringify(dados_entrada));

    if (config.cliente !== "") {
        temparray = temparray.filter((a) => { return a.nomeCliente === config.cliente} );
    } 

    if (config.loja !== "") {
        temparray = temparray.filter((a) => { return a.nomeLoja === config.loja });
    }

    if (config.vendedor !== "") {
        temparray = temparray.filter((a) => { return a.nomeVendedor === config.vendedor });
    } 


    if (config.produto !== "") {
        temparray = temparray.filter((a) => { return a.nomeProduto === config.produto });
    } 

    if (config.dtInicial !== ""){
        temparray = temparray.filter((a) => { return a.dataVenda >= config.dtInicial });
    }

    if (config.dtFinal !== ""){
        temparray = temparray.filter((a) => { return a.dataVenda <= config.dtFinal });
    }

    return temparray;
}