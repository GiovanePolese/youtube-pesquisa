$(document).ready(function(){
  const API_KEY = "AIzaSyCXgRXpXKLDAKp_a7K4trZKzbQQNa9pfE4";
  let video = "";

  $("form").submit(function (event) {
    event.preventDefault();

    const pesquisa = $("#barra-pesquisa").val();

    pesquisarVideo(API_KEY, pesquisa, 5);
  })

  function pesquisarVideo(chave, pesquisa, quantidadeVideos) {
    $("#videos").empty();

    $.get("https://www.googleapis.com/youtube/v3/search?key=" + chave + "&type=video&part=snippet&maxResults=" + quantidadeVideos + "&q=" + pesquisa, function(data){

      data.items.forEach(item => {
        let titulo = item.snippet.title;
        let descricao = item.snippet.description;
        let thumbnail = item.snippet.thumbnails.default.url;
        video = `
          <div class="card-video">
            <img src="${thumbnail}">
            <div class="card-video__texto">
              <h2 class="titulo-video"> ${titulo} </h2>
              <p class="descricao-video"> ${descricao} </p>
            </div>
          </div>
        `
        $("#videos").append(video);
      });
    });
  }
})