$(document).ready(function() {
    $('.link').click(function() {
        var valor = $(this).attr('data-nombre');
        //console.log(valor);
        if (valor == 'todos') {
            $('.filtro').show('1000');
        } else {
            $('.filtro').not('.' + valor).hide('1000');
            $('.filtro').filter('.' + valor).show('1000');
        }
        $('ul .link').click(function() {
            $(this).addClass('activo').siblings().removeClass('activo');
        });
    });
});