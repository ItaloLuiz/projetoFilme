function getFilm(nome) {
  const url =
    "https://www.omdbapi.com/?t=" + nome + "&plot=full&apikey=c1a091fe";
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      //console.log(response);
      let resultados = response.text();

      resultados.then(function (res) {
        let parse = JSON.parse(res);
        //console.log(parse);

        let Title = parse.Title;
        let Actors = parse.Actors;
        let Plot = parse.Plot;
        let Poster = parse.Poster;
        let Year = parse.Year;
        let Genre = parse.Genre;
        let imdbID = parse.imdbID;
        let Ratings = parse.Ratings[0];
        let nota = Ratings.Value;
        let imagem = `<img class="card-img-top img-responsive" src="${Poster}" alt="${Title}">`;
        let botaoImagem = `<a target="_BLANK" href="${Poster}" class="btn btn-primary">Abrir Banner</a>`;

        let titulo = document.getElementsByClassName("titulo_filme");
        titulo[0].innerHTML = Title;

        let banner = document.getElementsByClassName("banner_filme");
        banner[0].innerHTML = imagem;

        let atores = document.getElementsByClassName("atores");
        atores[0].innerHTML = Actors;

        let descricao = document.getElementsByClassName("descricao_filme");
        descricao[0].innerHTML = Plot;

        let estrelas = document.getElementsByClassName("estrelas_filme");
        estrelas[0].innerHTML = nota;

        let genero = document.getElementsByClassName("genero");
        genero[0].innerHTML = Genre;

        let ano = document.getElementsByClassName("ano_filme");
        ano[0].innerHTML = Year;

        let linkBanner = document.getElementsByClassName("link_banner");
        linkBanner[0].innerHTML = botaoImagem;
      });
    })
    .catch((err) => {
      //console.error(err);
    });
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
