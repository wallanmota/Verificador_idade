document.querySelector('form.idade').addEventListener('submit', (event)=>{
    event.preventDefault()

    let ano = document.querySelector("#ano").value;
    let sexo = document.getElementsByName('sexo');
    let imagem = document.querySelector('img');
    let data = new Date();
    let anoAtual = data.getFullYear();
    let idade = "";
    let genero = "";
    validaAno();
    
    if(ano == 0 || validaSexo() == false ){
        clear();
        document.querySelector('#alerta').style.color = "red";
    }else if(sexo[0].checked){
        genero = "Homem"
        resultado();
        if(idade >= 0 && idade < 15){
            imagem.src = 'img/h1.jpg'
        }else if(idade < 40){
            imagem.src = 'img/h2.jpg'
        }else if(idade < 60){
            imagem.src = 'img/h3.jpg'
        }else{
            imagem.src = 'img/h4.jpg'
        }
    }else if(sexo[1].checked){
        genero = "Mulher"
        resultado();
        if(idade >= 0 && idade < 15){
            imagem.src = 'img/m1.jpg'
        }else if(idade < 40){
            imagem.src = 'img/m2.jpg'
        }else if( idade < 60){
            imagem.src = 'img/m3.jpg'
        }else{
            imagem.src = 'img/m4.jpg'
        }
    }

    function validaSexo(){
        if(sexo[0].checked == false && sexo[1].checked == false){
            return false;
        }
        return true;
    }

    function validaAno(){
        if(ano.length == 0 || ano > anoAtual){
            alert('Ano digitado inválido')
            ano = 0;
        }else{
            idade = anoAtual - ano;
        }
    }

    function resultado(){
        document.querySelector('#result').innerHTML = `Detectamos ${genero} com ${idade} anos`
        document.querySelector('#imgIdade').style.display = "block";
        document.querySelector('#alerta').style.display = "none";
    };

    function clear(){
        document.querySelector('#imgIdade').style.display = "none";
        document.querySelector('#alerta').style.display = "block";
    };
    
});
