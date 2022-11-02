const botoes = document.getElementById('teclado')
let senhatv =''

document.getElementById('senha').addEventListener('keydown', function(e) {
    if (e.key != '') {
        e.preventDefault()
        alert('Por favor utilize o teclado virtual!');
    }
});

function inserirsenha(valor){
    if (valor == 10){
        senhatv =""
        valor = ""
    }
    else if(valor == 11 ){
        valor=""
        if(senhatv.length >= 4 && senhatv.length <= 6){
        alert("A senha é válida!")}
        else{
            alert("A senha não é válida")
        }
    } 
    else if(senhatv.length > 5){
        alert('A senha deve ter no máximo 6 números!')
        valor=""
    }
    senhatv = senhatv + valor
    document.getElementById('senha').value = senhatv 
  }