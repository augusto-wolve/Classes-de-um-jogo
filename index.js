var guerrreiro =document.getElementById("escolheguerreiro")
var mago = document.getElementById("escolhemago")
var monge = document.getElementById("escolhemonge")
var ninja = document.getElementById ("escolheninja")
var resultado = document.getElementById("resultado")

 

function escolheguerreiro() {
    if (guerrreiro == guerrreiro) {
        classe = "Guerrreiro"
        magia = 'espada'
        resultado.innerHTML = alert(`Seu nome é Perseu você tem 18 anos sua classe é ${classe}, mago atacou usando magia, você usou ${magia} `)  
    }else{
        alert('Escolha outro')
    }
}

function escolhemago() {
    if (mago == mago) {
        classe = "Mago"
        magia = 'Magia'
        resultado.innerHTML = alert(`Seu nome é Perseu você tem 18 anos sua classe é ${classe}, ninja atacou usando Shuriken, você usou ${magia} `)    
    }else{
        alert('Escolha outro')
    }
}


function escolhemonge() {
    if (monge == monge) {
        classe = "Monge"
        magia = 'Artes Marciais'
        resultado.innerHTML = alert(`Seu nome é Perseu você tem 18 anos sua classe é ${classe}, guerreiro atacou usando espada, você usou ${magia} `)   
    }else{
        alert('Escolha outro')
    }
}



function escolheninja() {
    if (ninja == ninja) {
        classe = "Ninja"
        magia = 'Shuriken'
        resultado.innerHTML = alert(`Seu nome é Perseu você tem 18 anos sua classe é ${classe}, monge atacou usando Artes Marciais, você usou ${magia} `)
    }else{
        alert('Escolha outro')
    }
}


