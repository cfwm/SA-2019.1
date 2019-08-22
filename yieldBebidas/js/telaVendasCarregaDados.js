function fnCarregaDadosLocalStorage(){
    var lojas = JSON.parse(localStorage.getItem("tabelaLoja"));
    var vendedores = JSON.parse(localStorage.getItem("tabelaVendedor"));
    var cliente = JSON.parse(localStorage.getItem("tabelaCliente"));
    var produto = JSON.parse(localStorage.getItem("tabelaProduto"));
    fnPesquisaLojas(lojas);
    fnPesquisaVendedores(vendedores);
    fnPesquisaCliente(cliente);
    fnPesquisaProduto(produto);
    fnCarregaDatas();
}

function fnPesquisaLojas(lojas){
    var listaLojas = lojas;
    var dataLista = document.getElementById("pesquisaLoja");
    for (var i=0; i<listaLojas.length;i++){
       var option = document.createElement("option");
       var codigo = listaLojas[i].codigo;
       var nome = listaLojas[i].nome;
       option.append(codigo);
       option.setAttribute("value", nome);
       dataLista.insertBefore(option,dataLista.lastChild);
    }
}

function fnPesquisaVendedores(vendedores){
    var listaVendedores = vendedores;
    var dataLista = document.getElementById("pesquisaVendedor");
    for (var i=0; i<listaVendedores.length;i++){
       var option = document.createElement("option");
       var codigo = listaVendedores[i].codigo;
       var nome = listaVendedores[i].nome;
       option.append(codigo);
       option.setAttribute("value", nome);
       dataLista.insertBefore(option,dataLista.lastChild);
    }
}

function fnPesquisaCliente(cliente){
    var listaCliente = cliente;
    var dataLista = document.getElementById("pesquisaCliente");
    for (var i=0; i<listaCliente.length;i++){
       var option = document.createElement("option");
       var codigo =( listaCliente[i].codigo + " " + listaCliente[i].cpf);
       var nome = listaCliente[i].nome;
       option.append(codigo);
       option.setAttribute("value", nome);
       dataLista.insertBefore(option,dataLista.lastChild);
    }
}

function fnPesquisaProduto(produto){
    var listaProduto = produto;
    var dataLista = document.getElementById("pesquisaProduto");
    for (var i=0; i<listaProduto.length;i++){
       var option = document.createElement("option");
       var codigo = listaProduto[i].codigo;
       var codBarras = listaProduto[i].codBarras;
       var descricao = listaProduto[i].descricao;
       option.append(codigo + " " + codBarras);
       option.setAttribute("value", descricao);
       dataLista.insertBefore(option,dataLista.lastChild);
    }
}

function fnCarregaDatas(){
    document.getElementById("dtInicial").value= "01/06/2019";
    document.getElementById("dtFinal").value= "30/06/2019";

    function dataCompleta(){
        let data = new Date();
        let dia = data.getDate();
        let mes = ("0"+(data.getMonth()+1)).slice(-2);
        let ano = data.getFullYear();

        return dia + "/" + mes + "/" + ano;
    }
}