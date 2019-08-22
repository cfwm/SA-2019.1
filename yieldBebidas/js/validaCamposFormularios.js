function fnValidaNomeLoja(){
    var tabelaLoja = JSON.parse(localStorage.getItem("tabelaLoja"));
    var nomeLoja = document.getElementById("nomeLoja").value.toUpperCase();

    var indexLoja = tabelaLoja.findIndex(function(tLoja) {
        return tLoja.nome == nomeLoja;   
    });
    
    if(indexLoja > -1){
        alert("Existe Filial Cadastrada Com Este Nome")
    }
}

function fnValidaCnpjLoja(){
    var tabelaLoja = JSON.parse(localStorage.getItem("tabelaLoja"));
    var cnpjLoja = document.getElementById("cnpjLoja").value;
    
    var indexLoja = tabelaLoja.findIndex(function(tLoja) {
        return tLoja.cnpj == cnpjLoja;   
    });
    
    if(indexLoja > -1){
        alert("Existe Filial Cadastrada Com Este CNPJ")
    }
}

function fnValidaCpfVendedor(){
    var tabelaVendedor = JSON.parse(localStorage.getItem("tabelaVendedor"));
    var cpfVendedor = document.getElementById("cpfVendedor").value;

    var indexVendedor = tabelaVendedor.findIndex(function(tVendedor) {
        return tVendedor.cpf == cpfVendedor;   
    });
    
    if(indexVendedor > -1){
        alert("Existe Vendedor(a) Cadastrado(a) Com Este CPF\nVendedor: "+tabelaVendedor[indexVendedor].nome);
    }
}

function fnValidaCpfCliente(){
    var tabelaCliente = JSON.parse(localStorage.getItem("tabelaCliente"));
    var cpfCliente = document.getElementById("cpfCliente").value;

    var indexCliente = tabelaCliente.findIndex(function(tCliente) {
        return tCliente.cpf == cpfCliente;   
    });
    
    if(indexCliente > -1){
        alert("Existe Cliente Cadastrado(a) Com Este CPF\nCliente: "+tabelaCliente[indexCliente].nome);
    }
}

function fnValidaNomeProduto(){
    var tabelaProduto = JSON.parse(localStorage.getItem("tabelaProduto"));
    var nomeProduto = document.getElementById("nomeProduto").value.toUpperCase();
    console.log(tabelaProduto);
    console.log(nomeProduto);

    var indexProduto = tabelaProduto.findIndex(function(tProduto) {
        return tProduto.descricao == nomeProduto;   
    });
    console.log(indexProduto);
    if(indexProduto > -1){
        alert("Existe Produto Cadastrado Com Este NOME\nProduto: "+tabelaProduto[indexProduto].codigo+" - "+tabelaProduto[indexProduto].descricao);
    }
}