function ready(callback) {
  $(document).ready(callback);
  $(document).on('page:load', callback);
}

window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove();
    });
}, 2000);
window.ready = ready;
