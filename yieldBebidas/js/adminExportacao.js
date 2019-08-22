function fnExportaStorageProdutos(){
    let storageProdutos = JSON.stringify(JSON.parse(localStorage.getItem("tabelaProduto")));
    document.getElementById("retornoFuncoes").innerHTML = storageProdutos;
}

function fnExportaStorageCodigoProdutos(){
    let storageCodigoProdutos = JSON.stringify(JSON.parse(localStorage.getItem("genIdProduto")));
    document.getElementById("retornoFuncoes").innerHTML = storageCodigoProdutos;
}

function fnExportaStorageCodBarrasProdutos(){
    let storageCodBarrasProdutos = JSON.stringify(JSON.parse(localStorage.getItem("genIdProdutoBarras")));
    document.getElementById("retornoFuncoes").innerHTML = storageCodBarrasProdutos;

}

function fnExportaStorageLojas(){
    let storageLojas = JSON.stringify(JSON.parse(localStorage.getItem("tabelaLoja")));
    document.getElementById("retornoFuncoes").innerHTML = storageLojas;
}

function fnExportaStorageCodigoLojas(){
    let storageCodigoLojas = JSON.stringify(JSON.parse(localStorage.getItem("genIdLoja")));
    document.getElementById("retornoFuncoes").innerHTML = storageCodigoLojas;
}

function fnExportaStorageVendedores(){
    let storageVendedores = JSON.stringify(JSON.parse(localStorage.getItem("tabelaVendedor")));
    document.getElementById("retornoFuncoes").innerHTML = storageVendedores;
}

function fnExportaStorageCodigoVendedores(){
    let storageCodVendedores = JSON.stringify(JSON.parse(localStorage.getItem("genIdVendedor")));
    document.getElementById("retornoFuncoes").innerHTML = storageCodVendedores;
}

function fnExportaStorageClientes(){
    let storageClientes = JSON.stringify(JSON.parse(localStorage.getItem("tabelaCliente")));
    document.getElementById("retornoFuncoes").innerHTML = storageClientes;
}

function fnExportaStorageCodigoClientes(){
    let storageCodigoClientes = JSON.stringify(JSON.parse(localStorage.getItem("genIdCliente")));
    document.getElementById("retornoFuncoes").innerHTML = storageCodigoClientes;
}

function fnExportaStorageVendas(){
    let storageVendas = JSON.stringify(JSON.parse(localStorage.getItem("")));
    document.getElementById("retornoFuncoes").innerHTML = storageVendas;
}

function fnExportaStorageCodigoVendas(){
    let storageCodigoVendas = JSON.stringify(JSON.parse(localStorage.getItem("")));
    document.getElementById("retornoFuncoes").innerHTML = storageCodigoVendas;    
}