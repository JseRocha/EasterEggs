console.log('🐰Meus parabéns voce achou um Easter egg!🥚 Continue seguindo as pegadas do coelho...🐇');

const titulo = document.getElementById('titulo');
        titulo.addEventListener('click', () => {
            alert('Você achou um easter egg! Parabéns!🐰');
        });

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Aqui não tem easter egg! Tente uma busca.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Siga o coelho branco!</p>"
    }

    section.innerHTML = resultados;
}