let url = 'https://5e67d916-6e89-4804-a944-6dca7a6845e3-00-24j4bp0cukzzo.janeway.replit.dev/add'


const botaoSalvar = document.getElementById('salvar')
const botaoAtualizar = document.getElementById('updateButton')

const postLivro = async function(){
    
    let titulo = document.getElementById('title')
    let foto = document.getElementById('image')
    let valor = document.getElementById('price')


    let livroJSON = {}

    
    livroJSON.name = titulo.value
    livroJSON.image = foto.value
    livroJSON.price = valor.value

    let response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(livroJSON)
    }) 

    
    if(response.status == 201){
        alert('Item inserido com sucesso')
        getLivros()
    }else{
        alert('Não foi possivel inserir o registro, verifique os dados enviados')
    }

}


const putLivro = function(){

}

const deleteLivro = async function(idLivro){
    let url = 'https://5e67d916-6e89-4804-a944-6dca7a6845e3-00-24j4bp0cukzzo.janeway.replit.dev/update/'+idLivro

    let response = await fetch(url, {
        method: 'DELETE'
    })

    if (response.status == 200){
        alert('Registro excluido com sucesso!')
        getLivros()
    }else{
        alert('Não foi possível relizar a exclusão do registro.')
    }
}
const showEditPopover = function (livro) {
    
    document.getElementById('editTitle').value = livro.name;
    document.getElementById('editImage').value = livro.image;
    document.getElementById('editPrice').value = livro.price;

    
    document.getElementById('updateButton').setAttribute('data-id', livro.id);

    
    document.getElementById('editPopover').classList.remove('hidden');
};


const updateLivro = async function () {
    let idLivro = document.getElementById('updateButton').getAttribute('data-id');
    let url = `https://5e67d916-6e89-4804-a944-6dca7a6845e3-00-24j4bp0cukzzo.janeway.replit.dev/update/${idLivro}`;

    let livroAtualizado = {
        name: document.getElementById('editTitle').value,
        image: document.getElementById('editImage').value,
        price: document.getElementById('editPrice').value
    };

    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livroAtualizado)
        });

        if (response.ok) {
            alert('Livro atualizado com sucesso!');
            document.getElementById('editPopover').classList.add('hidden');
            getLivros(); 
        } else {
            throw new Error('Erro ao atualizar o livro');
        }
    } catch (error) {
        console.error('Erro:', error.message);
    }
};

const getLivros = async function () {
    let url = 'https://5e67d916-6e89-4804-a944-6dca7a6845e3-00-24j4bp0cukzzo.janeway.replit.dev/';

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API');
        }

        let dados = await response.json();
        let divListDados = document.getElementById('listDados');
        divListDados.innerHTML = '';

        dados.forEach(function (livro) {
            let divDados = document.createElement('div');
            let divTitle = document.createElement('div');
            let divImage = document.createElement('div');
            let divPrice = document.createElement('div');
            let divOpcoes = document.createElement('div');
            let spanEditar = document.createElement('span');
            let imgEditar = document.createElement('img');
            let spanExcluir = document.createElement('span');
            let imgExcluir = document.createElement('img');

            divDados.setAttribute('id', 'dados');
            divDados.setAttribute('class', 'linha dados');
            imgEditar.setAttribute('src', 'icones/editar.png');
            imgEditar.setAttribute('idLivro', livro.id);
            imgExcluir.setAttribute('src', 'icones/excluir.png');
            imgExcluir.setAttribute('idLivro', livro.id);

            divTitle.innerText = livro.name;
            divImage.innerText = livro.image;
            divPrice.innerText = `R$ ${livro.price}`;

            divListDados.appendChild(divDados);
            divDados.appendChild(divTitle);
            divDados.appendChild(divImage);
            divDados.appendChild(divPrice);

            divDados.appendChild(divOpcoes);
            divOpcoes.appendChild(spanEditar);
            spanEditar.appendChild(imgEditar);
            divOpcoes.appendChild(spanExcluir);
            spanExcluir.appendChild(imgExcluir);

            
            imgExcluir.addEventListener('click', function () {
                if (confirm('Deseja realmente excluir este item?')) {
                    let id = imgExcluir.getAttribute('idLivro');
                    deleteLivro(id);
                }
            });

            
            imgEditar.addEventListener('click', function () {
                showEditPopover(livro);
            });
        });
    } catch (error) {
        console.error('Erro:', error.message);
    }
};

document.getElementById('updateButton').addEventListener('click', updateLivro);
document.getElementById('closePopover').addEventListener('click', function () {
    document.getElementById('editPopover').classList.add('hidden');
});

botaoSalvar.addEventListener('click', function(){
    postLivro()
})

window.addEventListener('load', function(){
    getLivros()
})