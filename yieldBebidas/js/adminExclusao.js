function fnExcluiStorageProdutos(){
    localStorage.removeItem("tabelaProduto");
    document.getElementById("retornoFuncoes").innerHTML ="tabelaProduto > Excluida com sucesso";
}

function fnExcluiStorageCodigoProdutos(){
    localStorage.removeItem("genIdProduto");
    document.getElementById("retornoFuncoes").innerHTML ="genIdProduto > Excluida com sucesso";
}

function fnExcluiStorageCodBarrasProdutos(){
    localStorage.removeItem("genIdProdutoBarras");
    document.getElementById("retornoFuncoes").innerHTML ="genIdProdutoBarras > Excluida com sucesso";
}

function fnExcluiStorageLojas(){
    localStorage.removeItem("tabelaLoja");
    document.getElementById("retornoFuncoes").innerHTML ="tabelaLoja > Excluida com sucesso";
}

function fnExcluiStorageCodigoLojas(){
    localStorage.removeItem("genIdLoja");
    document.getElementById("retornoFuncoes").innerHTML ="genIdLoja > Excluida com sucesso";
}

function fnExcluiStorageVendedores(){
    localStorage.removeItem("tabelaVendedor");
    document.getElementById("retornoFuncoes").innerHTML ="tabelaVendedor > Excluida com sucesso";
}

function fnExcluiStorageCodigoVendedores(){
    localStorage.removeItem("genIdVendedor");
    document.getElementById("retornoFuncoes").innerHTML =" > Excluida com sucesso";
}

function fnExcluiStorageClientes(){
    localStorage.removeItem("tabelaCliente");
    document.getElementById("retornoFuncoes").innerHTML ="tabelaCliente > Excluida com sucesso";
}

function fnExcluiStorageCodigoClientes(){
    localStorage.removeItem("genIdCliente");
    document.getElementById("retornoFuncoes").innerHTML ="genIdCliente > Excluida com sucesso";
}

function fnExcluiStorageVendas(){
    localStorage.removeItem("");
    document.getElementById("retornoFuncoes").innerHTML =" > Excluida com sucesso";
}

function fnExcluiStorageCodigoVendas(){
    localStorage.removeItem("");
    document.getElementById("retornoFuncoes").innerHTML =" > Excluida com sucesso";
}