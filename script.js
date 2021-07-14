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

//#region Inputs
$("#nome-carta-input").blur(function(){
    $("#nome-carta").html($(this).val());
});
$("#custo-mana-carta-input").blur(function(){
    if($(this).val() < 100 && $(this).val() > 0){
        $("#custo-mana-carta").html($(this).val());
    }else if($(this).val() >= 100){
        $("#custo-mana-carta").html("99");
    }else{
        $("#custo-mana-carta").html("0");
    }
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
    if(this.value == "texura-cor"){
        $("#cor-fundo-carta-input").attr("hidden", false);
    }else{
        $("#cor-fundo-carta-input").attr("hidden", true);
    }

    if(this.value == "texura-gradiente"){
        $("#gradiente-container").attr("hidden", false);
    }else{
        $("#gradiente-container").attr("hidden", true);
        $("#carta").css("background", "");
    }

    $("#carta").removeClass();
    $("#carta").addClass("carta "+this.value);
});
//#endregion Inputs
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
$("#cor-fundo-carta-input").change(function(){
    //$("#nome-carta").css('background', $(this).val()); custo-mana-carta
    $("#carta").css('background-color', $(this).val());
});

$(document).on("click", ".add", function(){
    $(this).before("<input type='color' class='gradient-picker' id='gradient-picker'/>"); 

    console.log($(".gradient-picker").length);
    if($(".gradient-picker").length >= 8){
        $(".add").hide();
        $("#reset-gradient-button").show();
    }
});

$("#reset-gradient-button").click(function(){
    pickers = $(".gradient-picker").toArray();

    pickers.forEach(element => {
        $(element).remove();
    });

    $(".add").before("<input type='color' class='gradient-picker' id='gradient-picker'/>");
    $(".add").before("<input type='color' class='gradient-picker' id='gradient-picker'/>");

    $(".add").show();
    $("#reset-gradient-button").hide();

});

$("#gradient-button").click(function(){
    pickers = $(".gradient-picker").toArray();
    
    let colors = "";

    pickers.forEach(element => {
        colors += ", " + $(element).val();
    });

    let query = "linear-gradient(to right" + colors + ")";
    
    console.log(query);

    $("#carta").css("background-image", query);

});

$("#upload-image-button").click(function(){
    $("#selecao-arquivo").trigger('click');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagem-carta')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}