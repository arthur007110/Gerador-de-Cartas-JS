$(document).ready(function(){
    $("#button").click(function(){
        domtoimage.toBlob(document.getElementById("carta"))
        .then(function(blob){
            window.saveAs(blob, "carta.png");
        });
    });

    $("#carta").css('border', '2px solid #000');
    $("#imagem-carta-container").css('border', '2px solid #000');
    $("#descricao-carta").css('border', '2px solid #000');
    $("#custo-mana-carta").css('background-color', "#000");

    $("#cor-texto-carta-input").val("#ffffff");
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
/*$("#cor-carta-input").ColorPicker(function(){
    //2px solid white
    $("#carta").css('border', '2px solid '+this.val());
    $("#nome-carta").css('color', this.val());
});*/
$("#cor-carta-input").change(function(){
    //$("#nome-carta").css('background', $(this).val()); custo-mana-carta
    $("#carta").css('border', '2px solid '+$(this).val());
    $("#imagem-carta-container").css('border', '2px solid '+$(this).val());
    $("#descricao-carta").css('border', '2px solid '+$(this).val());
    $("#custo-mana-carta").css('background-color', $(this).val());
});
$("#cor-texto-carta-input").change(function(){
    //$("#nome-carta").css('background', $(this).val()); custo-mana-carta
    $("#nome-carta").css('color', $(this).val());
    $("#custo-mana-carta").css('color', $(this).val());
    $("#descricao-carta").css('color', $(this).val());
    $("#atributos-carta").css('color', $(this).val());
});
