document.getElementById('metaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const livro = document.getElementById('livro').value;
  const paginas = document.getElementById('paginas').value;
  const paginasDia = document.getElementById('paginasDia').value;
  const dias = document.getElementById('dias').value;

  const meta = {
    livro: livro,
    paginas: paginas,
    paginasDia: paginasDia,
    dias: dias,
    progresso: 0
  };

  fetch('http://localhost:3000/metas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(meta)
  })
  .then(response => response.json())
  .then(data => {
    exibirMetas();
    document.getElementById('metaForm').reset();
  });
});

function exibirMetas() {
  fetch('http://localhost:3000/metas')
    .then(response => response.json())
    .then(metas => {
      const metasContainer = document.getElementById('metasContainer');
      metasContainer.innerHTML = '';

      metas.forEach(meta => {
        metasContainer.innerHTML += `
          <div class="col s12 m6 l4">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${meta.livro}</span>
                <p>Páginas: ${meta.paginas}</p>
                <p>Páginas que deseja ler por dia: ${meta.paginasDia}</p>
                <p>Dias: ${meta.dias}</p>
                <p>Progresso: ${meta.progresso} páginas lidas</p>
              </div>
              <div class="card-action">
                <a href="#" class="waves-effect waves-light btn" onclick="atualizarProgresso(${meta.id}, ${meta.progresso})">Atualizar Progresso</a>
              </div>
            </div>
          </div>
        `;
      });
    });
}

function atualizarProgresso(id, progressoAtual) {
  const paginasLidas = prompt('Quantas páginas você leu?');
  const novoProgresso = parseInt(progressoAtual) + parseInt(paginasLidas);

  fetch(`http://localhost:3000/metas/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ progresso: novoProgresso })
  })
  .then(response => response.json())
  .then(data => {
    exibirMetas();
  });
}

exibirMetas();
