$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $(".carousel").carousel({
        interval:2000
    });

    $('#contacto').on('show.bs.modal',function(e){
      $('#btnContacto').prop("disabled",true);
      $('#btnContacto').removeClass("btn-success")
      $('#btnContacto').addClass("btn-secondary");
    });
    $('#contacto').on('hidden.bs.modal',function(e){
      $('#btnContacto').prop("disabled",false);
      $('#btnContacto').removeClass("btn-secondary");
      $('#btnContacto').addClass("btn-success")
    });
});