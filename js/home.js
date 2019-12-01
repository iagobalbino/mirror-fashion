$('.novidades button').click(function(){
    $('.novidades').addClass('painel-aberto');
})

$('.mais-vendidos button').click(function(){
    $('.mais-vendidos').addClass('painel-aberto');
})

$('.painil button').click(function() {
    $(this).parent().toggleClass('painel-aberto');
})