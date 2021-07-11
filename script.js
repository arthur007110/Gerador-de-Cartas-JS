$(document).ready(function(){
    $("#button").click(function(){
        domtoimage.toBlob(document.getElementById("carta"))
        .then(function(blob){
            window.saveAs(blob, "carta.png");
        });
    });
});

$("#nome-carta-input").blur(function(){
    $("#nome-carta").html($(this).val());
});
$("#custo-mana-carta-input").blur(function(){
    $("#custo-mana-carta").html($(this).val());
});
$("#imagem-url-carta-input").blur(function(){
    $("#imagem-carta").attr("src", $(this).val());
});
$("#descricao-carta-input").blur(function(){
    $("#descricao-carta").html($(this).val());
});
$("#atributos-carta-input").blur(function(){
    $("#atributos-carta").html($(this).val());
});
$("#textura-carta-input").on('change', function() {
    $("#carta").removeClass();
    $("#carta").addClass("carta "+this.value);
});

