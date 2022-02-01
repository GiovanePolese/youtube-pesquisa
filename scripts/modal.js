$(function () {
  $("#videos").on( "click", ".card-video", function() {
    const idVideo = $(this).attr("data-id")
    $("#iframe-youtube").attr("src", `https://www.youtube.com/embed/${idVideo}`)
    $(".modal-container").css("display", "flex");
    $(".modal-backdrop").css("display",  "flex");
  });

  function fecharModal() {
    $("#iframe-youtube").attr("src", "")
    $(".modal-container").css("display", "none");
    $(".modal-backdrop").css("display",  "none");
  }

  $(".modal-fechar").on("click", () => {
    fecharModal();
  });

  $(".modal-backdrop").on("click", () => {
    fecharModal();
  });
});
