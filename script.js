function contar() {
    //chamada da função e criação das variaveis
    var ini = document.getElementById('txti')
    var f = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')
    //se o valor que a variavél "pegar" for igual a 0 então...window..
    if (ini.value.length == 0 || f.value.length == 0 || pass.value.length == 0) {
        window.alert ("[ERRO] Faltam dados!")
        //resultado e concatenação caso for igual a 0
        res.innerHTML += "Impossivel contar!"
    }else { //senão
        //resultado se os dados estiver correto
        //"br" serve como um tipo de paragrafo
        res.innerHTML = 'Contando: <br>'
        //conversor de string para numero
        var i = Number(ini.value)
        var fi = Number(f.value)
        var p = Number (pass.value)
        // valor da variavél passa a ser o que declaramos acima 

        //contagem crescente
        if (i < fi){
            for (var c = i; c <= fi; c+= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        //contagem regressiva
        } else {
            for (var c = i; c >= fi; c -= p){
                res.innerHTML += ` ${c} \u{1F449} ` 
            }
        }
        res.innerHTML += ` ${c} \u{1F44F}`
    }
}
