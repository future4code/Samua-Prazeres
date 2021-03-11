let dados = {
    titulo: document.getElementById("titulo-post"),
    autor: document.getElementById("autor-post"),
    post: document.getElementById("conteudo-post"),
}

function botaoCriar () {
    let impressao = document.getElementById("container-de-posts")
    impressao.innerHTML += 
    `<div>
     <h2>${dados.titulo.value}</h2>
     <p>${dados.post.value}</p>
     <p> - ${dados.autor.value}</p>
    </div>`
    dados.titulo.value = ""
    dados.autor.value = ""
    dados.post.value = ""
}
