const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especies');
const condicao = document.querySelector('#status');

taduzirCondicao = (data) => {
    if (data.status = 'desconecido') {
        return 'nao sei';
    } if (data.status =  'alive') {
        return 'sim';
    } if (data.status = 'dead'){
        return ('nao, esta morto')
    }
}


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () =>{
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
       method: 'GET',
       headers: {
           Accept: 'application/json',
           "Content-type": 'application/json'
       }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao (data);
    
    });
}
botao.onclick = pegarPersonagem;
    