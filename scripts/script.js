$(document).ready(function(){
  const API_KEY = "AIzaSyD-8UaKRQOq5Slose4vB2JRRKoJ_odqnnY";

  $("form").submit(function (event) {
    event.preventDefault();

    const pesquisa = $("#barra-pesquisa").val();

    pesquisarVideo(API_KEY, pesquisa, 5);
  })

  function pesquisarVideo(chave, pesquisa, quantidadeVideos) {
    $("#videos").empty();

    $.get("https://www.googleapis.com/youtube/v3/search?key=" + chave + "&type=video&part=snippet&maxResults=" + quantidadeVideos + "&q=" + pesquisa, function(data){

      data.items.forEach(item => {
        const titulo = item.snippet.title;
        const descricao = item.snippet.description;
        const thumbnail = item.snippet.thumbnails.default.url;
        const link = item.id.videoId;
        const video = `
          <article class="card-video" data-id="${link}">
            <img src="${thumbnail}" alt="${titulo}"/>
            <section class="card-video__texto">
              <h2 class="titulo-video">${titulo}</h2>
              <p class="descricao-video">${descricao}</p>
            </section>
          </article>
        `
        $("#videos").append(video);
      });
    });
  }
})