
function fnIncluiStorageProdutos(){
    let storageProdutos = [
        {"codigo":"P1","codBarras":"7851364290001","descricao":"JOHNNIE WALKER","origem":"ESCÓCIA","unidade":"LT","validade":"31/12/2025","quantidade":"100","precoCompra":"54,87","valorEstoque":"54870,00","precoVenda":"115,98","valotTotal":"115980,00"},
        {"codigo":"P2","codBarras":"7851364290002","descricao":"SMIRNOFF","origem":"RÚSSIA","unidade":"LT","validade":"31/12/2025","quantidade":"100","precoCompra":"48,97","valorEstoque":"4897,00","precoVenda":"89,05","valotTotal":"8905,00"},
        {"codigo":"P3","codBarras":"7851364290003","descricao":"JACK DANIELS","origem":"EUA","unidade":"LT","validade":"31/12/2025","quantidade":"100","precoCompra":"56,12","valorEstoque":"5612,00","precoVenda":"102,45","valotTotal":"10245,00"},
        {"codigo":"P4","codBarras":"7851364290004","descricao":"CÎROC","origem":"FRANÇA","unidade":"LT","validade":"31/12/2025","quantidade":"100","precoCompra":"48,35","valorEstoque":"4835,00","precoVenda":"100,89","valotTotal":"10089,00"},
        {"codigo":"P5","codBarras":"7851364290005","descricao":"JOSÉ CUERVO","origem":"MÉXICO","unidade":"LT","validade":"31/12/2025","quantidade":"100","precoCompra":"39,76","valorEstoque":"3976,00","precoVenda":"80,15","valotTotal":"8015,00"},
        {"codigo":"P6","codBarras":"7851364290006","descricao":"CAPTAIN MORGAN","origem":"PORTO RICO","unidade":"LT","validade":"31/12/2025","quantidade":"100","precoCompra":"45,78","valorEstoque":"4578,00","precoVenda":"93,21","valotTotal":"9321,00"},
        {"codigo":"P7","codBarras":"7851364290007","descricao":"HEINEKEN","origem":"HOLANDA","unidade":"ML","validade":"31/12/2025","quantidade":"100","precoCompra":"3,89","valorEstoque":"389,00","precoVenda":"8,71","valotTotal":"871,00"},
        {"codigo":"P8","codBarras":"7851364290008","descricao":"CORONA","origem":"MÉXICO","unidade":"ML","validade":"31/12/205","quantidade":"100","precoCompra":"4,58","valorEstoque":"458,00","precoVenda":"10,89","valotTotal":"1089,00"},
        {"codigo":"P9","codBarras":"7851364290009","descricao":"STELLA ARTOIS","origem":"BELGICA","unidade":"ML","validade":"31/12/2025","quantidade":"100","precoCompra":"3,87","valorEstoque":"387,00","precoVenda":"9,34","valotTotal":"934,00"},
        {"codigo":"P10","codBarras":"7851364290010","descricao":"BUDWEISER","origem":"EUA","unidade":"ML","validade":"31/12/2025","quantidade":"100","precoCompra":"4,76","valorEstoque":"476,00","precoVenda":"10,31","valotTotal":"1031,00"}
        ];

    let formatoJSON = JSON.stringify(storageProdutos);
    localStorage.setItem("tabelaProduto", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="tabelaProduto > Criada com sucesso";
}

function fnIncluiStorageCodigoProdutos(){
    let storageCodigoProdutos = ["P1","P2","P3","P4","P5","P6","P7","P8","P9","P10"];
    let formatoJSON = JSON.stringify(storageCodigoProdutos);
    localStorage.setItem("genIdProduto", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="genIdProduto > Criada com sucesso";
}

function fnIncluiStorageCodBarrasProdutos(){
    let storageCodBarrasProdutos = [7851364290001,7851364290002,7851364290003,7851364290004,7851364290005,7851364290006,7851364290007,7851364290008,7851364290009,7851364290010];
    let formatoJSON = JSON.stringify(storageCodBarrasProdutos);
    localStorage.setItem("genIdProdutoBarras", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="genIdProdutoBarras > Criada com sucesso";
}

function fnIncluiStorageLojas(){
    let storageLojas = [{"codigo":"LJ1","nome":"MATRIZ YIELD BEBIDAS","cnpj":"12.345.678/0001-90","dados":{"cep":"88035-000","rua":"AVENIDA MADRE BENVENUTA","numero":"280","complemento":"sala a","bairro":"SANTA MÔNICA","cidade":"FLORIANÓPOLIS","uf":"SC","contato":"Enzo","ddd":"(48)","telefone":"3003-1001","email":"enzo@yieldbebidas.com.br","site":"https://yieldbebidas.com.br/matriz"}},{"codigo":"LJ2","nome":"FILIAL SÃO JOSE","cnpj":"12.345.678/0001-91","dados":{"cep":"88102-001","rua":"AVENIDA LÉDIO JOÃO MARTINS","numero":"230","complemento":"","bairro":"KOBRASOL","cidade":"SÃO JOSÉ","uf":"SC","contato":"Yasmin","ddd":"(48)","telefone":"3003-2002","email":"yasmin@yieldbebidas.com.br","site":"https://yieldbebidas.com.br/filialsaojose"}}]
    ;
    let formatoJSON = JSON.stringify(storageLojas);
    localStorage.setItem("tabelaLoja", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="tabelaLoja > Criada com sucesso";
}

function fnIncluiStorageCodigoLojas(){
    let storageCodigoLojas = ["LJ1","LJ2"];
    let formatoJSON = JSON.stringify(storageCodigoLojas);
    localStorage.setItem("genIdLoja", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="genIdLoja > Criada com sucesso";
}

function fnIncluiStorageVendedores(){
    let storageVendedores = [{"codigo":"COL1","nome":"CARLOS MOREIRA","cpf":"123.456.789-01","sexo":"M","endereco":{"cep":"88058-323","rua":"SERVIDÃO ABELARDO MANOEL DOS SANTOS","numero":"12","complemento":"","bairro":"INGLESES DO RIO VERMELHO","cidade":"FLORIANÓPOLIS","uf":"SC"},"cargo":"vendedor","dtAdmissao":"01/02/2019","dtNascimento":"15/08/1999","contato":{"dddFone":"(48)","nrFone":"4004-1001","dddCel":"9 8989-0001","email":"carlosmoreira@gmail.com","usrLogin":"carlosmoreira","usrSenha":"87598368"}},{"codigo":"COL2","nome":"JONATHAN WEBER","cpf":"123.456.789-02","sexo":"M","endereco":{"cep":"88036-240","rua":"SERVIDÃO ABÍLIO SILVA","numero":"134","complemento":"","bairro":"TRINDADE","cidade":"FLORIANÓPOLIS","uf":"SC"},"cargo":"vendedor","dtAdmissao":"01/02/2019","dtNascimento":"03/05/2001","contato":{"dddFone":"(48)","nrFone":"4004-2002","dddCel":"9 8989-0002","email":"jonathanweber@gmail.com","usrLogin":"jonathanweber","usrSenha":"62407846"}},{"codigo":"COL3","nome":"LEONARDO LEMOS","cpf":"123.456.789-03","sexo":"M","endereco":{"cep":"88102-001","rua":"AVENIDA LÉDIO JOÃO MARTINS","numero":"345","complemento":"AP 1001","bairro":"KOBRASOL","cidade":"SÃO JOSÉ","uf":"SC"},"cargo":"vendedor","dtAdmissao":"01/02/2019","dtNascimento":"08/02/2000","contato":{"dddFone":"(48)","nrFone":"4004-3003","dddCel":"9 8989-0003","email":"leonardolemos@gmail.com","usrLogin":"leonardolemos","usrSenha":"92210681"}}]
    ;
    let formatoJSON = JSON.stringify(storageVendedores);
    localStorage.setItem("tabelaVendedor", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="tabelaVendedor > Criada com sucesso";
}

function fnIncluiStorageCodigoVendedores(){
    let storageCodVendedores = ["COL1","COL2","COL3"];
    let formatoJSON = JSON.stringify(storageCodVendedores);
    localStorage.setItem("genIdVendedor", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="genIdVendedor > Criada com sucesso";
}

function fnIncluiStorageClientes(){
    let storageClientes = [{"codigo":"CLI1","nome":"INOCÊNCIO SILVA","cpf":"123.456.789-10","sexo":"M","endereco":{"cep":"88037-408","rua":"RUA ACELON EDUARDO DA SILVA","numero":"132","complemento":"","bairro":"CÓRREGO GRANDE","cidade":"FLORIANÓPOLIS","uf":"SC"},"contato":{"dtNascimento":"15/08/1998","dddFone":"(48)","nrFone":"5005-1001","dddCel":"(48)","nrCel":"9 8989-1001","email":"inocenciosilva@gmail.com"}},{"codigo":"CLI2","nome":"BRISA SILVA BRACCHI","cpf":"123.456.789-11","sexo":"F","endereco":{"cep":"88058-417","rua":"SERVIDÃO ACRÓPOLE","numero":"123","complemento":"","bairro":"INGLESES DO RIO VERMELHO","cidade":"FLORIANÓPOLIS","uf":"SC"},"contato":{"dtNascimento":"15/08/2000","dddFone":"(48)","nrFone":"5005-1002","dddCel":"(48)","nrCel":"9 8989-1002","email":"brisasilva@gmail.com"}},{"codigo":"CLI3","nome":"GILBERTO OLIVEIRA","cpf":"123.456.789-12","sexo":"M","endereco":{"cep":"88090-750","rua":"RUA ACÁCIO MOREIRA","numero":"123","complemento":"","bairro":"CAPOEIRAS","cidade":"FLORIANÓPOLIS","uf":"SC"},"contato":{"dtNascimento":"15/08/2000","dddFone":"(48)","nrFone":"5005-1003","dddCel":"(48)","nrCel":"9 8989-1003","email":"gilbertooliveira@gmail.com"}},{"codigo":"CLI4","nome":"MILENA ROLIM DA SILVA","cpf":"123.456.789-13","sexo":"F","endereco":{"cep":"88061-170","rua":"RUA ACONCHEGO DO MAR","numero":"321","complemento":"AP 101","bairro":"BARRA DA LAGOA","cidade":"FLORIANÓPOLIS","uf":"SC"},"contato":{"dtNascimento":"15/08/2000","dddFone":"(48)","nrFone":"5005-1004","dddCel":"(48)","nrCel":"9 8989-1004","email":"milenarolim@hotmail.com"}},{"codigo":"CLI5","nome":"RUY ARRUDA CASSIANO","cpf":"123.456.789-14","sexo":"M","endereco":{"cep":"88030-175","rua":"RUA AGOSTINHO LAUSS","numero":"45","complemento":"AP 303","bairro":"JOÃO PAULO","cidade":"FLORIANÓPOLIS","uf":"SC"},"contato":{"dtNascimento":"15/08/2000","dddFone":"(48)","nrFone":"5005-1005","dddCel":"(48)","nrCel":"9 8989-1005","email":"ruycassiano@hotmail.com"}}];
    let formatoJSON = JSON.stringify(storageClientes);
    localStorage.setItem("tabelaCliente", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="tabelaCliente > Criada com sucesso";
}

function fnIncluiStorageCodigoClientes(){
    let storageCodigoClientes = ;
    let formatoJSON = JSON.stringify(storageCodigoClientes);
    localStorage.setItem("genIdCliente", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML ="genIdCliente > Criada com sucesso";
}

function fnIncluiStorageVendas(){
    let storageVendas = ["CLI1","CLI2","CLI3","CLI4","CLI5"];
    let formatoJSON = JSON.stringify(storageVendas);
    localStorage.setItem("", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML =" > Criada com sucesso";
}

function fnIncluiStorageCodigoVendas(){
    let storageCodigoVendas = ;
    let formatoJSON = JSON.stringify(storageCodigoVendas);
    localStorage.setItem("", formatoJSON);
    document.getElementById("retornoFuncoes").innerHTML =" > Criada com sucesso";
}