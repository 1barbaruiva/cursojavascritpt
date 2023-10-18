const url_filmes =
  "https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1";

const url_img = "https://image.tmdb.org/t/p/w500";

//Fazer referência ao corpo da página
const body = document.body;

body.onload = () => {
  carregarFilmes();
};

function carregarFilmes() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Lista de Filmes";
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  header.appendChild(h1);

  //realizar a chamada da api e tratar os dados que retornam
  //utilzaremos o comando fetch(buscar) e, este comando é uma
  //promise. Sendo assim, ele tem 2 elementos de retorno:
  //1-Resolve : then e o 2-Reject -> catch
  //Quanto tudo dá certo, temos um resolve e quanto temos erro
  //retorna o reject

  fetch(url_filmes)
    .then((response) => response.json())
    .then((saida) => {
      console.log(saida.results);
      saida.results.map((item) => {
        let divFilme = document.createElement("div");
        divFilme.setAttribute("class", "divfilme");

        let imgFilme = document.createElement("img");
        imgFilme.src = `${url_img}${item.poster_path}`;
        imgFilme.setAttribute("class", "imgfilme");

        let tituloFilme = document.createElement("h2");
        tituloFilme.innerHTML = item.title;

        let lancamento = document.createElement("h4");
        lancamento.innerHTML = item.release_date;

        divFilme.appendChild(imgFilme);
        divFilme.appendChild(tituloFilme);
        divFilme.appendChild(lancamento);

        divFilme.onclick = () => {
          detalheFilme();
        };

        main.appendChild(divFilme);
      });
    })
    .catch((erro) => console.error(`Erro ao carregar a api ${erro}`));

  //Adicionar as áreas header, main e footer ao body
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
}

function detalheFilme() {
  const detalhe_filme =
    "https://api.themoviedb.org/3/movie/575264?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR";

  let divSombra = document.createElement("div");
  divSombra.style.width = "100vw";
  divSombra.style.height = "100vh";
  divSombra.style.position = "fixed";
  divSombra.style.zIndex = "10000";
  divSombra.style.backgroundColor = "rgba(0,0,0,0.7)";
  divSombra.style.top = "0px";
  divSombra.style.left = "0px";
  divSombra.style.display = "flex";
  divSombra.style.justifyContent = "center";
  divSombra.style.alignItems = "center";

  let divBranca = document.createElement("div");
  divBranca.style.width = "70vw";
  divBranca.style.height = "60vh";
  divBranca.style.backgroundColor = "white";

  divSombra.appendChild(divBranca);
  body.appendChild(divSombra);
}
